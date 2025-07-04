export function Button({ 
  children, 
  variant = "primary",
  size = "medium",
  className = "",
  ...props 
}) {
  const baseClasses = "font-sans font-semibold rounded-lg transition-all duration-300 ease-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-primary-500";
  
  const sizeClasses = {
    small: "text-xs px-3 py-1.5",
    medium: "text-sm px-4 py-2",
    large: "text-base px-6 py-3"
  };
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl shadow-primary-500/20",
    secondary: "bg-gray-800 hover:bg-gray-700 text-gray-100 border border-gray-700 hover:border-gray-600",
    accent: "bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold shadow-md hover:shadow-lg shadow-accent-500/30",
    outline: "bg-transparent text-primary-400 border-2 border-primary-500 hover:bg-primary-900/30 hover:text-white",
    ghost: "bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg shadow-red-500/20"
  };

  const glowEffect = {
    primary: "hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]",
    accent: "hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]",
    danger: "hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${glowEffect[variant] || ""}
        ${className}
        relative overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-transparent before:via-white/20 before:to-transparent
        before:opacity-0 hover:before:opacity-100
        before:transition-opacity before:duration-500
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}