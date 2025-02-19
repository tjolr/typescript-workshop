import { Equal, Expect } from "../.helpers/total-typescript-helpers";

interface Treningsøkt {
  dato: Date;
  notat: string;
  varighet: number;
}

async function fetchTreningsøkt(dato: Date) {
  const response = await Promise.resolve({
    dato: dato,
    notat: "God økt med høy intensitet",
    varighet: 56,
  });

  return response;
}

// OPPGAVE: Bruke Awaited og ReturnType til å hente ut typen til resolved promise fra fetchTreningsøkt
type ResolvedTreningsøkt = unknown;

type test = Expect<Equal<ResolvedTreningsøkt, Treningsøkt>>;
