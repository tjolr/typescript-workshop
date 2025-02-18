import { Equal, Expect } from "../.helpers/total-typescript-helpers";

const konto: Konto = {
  id: "4321",
  eier: "Ola Normann",
  saldo: 1000,
};

interface Konto {
  id: string;
  eier: string;
  saldo: number;
}

type test = Expect<Equal<Konto, { id: string; eier: string; saldo: number }>>;
