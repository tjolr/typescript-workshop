import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type ErTall<T> = T extends number ? "tall" : "ikke tall";

type Resultat1 = ErTall<123>;
type Resultat2 = ErTall<"abc">;
type Resultat3 = ErTall<boolean>;

type tester = [
  Expect<Equal<Resultat1, "tall">>,
  Expect<Equal<Resultat2, "ikke tall">>,
  Expect<Equal<Resultat3, "ikke tall">>,
];
