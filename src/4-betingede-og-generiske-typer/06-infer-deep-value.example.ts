import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type Økt = {
  navn: string;
  data: { vekt: `${number}kg` | `${number}lb` };
};

type HentVektType<T> = T extends { data: { vekt: infer VektType } }
  ? VektType
  : never;

type test = Expect<Equal<HentVektType<Økt>, `${number}kg` | `${number}lb`>>;
