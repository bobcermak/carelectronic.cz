"use client";

import Script from "next/script";
import { useEffect, type FC } from "react";
import { useConsent } from "@/contexts/ConsentContext";

const CONSENT = `window.clarity("consentv2",{ad_Storage:"denied",analytics_Storage:"granted"});`;
const Analytics: FC = () => {
  //Hooks
  const { state } = useConsent();
  const id = process.env.NEXT_PUBLIC_CLARITY_ID;
  const granted = state?.analytics === "granted";

  useEffect(() => {
    const clarity = window.clarity;
    if (typeof clarity !== "function") return;
    if (granted) clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
    else clarity("consent", false);
  }, [granted]);
  if (process.env.NODE_ENV !== "production" && !id && granted) {
    console.warn("[analytics] NEXT_PUBLIC_CLARITY_ID chybí — Clarity tag se nevloží.");
  }
  if (!id || !granted) return null;
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${id}");${CONSENT}`}
    </Script>
  );
};
export default Analytics;