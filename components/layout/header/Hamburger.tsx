import { type FC } from "react";
import { twMerge } from "tailwind-merge";

type HamburgerProps = {
  isOpen: boolean,
  onToggle: () => void,
  controls?: string,
  className?: string
};
const Hamburger: FC<HamburgerProps> = ({ isOpen, onToggle, controls, className }) => {
  const BAR = "absolute left-0 block h-[1.5px] w-full rounded-pill bg-bone transition-all duration-250 ease-om";
  return (
    <button
      type="button"
      aria-label={isOpen ? "Zavřít navigaci" : "Otevřít navigaci"}
      aria-expanded={isOpen}
      aria-controls={controls}
      onClick={onToggle}
      className={twMerge(
        "grid size-13 shrink-0 cursor-pointer place-items-center rounded-pill border transition-colors duration-200 ease-om",
        isOpen ? "border-bone bg-ink-soft" : "border-line-strong hover:border-bone active:border-bone",
        className
      )}
    >
      <span className="relative block h-3 w-4.5">
        <span className={`${BAR} ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}/>
        <span className={`${BAR} ${isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"}`}/>
      </span>
    </button>
  );
};
export default Hamburger;