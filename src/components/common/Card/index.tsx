"use client";
import clsx from "clsx";
import React from "react";

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1",
        className,
      )}
    >
      {children}
    </div>
  );
};
