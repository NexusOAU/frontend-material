"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

interface iFormInput {
  control?: any;
  name: string;
  placeholder?: string;
  label?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  description?: string;
  inputMode?:
    | "text"
    | "search"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  type?: "text" | "password" | "search" | "number" | "date" | "color";
  icon?: string | React.ReactNode;
  InputType?: "textarea" | "input";
  useHook?: boolean;
  value?: string;
  onChange?: (e?: any) => void;
}

export const InputField = ({
  value,
  onChange,
  useHook = true,
  control,
  icon,
  InputType = "input",
  inputMode = "text",
  type = "text",
  name,
  placeholder,
  label,
  showLabel = false,
  description,
  showDescription = false,
}: iFormInput) => {
  return (
    <>
      {useHook ? (
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              {showLabel && (
                <p className="font-[500] text-[12px] text-[#1D2939]">
                  {label}
                </p>
              )}
              <FormControl>
                {InputType === "input" ? (
                  <Input
                    icon={icon}
                    placeholder={placeholder}
                    label={label}
                    {...field}
                    inputMode={inputMode}
                    type={type}
                  />
                ) : (
                  <Textarea
                    className="resize-none h-[100px]"
                    placeholder={placeholder ?? `Enter ${label}`}
                    {...field}
                  />
                )}
              </FormControl>
              {showDescription && (
                <FormDescription>{description}</FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      ) : (
        <div>
          {showLabel && (
            <p className="font-[500] text-[12px] text-[#1D2939] font-cabinet">
              {label}
            </p>
          )}

          {InputType === "input" ? (
            <Input
              icon={icon}
              placeholder={placeholder}
              label={label}
              value={value}
              onChange={onChange}
              inputMode={inputMode}
              type={type}
              name={name}
            />
          ) : (
            <Textarea
              className="resize-none h-[100px]"
              placeholder={placeholder ?? `Enter ${label}`}
              value={value}
              onChange={onChange}
              name={name}
            />
          )}

          {showDescription && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </div>
      )}
    </>
  );
};
