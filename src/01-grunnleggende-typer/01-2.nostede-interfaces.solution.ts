interface Transaksjon {
  belop: number;
  dato: Date;
}

const transaksjon1: Transaksjon = {
  belop: 100,
  dato: new Date(2021, 11, 17),
};

const transaksjon2: Transaksjon = {
  belop: -50,
  dato: new Date(2021, 11, 18),
};

// OPPGAVE: utvide Konto interfaces slik at den også støtter transaksjoner
interface Konto {
  id: string;
  eier: string;
  saldo: number;
  transaksjoner: Transaksjon[];
}

const konto: Konto = {
  id: "4321",
  eier: "Ola Normann",
  saldo: 1000,
  transaksjoner: [transaksjon1, transaksjon2],
};
