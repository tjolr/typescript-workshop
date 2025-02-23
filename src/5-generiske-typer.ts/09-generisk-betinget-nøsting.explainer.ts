import { Equal, Expect } from "../.helpers/total-typescript-helpers";

interface BaseTransaksjon {
  belop: number;
  dato: Date;
}

interface UttaksTransaksjon extends BaseTransaksjon {
  type: "uttak";
  fraKonto: string;
}

interface InnskuddsTransaksjon extends BaseTransaksjon {
  type: "innskudd";
  tilKonto: string;
}

interface OverføringsTransaksjon extends BaseTransaksjon {
  type: "overføring";
  fraKonto: string;
  tilKonto: string;
}

type TransaksjonType<T> = T extends { type: "uttak" }
  ? "Uttak"
  : T extends { type: "innskudd" }
    ? "Innskudd"
    : T extends { type: "overføring" }
      ? "Overføring"
      : never;

type Resultat1 = TransaksjonType<UttaksTransaksjon>;
type Resultat2 = TransaksjonType<InnskuddsTransaksjon>;
type Resultat3 = TransaksjonType<OverføringsTransaksjon>;
type Resultat4 = TransaksjonType<BaseTransaksjon>;

type tester = [
  Expect<Equal<Resultat1, "Uttak">>,
  Expect<Equal<Resultat2, "Innskudd">>,
  Expect<Equal<Resultat3, "Overføring">>,
  Expect<Equal<Resultat4, never>>,
];
