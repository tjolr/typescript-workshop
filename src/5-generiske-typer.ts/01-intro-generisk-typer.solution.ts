import { Equal, Expect } from "../.helpers/total-typescript-helpers";

const returnerDetJegSenderInn = <T>(verdi: T) => {
  return verdi;
};

const tall = returnerDetJegSenderInn(42);
const navn = returnerDetJegSenderInn("Ole");

type tester = [
  Expect<Equal<typeof tall, 42>>,
  Expect<Equal<typeof navn, "Ole">>,
];
