import type { FC, ReactNode } from "react";
import CookieBanner from "@/components/overlays/CookieBanner";

const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    {children}
    <CookieBanner/>
  </>
);
export default PageWrapper;