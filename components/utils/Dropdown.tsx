'use client'

import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface IDropdown {
    trigger: any
    dropdownLabel: string
    items: any[]
}

export function DropdownMenuUI({trigger, dropdownLabel, items}: IDropdown) {
    const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
         {trigger}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[150px] mr-4 md:ml-8">
        <DropdownMenuLabel className="font-[700]">{dropdownLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>

             {items.map((item) => (
                <DropdownMenuItem key={item.id} onClick={() => router.push(item.url)}>
                  {item.text}
                  <DropdownMenuShortcut className="ml-auto">
                    {item.icon}
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}

        </DropdownMenuGroup>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
