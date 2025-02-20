import { Equal, Expect } from "../.helpers/total-typescript-helpers";

/**
 * OPPGAVE: legg til en betingelse som gjør at
 * dersom noe annet enn 'innskudd' eller 'uttak' blir sendt inn som T
 * så skal det returneres never
 *  */

type MotsattTransaksjon<T> = T extends "innskudd" ? "uttak" : "innskudd";

type transaksjonsTester = [
  Expect<Equal<MotsattTransaksjon<"innskudd">, "uttak">>,
  Expect<Equal<MotsattTransaksjon<"uttak">, "innskudd">>,
  Expect<Equal<MotsattTransaksjon<"noe-helt-annet">, never>>,
  Expect<Equal<MotsattTransaksjon<897238>, never>>,
  Expect<Equal<MotsattTransaksjon<undefined>, never>>,
];
