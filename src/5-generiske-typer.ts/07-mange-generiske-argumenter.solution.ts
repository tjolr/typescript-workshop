import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type Transformasjon<TInput, TOutput> = (input: TInput) => TOutput;

const opprettTransformasjon = <TInput, TOutput>(
  transformasjon: Transformasjon<TInput, TOutput>,
): Transformasjon<TInput, TOutput> => {
  return transformasjon;
};

const numberToText = opprettTransformasjon<number, string>((tall) =>
  tall.toString(),
);

const textToNumber = opprettTransformasjon<string, number>((tekst) =>
  parseInt(tekst),
);

const getIdFromEntity = opprettTransformasjon<{ id: string }, string>(
  (entity) => entity.id,
);

const getDatoFromTransaksjon = opprettTransformasjon<
  { dato: Date; beløp: number },
  Date
>((transaksjon) => transaksjon.dato);

const numberToTextResult = numberToText(42);
const textToNumberResult = textToNumber("42");
const getIdFromEntityResult = getIdFromEntity({ id: "42" });
const getDatoFromTransaksjonResult = getDatoFromTransaksjon({
  dato: new Date(2021, 0, 1),
  beløp: 100,
});

type tester = [
  Expect<Equal<typeof numberToTextResult, string>>,
  Expect<Equal<typeof textToNumberResult, number>>,
  Expect<Equal<typeof getIdFromEntityResult, string>>,
  Expect<Equal<typeof getDatoFromTransaksjonResult, Date>>,
];
