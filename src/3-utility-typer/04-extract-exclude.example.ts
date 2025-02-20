import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type ValutaKode = "NOK" | "EUR" | "USD" | "SEK" | "DKK";

type ValuteKodeNOK = Extract<ValutaKode, "NOK">;

type ValutaKodeSkandinavia = Extract<ValutaKode, "SEK" | "DKK" | "NOK">;

type ValutaKodeSkandinavia_ = Exclude<ValutaKode, "EUR" | "USD">;

type testAreExtractAndExcludeEqual = Expect<
  Equal<ValutaKodeSkandinavia, ValutaKodeSkandinavia_>
>;
