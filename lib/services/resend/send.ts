import type { ReactElement } from "react";
import { render } from "@react-email/components";
import type { Resend } from "resend";

export type SendPayload = {
  from: string;
  to: string;
  subject: string;
  replyTo?: string;
  bcc?: string;
};
export let lastSendError = "";
export const sendEmail = async (
  resend: Resend,
  label: string,
  payload: SendPayload,
  element: ReactElement
): Promise<boolean> => {
  try {
    const [html, text] = await Promise.all([render(element), render(element, { plainText: true })]);
    const { data, error } = await resend.emails.send({ ...payload, html, text });
    if (error) {
      lastSendError = `${label}: ${error.name} — ${error.message}`;
      console.error(`[resend] Odmítnuto (${label}): ${error.name} — ${error.message}`);
      return false;
    }
    console.info(`[resend] Odesláno (${label}), id ${data?.id}`);
    return true;
  } catch (thrown) {
    lastSendError = `${label}: ${thrown instanceof Error ? thrown.message : String(thrown)}`;
    console.error(`[resend] Selhalo (${label}):`, thrown);
    return false;
  }
};