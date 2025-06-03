import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape, styles }) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  const baseClasses =
    "border bg-blue-500 text-white hover:bg-blue-600 transition-colors cursor-pointer";
  const customStyles = styles || "";

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${customStyles}`}
    >
      {title}
    </button>
  );
};

export default Button;
