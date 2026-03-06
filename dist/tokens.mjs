// src/tokens/index.ts
var colors = {
  coral: {
    DEFAULT: "#F97316",
    deep: "#EA6C0E",
    light: "#FED7AA",
    soft: "#FFF5ED",
    glow: "rgba(249,115,22,0.12)"
  },
  teal: {
    DEFAULT: "#0D7A6E",
    mid: "#0FA898",
    light: "#E6F4F2"
  },
  stone: {
    bg: "#EFEDE8",
    surface: "#FDFCFA",
    border: "#EDEAE3",
    mid: "#DDD9D0",
    muted: "#C4BFB4"
  },
  charcoal: {
    DEFAULT: "#1C1C1E",
    mid: "#3A3A3C",
    soft: "#6B6B6E",
    faint: "#A1A1A6"
  },
  slate: {
    DEFAULT: "#4A5568",
    mid: "#6B7A92",
    light: "#EEF0F4",
    border: "#DDE1E9"
  }
};
var fonts = {
  display: "'DM Serif Display', serif",
  body: "'Source Sans 3', sans-serif"
};
var radius = {
  sm: "10px",
  md: "16px",
  lg: "20px",
  pill: "999px"
};
var shadows = {
  sm: "0 2px 10px rgba(28,28,30,0.07)",
  md: "0 4px 22px rgba(28,28,30,0.10)"
};
var spacing = {
  pagePadding: "32px",
  cardPadding: "20px",
  navHeight: "52px",
  subnavHeight: "38px"
};
var moduleColors = {
  hr: colors.coral.DEFAULT,
  manager: colors.teal.DEFAULT,
  recruiter: colors.coral.DEFAULT,
  candidate: colors.teal.DEFAULT,
  admin: colors.slate.DEFAULT
};

export { colors, fonts, moduleColors, radius, shadows, spacing };
//# sourceMappingURL=tokens.mjs.map
//# sourceMappingURL=tokens.mjs.map