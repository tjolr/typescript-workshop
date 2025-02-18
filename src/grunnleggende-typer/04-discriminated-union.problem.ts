/* 
  OPPGAVE: endre på interfacet Transaksjon ved bruk av discriminated unions

  Hint: bruk `type` som diskriminator
 */

interface Transaksjon {
  belop: number;
  dato: Date;
}

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
