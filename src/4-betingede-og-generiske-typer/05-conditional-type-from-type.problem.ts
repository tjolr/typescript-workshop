import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type TreningsTypeFelt = {
  styrke: {
    vekt: number;
    reps: number;
  };
  kondisjon: {
    distanse: number;
    tempo: number;
  };
};

type HentTreningsFelt<T> =
  T extends  /* OPPGAVE: fyll inn her hva T må extende */
    ? TreningsTypeFelt[T]
    : never;

type tester = [
  Expect<Equal<HentTreningsFelt<"styrke">, { vekt: number; reps: number }>>,
  Expect<
    Equal<HentTreningsFelt<"kondisjon">, { distanse: number; tempo: number }>
  >,
  Expect<Equal<HentTreningsFelt<"noe-annet">, never>>,
];
