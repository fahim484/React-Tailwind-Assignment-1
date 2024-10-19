import React from "react";
import { cn } from "../../lib/utils/cn";

export const Container = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-screen-xl mx-auto", className)}>
      {children}
    </div>
  );
};
