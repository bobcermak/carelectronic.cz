"use client";

import type { FC } from "react";
import Modal from "./Modal";
import Button from "@/components/buttons/Button";
import { REPLY_WITHIN_HOURS } from "@/types/inquiry";

type FormSuccessModalProps = {
  open: boolean;
  onClose: () => void;
  email: string;
  confirmationSent: boolean;
};
const FormSuccessModal: FC<FormSuccessModalProps> = ({ open, onClose, email, confirmationSent }) => (
  <Modal open={open} onClose={onClose} labelledBy="form-success-title" accentClass="bg-accent">
    <p className="eyebrow mb-5 justify-center">Odesláno</p>
    <h2 id="form-success-title" className="mb-3 text-center text-title">
      Poptávku máme.
    </h2>
    <p className="text-center text-ui text-ink-80">
      {confirmationSent ? (
        <>
          Potvrzení jsme poslali na <span className="font-semibold text-ink">{email}</span>.
        </>
      ) : (
        <>
          Potvrzovací e-mail se nepodařilo odeslat, poptávka ale dorazila. Ozveme se na{" "}
          <span className="font-semibold text-ink">{email}</span> i tak.
        </>
      )}
    </p>
    <div className="my-6 h-px bg-line"/>
    <p className="text-center text-ui font-semibold text-ink">
      Ozveme se do {REPLY_WITHIN_HOURS} hodin.
    </p>
    <p className="mt-2 text-center text-ui text-mokka">
      Nezávazně — jen si projdeme, co s vozem je a co se s ním dá dělat.
    </p>
    <Button type="button" onClick={onClose} wFull isArrow={false} ariaLabel="Zavřít" className="mt-6">
      Zavřít
    </Button>
  </Modal>
);
export default FormSuccessModal;