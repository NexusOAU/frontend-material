"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string | JSX.Element | React.ReactNode;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, icon, ...props }, ref) => {
    const [inputType, setInputType] = React.useState<string | undefined>(type);

    const handleShowPassword = () => {
      setInputType((prevState) => {
        if (prevState === "password") return "text";
        return "password";
      });
    };
    return (
      <div className="relative">
        <input
          type={inputType}
          className={cn(
            "flex w-full rounded-[5px] border-[1px] border-solid border-[#98A2B3] bg-[white] h-[45px] px-4 py-3 text-[12px] text-[#1D2939] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#98A2B3] focus-visible:outline-none focus:border-lrBlue disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pl-10",
            className
          )}
          ref={ref}
          {...props}
        />

        {/* before Icon */}
        {icon && (
          <span className="absolute inset-y-0 left-[10px] flex items-center pointer-events-none">
            {icon}
          </span>
        )}

        {/* password icon */}

        {inputType === "password" && (
          <EyeOff
            onClick={handleShowPassword}
            className="absolute right-4 bottom-3 cursor-pointer h-5 w-5 text-[#697586]"
          
          />
        )}

        {inputType === "text" && label?.toLowerCase().includes("password") && (
          <Eye
            onClick={handleShowPassword}
            className="absolute right-4 bottom-3 cursor-pointer h-5 w-5 text-[#697586]"
          />
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
