export type Service = {
  id: string;
  num: string;
  title: string;
  desc: string;
  href: string;
  external?: boolean;
};
export const SERVICES: Service[] = [
  {
    id: "chiptuning",
    num: "01",
    title: "Chiptuning",
    desc: "Úprava mapy řídicí jednotky na konkrétní motor, měření před a po na vlastní brzdě a zápis změny do technického průkazu.",
    href: "/chiptuning",
  },
  {
    id: "autoelektronika",
    num: "02",
    title: "Autoelektronika",
    desc: "Imobilizéry, klíče, airbagy, přístrojové panely, rádia a navigace. Diagnostika závady, ne výměna dílu naslepo.",
    href: "/autoelektronika",
  },
  {
    id: "mereni",
    num: "03",
    title: "Měření na dynu",
    desc: "Jediná výkonová brzda v Libereckém kraji. Protokol s křivkou výkonu a momentu — i samostatně, bez úpravy vozu.",
    href: "/mereni",
  },
];