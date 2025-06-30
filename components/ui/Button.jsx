import React from "react";

// Simple className joiner
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Style maps for variants and sizes
const variantStyles = {
  default: "bg-blue-600 text-white hover:bg-blue-500",
  destructive: "bg-red-600 text-white hover:bg-red-500",
  outline: "border border-gray-300 bg-white hover:bg-gray-100",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  ghost: "hover:bg-gray-100 text-black",
  link: "text-blue-600 underline hover:text-blue-500",
};

const sizeStyles = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 text-sm",
  lg: "h-11 px-6 text-lg",
  icon: "h-10 w-10 p-2",
};

// Button component
export const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;