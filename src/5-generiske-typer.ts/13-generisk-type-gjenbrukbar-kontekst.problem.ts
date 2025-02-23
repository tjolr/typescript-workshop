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

// Innført ny type BekkTheme som extender BaseTheme
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

const useStyled = <TTheme extends BaseTheme>(
  fn: (theme: TTheme) => CSSProperties,
) => {
  return {} as CSSProperties;
};

// OPPGAVE: finn en måte å gjenbruke det generiske theme objektet i useStyled
// slik at vi slipper å sende inn BekkTheme i hver useStyled funksjon

const containerStyle = useStyled<BekkTheme>((theme) => ({
  padding: theme.bekkTema.avstander.bekkestor,
  backgroundColor: theme.bekkTema.farger.jord,
  border: `1px solid ${theme.bekkTema.farger.ild}`,
}));

const buttonStyle = useStyled<BekkTheme>((theme) => ({
  margin: theme.bekkTema.avstander.bekkepasse,
  color: theme.bekkTema.farger.luft,
  backgroundColor: theme.bekkTema.farger.natt,
}));

const tittelStyle = useStyled<BekkTheme>((theme) => ({
  fontSize: theme.font.size,
  fontFamily: theme.font.family,
  color: theme.bekkTema.farger.jord,
}));

const spinnerStyle = useStyled<BekkTheme>((theme) => ({
  width: theme.bekkTema.avstander.bekkemini,
  height: theme.bekkTema.avstander.bekkemini,
}));
