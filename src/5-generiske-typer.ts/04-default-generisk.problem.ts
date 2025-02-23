import { Equal, Expect } from "../.helpers/total-typescript-helpers";

interface BaseTransaksjon {
  belop: number;
  dato: Date;
}

interface UttaksTransaksjon extends BaseTransaksjon {
  type: "uttak";
  fraKonto: string;
}

interface InnskuddsTransaksjon extends BaseTransaksjon {
  type: "innskudd";
  tilKonto: string;
}

interface OverføringsTransaksjon extends BaseTransaksjon {
  type: "overføring";
  fraKonto: string;
  tilKonto: string;
}

type Transaksjon =
  | UttaksTransaksjon
  | InnskuddsTransaksjon
  | OverføringsTransaksjon;

/**
 * OPPGAVE: loggførTransaksjon skal ta inn et generisk argument
 * som oppfyller formen til Transaksjon og default verdi
 * skal være UttaksTransaksjon
 *  */

const loggførTransaksjon = <unknown>(transaksjonsData: Omit<T, "dato">): T => {
  return {
    ...transaksjonsData,
    dato: new Date(),
  } as T;
};

const uttak = loggførTransaksjon({
  type: "uttak",
  belop: 1000,
  fraKonto: "12345678903",
});

const innskudd = loggførTransaksjon<InnskuddsTransaksjon>({
  type: "innskudd",
  belop: 2000,
  tilKonto: "12345678903",
});

const overforing = loggførTransaksjon<OverføringsTransaksjon>({
  type: "overføring",
  belop: 500,
  fraKonto: "12345678903",
  tilKonto: "87654321098",
});

type tester = [
  Expect<Equal<typeof uttak, UttaksTransaksjon>>,
  Expect<Equal<typeof innskudd, InnskuddsTransaksjon>>,
  Expect<Equal<typeof overforing, OverføringsTransaksjon>>,
];
