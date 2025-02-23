import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type Melding<TPrioritet> = {
  innhold: string;
  prioritet: TPrioritet;
  tidspunkt: Date;
};

type Prioritet = "lav" | "medium" | "høy";

const opprettMelding = <T extends Prioritet = never>(
  innhold: string,
  prioritet: T,
): Melding<T> => {
  return {
    innhold,
    prioritet,
    tidspunkt: new Date(),
  };
};

const høyPrioritet = opprettMelding<"høy">("Haster!", "høy");
const lavPrioritet = opprettMelding<"lav">("Kan vente", "lav");

type tester = [
  Expect<Equal<typeof høyPrioritet, Melding<"høy">>>,
  Expect<Equal<typeof lavPrioritet, Melding<"lav">>>,
];
