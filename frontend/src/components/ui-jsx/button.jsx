import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible,
  {
    variants: {
      variant: {
        default,
        destructive,
        outline,
        secondary,
        ghost,
        link,
      },
      size: {
        default,
        sm,
        lg,
        icon,
      },
    },
    defaultVariants: {
      variant,
      size,
    },
  };
);

export interface ButtonProps;
  extends React.ButtonHTMLAttributes,
    VariantProps {
  asChild?: boolean;
};

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp;
        className={cn(buttonVariants({ variant, size, className }))};
        ref={ref};
        {...props};
      />
    );
  };
);
Button.displayName = "Button"

export { Button, buttonVariants };
