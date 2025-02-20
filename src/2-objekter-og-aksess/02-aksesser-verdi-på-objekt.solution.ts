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

type KontoType = typeof konto;

type SaldoType = KontoType["saldo"];
type FornavnType = KontoType["eier"]["fornavn"];
type PostnummerType = KontoType["eier"]["adresse"]["postnummer"];
type InnskuddType = KontoType["innskudd"];
type UttakType = KontoType["uttak"];

type test1 = Expect<Equal<SaldoType, number>>;
type test2 = Expect<Equal<FornavnType, string>>;
type test3 = Expect<Equal<PostnummerType, number>>;
type test4 = Expect<Equal<InnskuddType, (belop: number) => void>>;
type test5 = Expect<Equal<UttakType, (belop: number) => void>>;
