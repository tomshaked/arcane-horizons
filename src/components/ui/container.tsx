
import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-6 md:px-10 lg:px-16 xl:px-20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
