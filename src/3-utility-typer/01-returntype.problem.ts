import { Equal, Expect } from "../.helpers/total-typescript-helpers";

function getKonto() {
  return {
    id: "123",
    saldo: 1000,
    eier: "Ola Nordmann",
    transaksjoner: [],
  };
}

// OPPGAVE: bruk utility-typen ReturnType til å hente ut typen til getKonto
type Konto = unknown;

type test = Expect<
  Equal<
    Konto,
    {
      id: string;
      saldo: number;
      eier: string;
      transaksjoner: unknown[];
    }
  >
>;
