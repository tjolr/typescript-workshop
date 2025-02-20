import { Equal, Expect } from "../.helpers/total-typescript-helpers";

// OPPGAVE: bruk den generiske typen T til å lage en type som gir motsatt transaksjon
// Hvis T er "innskudd" skal typen være "uttak"
// Hvis T er "uttak" skal typen være "innskudd"
// Her må du bruke betingede typer (conditional types)

type MotsattTransaksjon<T> = unknown;

type transaksjonsTester = [
  Expect<Equal<MotsattTransaksjon<"innskudd">, "uttak">>,
  Expect<Equal<MotsattTransaksjon<"uttak">, "innskudd">>,
];
