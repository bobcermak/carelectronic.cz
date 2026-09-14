export type FormErrorKind = "form" | "send";
export type FormState =
  | { status: "idle" }
  | { status: "sent"; confirmationSent: boolean }
  | { status: "failed"; kind: FormErrorKind; message: string };
export const FORM_IDLE: FormState = { status: "idle" };
export const formFailed = (kind: FormErrorKind, message: string): FormState => ({
  status: "failed",
  kind,
  message,
});
export const formSent = (confirmationSent: boolean): FormState => ({
  status: "sent",
  confirmationSent,
});