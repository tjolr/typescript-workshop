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

type ResolvedTreningsøkt = Awaited<ReturnType<typeof fetchTreningsøkt>>;

type test = Expect<Equal<ResolvedTreningsøkt, Treningsøkt>>;
