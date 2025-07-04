import React, { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react"; // Added Home icon
import {
  WiDaySunny, WiCloud, WiCloudy, WiRain, WiThunderstorm, WiSnow,
  WiFog, WiStrongWind, WiSleet, WiHail, WiSprinkle, WiShowers, WiNa,
  WiDayShowers, WiDayRain, WiDayCloudy, WiNightAltCloudy,
  WiNightAltSprinkle, WiNightAltRain, WiSnowWind, WiWindy,
  WiDust, WiTornado, WiNightClear
} from "react-icons/wi";
import { FaFileDownload } from "react-icons/fa"; // Keeping this import just in case, though it won't be used for Link to /resume
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState("");
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [locationName, setLocationName] = useState("Loading Location...");

  const defaultLatitude = 27.2946;
  const defaultLongitude = -80.3642;
  const OPENWEATHER_API_KEY = 'b69e2415d3d86e7ab802f7db6d364158';

  const location = useLocation();
  const navigate = useNavigate();

  const getTemperatureColor = (temperature, unit) => {
    let tempF = temperature;
    if (unit === 'C') tempF = (temperature * 9/5) + 32;
    if (tempF <= 32) return '#64b5f6';
    if (tempF <= 50) return '#4fc3f7';
    if (tempF <= 70) return '#4db6ac';
    if (tempF <= 85) return '#ffb74d';
    return '#ff7043';
  };

  const getWeatherColor = (forecast) => {
    const lower = forecast?.toLowerCase() || '';
    if (lower.includes("thunderstorm")) return '#9c27b0';
    if (lower.includes("rain") || lower.includes("showers") || lower.includes("drizzle")) return '#2196f3';
    if (lower.includes("snow") || lower.includes("sleet")) return '#00bcd4';
    if (lower.includes("fog") || lower.includes("haze") || lower.includes("mist")) return '#9e9e9e';
    if (lower.includes("cloud")) return '#607d8b';
    if (lower.includes("sunny") || lower.includes("clear")) return '#ff9800';
    if (lower.includes("wind")) return '#795548';
    return '#ffffff';
  };

  const blendColors = (color1, color2, ratio = 0.6) => {
    const hexToRgb = hex => {
      const bigint = parseInt(hex.slice(1), 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    };
    const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const r = Math.round(rgb1[0] * ratio + rgb2[0] * (1 - ratio));
    const g = Math.round(rgb1[1] * ratio + rgb2[1] * (1 - ratio));
    const b = Math.round(rgb1[2] * ratio + rgb2[2] * (1 - ratio));
    return rgbToHex(r, g, b);
  };

  const getWeatherIconComponent = (shortForecast, temperature, temperatureUnit) => {
    const tempColor = getTemperatureColor(temperature, temperatureUnit);
    const weatherColor = getWeatherColor(shortForecast);
    const iconColor = blendColors(weatherColor, tempColor, 0.6);
    const currentHour = new Date().getHours();
    const isNight = currentHour < 6 || currentHour > 20;

    const props = {
      size: 36,
      className: "weather-icon-dynamic",
      style: { color: iconColor, filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' },
      title: shortForecast || "Weather data unavailable"
    };

    const lower = shortForecast?.toLowerCase() || "";

    if (!shortForecast) return <WiNa {...props} />;
    if (lower.includes("thunderstorm")) return <WiThunderstorm {...props} />;
    if (lower.includes("light rain") || lower.includes("drizzle")) return isNight ? <WiNightAltSprinkle {...props} /> : <WiSprinkle {...props} />;
    if (lower.includes("rain") || lower.includes("showers")) return isNight ? <WiNightAltRain {...props} /> : <WiRain {...props} />;
    if (lower.includes("sleet")) return <WiSleet {...props} />;
    if (lower.includes("light snow")) return <WiSnowWind {...props} />;
    if (lower.includes("snow")) return <WiSnow {...props} />;
    if (lower.includes("fog") || lower.includes("mist") || lower.includes("haze")) return <WiFog {...props} />;
    if (lower.includes("tornado")) return <WiTornado {...props} />;
    if (lower.includes("dust") || lower.includes("smoke")) return <WiDust {...props} />;
    if (lower.includes("hail")) return <WiHail {...props} />;
    if (lower.includes("wind")) return <WiWindy {...props} />;
    if (lower.includes("clear sky")) return isNight ? <WiNightClear {...props} /> : <WiDaySunny {...props} />;
    if (lower.includes("few clouds") || lower.includes("scattered clouds")) return isNight ? <WiNightAltCloudy {...props} /> : <WiDayCloudy {...props} />;
    if (lower.includes("broken clouds") || lower.includes("overcast clouds")) return <WiCloud {...props} />;
    return <WiNa {...props} />;
  };

  useEffect(() => {
    setLocationName("Getting location...");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLatitude(pos.coords.latitude);
          setUserLongitude(pos.coords.longitude);
          setLocationError(null);
        },
        (err) => {
          let message = "Unable to retrieve your location.";
          if (err.code === err.PERMISSION_DENIED) message = "Location access denied.";
          else if (err.code === err.POSITION_UNAVAILABLE) message = "Location unavailable.";
          else if (err.code === err.TIMEOUT) message = "Location request timed out.";
          setLocationError(`${message} Using default location.`);
          setUserLatitude(defaultLatitude);
          setUserLongitude(defaultLongitude);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setLocationError("Geolocation not supported. Using default location.");
      setUserLatitude(defaultLatitude);
      setUserLongitude(defaultLongitude);
    }
  }, []);

  useEffect(() => {
    let intervalId;
    const fetchWeather = async () => {
      if (userLatitude && userLongitude) {
        setLoading(true);
        try {
          const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${userLatitude}&lon=${userLongitude}&appid=${OPENWEATHER_API_KEY}&units=imperial`);
          const weatherData = await weatherRes.json();
          setWeather({
            temperature: Math.round(weatherData.main.temp),
            temperatureUnit: 'F',
            shortForecast: weatherData.weather[0].description,
          });

          // Using a proxy to bypass CORS for OpenWeatherMap Geocoding API if needed
          // For direct calls, ensure your API key is correctly configured for reverse geocoding
          const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${userLatitude}&lon=${userLongitude}&limit=1&appid=${OPENWEATHER_API_KEY}`);
          const geoData = await geoRes.json();
          const loc = geoData[0];
          let name = loc.name || "Unknown";
          if (loc.state && loc.country === "US") name += `, ${loc.state}`;
          else if (loc.country) name += `, ${loc.country}`;
          setLocationName(name);
        } catch (err) {
          console.error(err);
          setError("Weather/location fetch failed");
          setLocationName("Location/Weather Error");
        } finally {
          setLoading(false);
        }
      }
    };
    if (userLatitude && userLongitude) {
      fetchWeather();
      // Fetch weather every 15 minutes (900,000 milliseconds)
      intervalId = setInterval(fetchWeather, 900000);
    }
    return () => clearInterval(intervalId);
  }, [userLatitude, userLongitude, OPENWEATHER_API_KEY]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };
    updateTime();
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavLinkClick = (e, path, hash) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsOpen(false); // Close the mobile menu

    if (location.pathname !== path) {
      // If navigating to a different page, navigate and then scroll
      navigate(path + hash);
    } else {
      // If on the same page, just scroll to the hash
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar-main">
      <div className="navbar-content container">
        <div className="navbar-logo-container">
          <div className="navbar-weather">
            {locationError && <div className="weather-error">{locationError}</div>}
            {loading && !locationError && <div className="weather-loading">Getting location & weather...</div>}
            {error && !loading && <div className="weather-error">{error}</div>}
            {weather && !loading && !error && (
              <div className="weather-info-grid">
                {getWeatherIconComponent(weather.shortForecast, weather.temperature, weather.temperatureUnit)}
                <div className="weather-details-main">
                  <span className="current-location-name">{locationName}</span>
                  <span className="weather-temperature">{weather.temperature}°{weather.temperatureUnit}</span>
                  <span className="weather-description">{weather.shortForecast}</span>
                </div>
                <div className="weather-time">
                  <span className="current-time">{currentTime}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="navbar-links">
          {/* Home Link as Lucide Home Icon */}
          <Link
            to="/"
            onClick={(e) => handleNavLinkClick(e, '/', '#home')}
            className="nav-link nav-home-icon"
            aria-label="Go to Home page"
          >
            <Home className="navbar-logo-icon" size={24} />
          </Link>
          <Link to="/" onClick={(e) => handleNavLinkClick(e, '/', '#about')} className="nav-link">About</Link>
          <Link to="/" onClick={(e) => handleNavLinkClick(e, '/', '#skills')} className="nav-link">Skills</Link>
          <Link to="/" onClick={(e) => handleNavLinkClick(e, '/', '#projects')} className="nav-link">Projects</Link>
          <Link to="/showcase" className="nav-link" onClick={() => setIsOpen(false)}>Showcase</Link>
          <Link to="/learning" className="nav-link" onClick={() => setIsOpen(false)}>Learning</Link>
          <Link to="/" onClick={(e) => handleNavLinkClick(e, '/', '#contact')} className="nav-link">Contact</Link>

         {/* Desktop Resume Button - Changed to Link component */}
         <Link
            to="/resume" // Use 'to' prop for Link component
            className="resume-button"
            onClick={() => setIsOpen(false)} // Close menu on click (good for mobile, harmless for desktop)
            aria-label="View Resume"
          >
            Resume
          </Link>
        </div>

        <div className="navbar-mobile-toggle">
          <button onClick={toggleMenu} aria-label="Toggle menu">{isOpen ? <X size={30} /> : <Menu size={30} />}</button>
        </div>
      </div>

      {isOpen && (
        <div className="navbar-mobile-menu">
          {/* Mobile Home Link as Lucide Home Icon */}
          <Link
            to="/"
            onClick={(e) => handleNavLinkClick(e, '/', '#home')}
            className="nav-link-mobile nav-logo-link-mobile"
            aria-label="Go to Home page"
          >
             <Home className="navbar-logo-icon-mobile" size={24} />
          </Link>
          <Link to="/" onClick={(e) => handleNavLinkClick(e, '/', '#about')} className="nav-link-mobile">About</Link>
          <Link to="/" onClick={(e) => handleNavLinkClick(e, '/', '#skills')} className="nav-link-mobile">Skills</Link>
          <Link to="/" onClick={(e) => handleNavLinkClick(e, '/', '#projects')} className="nav-link-mobile">Projects</Link>
          <Link to="/showcase" className="nav-link-mobile" onClick={toggleMenu}>Showcase</Link>
          <Link to="/learning" className="nav-link-mobile" onClick={toggleMenu}>Learning</Link>
          <Link to="/" onClick={(e) => handleNavLinkClick(e, '/', '#contact')} className="nav-link-mobile">Contact</Link>

          {/* Mobile Resume Button - Changed to Link component */}
          <Link
            to="/resume" // Use 'to' prop for Link component
            className="nav-link-mobile resume-button-mobile"
            onClick={toggleMenu} // Close mobile menu after clicking
            aria-label="View Resume"
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}