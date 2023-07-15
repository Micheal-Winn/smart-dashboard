import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ButtonUtil: React.FC<ButtonProps> = ({
  name,
  onClick,
  className,
  disabled,
  type,
  icon
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cn("sm:px-8 xl:px-10 border-[1px] border-blue-600 sm:text-xs", className)}
    >
      {icon}
      <span>{name}</span>
    </Button>
  );
};

export default ButtonUtil;
interface ButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?:React.ReactNode
}
