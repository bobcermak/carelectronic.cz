"use client";

import type { FC } from "react";
import Button from "@/components/buttons/Button";
import { useConsent } from "@/contexts/ConsentContext";
import { CONSENT_TEXTS } from "@/types/consent";

const ConsentControls: FC = () => {
  //Hooks
  const { state, accept, reject, reopen } = useConsent();

  const status =
    state === null
      ? "zatím jste nerozhodli"
      : state.analytics === "granted"
        ? "měření je zapnuté"
        : "běží jen nezbytné";
  return (
    <div className="flex flex-col gap-5 rounded-block border border-line bg-ink-soft p-7">
      <p className="label">aktuální volba — {status}</p>
      <div className="flex flex-wrap gap-3">
        <Button type="button" onClick={accept} isArrow={false} ariaLabel={CONSENT_TEXTS.accept}>
          {CONSENT_TEXTS.accept}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={reject}
          isArrow={false}
          ariaLabel={CONSENT_TEXTS.reject}
        >
          {CONSENT_TEXTS.reject}
        </Button>
        {state !== null && (
          <Button
            type="button"
            noStyle
            onClick={reopen}
            ariaLabel="Zobrazit lištu znovu"
            className="text-chip text-stone underline underline-offset-[3px] transition-colors duration-200 ease-om hover:text-bone"
          >
            zeptat se znovu
          </Button>
        )}
      </div>
    </div>
  );
};
export default ConsentControls;
