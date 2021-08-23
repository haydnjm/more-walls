const darks = {
  zero: "#000",
  one: "#161718",
  two: "#2C2E30",
  three: "#44474A",
  four: "#5B5F63",
  five: "#73787D",
  six: "#8A9096",
  seven: "#A1A9B0",
};

const lights = {
  one: "#BBC2C9",
  two: "#D3DBE3",
  three: "#E9ECF0",
  four: "#F2F5F7",
  five: "#FAFBFC",
  six: "#FFF",
};

const warn = {
  one: "#FFF0D4",
  two: "#FFE2AB",
  three: "#FFD687",
  four: "#FFCE6E",
  five: "#FFC554",
  six: "#FFBC3B",
  seven: "#E5A935",
  eight: "#CC972F",
  nine: "#B28429",
  ten: "#996C14",
  eleven: "#66480D",
};

const systemFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const space = [
  // +4
  "0",
  "4px",
  "8px",
  "12px",
  "16px",
  // +8
  "24px",
  "32px",
  "40px",
  "48px",
  // +16
  "64px",
  "80px",
  "96px",
  "112px",
  // +32
  "144px",
  "176px",
  "208px",
  "224px",
];

// This is a mashup of the Changefeed theme and the @primer/components theme
// in the system-ui theme spec shape
export const theme = {
  space,
  sizes: space,
  breakpoints: ["544px", "768px", "1012px", "1280px"],
  fonts: {
    body: systemFonts,
    heading: systemFonts,
    monospace:
      'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  fontWeights: {
    body: 400,
    headings: 700,
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: ["5px"],
  radii: ["0", "2px", "4px"],
  colors: {
    text: "#161718",
    secondaryText: "#2C2E30",
    tertiaryText: "#44474A",
    background: "#F2F5F7",
    primary: "#119293",
    secondary: "#D4E8FC",
    accent: "#44C881",
    muted: "#FAFBFC",
    border: "#E9ECF0",
    darks,
    lights,
  },
  shadows: {
    small: "0px 1px 2px rgba(0, 0, 0, 0.02)",
    medium: "0px 1px 4px rgba(0, 0, 0, 0.04)",
    large: "0px 1px 8px rgba(0, 0, 0, 0.08)",
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
};

export default theme;
