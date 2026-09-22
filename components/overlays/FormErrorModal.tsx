"use client";

import type { FC } from "react";
import Modal from "./Modal";
import Button from "@/components/buttons/Button";
import { FALLBACK_CONTACT } from "@/types/inquiry";
import type { FormErrorKind } from "@/types/formState";

type FormErrorModalProps = {
  open: boolean;
  onClose: () => void;
  kind: FormErrorKind;
  message: string;
};
const FormErrorModal: FC<FormErrorModalProps> = ({ open, onClose, kind, message }) => {
  const isForm = kind === "form";
  return (
    <Modal open={open} onClose={onClose} labelledBy="form-error-title" accentClass="bg-steel">
      <p className="eyebrow mb-5 justify-center">{isForm ? "Formulář" : "Odeslání"}</p>
      <h2 id="form-error-title" className="mb-3 text-center text-step">
        {isForm ? "Ještě to nejde odeslat." : "Tohle se nepovedlo."}
      </h2>
      <p className="text-center text-chip text-ash">{message}</p>
      <div className="my-6 h-px bg-line"/>
      {isForm ? (
        <p className="text-center text-chip text-stone">
          Doplňte to prosím ve formuláři a zkuste to znovu — vyplněné údaje zůstávají.
        </p>
      ) : (
        <p className="text-center text-chip text-stone">
          Poptávka se k nám nedostala. Zkuste to prosím znovu, a kdyby to zlobilo dál, napište
          rovnou na{" "}
          <a
            href={`mailto:${FALLBACK_CONTACT}`}
            className="font-semibold text-accent-text underline underline-offset-[3px] transition-colors duration-200 ease-om hover:text-bone"
          >
            {FALLBACK_CONTACT}
          </a>
          .
        </p>
      )}
      <Button
        type="button"
        onClick={onClose}
        wFull
        isArrow={false}
        ariaLabel={isForm ? "Zpět na formulář" : "Zkusit znovu"}
        className="mt-6"
      >
        {isForm ? "Zpět na formulář" : "Zkusit znovu"}
      </Button>
    </Modal>
  );
};
export default FormErrorModal;