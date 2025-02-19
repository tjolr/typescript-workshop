import { Equal, Expect } from "../.helpers/total-typescript-helpers";

interface Valuta {
  kode: "NOK" | "EUR" | "USD" | "SEK" | "DKK";
  kurs: number;
  navn: string;
  land: string;
  symbol: string;
}

type ValutaBasic = Pick<Valuta, "kode" | "kurs">;

type ValutaVisning = Pick<Valuta, "navn" | "symbol">;

type ValutaUtenLand = Omit<Valuta, "land">;

type ValutaKursInfo = Omit<Valuta, "navn" | "land" | "symbol">;

type testArePickAndOmitEqual = Expect<
  Equal<Pick<Valuta, "kode" | "kurs">, Omit<Valuta, "navn" | "land" | "symbol">>
>;
