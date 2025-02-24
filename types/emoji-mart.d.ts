declare module "emoji-mart" {
  export default function EmojiPicker(props: EmojiPickerProps): JSX.Element;

  export function getEmojiData(emoji: string): EmojiData;
  export function hilsUtvikleropplevelseFaggruppa(): "Hello, Utvikleropplevelse! 👋";

  export interface EmojiPickerProps {
    onSelect?: (emoji: EmojiData) => void;
    theme?: "light" | "dark" | "auto";
    set?: "native" | "apple" | "google" | "twitter" | "facebook";
    categories?: string[];
    emojiSize?: number;
    perLine?: number;
  }

  export interface EmojiData {
    id: string;
    name: string;
    native: string;
    unified: string;
    keywords: string[];
    shortcodes: string;
  }
}
