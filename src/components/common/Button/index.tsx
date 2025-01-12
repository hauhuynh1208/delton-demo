import React, { ReactElement } from "react";
import Link from "next/link";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonLinkProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

Button.displayName = "Button";

export const ButtonLink = ({ children, className, href }: ButtonLinkProps) => {
  return (
    <Link
      href={href || "#"}
      className={clsx(
        "inline-flex items-center justify-center bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",
        className,
      )}
    >
      {children}
    </Link>
  );
};
