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

// OPPGAVE: gjør om typen ValutaKode til en union av nøklene i valutakurser

// Hint: bruk en kombinasjon av typeof og keyof

type ValutaKode = "NOK" | "EUR" | "USD" | "SEK" | "DKK";

type test1 = Expect<Equal<ValutaKode, "NOK" | "EUR" | "USD" | "SEK" | "DKK">>;
