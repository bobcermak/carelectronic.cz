"use client";

import Link from "next/link";
import type { FC, MouseEvent, ReactNode } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "md" | "lg";
type ButtonSharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
  primary: "relative isolate bg-accent text-white shadow-cta group-hover:text-accent group-active:text-accent group-focus-visible:text-accent",
  outline: "relative border border-line-strong text-bone",
};
const SIZE_STYLES: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: {
    md: "gap-3.75 py-2 pl-6.5 pr-2",
    lg: "gap-4.5 py-2.25 pl-7.5 pr-2.25",
  },
  outline: {
    md: "h-13 gap-3.75 px-6.5",
    lg: "h-15.5 gap-4 px-7.5",
  },
};
const SIZE_BARE: Record<ButtonSize, string> = {
  md: "h-13 px-6.5",
  lg: "h-15.5 px-7.5",
};
const ARROW_SIZES: Record<ButtonSize, number> = {
  md: 18,
  lg: 20,
};
const CIRCLE_SIZES: Record<ButtonSize, string> = {
  md: "size-9",
  lg: "size-11",
};
const FILL_STYLES: Record<ButtonSize, string> = {
  md: "[clip-path:inset(8px_8px_8px_calc(100%-44px)_round_999px)]",
  lg: "[clip-path:inset(9px_9px_9px_calc(100%-53px)_round_999px)]",
};
const FILL_BARE = "[clip-path:inset(0_0_0_100%_round_999px)]";
const TRACE_RADIUS: Record<ButtonSize, number> = {
  md: 25.5,
  lg: 30.5,
};
const CIRCLE_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-white text-accent",
  outline: "border border-line-strong text-bone",
};
const Button: FC<ButtonProps> = (props) => {
  const {
    variant = "primary",
    size = "md",
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
    noStyle ? "cursor-pointer" : "group inline-flex cursor-pointer rounded-pill outline-none",
    !noStyle && (wFull ? "w-full" : "w-fit"),
    disabled ? "pointer-events-none cursor-not-allowed opacity-40" : "",
    hover,
    className
  );
  const pillClass = twMerge(
    "inline-flex items-center justify-center rounded-pill text-nav font-medium lowercase",
    "transition-[color,border-color] duration-400 ease-om",
    "group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-accent-text",
    VARIANT_STYLES[variant],
    variant === "primary" && !showArrow ? SIZE_BARE[size] : SIZE_STYLES[variant][size],
    wFull ? "w-full" : ""
  );
  const circleClass = twMerge(
    "grid shrink-0 place-items-center rounded-pill",
    CIRCLE_SIZES[size],
    CIRCLE_STYLES[variant]
  );
  const content = noStyle ? (
    children
  ) : (
    <span className={pillClass}>
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className={twMerge(
            "absolute inset-0 -z-10 rounded-pill bg-white transition-[clip-path] duration-500 ease-om",
            "group-hover:[clip-path:inset(0_round_999px)] group-active:[clip-path:inset(0_round_999px)] group-focus-visible:[clip-path:inset(0_round_999px)]",
            "motion-reduce:transition-none",
            showArrow ? FILL_STYLES[size] : FILL_BARE
          )}
        />
      )}
      {variant === "outline" && (
        <svg
          aria-hidden="true"
          fill="none"
          className="pointer-events-none absolute -top-px -left-px h-[calc(100%+2px)] w-[calc(100%+2px)] overflow-visible"
        >
          <rect
            x="0.5"
            y="0.5"
            rx={TRACE_RADIUS[size]}
            pathLength={1}
            strokeWidth="1"
            className={twMerge(
              "h-[calc(100%-1px)] w-[calc(100%-1px)] stroke-accent [stroke-dasharray:1] [stroke-dashoffset:1]",
              "transition-[stroke-dashoffset] duration-400 ease-om",
              "group-hover:[stroke-dashoffset:0] group-hover:duration-900 group-hover:ease-[cubic-bezier(.65,0,.35,1)]",
              "group-active:[stroke-dashoffset:0] group-active:duration-900",
              "group-focus-visible:[stroke-dashoffset:0] group-focus-visible:duration-900",
              "motion-reduce:transition-none"
            )}
          />
        </svg>
      )}
      <span className={wFull ? (showArrow ? "flex-1 text-left" : "flex-1 text-center") : ""}>{children}</span>
      {showArrow && (
        <span aria-hidden="true" className={circleClass}>
          <ArrowUpRightIcon
            size={ARROW_SIZES[size]}
            weight="regular"
            className="transition-[rotate] duration-500 ease-om group-hover:rotate-45 group-active:rotate-45 group-focus-visible:rotate-45"
          />
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