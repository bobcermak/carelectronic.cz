import Button from "@/components/buttons/Button";
import NavbarClient from "./NavbarClient";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { NAV_LINKS } from "./navLinks";
import { CONTACT_SECTION_ID } from "@/types/contact";

const CTA_HREF = `/#${CONTACT_SECTION_ID}`;
const Navbar = () => {
  return (
    <NavbarClient
      logo={<Logo/>}
      cta={
        <Button href={CTA_HREF} ariaLabel="Poptávka" className="hidden stablet:inline-flex">
          poptávka
        </Button>
      }
    >
      {NAV_LINKS.map((item) => (
        <li key={item.href} className="border-b border-line last:border-0 stablet:nth-last-2:border-0 laptop:border-0">
          <NavLink href={item.href} label={item.label}/>
        </li>
      ))}
      <li className="p-1 pt-3 stablet:hidden">
        <Button href={CTA_HREF} wFull ariaLabel="Poptávka">
          poptávka
        </Button>
      </li>
    </NavbarClient>
  );
};
export default Navbar;