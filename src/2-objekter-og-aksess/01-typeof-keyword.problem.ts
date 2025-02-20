import { Equal, Expect } from "../.helpers/total-typescript-helpers";

const minKonto = {
  saldo: 100,
  eier: "Ola Normann",
};

// OPPGAVE 1: endre typen på KontoInferred slik at testen går gjennom
// Hint: bruk typeof
type KontoInferred = unknown;

type test = Expect<Equal<KontoInferred, { saldo: number; eier: string }>>;

const kontoFunksjoner = {
  innskudd: (belop: number) => {
    minKonto.saldo += belop;
  },
  uttak: (belop: number) => {
    minKonto.saldo -= belop;
  },
};

// OPPGAVE 2: endre typen på kontoFunksjoner slik at testen går gjennom
type KontoFunksjonerInferred = unknown;

type test2 = Expect<
  Equal<
    KontoFunksjonerInferred,
    {
      innskudd: (belop: number) => void;
      uttak: (belop: number) => void;
    }
  >
>;
