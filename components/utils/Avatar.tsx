import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

  interface iAvatar {
    imageUrl?: string
    username?: string
  }
  
  export function UserAvatar({imageUrl, username="Guest"}: iAvatar) {
    const Initials = username && username.slice(0,2)
    return (
      <Avatar className="cursor-pointer">
        <AvatarImage src={imageUrl} alt={`@${username}`} />
        <AvatarFallback className="capitalize">{Initials}</AvatarFallback>
      </Avatar>
    )
  }
  