import { Equal, Expect } from "../.helpers/total-typescript-helpers";

const jegGodtarBareStrenger = <T extends string>(input: T) => {
  return input;
};

const jegGodtarBareTall = <T extends number>(input: T) => {
  return input;
};

const streng = jegGodtarBareStrenger("Dette er gøy");
const tall = jegGodtarBareTall(42);

type tester = [
  Expect<Equal<typeof streng, "Dette er gøy">>,
  Expect<Equal<typeof tall, 42>>,
];
