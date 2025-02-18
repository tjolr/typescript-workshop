type KontoType = "brukskonto" | "sparekonto" | "BSUkonto";

type TillatteHandlinger = {
  brukskonto: "uttak" | "innskudd" | "overføring";
  sparekonto: "uttak" | "innskudd";
  BSUkonto: "innskudd";
};

interface BaseTransaksjon {
  id: string;
  beløp: number;
  dato: string;
  kontonummer: string;
  beskrivelse: string;
}

type HandlingsFelt = {
  uttak: { kategori: "mat" | "transport" | "bolig" | "annet" };
  innskudd: Record<string, never>;
  overføring: { tilKontonummer: string };
};

type KontoFelt = {
  brukskonto: Record<string, never>;
  sparekonto: { sparemål?: string };
  BSUkonto: { skattefradrag: number };
};

type BankTransaksjon = {
  [K in KontoType]: {
    [H in TillatteHandlinger[K]]: BaseTransaksjon & {
      kontotype: K;
      handling: H;
    } & KontoFelt[K] &
      HandlingsFelt[H];
  }[TillatteHandlinger[K]];
}[KontoType];

const brukskontoUttak: BankTransaksjon = {
  kontotype: "brukskonto",
  handling: "uttak",
  id: "123",
  beløp: 1500,
  dato: "2025-02-18",
  kontonummer: "1234.56.789",
  beskrivelse: "Handletur på Rema 1000",
  kategori: "mat",
};

const brukskontoOverføring: BankTransaksjon = {
  kontotype: "brukskonto",
  handling: "overføring",
  id: "456",
  beløp: 5000,
  dato: "2025-02-18",
  kontonummer: "1234.56.789",
  beskrivelse: "Overføring til sparekonto",
  tilKontonummer: "9876.54.321",
};

const sparekontoInnskudd: BankTransaksjon = {
  kontotype: "sparekonto",
  handling: "innskudd",
  id: "789",
  beløp: 1000,
  dato: "2025-02-18",
  kontonummer: "9876.54.321",
  beskrivelse: "Månedlig sparing",
  sparemål: "Sydentur",
};

const bsuInnskudd: BankTransaksjon = {
  kontotype: "BSUkonto",
  handling: "innskudd",
  id: "101",
  beløp: 5000,
  dato: "2025-02-18",
  kontonummer: "1111.22.333",
  beskrivelse: "Månedlig BSU-sparing",
  skattefradrag: 1100,
};

function håndterTransaksjon(trans: BankTransaksjon) {
  switch (trans.kontotype) {
    case "brukskonto":
      switch (trans.handling) {
        case "uttak":
          return `Uttak på ${trans.beløp}kr i kategori ${trans.kategori}`;
        case "innskudd":
          return `Innskudd på ${trans.beløp}kr på brukskonto`;
        case "overføring":
          return `Overføring på ${trans.beløp}kr til konto ${trans.tilKontonummer}`;
      }
      break;

    case "sparekonto":
      switch (trans.handling) {
        case "innskudd":
          const sparemålTekst = trans.sparemål ? ` mot ${trans.sparemål}` : "";
          return `Sparing på ${trans.beløp}kr${sparemålTekst}`;
        case "uttak":
          return `Uttak fra sparekonto på ${trans.beløp}kr`;
      }
      break;

    case "BSUkonto":
      return `BSU-sparing på ${trans.beløp}kr. Skattefradrag: ${trans.skattefradrag}kr`;
  }
}
