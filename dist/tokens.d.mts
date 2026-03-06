/** Velu design tokens — use these in non-Tailwind contexts or for inline styles */
declare const colors: {
    readonly coral: {
        readonly DEFAULT: "#F97316";
        readonly deep: "#EA6C0E";
        readonly light: "#FED7AA";
        readonly soft: "#FFF5ED";
        readonly glow: "rgba(249,115,22,0.12)";
    };
    readonly teal: {
        readonly DEFAULT: "#0D7A6E";
        readonly mid: "#0FA898";
        readonly light: "#E6F4F2";
    };
    readonly stone: {
        readonly bg: "#EFEDE8";
        readonly surface: "#FDFCFA";
        readonly border: "#EDEAE3";
        readonly mid: "#DDD9D0";
        readonly muted: "#C4BFB4";
    };
    readonly charcoal: {
        readonly DEFAULT: "#1C1C1E";
        readonly mid: "#3A3A3C";
        readonly soft: "#6B6B6E";
        readonly faint: "#A1A1A6";
    };
    readonly slate: {
        readonly DEFAULT: "#4A5568";
        readonly mid: "#6B7A92";
        readonly light: "#EEF0F4";
        readonly border: "#DDE1E9";
    };
};
declare const fonts: {
    readonly display: "'DM Serif Display', serif";
    readonly body: "'Source Sans 3', sans-serif";
};
declare const radius: {
    readonly sm: "10px";
    readonly md: "16px";
    readonly lg: "20px";
    readonly pill: "999px";
};
declare const shadows: {
    readonly sm: "0 2px 10px rgba(28,28,30,0.07)";
    readonly md: "0 4px 22px rgba(28,28,30,0.10)";
};
declare const spacing: {
    readonly pagePadding: "32px";
    readonly cardPadding: "20px";
    readonly navHeight: "52px";
    readonly subnavHeight: "38px";
};
/** Module accent colours */
declare const moduleColors: {
    readonly hr: "#F97316";
    readonly manager: "#0D7A6E";
    readonly recruiter: "#F97316";
    readonly candidate: "#0D7A6E";
    readonly admin: "#4A5568";
};
type ModuleKey = keyof typeof moduleColors;

export { type ModuleKey, colors, fonts, moduleColors, radius, shadows, spacing };
