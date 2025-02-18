import { Equal, Expect } from "../.helpers/total-typescript-helpers";

export const valutaKonvertering = {
  NOK_TIL_USD: "nok-usd",
  NOK_TIL_EUR: "nok-eur",
  NOK_TIL_SEK: "nok-sek",
  NOK_TIL_DKK: "nok-dkk",
  NOK_TIL_GBP: "nok-gbp",
} as const;

type ValutaKonvertering = typeof valutaKonvertering;

// OPPGAVE 1: Lag en type for nok-usd
type NokUsd = unknown;

type test1 = Expect<Equal<NokUsd, "nok-usd">>;

// OPPGAVE 2: Lag en type for norsk til skandinaviske valutaer (nok-sek & nok-dkk)
type NokSkandinavisk = unknown;

type test2 = Expect<Equal<NokSkandinavisk, "nok-sek" | "nok-dkk">>;

// OPPGAVE 3: Lag en type som er en union av alle nøklene i valutaKonvertering
type AlleValutaKonverteringer = unknown;

type test3 = Expect<
  Equal<
    AlleValutaKonverteringer,
    "nok-usd" | "nok-eur" | "nok-sek" | "nok-dkk" | "nok-gbp"
  >
>;
