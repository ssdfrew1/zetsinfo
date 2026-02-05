
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-black transition-all duration-300 transform active:scale-95 text-xs uppercase tracking-widest select-none";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:shadow-red-600/50",
    secondary: "bg-white/5 backdrop-blur-md text-white hover:bg-white/10 border border-white/5",
    outline: "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
