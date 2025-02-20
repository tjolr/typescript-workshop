import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type HentØktDetaljer<T> = T extends { økt: unknown } ? T["økt"] : never;

type treningsTester = [
  Expect<Equal<HentØktDetaljer<{ økt: "styrke" }>, "styrke">>,
  Expect<
    Equal<HentØktDetaljer<{ økt: { type: "styrke" } }>, { type: "styrke" }>
  >,
  Expect<Equal<HentØktDetaljer<string>, never>>,
  Expect<Equal<HentØktDetaljer<{ treningsøkt: "løping" }>, never>>,
];
