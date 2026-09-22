"use client";

import Link from "next/link";
import type { FC, MouseEvent, ReactNode } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "outline";
type ButtonSharedProps = {
  variant?: ButtonVariant;
  isArrow?: boolean;
  ariaLabel: string;
  className?: string;
  wFull?: boolean;
  disabled?: boolean;
  noStyle?: boolean;
  hover?: string;
  children: ReactNode;
};
type LinkButtonProps = ButtonSharedProps & {
  href: string;
  type?: never;
  onClick?: () => void;
};
type NativeButtonProps = ButtonSharedProps & {
  href?: never;
  type: "submit" | "reset" | "button";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};
type ButtonProps = LinkButtonProps | NativeButtonProps;
const EXTERNAL_HREF = /^https?:\/\//i;
const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "gap-4.5 bg-accent py-2.25 pl-7.5 pr-2.25 text-white shadow-cta hover:bg-accent-text",
  outline: "gap-4 border border-line-strong px-7.5 py-4.5 text-bone hover:border-bone",
};
const CIRCLE_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-white text-accent",
  outline: "border border-line-strong text-bone",
};
const Button: FC<ButtonProps> = (props) => {
  const {
    variant = "primary",
    isArrow = true,
    ariaLabel,
    className,
    wFull = false,
    disabled = false,
    noStyle = false,
    hover,
    children,
  } = props;
  const showArrow = isArrow && !noStyle;
  const wrapperClass = twMerge(
    noStyle ? "cursor-pointer" : "group inline-flex cursor-pointer",
    !noStyle && (wFull ? "w-full" : "w-fit"),
    disabled ? "pointer-events-none cursor-not-allowed opacity-40" : "",
    hover,
    className
  );
  const pillClass = twMerge(
    "inline-flex items-center justify-center rounded-pill text-nav font-medium lowercase",
    "transition-[background-color,color,border-color] duration-200 ease-om",
    VARIANT_STYLES[variant],
    wFull ? "w-full" : ""
  );
  const circleClass = twMerge(
    "grid size-11 shrink-0 place-items-center rounded-pill",
    "transition-[translate] duration-200 ease-om",
    "group-hover:-translate-x-0.5 group-active:-translate-x-0.5",
    CIRCLE_STYLES[variant]
  );
  const content = noStyle ? (
    children
  ) : (
    <span className={pillClass}>
      <span className={wFull ? "flex-1 text-center" : ""}>{children}</span>
      {showArrow && (
        <span aria-hidden="true" className={circleClass}>
          <ArrowUpRightIcon size={17} weight="light"/>
        </span>
      )}
    </span>
  );
  if (props.type) {
    return (
      <button
        type={props.type}
        onClick={props.onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={wrapperClass}
      >
        {content}
      </button>
    );
  }
  if (disabled) {
    return (
      <span aria-label={ariaLabel} aria-disabled="true" className={wrapperClass}>
        {content}
      </span>
    );
  }
  const isExternal = EXTERNAL_HREF.test(props.href);
  return (
    <Link
      href={props.href}
      onClick={props.onClick}
      scroll={props.href.includes("#") ? false : undefined}
      aria-label={ariaLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={wrapperClass}
    >
      {content}
    </Link>
  );
};
export default Button;