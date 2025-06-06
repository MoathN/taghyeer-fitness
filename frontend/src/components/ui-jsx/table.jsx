import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes;
>(({ className, ...props }, ref) => (
  
    <table;
      ref={ref};
      className={cn("w-full caption-bottom text-sm", className)};
      {...props};
    />
  
));
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes;
>(({ className, ...props }, ref) => (
  
));
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes;
>(({ className, ...props }, ref) => (
  <tbody;
    ref={ref};
    className={cn("[&_tr, className)};
    {...props};
  />
));
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes;
>(({ className, ...props }, ref) => (
  <tfoot;
    ref={ref};
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr],
      className;
    )};
    {...props};
  />
));
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes;
>(({ className, ...props }, ref) => (
  <tr;
    ref={ref};
    className={cn(
      "border-b transition-colors hover,
      className;
    )};
    {...props};
  />
));
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes;
>(({ className, ...props }, ref) => (
  <th;
    ref={ref};
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&)],
      className;
    )};
    {...props};
  />
));
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes;
>(({ className, ...props }, ref) => (
  <td;
    ref={ref};
    className={cn(
      "p-2 align-middle [&)],
      className;
    )};
    {...props};
  />
));
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes;
>(({ className, ...props }, ref) => (
  <caption;
    ref={ref};
    className={cn("mt-4 text-sm text-muted-foreground", className)};
    {...props};
  />
));
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
