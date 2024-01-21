import { css } from "@emotion/react";

export const fontSizes = {
  "48B": css`
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: 0.2px;
  `,
  "40B": css`
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0.2px;
  `,
  "40M": css`
    font-size: 40px;
    font-weight: 500;
    line-height: 50px;
    letter-spacing: 0.2px;
  `,
  "32B": css`
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0.2px;
  `,
  "24B": css`
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0.2px;
  `,
  "24R": css`
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0.2px;
  `,
  "22B": css`
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.2px;
  `,
  "22M": css`
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
  `,
  "18B": css`
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
  `,
  "18M": css`
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
  `,
  "16B": css`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  `,
  "16M": css`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  `,
  "14B": css`
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
  `,
  "14M": css`
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  `,
  "14R": css`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  `,
  "12B": css`
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  `,
  "12M": css`
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  `,
  "12R": css`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  `,
  "10R": css`
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
  `,
} as const;

export type ColorsKey = keyof typeof colors;

export const colors = {
  white: {
    10: "#FFFFFF",
  },
  black: {
    10: "#000000",
  },
  gray: {
    10: "#232323",
    20: "#383838",
    30: "#4e4e4e",
    40: "#656565",
    50: "#7b7b7b",
    60: "#919191",
    70: "#a7a7a7",
    80: "#bdbdbd",
    90: "#d3d3d3",
  },
  green: {
    10: "#3ecf8e",
    20: "#51d399",
    30: "#64d8a4",
    40: "#77ddaf",
    50: "#8be2bb",
    60: "#9ee7c6",
    70: "#b1ebd1",
    80: "#c5f0dd",
    90: "#d8f5e8",
  },
  blue: {
    10: "#147ce5",
    20: "#2b89e7",
    30: "#4296ea",
    40: "#5aa3ec",
    50: "#72b0ef",
    60: "#89bdf2",
    70: "#a1caf4",
    80: "#b8d7f7",
    90: "#d0e4f9",
  },
  red: {
    10: "#fa243c",
    20: "#fa394f",
    30: "#fb4f62",
    40: "#fb6576",
    50: "#fc7b8a",
    60: "#fc919d",
    70: "#fda7b1",
    80: "#fdbdc4",
    90: "#fed3d8",
  },
} as const;

export const theme = {
  colors,
  fontSizes,
} as const;

declare module "@emotion/react" {
  export interface Theme {
    colors: typeof colors;
    fontSizes: typeof fontSizes;
  }
}
