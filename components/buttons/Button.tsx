"use client";

import Link from "next/link";
import type { FC, MouseEvent, ReactNode } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "dark" | "light";
type ButtonSize = "sm" | "md" | "lg";
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
  primary: "bg-accent text-ink hover:bg-ink hover:text-cream active:bg-ink active:text-cream",
  secondary: "text-ink border border-line hover:bg-ink hover:text-cream active:bg-ink active:text-cream",
  dark: "bg-ink text-cream hover:bg-accent hover:text-ink active:bg-accent active:text-ink",
  light: "text-latte border border-line-dark hover:bg-cream hover:text-ink active:bg-cream active:text-ink",
};
const CIRCLE_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-ink text-cream",
  secondary: "bg-ink text-cream",
  dark: "bg-accent text-ink",
  light: "bg-cream text-ink",
};
const SIZE_STYLES: Record<ButtonSize, { label: string; circle: string; icon: number }> = {
  sm: { label: "text-ui px-5 py-2.5", circle: "size-9", icon: 15 },
  md: { label: "text-ui px-7 py-3.5", circle: "size-12", icon: 17 },
  lg: { label: "text-body px-8 py-4", circle: "size-14", icon: 19 },
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
  const dims = SIZE_STYLES[size];
  const showArrow = isArrow && !noStyle;
  const wrapperClass = twMerge(
    noStyle ? "cursor-pointer" : "group inline-flex items-center cursor-pointer",
    !noStyle && (wFull ? "w-full" : "w-fit"),
    disabled ? "pointer-events-none cursor-not-allowed opacity-40" : "",
    hover,
    className
  );
  const labelClass = twMerge(
    "flex flex-col rounded-pill text-center font-medium lowercase",
    "transition-[background-color,color,border-color] duration-200 ease-om",
    dims.label,
    VARIANT_STYLES[variant],
    wFull ? "flex-1" : ""
  );
  const circleClass = twMerge(
    "grid shrink-0 place-items-center rounded-pill",
    "transition-[translate,background-color,color] duration-200 ease-om",
    "group-hover:-translate-x-0.5 group-active:-translate-x-0.5",
    dims.circle,
    CIRCLE_STYLES[variant]
  );
  const content = noStyle ? (
    children
  ) : (
    <span className={twMerge("flex items-center gap-2", wFull ? "w-full" : "")}>
      <span className={labelClass}>{children}</span>
      {showArrow && (
        <span aria-hidden="true" className={circleClass}>
          <ArrowUpRightIcon size={dims.icon} weight="light"/>
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