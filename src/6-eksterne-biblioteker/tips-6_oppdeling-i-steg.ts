// ===============================================================
// Tips 6: Oppdeling i steg
// ===============================================================

/* 
Dersom du skal lete frem en type som ligger dypt inne i et bibliotek,
eller skal debugge din egen kode kan det være nyttig å dele opp prosessen
i mange steg, slik at du kan se hva TS intellisense kommer frem til underveis.
*/

import { useForm } from "react-hook-form";

type UseFormType = typeof useForm;

type UseFormParams = Parameters<UseFormType>;

type FormOptions = UseFormParams[0];

type NonNullableFormOptions = NonNullable<FormOptions>;

type Mode = NonNullableFormOptions["mode"];

// Alt kombinert i en type

type ModeType = NonNullable<NonNullable<Parameters<typeof useForm>[0]>["mode"]>;
