import type { FC } from "react";

/*Svislé lišty v okrajích — levá roste shora, pravá zdola. Bez tracku na pozadí
  a od hrany k hraně viewportu; zaoblený zůstává jen rostoucí konec výplně.*/
const RAIL = "pointer-events-none fixed inset-y-0 z-60 w-0.75";
const FILL = "absolute inset-x-0 block h-0 rounded-pill bg-accent";
const ScrollProgress: FC = () => (
  <>
    <div data-om-rail aria-hidden="true" className={`${RAIL} left-0.5`}>
      <span className={`${FILL} top-0`}/>
    </div>
    <div data-om-rail aria-hidden="true" className={`${RAIL} right-0.5`}>
      <span className={`${FILL} bottom-0`}/>
    </div>
  </>
);
export default ScrollProgress;
