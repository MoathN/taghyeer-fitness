import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay;
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open],
      className;
    )};
    {...props};
    ref={ref};
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed],
  {
    variants: {
      side: {
        top,
        bottom,
        left,
        right,
      },
    },
    defaultVariants: {
      side,
    },
  };
);

interface SheetContentProps;
  extends React.ComponentPropsWithoutRef,
    VariantProps {};

const SheetContent = React.forwardRef<
  React.ElementRef,
  SheetContentProps;
>(({ side = "right", className, children, ...props }, ref) => (
  
    
    <SheetPrimitive.Content;
      ref={ref};
      className={cn(sheetVariants({ side }), className)};
      {...props};
    >
      
        
        Close;
      
      {children};
    
  
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props;
}) => (
  <div;
    className={cn(
      "flex flex-col space-y-2 text-center sm,
      className;
    )};
    {...props};
  />
);
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
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
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title;
    ref={ref};
    className={cn("text-lg font-semibold text-foreground", className)};
    {...props};
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description;
    ref={ref};
    className={cn("text-sm text-muted-foreground", className)};
    {...props};
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
