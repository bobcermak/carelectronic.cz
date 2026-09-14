type ClarityConsent = {
  ad_Storage: "granted" | "denied";
  analytics_Storage: "granted" | "denied";
};
interface Window {
  clarity?: {
    (command: "consentv2", consent: ClarityConsent): void;
    (command: "consent", granted: boolean): void;
  };
}
declare module '*.css';
declare module '*.scss';
declare module '*.sass';