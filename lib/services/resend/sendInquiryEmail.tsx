import InquiryEmail from "@/components/emails/InquiryEmail";
import type { Inquiry } from "@/types/inquiry";
import { REPLY_WITHIN_HOURS } from "@/types/business";
import { getResend, inquiryFrom, ownerEmail } from "./client";
import { sendEmail } from "./send";

export type InquiryOutcome = {
  confirmationSent: boolean;
};
export const sendInquiryEmail = async (inquiry: Inquiry): Promise<InquiryOutcome> => {
  const resend = getResend();
  const owner = ownerEmail();
  if (!resend || !owner) {
    console.error("[resend] Chybí klient nebo INQUIRY_TO_EMAIL — poptávka se neodešle.");
    return { confirmationSent: false };
  }
  const from = inquiryFrom();
  const subject = `Poptávka — ${inquiry.car || inquiry.service}`;
  await sendEmail(
    resend,
    "kopie do dílny",
    { from, to: owner, replyTo: inquiry.email, subject },
    <InquiryEmail inquiry={inquiry} forOwner/>
  );
  if (!inquiry.email || inquiry.email.toLowerCase() === owner.toLowerCase()) {
    return { confirmationSent: false };
  }
  const confirmationSent = await sendEmail(
    resend,
    "potvrzení zákazníkovi",
    {
      from,
      to: inquiry.email,
      replyTo: owner,
      subject: `${subject} · ozveme se do ${REPLY_WITHIN_HOURS} hodin`,
    },
    <InquiryEmail inquiry={inquiry} forOwner={false}/>
  );
  return { confirmationSent };
};