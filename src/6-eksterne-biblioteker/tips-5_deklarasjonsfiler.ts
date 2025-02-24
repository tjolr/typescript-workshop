// ===============================================================
// Tips 5: Deklarasjonsfiler
// ===============================================================
/*
 * Pakken emoji-mart har ikke innebygd TypeScript-støtte og mangler også
 * i DefinitelyTyped-samlingen. Vi må derfor definere våre egne typer
 * for å bruke den i TypeScript-prosjekter.
 */
import { getEmojiData, hilsUtvikleropplevelseFaggruppa } from "emoji-mart";

const hilsen = hilsUtvikleropplevelseFaggruppa();
// => "Hello, Utvikleropplevelse! 👋"

const emojiData = getEmojiData("🚀");
