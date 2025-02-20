import { Equal, Expect } from "../.helpers/total-typescript-helpers";

const konto = {
  saldo: 100,
  eier: {
    fornavn: "Ola",
    etternavn: "Normann",
    adresse: {
      postnummer: 7050,
      poststed: "Trondheim",
    },
  },
  innskudd: (belop: number) => {
    konto.saldo += belop;
  },
  uttak: (belop: number) => {
    konto.saldo -= belop;
  },
};

// OPPGAVE: endre på typene under slik at testene går gjennom
// Hint: bruk typeof fra forrige oppgave, og objektaksessering (index access)

type SaldoType = unknown;
type FornavnType = unknown;
type PostnummerType = unknown;
type innskuddType = unknown;
type uttakType = unknown;

type test1 = Expect<Equal<SaldoType, number>>;
type test2 = Expect<Equal<FornavnType, string>>;
type test3 = Expect<Equal<PostnummerType, number>>;
type test4 = Expect<Equal<innskuddType, (belop: number) => void>>;
type test5 = Expect<Equal<uttakType, (belop: number) => void>>;
