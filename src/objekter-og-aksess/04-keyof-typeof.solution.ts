import { Equal, Expect } from "../.helpers/total-typescript-helpers";

const valutakurser = {
  NOK: {
    beskrivelse: "Norske kroner",
    land: "Norge",
  },
  EUR: {
    beskrivelse: "Euro",
    land: "EU",
  },
  USD: {
    beskrivelse: "Amerikanske dollar",
    land: "USA",
  },
  SEK: {
    beskrivelse: "Svenske kroner",
    land: "Sverige",
  },
  DKK: {
    beskrivelse: "Danske kroner",
    land: "Danmark",
  },
};

type ValutaKode = keyof typeof valutakurser;

type test1 = Expect<Equal<ValutaKode, "NOK" | "EUR" | "USD" | "SEK" | "DKK">>;

// Alternativ løsning
type ValutakurserType = typeof valutakurser;
type ValutaKode2 = keyof ValutakurserType;

type test2 = Expect<Equal<ValutaKode2, "NOK" | "EUR" | "USD" | "SEK" | "DKK">>;
