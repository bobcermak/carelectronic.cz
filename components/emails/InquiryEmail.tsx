import type { FC } from "react";
import { Body, Container, Head, Heading, Hr, Html, Link, Preview, Row, Section, Text } from "@react-email/components";
import { ADDRESS_SHOP, BUSINESS_EMAIL, BUSINESS_PHONE, OPENING_HOURS_LABEL, REPLY_WITHIN_HOURS, formatAddress } from "@/types/business";
import type { Inquiry } from "@/types/inquiry";
import { EMAIL_COLORS as C, EMAIL_FONT } from "./emailTheme";

type InquiryEmailProps = {
  inquiry: Inquiry;
  forOwner: boolean;
};
const rows = (inquiry: Inquiry): { label: string; value: string }[] =>
  [
    { label: "Poptávka k", value: inquiry.service },
    { label: "Vůz", value: inquiry.car },
    { label: "Motor", value: inquiry.engine },
    { label: "Rok výroby", value: inquiry.year },
    { label: "Telefon", value: inquiry.phone },
    { label: "E-mail", value: inquiry.email },
    { label: "Doplnění", value: inquiry.note },
  ].filter((row) => row.value.trim().length > 0);
const InquiryEmail: FC<InquiryEmailProps> = ({ inquiry, forOwner }) => {
  const title = forOwner ? "Nová poptávka" : "Máme vaši poptávku.";
  const lead = forOwner
    ? `Přišla poptávka na ${inquiry.service}. Odpovědět jde rovnou na tento e-mail.`
    : `Díky. Poptávku máme a ozveme se do ${REPLY_WITHIN_HOURS} hodin. Níž je to, co jsme od vás dostali — kdyby něco nesedělo, stačí odpovědět na tento e-mail.`;
  return (
    <Html lang="cs">
      <Head/>
      <Preview>{forOwner ? `Poptávka — ${inquiry.car}` : `Potvrzení poptávky — ozveme se do ${REPLY_WITHIN_HOURS} hodin`}</Preview>
      <Body style={{ margin: 0, padding: "32px 0", backgroundColor: C.cream, fontFamily: EMAIL_FONT }}>
        <Container style={{ width: "100%", maxWidth: "560px", margin: "0 auto", padding: "0 16px" }}>
          <Section
            style={{
              backgroundColor: C.white,
              borderRadius: "15px",
              padding: "32px",
              border: `1px solid ${C.line}`,
            }}
          >
            <Text
              style={{
                margin: "0 0 18px",
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.accent,
                fontWeight: 600,
              }}
            >
              CarElectronic
            </Text>
            <Heading
              as="h1"
              style={{
                margin: "0 0 12px",
                fontSize: "26px",
                lineHeight: 1.25,
                letterSpacing: "-0.03em",
                fontWeight: 500,
                color: C.ink,
              }}
            >
              {title}
            </Heading>
            <Text style={{ margin: "0 0 26px", fontSize: "15px", lineHeight: 1.6, color: C.ink80 }}>
              {lead}
            </Text>
            <Hr style={{ margin: "0 0 22px", border: "none", borderTop: `1px solid ${C.line}` }}/>
            {rows(inquiry).map((row) => (
              <Row key={row.label} style={{ marginBottom: "12px" }}>
                <Text
                  style={{
                    margin: "0 0 2px",
                    fontSize: "11px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: C.mokka,
                  }}
                >
                  {row.label}
                </Text>
                <Text style={{ margin: 0, fontSize: "15px", lineHeight: 1.5, color: C.ink }}>
                  {row.value}
                </Text>
              </Row>
            ))}
            <Hr style={{ margin: "22px 0", border: "none", borderTop: `1px solid ${C.line}` }}/>
            <Text style={{ margin: "0 0 4px", fontSize: "13px", lineHeight: 1.6, color: C.mokka }}>
              {formatAddress(ADDRESS_SHOP)} · {OPENING_HOURS_LABEL}
            </Text>
            <Text style={{ margin: 0, fontSize: "13px", lineHeight: 1.6, color: C.mokka }}>
              <Link href={`tel:${BUSINESS_PHONE.replace(/\s/g, "")}`} style={{ color: C.ink, textDecoration: "none" }}>
                {BUSINESS_PHONE}
              </Link>
              {" · "}
              <Link href={`mailto:${BUSINESS_EMAIL}`} style={{ color: C.ink, textDecoration: "none" }}>
                {BUSINESS_EMAIL}
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
export default InquiryEmail;