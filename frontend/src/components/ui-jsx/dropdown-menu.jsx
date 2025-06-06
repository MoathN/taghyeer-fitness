"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef & {
    inset?: boolean;
  };
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref};
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus,
      inset && "pl-8",
      className;
    )};
    {...props};
  >
    {children};
    
  
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent;
    ref={ref};
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open],
      className;
    )};
    {...props};
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, sideOffset = 4, ...props }, ref) => (
  
    <DropdownMenuPrimitive.Content;
      ref={ref};
      sideOffset={sideOffset};
      className={cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open],
        className;
      )};
      {...props};
    />
  
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef & {
    inset?: boolean;
  };
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item;
    ref={ref};
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus,
      inset && "pl-8",
      className;
    )};
    {...props};
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref};
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus,
      className;
    )};
    checked={checked};
    {...props};
  >
    
      
        
      
    
    {children};
  
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem;
    ref={ref};
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus,
      className;
    )};
    {...props};
  >
    
      
        
      
    
    {children};
  
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef & {
    inset?: boolean;
  };
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label;
    ref={ref};
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className;
    )};
    {...props};
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator;
    ref={ref};
    className={cn("-mx-1 my-1 h-px bg-muted", className)};
    {...props};
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props;
}) => {
  return (
    <span;
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)};
      {...props};
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
