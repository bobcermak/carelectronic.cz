"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

type NavLinkProps = {
  href: string,
  label: string
};
const NavLink: FC<NavLinkProps> = ({ href, label }) => {
  //Hooks
  const pathname = usePathname();
  const active = !href.includes("#") && pathname === href;
  return (
    <Link
      href={href}
      scroll={href.includes("#") ? false : undefined}
      aria-current={active ? "page" : undefined}
      className="group flex w-full px-3 py-4 laptop:w-fit laptop:p-0"
    >
      <span
        className={`relative text-nav lowercase text-bone transition-colors duration-400 ease-om group-hover:text-accent-text group-active:text-accent-text
          after:absolute after:left-1/2 after:-bottom-2.5 after:size-1.25 after:-translate-x-1/2 after:rounded-pill after:bg-accent
          after:transition-[opacity,scale] after:duration-400 after:ease-om
          ${active ? "after:opacity-100 after:scale-100" : "after:opacity-0 after:scale-0 group-hover:after:opacity-100 group-hover:after:scale-100 group-active:after:opacity-100 group-active:after:scale-100"}`}
      >
        {label}
      </span>
    </Link>
  );
};
export default NavLink;