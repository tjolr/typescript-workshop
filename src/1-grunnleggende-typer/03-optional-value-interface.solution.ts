interface Transaksjon {
  belop: number;
  dato: Date;
  fraKonto?: string;
  tilKonto?: string;
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

/* 
  EVALUERING: denne oppgaven og løsningen viser hvordan vi ofte utvider typer
  etterhvert som behovene vokser. Legger til nye typer, og gjør dem 
  valgfrie (optional) for å unngå å måtte skrive om eksisterende kode.

  En svakhet med denne løsningen er at vi ikke har noen garanti for at
  enten fraKonto eller tilKonto er satt. Dette kan føre til runtime-feil.
*/

const ugyldigTransaksjonMenGyldigType: Transaksjon = {
  belop: 100,
  dato: new Date(2021, 11, 17),
  /* Her har vi både fraKonto og tilKonto 
  hvordan skal vi vite om dette er innskudd, uttakk,
  eller om noen av dem i det hele tatt er satt? */
  fraKonto: "4321",
  tilKonto: "8765",
};
