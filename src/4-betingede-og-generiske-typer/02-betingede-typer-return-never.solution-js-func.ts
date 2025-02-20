/**
 * Eksempel som viser likheten mellom conditional types og
 * conditional statements i JavaScript
 */

type MotsattTransaksjon<T> = T extends "innskudd"
  ? "uttak"
  : T extends "uttak"
    ? "innskudd"
    : never;

function motsattTransaksjon(transaksjon: unknown) {
  if (transaksjon === "innskudd") {
    return "uttak";
  } else if (transaksjon === "uttak") {
    return "innskudd";
  } else {
    throw new Error("Ugyldig transaksjonstype");
  }
}
