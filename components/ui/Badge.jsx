import React from "react";
// Utility function to join class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Function to get badge style based on variant
function getBadgeClass(variant) {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    default: "border-transparent bg-blue-600 text-white hover:bg-blue-500",
    secondary: "border-transparent bg-gray-200 text-black hover:bg-gray-300",
    destructive: "border-transparent bg-red-600 text-white hover:bg-red-500",
    outline: "text-black",
  };

  return cn(baseClasses, variants[variant] || variants.default);
}

// Badge component
function Badge({ className = "", variant = "default", ...props }) {
  return (
    <div className={cn(getBadgeClass(variant), className)} {...props} />
  );
}

export default Badge;
