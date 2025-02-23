import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type FeltTypeMap = {
  tall: number;
  tekst: string;
  prosent: number;
};

type FeltKeys = keyof FeltTypeMap;

type Felt<T extends FeltKeys> = {
  verdi: FeltTypeMap[T];
};

const opprettFelt = <T extends FeltKeys = never>(params: {
  verdi: FeltTypeMap[T];
}): Felt<T> => {
  return {
    verdi: params.verdi,
  };
};

const prosentFelt = opprettFelt<"prosent">({
  verdi: 0.8,
});

const tekstFelt = opprettFelt<"tekst">({
  verdi: "hei",
});

const tallFelt = opprettFelt<"tall">({
  verdi: 42,
});

type tester = [
  Expect<Equal<typeof prosentFelt, Felt<"prosent">>>,
  Expect<Equal<typeof tekstFelt, Felt<"tekst">>>,
  Expect<Equal<typeof tallFelt, Felt<"tall">>>,
];
