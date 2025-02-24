// ===============================================================
// Tips 3: Module Augmentation
// ===============================================================

// Preliminaries - merging av interfaces
interface Person {
  navn: string;
  alder: number;
}

interface Person {
  gate: string;
  postnummer: number;
  poststed: string;
}

const person: Person = {
  navn: "Ola Nordmann",
  alder: 40,
  gate: "Osloveien 12",
  postnummer: 7018,
  poststed: "Trondheim",
};

// Module Augmentation
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    bekkTema: {
      farger: {
        natt: string;
        dag: string;
        jord: string;
        ild: string;
      };
      avstander: {
        bekkeliten: number;
        bekkepasse: number;
        bekkestor: number;
      };
    };
  }
  interface ThemeOptions {
    bekkTema: {
      farger: {
        natt: string;
        dag: string;
        jord: string;
        ild: string;
      };
      avstander: {
        bekkeliten: number;
        bekkepasse: number;
        bekkestor: number;
      };
    };
  }
}

// I en annen vilkårlig fil
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  // BekkTema 🚀
  bekkTema: {
    farger: {
      natt: "#000",
      dag: "#fff",
      jord: "#8B4513",
      ild: "#FF4500",
    },
    avstander: {
      bekkeliten: 8,
      bekkepasse: 16,
      bekkestor: 24,
    },
  },
});

// MUI Built in properties
theme.palette.primary.main; // "#1976d2"
theme.palette.secondary.main; // "#dc004e"

// MUI theme custom properties
theme.bekkTema.farger.natt; // "#000"
theme.bekkTema.avstander.bekkepasse; // 16
