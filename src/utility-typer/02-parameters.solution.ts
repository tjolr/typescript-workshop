import { Equal, Expect } from "../.helpers/total-typescript-helpers";

const loggførTreningsøkt = (
  personId: string,
  treningsøkt: {
    dato: Date;
    notat: string;
    type: "styrke" | "kondisjon" | "gruppetime";
  },
) => {
  console.log(
    `Person ${personId} har loggført en treningsøkt av type ${treningsøkt.type} den ${treningsøkt.dato.toISOString()}. Notat: ${treningsøkt.notat}`,
  );
};

// OPPGAVE: Bruke typescript utility typen Parameters til å hente ut typen til loggførTreningsøkt
type LoggførTreningsøktParametre = Parameters<typeof loggførTreningsøkt>;

type test = Expect<
  Equal<
    LoggførTreningsøktParametre,
    [
      string,
      {
        dato: Date;
        notat: string;
        type: "styrke" | "kondisjon" | "gruppetime";
      },
    ]
  >
>;
