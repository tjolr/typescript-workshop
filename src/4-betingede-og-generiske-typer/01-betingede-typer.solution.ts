import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type MotsattTransaksjon<T> = T extends "innskudd" ? "uttak" : "innskudd";

type transaksjonsTester = [
  Expect<Equal<MotsattTransaksjon<"innskudd">, "uttak">>,
  Expect<Equal<MotsattTransaksjon<"uttak">, "innskudd">>,
];
