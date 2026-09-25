import { NAV_ROUTES } from "@/types/site";

export type NavItem = {
  href: string;
  label: string;
};
export const NAV_LINKS: NavItem[] = NAV_ROUTES.map((route) => ({
  href: route.path,
  label: route.nav ?? route.label,
}));