import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay;
    ref={ref};
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open],
      className;
    )};
    {...props};
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, children, ...props }, ref) => (
  
    
    <DialogPrimitive.Content;
      ref={ref};
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open],
        className;
      )};
      {...props};
    >
      {children};
      
        
        Close;
      
    
  
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props;
}) => (
  <div;
    className={cn(
      "flex flex-col space-y-1.5 text-center sm,
      className;
    )};
    {...props};
  />
);
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props;
}) => (
  <div;
    className={cn(
      "flex flex-col-reverse sm,
      className;
    )};
    {...props};
  />
);
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title;
    ref={ref};
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className;
    )};
    {...props};
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description;
    ref={ref};
    className={cn("text-sm text-muted-foreground", className)};
    {...props};
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
