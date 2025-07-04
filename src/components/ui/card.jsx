import * as React from "react"; // Added React import for forwardRef
import { cn } from "@/lib/utils"; // Assuming you have this for Tailwind class merging

// Card component
export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200/50 bg-white shadow-sm", // Added more modern styling matching your App.jsx
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// CardHeader component
export const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader"; // Good practice for debugging

// CardTitle component
export const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// CardDescription component
export const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600", className)} // Used text-gray-600 for consistency
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// CardContent component (updated with cn for consistency)
export function CardContent({ children, className = "", ...props }) {
  return (
    <div
      className={cn("p-6 pt-0", className)} // common pattern for Shadcn, pt-0 to prevent double padding with CardHeader
      {...props}
    >
      {children}
    </div>
  );
}