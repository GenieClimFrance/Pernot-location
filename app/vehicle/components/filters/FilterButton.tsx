import { ButtonHTMLAttributes } from "react";

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const FilterButton = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: FilterButtonProps) => {
  const baseStyles = "px-4 py-3 shadow-lg uppercase font-roboto font-bold";
  const variantStyles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary border-2 border-primary text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
