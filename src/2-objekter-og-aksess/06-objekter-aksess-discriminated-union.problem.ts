type TreningsType = "styrke" | "kondisjon" | "gruppetime";

type TreningsTypeFelt = {
  styrke: {
    oppvarming: string[];
    program: string;
  };
  kondisjon: {
    sted: "inne" | "ute";
    underlag: string;
  };
  gruppetime: {
    deltakere: number;
    nivå: "lett" | "middels" | "hard";
  };
};

type TreningsAktiviteter = {
  styrke: "benkpress" | "knebøy";
  kondisjon: "intervall" | "langkjøring";
  gruppetime: "spinning" | "bodypump";
};

interface BaseTreningsøkt {
  dato: string;
  notat: string;
}

type BaseStyrkeFelt = {
  sett: number;
  reps: number;
  vekt: number;
};

type TreningsAktivitetFelt = {
  intervall: {
    arbeidstid: number;
    pausetid: number;
    runder: number;
    intensitet: "høy" | "maksimal";
  };
  langkjøring: {
    distanse: number;
    tempo: number;
    puls: number;
  };
  benkpress: BaseStyrkeFelt & {
    grep: "normal" | "vid" | "smal";
    pauseMellomSett: number;
  };
  knebøy: BaseStyrkeFelt & {
    dybde: "parallel" | "ass-to-grass" | "quarter";
    stangPlassering: "høy" | "lav";
  };
  spinning: {
    instruktør: string;
    motstand: number;
    rpm: number;
  };
  bodypump: {
    vekt: number;
    øvelse: "squat" | "chest" | "back" | "triceps" | "biceps" | "shoulders";
  };
};

/**
  OPPGAVE 1: Legg til typen BaseTreningsøkt slik at 
  treningsøkt godtar dato og notat (kommer fra typen BaseTreningsøkt)
*/
type Treningsøkt = {
  [Type in TreningsType]: {
    type: Type;
  };
}[TreningsType];

const treningsøkt: Treningsøkt = {
  notat: "God økt sammen med Per",
  dato: "2025-03-02",
  type: "styrke",
};

/**
 * OPPGAVE 2: Legg til typen aktivitet, som følger av treningstype
 * Brukt typen TreningsAktiviteter
 */
type TreningsøktMedAktivitet = {
  [Type in TreningsType]: BaseTreningsøkt & {
    type: Type;
    aktivitet: never;
  };
}[TreningsType];

const treningsøktMedAktivitet: TreningsøktMedAktivitet = {
  dato: "2025-02-19",
  notat: "Tøff dag",
  type: "kondisjon",
  aktivitet: {
    type: "intervall",
  },
};

/**
 * OPPGAVE 3: Legg til feltene som følger av treningstype og aktivitet
 * Bruk typene TreningsTypeFelt og TreningsAktivitetFelt
 */
type TreningsøktMedAktivitetOgFelter = {
  [Type in TreningsType]: BaseTreningsøkt & {
    type: Type;
    aktivitet: {
      [Aktivitet in TreningsAktiviteter[Type]]: {
        type: Aktivitet;
      };
    }[TreningsAktiviteter[Type]];
  };
}[TreningsType];

const treningsøktMedAktivitetOgFelterDyp: TreningsøktMedAktivitetOgFelter = {
  dato: "2025-02-19",
  notat: "PR på benkpress",
  type: "gruppetime",
  deltakere: 10,
  nivå: "hard",
  aktivitet: {
    type: "bodypump",
    øvelse: "squat",
    vekt: 20,
  },
};
