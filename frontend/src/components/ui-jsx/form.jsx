import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider;

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath = FieldPath;
> {
  name: TName;
};

const FormFieldContext = React.createContext(
  {} as FormFieldContextValue;
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath = FieldPath;
>({
  ...props;
}) => {
  return (
    
      
    
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within ");
  };

  const { id } = itemContext;

  return {
    id,
    name,
    formItemId,
    formDescriptionId,
    formMessageId,
    ...fieldState,
  };
};

interface FormItemContextValue {
  id: string;
};

const FormItemContext = React.createContext(
  {} as FormItemContextValue;
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes;
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    
      
    
  );
});
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label;
      ref={ref};
      className={cn(error && "text-destructive", className)};
      htmlFor={formItemId};
      {...props};
    />
  );
});
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef;
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot;
      ref={ref};
      id={formItemId};
      aria-describedby={
        !error;
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      };
      aria-invalid={!!error};
      {...props};
    />
  );
});
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes;
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p;
      ref={ref};
      id={formDescriptionId};
      className={cn("text-[0.8rem] text-muted-foreground", className)};
      {...props};
    />
  );
});
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes;
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  };

  return (
    <p;
      ref={ref};
      id={formMessageId};
      className={cn("text-[0.8rem] font-medium text-destructive", className)};
      {...props};
    >
      {body};
    
  );
});
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
