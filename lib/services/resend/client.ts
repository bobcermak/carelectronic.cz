import { Resend } from "resend";

const FALLBACK_FROM = "CarElectronic <onboarding@resend.dev>";
export const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[resend] Chybí RESEND_API_KEY — e-maily se neodešlou.");
    return null;
  }
  return new Resend(apiKey);
};
export const inquiryFrom = () => process.env.INQUIRY_FROM_EMAIL || FALLBACK_FROM;
export const ownerEmail = () => process.env.INQUIRY_TO_EMAIL ?? "";