"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ICombo {
     value: string
     setValue: any
     emptyState: any
     data: {label: string, value: string}[]
     triggerPlaceholder: string
     searchPlaceholder: string
     className?: string
}
export function SearchableSelector(props: ICombo) {

    const [open, onOpen] = React.useState(false)

 const {setValue, value, emptyState, data, triggerPlaceholder, searchPlaceholder, className} = props



  return (
    <Popover open={open} onOpenChange={onOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("flex justify-between w-full rounded-[5px] border-[1px] border-solid border-[#98A2B3] bg-[white] h-[45px] px-4 py-3 text-[12px] text-[#1D2939] transition-colors  placeholder:text-[#98A2B3] focus-visible:outline-none focus:border-lrBlue disabled:cursor-not-allowed disabled:opacity-50", className)}
        >
          {value
            ? data.find((data) => data.value.toLowerCase() === value?.toLowerCase())?.label
            : triggerPlaceholder}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent  className="w-full p-0 pt-[1000px!important]">
        <Command>
          <CommandInput placeholder={searchPlaceholder} className="h-9" />
          <CommandEmpty>{emptyState}</CommandEmpty>
          <CommandGroup>
            {data.map((eachData, index) => (
              <CommandItem
                key={`${eachData.value}-${index}`}
                value={eachData.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  onOpen(false)
                }}
              >
                {eachData.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === eachData.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
