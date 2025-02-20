import { Equal, Expect } from "../.helpers/total-typescript-helpers";

interface KontoSkjema {
  id: string;
  eier: {
    fornavn: string;
    etternavn: string;
  };
  saldo: number;
  transaksjoner: unknown[];
}

// OPPGAVE: Lag typen skjemafelter som holder nøklene til KontoSkjema
type SkjemaFelter = unknown;

type test = Expect<
  Equal<SkjemaFelter, "id" | "eier" | "saldo" | "transaksjoner">
>;
