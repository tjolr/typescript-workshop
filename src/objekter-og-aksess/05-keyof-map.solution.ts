import { Equal, Expect } from "../.helpers/total-typescript-helpers";

export const valutaKonvertering = {
  NOK_TIL_USD: "nok-usd",
  NOK_TIL_EUR: "nok-eur",
  NOK_TIL_SEK: "nok-sek",
  NOK_TIL_DKK: "nok-dkk",
  NOK_TIL_GBP: "nok-gbp",
} as const;

type ValutaKonvertering = typeof valutaKonvertering;

type NokUsd = ValutaKonvertering["NOK_TIL_USD"];

type test1 = Expect<Equal<NokUsd, "nok-usd">>;

type NokSkandinavisk = ValutaKonvertering["NOK_TIL_SEK" | "NOK_TIL_DKK"];

type test2 = Expect<Equal<NokSkandinavisk, "nok-sek" | "nok-dkk">>;

type AlleNokKonverteringer = ValutaKonvertering[keyof ValutaKonvertering];

type test3 = Expect<
  Equal<
    AlleNokKonverteringer,
    "nok-usd" | "nok-eur" | "nok-sek" | "nok-dkk" | "nok-gbp"
  >
>;
