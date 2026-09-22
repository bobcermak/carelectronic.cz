import { Button } from "@/components";

const NotFoundPage = () => (
  <section
    aria-label="Stránka nenalezena"
    className="mx-auto flex min-h-dvh w-container max-w-[720px] flex-col items-center justify-center gap-6 py-32 text-center"
  >
    <p className="text-[clamp(4rem,14vw,9rem)] font-medium leading-none tracking-ghost text-graphite">
      404
    </p>
    <h1 className="text-step">Tady nic není.</h1>
    <p className="max-w-[46ch] text-center">
      Tahle stránka neexistuje nebo se přestěhovala. Vraťte se na úvod — dílna je pořád na stejné
      adrese.
    </p>
    <Button href="/" ariaLabel="Zpět na úvod">
      zpět na úvod
    </Button>
  </section>
);
export default NotFoundPage;