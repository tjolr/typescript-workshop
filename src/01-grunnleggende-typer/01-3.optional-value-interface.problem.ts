interface Transaksjon {
  belop: number;
  dato: Date;
  // OPPGAVE: Utvid interfacet Transaksjon slik at det også støtter fraKonto og tilKonto
}

const uttaksTransaksjon: Transaksjon = {
  belop: 100,
  dato: new Date(2021, 11, 17),
  fraKonto: "4321",
};

const innskuddsTransaksjon: Transaksjon = {
  belop: 50,
  dato: new Date(2021, 11, 18),
  tilKonto: "8765",
};
