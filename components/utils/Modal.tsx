
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



interface IAppModal {
    trigger?: any
    children: React.ReactNode
    description?: string
    title: string
    open?: boolean
    setOpen?: ()=> void
}


export function AppModal({trigger, title, description, children, open=false, setOpen}: IAppModal) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="w-[90vw] md:w-[425px]">
      <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description &&
          <DialogDescription>
           {description}
        </DialogDescription>
          }
          
        </DialogHeader>
         {children}
      </DialogContent>
    </Dialog>
  )
}
