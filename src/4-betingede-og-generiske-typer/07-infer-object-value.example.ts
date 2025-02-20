import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type Treningsøkt<T> = {
  type: "styrke" | "kondisjon";
  resultat: T;
};

type StyrkeØkt = Treningsøkt<{ vekt: number; reps: number }>;
type KondisjonØkt = Treningsøkt<{ distanse: number }>;

type HentResultat<T> = T extends Treningsøkt<infer Resultat> ? Resultat : never;

type tester = [
  Expect<Equal<HentResultat<StyrkeØkt>, { vekt: number; reps: number }>>,
  Expect<Equal<HentResultat<KondisjonØkt>, { distanse: number }>>,
];
