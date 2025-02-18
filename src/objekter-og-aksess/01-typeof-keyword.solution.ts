import { Equal, Expect } from "../.helpers/total-typescript-helpers";

const minKonto = {
  saldo: 100,
  eier: "Ola Normann",
};

type KontoInferred = typeof minKonto;

type test = Expect<Equal<KontoInferred, { saldo: number; eier: string }>>;

const kontoFunksjoner = {
  innskudd: (belop: number) => {
    minKonto.saldo += belop;
  },
  uttak: (belop: number) => {
    minKonto.saldo -= belop;
  },
};

type KontoFunksjonerInferred = typeof kontoFunksjoner;

type test2 = Expect<
  Equal<
    KontoFunksjonerInferred,
    {
      innskudd: (belop: number) => void;
      uttak: (belop: number) => void;
    }
  >
>;
