import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface iSelector {
  title: string;
  data: { value: string; label: string }[];
  placeholder: string;
  className?: string;
  onChange?: (e: any) => void;
  value?: any;
  name?: string
}

export function Selector({
  title,
  data,
  placeholder,
  className,
  onChange,
  value,
  name
}: iSelector) {
  return (
    <Select name={name}  onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue className="text-[15px]" placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {data.map(({ value, label }) => {
            return (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
