import React, { useState, useEffect } from "react";
import { Menu, X, Home, ChevronRight, Globe, MapPin, Thermometer, Clock } from "lucide-react";
import {
  WiDaySunny, WiCloud, WiCloudy, WiRain, WiThunderstorm, WiSnow,
  WiFog, WiSleet, WiHail, WiSprinkle, WiShowers, WiNa,
  WiDayShowers, WiDayRain, WiDayCloudy, WiNightAltCloudy,
  WiNightAltSprinkle, WiNightAltRain, WiSnowWind, WiWindy,
  WiDust, WiTornado, WiNightClear
} from "react-icons/wi";
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const defaultLatitude = 27.2946;
  const defaultLongitude = -80.3642;
  const OPENWEATHER_API_KEY = 'b69e2415d3d86e7ab802f7db6d364158';

  const location = useLocation();
  const navigate = useNavigate();

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      const dateString = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      setCurrentTime(timeString);
      setCurrentDate(dateString);
    };

    updateTime(); // Initial call
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Professional color palette for weather
  const getWeatherColor = (condition) => {
    const lower = condition?.toLowerCase() || '';
    
    if (lower.includes("thunderstorm")) return '#8b5cf6'; // Violet
    if (lower.includes("rain") || lower.includes("showers") || lower.includes("drizzle")) return '#3b82f6'; // Blue
    if (lower.includes("snow") || lower.includes("sleet")) return '#0ea5e9'; // Sky blue
    if (lower.includes("fog") || lower.includes("haze") || lower.includes("mist")) return '#94a3b8'; // Slate gray
    if (lower.includes("cloud")) return '#64748b'; // Gray
    if (lower.includes("sunny") || lower.includes("clear")) return '#f59e0b'; // Amber
    if (lower.includes("wind")) return '#6366f1'; // Indigo
    return '#6b7280'; // Gray
  };

  const getTemperatureColor = (tempF) => {
    if (tempF <= 32) return '#60a5fa'; // Cold: Light blue
    if (tempF <= 50) return '#38bdf8'; // Cool: Blue
    if (tempF <= 70) return '#22d3ee'; // Mild: Cyan
    if (tempF <= 85) return '#fbbf24'; // Warm: Amber
    return '#f97316'; // Hot: Orange
  };

  const getWeatherIconComponent = (shortForecast, temperature) => {
    const weatherColor = getWeatherColor(shortForecast);
    const currentHour = new Date().getHours();
    const isNight = currentHour < 6 || currentHour > 20;

    const props = {
      size: 24,
      className: "weather-icon",
      style: { 
        color: weatherColor,
        transition: 'color 0.3s ease'
      }
    };

    const lower = shortForecast?.toLowerCase() || "";

    if (!shortForecast) return <WiNa {...props} />;
    if (lower.includes("thunderstorm")) return <WiThunderstorm {...props} />;
    if (lower.includes("light rain") || lower.includes("drizzle")) return isNight ? <WiNightAltSprinkle {...props} /> : <WiSprinkle {...props} />;
    if (lower.includes("rain") || lower.includes("showers")) return isNight ? <WiNightAltRain {...props} /> : <WiRain {...props} />;
    if (lower.includes("sleet")) return <WiSleet {...props} />;
    if (lower.includes("light snow")) return isNight ? <WiSnowWind {...props} /> : <WiSnow {...props} />;
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

  // Geolocation setup
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLatitude(pos.coords.latitude);
          setUserLongitude(pos.coords.longitude);
          setLocationError(null);
        },
        (err) => {
          setLocationError("Location access denied. Using default location.");
          setUserLatitude(defaultLatitude);
          setUserLongitude(defaultLongitude);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setLocationError("Geolocation not supported.");
      setUserLatitude(defaultLatitude);
      setUserLongitude(defaultLongitude);
    }
  }, []);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      if (userLatitude && userLongitude) {
        setLoading(true);
        try {
          const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${userLatitude}&lon=${userLongitude}&appid=${OPENWEATHER_API_KEY}&units=imperial`
          );
          const weatherData = await weatherRes.json();
          setWeather({
            temperature: Math.round(weatherData.main.temp),
            temperatureUnit: 'F',
            shortForecast: weatherData.weather[0].description,
          });

          const geoRes = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${userLatitude}&lon=${userLongitude}&limit=1&appid=${OPENWEATHER_API_KEY}`
          );
          const geoData = await geoRes.json();
          const loc = geoData[0];
          let name = loc.name || "Unknown";
          if (loc.state && loc.country === "US") name += `, ${loc.state}`;
          else if (loc.country) name += `, ${loc.country}`;
          setLocationName(name);
        } catch (err) {
          console.error("Weather fetch error:", err);
          setError("Weather unavailable");
          setLocationName("Weather Error");
        } finally {
          setLoading(false);
        }
      }
    };

    if (userLatitude && userLongitude) {
      fetchWeather();
      const intervalId = setInterval(fetchWeather, 900000);
      return () => clearInterval(intervalId);
    }
  }, [userLatitude, userLongitude]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavLinkClick = (e, path, hash) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== path) {
      navigate(path + hash);
    } else {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="navbar-main" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'var(--light)',
        borderBottom: '1px solid var(--border-light)',
        height: 'var(--navbar-height)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div className="container" style={{
          maxWidth: 'var(--container-width)',
          margin: '0 auto',
          height: '100%',
          padding: '0 var(--spacing-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Left: Logo/Brand */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-md)'
          }}>
            <Link 
              to="/" 
              onClick={(e) => handleNavLinkClick(e, '/', '#home')}
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--light)'
              }}>
                <Home size={18} />
              </div>
              <span style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                letterSpacing: 'var(--letter-spacing-tight)'
              }}>
                Portfolio
              </span>
            </Link>
          </div>

          {/* Right: Weather/Time Widget, Navigation Links, and Resume Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-lg)'
          }}>
            {/* Combined Weather & Time Widget - Desktop */}
            <div className="desktop-weather-time" style={{
              display: 'none',
              '@media (min-width: 768px)': {
                display: 'flex'
              },
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              padding: 'var(--spacing-xs) var(--spacing-sm)',
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              minWidth: '300px'
            }}>
              {/* Time Section */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '80px',
                paddingRight: 'var(--spacing-sm)',
                borderRight: '1px solid var(--border-light)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                  <Clock size={12} color="var(--text-secondary)" />
                  <span style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-secondary)',
                    fontWeight: 'var(--font-weight-medium)'
                  }}>
                    {currentDate}
                  </span>
                </div>
                <span style={{
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--primary)',
                  fontWeight: 'var(--font-weight-bold)',
                  fontFamily: 'monospace',
                  marginTop: '2px'
                }}>
                  {currentTime}
                </span>
              </div>

              {/* Weather Section */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                flex: 1
              }}>
                {loading ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', width: '100%' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--gray-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Globe size={12} color="var(--text-tertiary)" />
                    </div>
                    <span style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--text-tertiary)'
                    }}>
                      Loading weather...
                    </span>
                  </div>
                ) : weather && !error ? (
                  <>
                    {/* Weather Icon */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {getWeatherIconComponent(weather.shortForecast, weather.temperature)}
                    </div>

                    {/* Location & Temperature */}
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                        <MapPin size={10} color="var(--text-tertiary)" />
                        <span style={{
                          fontSize: 'var(--font-size-xs)',
                          color: 'var(--text-secondary)',
                          fontWeight: 'var(--font-weight-medium)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '100px'
                        }}>
                          {locationName.split(',')[0]}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                        <Thermometer size={10} color={getTemperatureColor(weather.temperature)} />
                        <span style={{
                          fontSize: 'var(--font-size-sm)',
                          color: getTemperatureColor(weather.temperature),
                          fontWeight: 'var(--font-weight-bold)'
                        }}>
                          {weather.temperature}°F
                        </span>
                      </div>
                    </div>

                    {/* Weather Condition */}
                    <div style={{
                      paddingLeft: 'var(--spacing-sm)',
                      borderLeft: '1px solid var(--border-light)',
                      minWidth: '80px'
                    }}>
                      <span style={{
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--text-secondary)',
                        textTransform: 'capitalize',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        display: 'block',
                        maxWidth: '80px'
                      }}>
                        {weather.shortForecast}
                      </span>
                    </div>
                  </>
                ) : (
                  <div style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-xs)',
                    width: '100%'
                  }}>
                    <Globe size={12} />
                    <span>Weather unavailable</span>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="desktop-nav" style={{
              display: 'none',
              '@media (min-width: 768px)': {
                display: 'flex'
              },
              alignItems: 'center',
              gap: 'var(--spacing-md)'
            }}>
              {['About', 'Skills', 'Projects', 'Showcase', 'Learning'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Showcase' || item === 'Learning' ? `/${item.toLowerCase()}` : '/'}
                  onClick={(e) => {
                    if (item !== 'Showcase' && item !== 'Learning') {
                      handleNavLinkClick(e, '/', `#${item.toLowerCase()}`);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition-fast)',
                    position: 'relative',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Resume Button */}
            <Link
              to="/resume"
              className="desktop-resume"
              style={{
                display: 'none',
                '@media (min-width: 768px)': {
                  display: 'block'
                },
                background: 'transparent',
                color: 'var(--primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--primary)',
                transition: 'all var(--transition-fast)',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.color = 'var(--light)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Resume
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="mobile-menu-toggle"
              style={{
                display: 'block',
                '@media (min-width: 768px)': {
                  display: 'none'
                },
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: 'var(--spacing-xs)',
                borderRadius: 'var(--radius-sm)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gray-subtle)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed',
          top: 'var(--navbar-height)',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--light)',
          zIndex: 999,
          overflowY: 'auto',
          animation: 'slideDown 0.2s ease-out'
        }}>
          {/* Combined Time & Weather in Mobile Menu */}
          <div style={{
            padding: 'var(--spacing-lg)',
            borderBottom: '1px solid var(--border-light)',
            background: 'var(--bg-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-md)'
          }}>
            {/* Time Section */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--light)',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--light)'
                }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--text-secondary)',
                    fontWeight: 'var(--font-weight-medium)'
                  }}>
                    {currentDate}
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--text-primary)',
                    fontWeight: 'var(--font-weight-bold)',
                    fontFamily: 'monospace'
                  }}>
                    {currentTime}
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Section */}
            {weather && !loading && !error && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'var(--light)',
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  marginRight: 'var(--spacing-md)'
                }}>
                  {getWeatherIconComponent(weather.shortForecast, weather.temperature)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    <MapPin size={14} color="var(--text-secondary)" />
                    <span style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--text-primary)',
                      fontWeight: 'var(--font-weight-medium)'
                    }}>
                      {locationName}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'var(--spacing-xs)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                      <Thermometer size={14} color={getTemperatureColor(weather.temperature)} />
                      <span style={{
                        fontSize: 'var(--font-size-xl)',
                        color: getTemperatureColor(weather.temperature),
                        fontWeight: 'var(--font-weight-bold)'
                      }}>
                        {weather.temperature}°F
                      </span>
                    </div>
                    <span style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--text-secondary)',
                      textTransform: 'capitalize',
                      textAlign: 'right'
                    }}>
                      {weather.shortForecast}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Navigation Links */}
          <div style={{
            padding: 'var(--spacing-md)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-xs)'
          }}>
            {[
              { label: 'Home', path: '/', hash: '#home' },
              { label: 'About', path: '/', hash: '#about' },
              { label: 'Skills', path: '/', hash: '#skills' },
              { label: 'Projects', path: '/', hash: '#projects' },
              { label: 'Showcase', path: '/showcase' },
              { label: 'Learning', path: '/learning' },
              { label: 'Contact', path: '/', hash: '#contact' }
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={(e) => {
                  if (item.hash) {
                    handleNavLinkClick(e, item.path, item.hash);
                  } else {
                    setIsOpen(false);
                  }
                }}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  padding: 'var(--spacing-md)',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gray-subtle)';
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                  {item.icon && <span style={{ display: 'flex', color: 'var(--primary)' }}>{item.icon}</span>}
                  <span>{item.label}</span>
                </div>
                <ChevronRight size={16} color="var(--text-tertiary)" />
              </Link>
            ))}

            {/* Mobile Resume Button */}
            <Link
              to="/resume"
              onClick={toggleMenu}
              style={{
                background: 'var(--primary)',
                color: 'var(--light)',
                textDecoration: 'none',
                padding: 'var(--spacing-lg)',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-semibold)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                marginTop: 'var(--spacing-md)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-dark)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View Resume
            </Link>
          </div>
        </div>
      )}

      {/* CSS for responsive behavior */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Desktop styles */
        @media (min-width: 768px) {
          .desktop-weather-time {
            display: flex !important;
          }
          .desktop-nav {
            display: flex !important;
          }
          .desktop-resume {
            display: block !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
        
        /* Mobile styles */
        @media (max-width: 767px) {
          .desktop-weather-time {
            display: none !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .desktop-resume {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
        
        /* Weather icon styling */
        .weather-icon {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </>
  );
}