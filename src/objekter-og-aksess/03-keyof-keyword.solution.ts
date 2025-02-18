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

type SkjemaFelter = keyof KontoSkjema;

type test = Expect<
  Equal<SkjemaFelter, "id" | "eier" | "saldo" | "transaksjoner">
>;
