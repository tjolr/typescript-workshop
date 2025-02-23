import { CSSProperties } from "react";

export type BaseTheme = {
  color: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  font: {
    family: string;
    size: number;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

type BekkTheme = BaseTheme & {
  bekkTema: {
    farger: {
      natt: string;
      dag: string;
      jord: string;
      ild: string;
      luft: string;
    };
    avstander: {
      bekkemini: number;
      bekkeliten: number;
      bekkepasse: number;
      bekkestor: number;
      bekkesvær: number;
    };
  };
};

// LØSNING: lag en "factory" funksjon som returnerer en ny useStyled funksjon
const createUseStyled = <TTheme extends BaseTheme>() => {
  const useStyled = (fn: (theme: TTheme) => CSSProperties) => {
    return {} as CSSProperties;
  };

  return useStyled;
};

// Nå kan vi "lagre" det generiske argumentet BekkTheme i en variabel
const useBekkStyled = createUseStyled<BekkTheme>();

const containerStyle = useBekkStyled((theme) => ({
  padding: theme.bekkTema.avstander.bekkestor,
  backgroundColor: theme.bekkTema.farger.jord,
  border: `1px solid ${theme.bekkTema.farger.ild}`,
}));

const buttonStyle = useBekkStyled((theme) => ({
  margin: theme.bekkTema.avstander.bekkepasse,
  color: theme.bekkTema.farger.luft,
  backgroundColor: theme.bekkTema.farger.natt,
}));

const tittelStyle = useBekkStyled((theme) => ({
  fontSize: theme.font.size,
  fontFamily: theme.font.family,
  color: theme.bekkTema.farger.jord,
}));

const spinnerStyle = useBekkStyled((theme) => ({
  width: theme.bekkTema.avstander.bekkemini,
  height: theme.bekkTema.avstander.bekkemini,
}));
