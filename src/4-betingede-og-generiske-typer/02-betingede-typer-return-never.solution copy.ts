import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type MotsattTransaksjon<T> = T extends "innskudd"
  ? "uttak"
  : T extends "uttak"
    ? "innskudd"
    : never;

type transaksjonsTester = [
  Expect<Equal<MotsattTransaksjon<"innskudd">, "uttak">>,
  Expect<Equal<MotsattTransaksjon<"uttak">, "innskudd">>,
  Expect<Equal<MotsattTransaksjon<"noe-helt-annet">, never>>,
  Expect<Equal<MotsattTransaksjon<897238>, never>>,
  Expect<Equal<MotsattTransaksjon<undefined>, never>>,
];
