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

/* 
  Alternativt kan vi bruke `type` i stedet for `interface`: 

  type UttaksTransaksjon = BaseTransaksjon & { type: "uttak"; fraKonto: string };
  type InnskuddsTransaksjon = BaseTransaksjon & { type: "innskudd"; tilKonto: string };
  type OverføringsTransaksjon = BaseTransaksjon & { type: "overføring"; fraKonto: string; tilKonto: string };
*/

type Transaksjon =
  | UttaksTransaksjon
  | InnskuddsTransaksjon
  | OverføringsTransaksjon;

const uttaksTransaksjon: Transaksjon = {
  belop: 100,
  dato: new Date(2021, 11, 17),
  type: "uttak",
  fraKonto: "4321",
};

const innskuddsTransaksjon: Transaksjon = {
  belop: 50,
  dato: new Date(2021, 11, 18),
  type: "innskudd",
  tilKonto: "8765",
};

const overføringsTransaksjon: Transaksjon = {
  belop: 50,
  dato: new Date(2021, 11, 18),
  type: "overføring",
  fraKonto: "4321",
  tilKonto: "8765",
};

// Eksempelbruk
const utførTransaksjon = (transaksjon: Transaksjon) => {
  switch (transaksjon.type) {
    case "uttak":
      return `Uttak: ${transaksjon.belop} fra konto ${transaksjon.fraKonto}`;
    case "innskudd":
      return `Innskudd: ${transaksjon.belop} til konto ${transaksjon.tilKonto}`;
    case "overføring":
      return `Overføring: ${transaksjon.belop} fra konto ${transaksjon.fraKonto} til konto ${transaksjon.tilKonto}`;
  }
};
