import { CSSProperties } from "react";
import { Equal, Expect } from "../.helpers/total-typescript-helpers";

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

const createThemedHelpers = <TTheme extends BaseTheme>() => {
  const useStyled = (fn: (theme: TTheme) => CSSProperties) => {
    return {} as CSSProperties;
  };

  const useColor = (fn: (color: TTheme["color"]) => CSSProperties) => {
    return {} as CSSProperties;
  };

  const useFont = (fn: (font: TTheme["font"]) => CSSProperties) => {
    return {} as CSSProperties;
  };

  const useSpacing = (fn: (spacing: TTheme["spacing"]) => CSSProperties) => {
    return {} as CSSProperties;
  };

  return { useStyled, useColor, useFont, useSpacing };
};

const { useStyled, useColor, useFont, useSpacing } = createThemedHelpers();

const containerStyle = useStyled((theme) => ({
  backgroundColor: theme.color.background,
  padding: theme.spacing.lg,
}));

const buttonColor = useColor((color) => ({
  color: color.primary,
  backgroundColor: color.accent,
}));

const textFont = useFont((font) => ({
  fontFamily: font.family,
  fontSize: font.size,
}));

const layoutSpacing = useSpacing((spacing) => ({
  padding: spacing.md,
  margin: spacing.sm,
}));

type test = [
  Expect<Equal<Parameters<Parameters<typeof useStyled>[0]>[0], BaseTheme>>,
  Expect<
    Equal<Parameters<Parameters<typeof useColor>[0]>[0], BaseTheme["color"]>
  >,
  Expect<
    Equal<Parameters<Parameters<typeof useFont>[0]>[0], BaseTheme["font"]>
  >,
  Expect<
    Equal<Parameters<Parameters<typeof useSpacing>[0]>[0], BaseTheme["spacing"]>
  >,
];
