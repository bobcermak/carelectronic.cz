let locked = 0;
let restoreTop = 0;
export const lockScroll = () => {
  if (typeof document === "undefined") return;
  locked += 1;
  if (locked > 1) return;
  restoreTop = window.scrollY;
  const width = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.position = "fixed";
  document.body.style.top = `-${restoreTop}px`;
  document.body.style.insetInline = "0";
  if (width > 0) document.body.style.paddingRight = `${width}px`;
};
export const unlockScroll = () => {
  if (typeof document === "undefined" || locked === 0) return;
  locked -= 1;
  if (locked > 0) return;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.insetInline = "";
  document.body.style.paddingRight = "";
  window.scrollTo({ top: restoreTop, behavior: "instant" });
};