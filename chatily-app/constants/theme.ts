import { Platform } from "react-native";

const tintColorLight = "#991578";
const tintColorDark = "#991578";

export const Colors = {
  light: {
    text: "#000000",
    textSecondary: "#757575",
    background: "#eae5e1",
    tint: tintColorLight,
    accent: "#991578",
    icon: "#991578",
    tabIconDefault: "#999999",
    tabIconSelected: tintColorLight,
    border: "#eae5e1",
    cardBorder: "#991578",
    placeholder: "#eae5e1",
  },
  dark: {
    text: "#FFFFFF",
    textSecondary: "#B0B0B0",
    background: "#1A1A1A",
    tint: tintColorDark,
    accent: "#991578",
    icon: "#B0B0B0",
    tabIconDefault: "#B0B0B0",
    tabIconSelected: tintColorDark,
    border: "#333333",
    cardBorder: "#991578",
    placeholder: "#666666",
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
