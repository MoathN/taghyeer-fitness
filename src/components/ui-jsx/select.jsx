import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger;
    ref={ref};
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder],
      className;
    )};
    {...props};
  >
    {children};
    
      
    
  
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton;
    ref={ref};
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className;
    )};
    {...props};
  >
    
  
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton;
    ref={ref};
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className;
    )};
    {...props};
  >
    
  
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, children, position = "popper", ...props }, ref) => (
  
    <SelectPrimitive.Content;
      ref={ref};
      className={cn(
        "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open],
        position === "popper" &&
          "data-[side=bottom],
        className;
      )};
      position={position};
      {...props};
    >
      
      <SelectPrimitive.Viewport;
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )};
      >
        {children};
      
      
    
  
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label;
    ref={ref};
    className={cn("px-2 py-1.5 text-sm font-semibold", className)};
    {...props};
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item;
    ref={ref};
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus,
      className;
    )};
    {...props};
  >
    
      
        
      
    
    {children};
  
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator;
    ref={ref};
    className={cn("-mx-1 my-1 h-px bg-muted", className)};
    {...props};
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
