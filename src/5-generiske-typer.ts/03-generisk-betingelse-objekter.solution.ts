import { Equal, Expect } from "../.helpers/total-typescript-helpers";

interface Transaksjon {
  belop: number;
  dato: Date;
}

const jegGodtarTransaksjon = <T extends Transaksjon>(transaksjon: T) => {
  return transaksjon;
};

const transaksjon = jegGodtarTransaksjon({ belop: 100, dato: new Date() });
const transaksjonMedEier = jegGodtarTransaksjon({
  belop: 100,
  dato: new Date(),
  eier: "Ola",
});

// @ts-expect-error
const transaksjonUtenDato = jegGodtarTransaksjon({ belop: 100 });

type test = [Expect<Equal<typeof transaksjon, { belop: number; dato: Date }>>];
