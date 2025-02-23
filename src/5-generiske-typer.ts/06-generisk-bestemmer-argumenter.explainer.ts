import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type FeltTypeMap = {
  tall: number;
  tekst: string;
  prosent: number;
  option: {
    value: number;
    label: string;
  };
};

type FeltKeys = keyof FeltTypeMap;

type Felt<T extends FeltKeys> = {
  verdi: FeltTypeMap[T];
  valider: (verdi: FeltTypeMap[T]) => boolean;
  formatterVisning: (verdi: FeltTypeMap[T]) => string;
};

const opprettFelt = <T extends FeltKeys = never>(params: {
  verdi: FeltTypeMap[T];
  valider: (verdi: FeltTypeMap[T]) => boolean;
  formatterVisning: (verdi: FeltTypeMap[T]) => string;
}): Felt<T> => {
  return {
    verdi: params.verdi,
    valider: params.valider,
    formatterVisning: params.formatterVisning,
  };
};

const prosentFelt = opprettFelt<"prosent">({
  verdi: 0.25,
  valider: (x) => x >= -1 && x <= 1,
  formatterVisning: (x) => x.toString(),
});

const tekstFelt = opprettFelt<"tekst">({
  verdi: "hei",
  valider: (x) => x.length > 0,
  formatterVisning: (x) => x,
});

const tallFelt = opprettFelt<"tall">({
  verdi: 123,
  valider: (x) => x > 0,
  formatterVisning: (x) => x.toString(),
});

const optionFelt = opprettFelt<"option">({
  verdi: { label: "hei", value: 5 },
  valider: (x) => x.label.length > 0,
  formatterVisning: (x) => `${x.value} - ${x.label}`,
});

type tester = [
  Expect<Equal<typeof prosentFelt, Felt<"prosent">>>,
  Expect<Equal<typeof tekstFelt, Felt<"tekst">>>,
  Expect<Equal<typeof tallFelt, Felt<"tall">>>,
  Expect<Equal<typeof optionFelt, Felt<"option">>>,
];
