import { CSSProperties } from "react";
import { Equal, Expect } from "../.helpers/total-typescript-helpers";

type BaseTheme = {
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

// OPPGAVE: lag generisk type TTheme som extender BaseTheme
// og brukes til å sette typen i useStyle funksjonen
const createThemedStyle = <unknown>() => {
  const useStyle = (fn: (theme: unknown) => CSSProperties) => {
    // Mock implementation for demonstration purposes
    return {} as CSSProperties;
  };

  return { useStyle };
};

const { useStyle } = createThemedStyle();

const containerStyle = useStyle((theme) => ({
  backgroundColor: theme.color.background,
  padding: theme.spacing.lg,
}));

const buttonStyle = useStyle((theme) => ({
  color: theme.color.primary,
  padding: theme.spacing.md,
  fontSize: theme.font.size,
}));

type test = [
  Expect<Equal<Parameters<Parameters<typeof useStyle>[0]>[0], BaseTheme>>,
];
