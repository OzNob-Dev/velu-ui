'use strict';

var navigation = require('next/navigation');
var Link = require('next/link');
var lucideReact = require('lucide-react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var classVarianceAuthority = require('class-variance-authority');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Link__default = /*#__PURE__*/_interopDefault(Link);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
function getInitials(name) {
  if (!name || name === "\u2014") return "?";
  return name.split(" ").map((n) => n[0]).filter(Boolean).join("").toUpperCase().slice(0, 2);
}
function formatDate(date) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date(date));
}
function formatDateShort(date) {
  return new Intl.DateTimeFormat("en-AU", {
    month: "short",
    year: "numeric"
  }).format(new Date(date));
}
function VeluLogo({ size = 26, variant = "coral" }) {
  if (variant === "dual") {
    return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: size, height: size, viewBox: "0 0 56 56", fill: "none", children: [
      /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsx("clipPath", { id: "velu-clip", children: /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "56", height: "56", rx: "14" }) }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("g", { clipPath: "url(#velu-clip)", children: [
        /* @__PURE__ */ jsxRuntime.jsx("polygon", { points: "0,0 56,0 28,56 0,56", fill: "#F97316" }),
        /* @__PURE__ */ jsxRuntime.jsx("polygon", { points: "56,0 56,56 28,56", fill: "#0D7A6E" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "10", y1: "11", x2: "28", y2: "45", stroke: "white", strokeWidth: "5", strokeLinecap: "round", opacity: "0.45" }),
      /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "46", y1: "11", x2: "28", y2: "45", stroke: "white", strokeWidth: "8.5", strokeLinecap: "round" })
    ] });
  }
  const bg = variant === "teal" ? "#0D7A6E" : "#F97316";
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: size, height: size, viewBox: "0 0 56 56", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "56", height: "56", rx: "14", fill: bg }),
    /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "10", y1: "11", x2: "28", y2: "45", stroke: "white", strokeWidth: "5", strokeLinecap: "round", opacity: "0.45" }),
    /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "46", y1: "11", x2: "28", y2: "45", stroke: "white", strokeWidth: "8.5", strokeLinecap: "round" })
  ] });
}
var sizeMap = {
  xs: { outer: "w-6 h-6", text: "text-[9px]" },
  sm: { outer: "w-8 h-8", text: "text-[11px]" },
  md: { outer: "w-10 h-10", text: "text-[12px]" },
  lg: { outer: "w-12 h-12", text: "text-[14px]" },
  xl: { outer: "w-16 h-16", text: "text-[18px]" }
};
function Avatar({ name, src, size = "md", color = "#F97316", className }) {
  const { outer, text } = sizeMap[size];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn("rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 overflow-hidden", outer, className),
      style: { background: src ? void 0 : color },
      children: src ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsxRuntime.jsx("img", { src, alt: name, className: "w-full h-full object-cover" })
      ) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: text, children: getInitials(name) })
    }
  );
}
var DEFAULT_MODULES = [
  { label: "HR Core", href: "/hr", color: "#F97316" },
  { label: "Recruiter", href: "/recruiter", color: "#F97316" },
  { label: "Manager Coach", href: "/manager", color: "#0D7A6E" },
  { label: "Candidate Portal", href: "/candidate", color: "#0D7A6E" },
  { label: "Admin", href: "/admin", color: "#4A5568" }
];
var DIVIDER_AFTER = ["/recruiter", "/candidate"];
var TEAL_MODULES = ["/manager", "/candidate"];
var ADMIN_MODULES = ["/admin"];
function TopNav({
  modules = DEFAULT_MODULES,
  userName,
  userRole,
  userAvatarSrc,
  userAvatarColor = "#F97316",
  onLogout,
  logoHref = "/hr"
}) {
  const pathname = navigation.usePathname();
  const logoVariant = (() => {
    if (ADMIN_MODULES.some((m) => pathname.startsWith(m))) return "dual";
    if (TEAL_MODULES.some((m) => pathname.startsWith(m))) return "teal";
    return "coral";
  })();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "nav",
    {
      style: {
        background: "#1C1C1E",
        height: 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        flexShrink: 0,
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 1px 0 rgba(255,255,255,0.06)",
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "none"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", alignItems: "center", height: "100%", flexShrink: 0, minWidth: 0 }, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Link__default.default, { href: logoHref, style: { display: "flex", alignItems: "center", gap: 8, flexShrink: 0, textDecoration: "none" }, children: [
            /* @__PURE__ */ jsxRuntime.jsx(VeluLogo, { size: 26, variant: logoVariant }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontFamily: "'DM Serif Display', serif", fontSize: 18, color: "white", letterSpacing: "-0.02em" }, children: "Velu" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { style: { width: 1, height: 20, background: "rgba(255,255,255,0.1)", margin: "0 16px", flexShrink: 0 } }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "flex", alignItems: "stretch", height: "100%" }, children: modules.map((mod) => {
            const isActive = pathname.startsWith(mod.href);
            const showDivider = DIVIDER_AFTER.includes(mod.href);
            return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", alignItems: "stretch" }, children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                Link__default.default,
                {
                  href: mod.href,
                  className: cn(
                    "flex items-center gap-1.5 px-3.5 text-[13px] font-medium border-b-2 transition-all whitespace-nowrap",
                    isActive ? "text-white" : "text-white/45 border-transparent hover:text-white/80 hover:bg-white/5"
                  ),
                  style: {
                    background: isActive ? "rgba(255,255,255,0.06)" : void 0,
                    borderBottomColor: isActive ? mod.color : "transparent",
                    textDecoration: "none"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("span", { style: { width: 6, height: 6, borderRadius: "50%", background: mod.color, flexShrink: 0 } }),
                    mod.label
                  ]
                }
              ),
              showDivider && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { width: 1, height: 20, background: "rgba(255,255,255,0.1)", margin: "auto 4px", flexShrink: 0 } })
            ] }, mod.href);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, flexShrink: 0, marginLeft: 16 }, children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Avatar, { name: userName, src: userAvatarSrc, size: "sm", color: userAvatarColor }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "hidden sm:block", children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { style: { fontSize: 13, fontWeight: 600, color: "white", lineHeight: 1.2 }, children: userName }),
              userRole && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.2 }, children: userRole })
            ] })
          ] }),
          onLogout && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: onLogout,
              title: "Log out",
              style: {
                display: "flex",
                alignItems: "center",
                padding: 6,
                borderRadius: 6,
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.35)",
                cursor: "pointer"
              },
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LogOut, { size: 15 })
            }
          )
        ] })
      ]
    }
  );
}
var ICON_MAP = {
  LayoutGrid: lucideReact.LayoutGrid,
  Users: lucideReact.Users,
  Building2: lucideReact.Building2,
  FileText: lucideReact.FileText,
  Clock: lucideReact.Clock,
  BookOpen: lucideReact.BookOpen,
  BarChart2: lucideReact.BarChart2,
  Star: lucideReact.Star,
  Target: lucideReact.Target,
  Calendar: lucideReact.Calendar,
  Sparkles: lucideReact.Sparkles,
  MessageSquare: lucideReact.MessageSquare,
  Briefcase: lucideReact.Briefcase,
  Inbox: lucideReact.Inbox,
  CheckCircle: lucideReact.CheckCircle,
  User: lucideReact.User,
  Bookmark: lucideReact.Bookmark,
  Shield: lucideReact.Shield,
  Grid3X3: lucideReact.Grid3X3,
  UserCheck: lucideReact.UserCheck
};
function isActiveHref(pathname, href, items) {
  if (pathname === href) return true;
  if (pathname.startsWith(href + "/")) {
    const longerMatch = items.some(
      (other) => other.href !== href && other.href.startsWith(href) && pathname.startsWith(other.href)
    );
    return !longerMatch;
  }
  return false;
}
function SubNav({ items, accentColor = "#F97316" }) {
  const pathname = navigation.usePathname();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      style: {
        background: "#EEF0F4",
        borderBottom: "1px solid #DDE1E9",
        display: "flex",
        alignItems: "stretch",
        padding: "0 20px",
        height: 38,
        flexShrink: 0,
        position: "sticky",
        top: 52,
        zIndex: 40,
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch"
      },
      children: items.map((item) => {
        const Icon = ICON_MAP[item.icon];
        const isActive = isActiveHref(pathname, item.href, items);
        return /* @__PURE__ */ jsxRuntime.jsxs(
          Link__default.default,
          {
            href: item.href,
            className: cn(
              "flex items-center gap-1.5 px-3 text-[13px] border-b-2 transition-all whitespace-nowrap no-underline",
              isActive ? "font-semibold" : "font-medium border-transparent"
            ),
            style: {
              color: isActive ? "#1C1C1E" : "#6B6B6E",
              borderBottomColor: isActive ? accentColor : "transparent",
              textDecoration: "none",
              flexShrink: 0
            },
            children: [
              Icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: 14, style: { opacity: isActive ? 1 : 0.5 } }),
              item.label,
              item.badge !== void 0 && /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  style: {
                    background: "#FFF5ED",
                    color: "#F97316",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "0 6px",
                    borderRadius: 999,
                    marginLeft: 2
                  },
                  children: item.badge
                }
              )
            ]
          },
          item.href
        );
      })
    }
  );
}
function PageHeader({ title, subtitle, children, className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn("flex items-center gap-4 px-8 py-5 border-b", className),
      style: { borderColor: "#EDEAE3", background: "#EFEDE8" },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "font-display text-2xl tracking-tight", style: { color: "#1C1C1E" }, children: title }),
          subtitle && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[13px] mt-0.5", style: { color: "#6B6B6E" }, children: subtitle })
        ] }),
        children && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2", children })
      ]
    }
  );
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-[#1C1C1E] text-white hover:bg-[#3A3A3C]",
        coral: "bg-[#F97316] text-white hover:bg-[#EA6C0E]",
        teal: "bg-[#0D7A6E] text-white hover:bg-[#0FA898]",
        outline: "border border-[#EDEAE3] bg-[#FDFCFA] text-[#3A3A3C] hover:border-[#3A3A3C]",
        ghost: "text-[#3A3A3C] hover:bg-[#EFEDE8]",
        danger: "bg-red-600 text-white hover:bg-red-700"
      },
      size: {
        sm: "text-[12px] px-3 py-1.5 rounded-full",
        md: "text-[13px] px-4 py-2 rounded-full",
        lg: "text-[14px] px-5 py-2.5 rounded-full"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
function Button(_a) {
  var _b = _a, { variant, size, className, children, loading, disabled } = _b, props = __objRest(_b, ["variant", "size", "className", "children", "loading", "disabled"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    __spreadProps(__spreadValues({
      className: cn(buttonVariants({ variant, size }), className),
      disabled: disabled || loading
    }, props), {
      children: [
        loading && /* @__PURE__ */ jsxRuntime.jsxs("svg", { className: "animate-spin w-3.5 h-3.5", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v8z" })
        ] }),
        children
      ]
    })
  );
}
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center gap-1.5 font-semibold rounded-full",
  {
    variants: {
      variant: {
        active: "bg-[#E6F4F2] text-[#0D7A6E]",
        pending: "bg-[#FFF5ED] text-[#F97316]",
        inactive: "bg-[#EEF0F4] text-[#6B7A92]",
        open: "bg-[#E6F4F2] text-[#0D7A6E]",
        closed: "bg-[#EEF0F4] text-[#6B7A92]",
        draft: "bg-[#EFEDE8] text-[#6B6B6E]",
        dark: "bg-[#1C1C1E] text-white",
        coral: "bg-[#FFF5ED] text-[#F97316]",
        teal: "bg-[#E6F4F2] text-[#0D7A6E]"
      },
      size: {
        sm: "text-[10px] px-2 py-0.5",
        md: "text-[11px] px-2.5 py-0.5",
        lg: "text-[12px] px-3 py-1"
      },
      dot: {
        true: "",
        false: ""
      }
    },
    defaultVariants: {
      variant: "active",
      size: "md"
    }
  }
);
function Badge(_a) {
  var _b = _a, { variant, size, dot, className, children } = _b, props = __objRest(_b, ["variant", "size", "dot", "className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs("span", __spreadProps(__spreadValues({ className: cn(badgeVariants({ variant, size }), className) }, props), { children: [
    dot && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-current" }),
    children
  ] }));
}
var paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
};
function Card(_a) {
  var _b = _a, { padding = "md", hover, className, children } = _b, props = __objRest(_b, ["padding", "hover", "className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadProps(__spreadValues({
      className: cn(
        "bg-[#FDFCFA] rounded-[20px] border border-[#EDEAE3]",
        "shadow-[0_2px_10px_rgba(28,28,30,0.07)]",
        hover && "transition-shadow hover:shadow-[0_4px_22px_rgba(28,28,30,0.10)] cursor-pointer",
        paddingMap[padding],
        className
      )
    }, props), {
      children
    })
  );
}
function StatCard({ label, value, delta, icon, iconColor = "bg-[#FFF5ED] text-[#F97316]", className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(Card, { padding: "md", className: cn("flex items-center gap-4", className), children: [
    icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0", iconColor), children: icon }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-display text-[28px] text-[#1C1C1E] leading-none tracking-tight", children: value }),
      delta && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[12px] text-[#0D7A6E] mt-1", children: delta }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[12px] text-[#6B6B6E] mt-0.5", children: label })
    ] })
  ] });
}
function ProgressBar({ value, max = 100, color = "#0D7A6E", size = "sm", showLabel, className }) {
  const pct = Math.min(100, Math.max(0, value / max * 100));
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex items-center gap-3", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex-1 bg-[#EDEAE3] rounded-full overflow-hidden", size === "sm" ? "h-1.5" : "h-2.5"), children: /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "h-full rounded-full transition-all",
        style: { width: `${pct}%`, background: color }
      }
    ) }),
    showLabel && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-[12px] font-semibold text-[#6B6B6E] w-8 text-right flex-shrink-0", children: [
      Math.round(pct),
      "%"
    ] })
  ] });
}
function EmptyState({ icon = "\u{1F4ED}", title, description, action, className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col items-center justify-center py-16 px-8 text-center", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-4xl mb-4", children: icon }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-display text-xl text-[#1C1C1E] tracking-tight", children: title }),
    description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[14px] text-[#6B6B6E] mt-2 max-w-sm", children: description }),
    action && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-5", children: action })
  ] });
}
function DataTable({ columns, data, empty, className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("bg-[#FDFCFA] rounded-[20px] border border-[#EDEAE3] overflow-hidden shadow-[0_2px_10px_rgba(28,28,30,0.07)]", className), children: /* @__PURE__ */ jsxRuntime.jsxs("table", { className: "w-full border-collapse text-[14px]", children: [
    /* @__PURE__ */ jsxRuntime.jsx("thead", { children: /* @__PURE__ */ jsxRuntime.jsx("tr", { children: columns.map((col) => /* @__PURE__ */ jsxRuntime.jsx(
      "th",
      {
        style: { width: col.width },
        className: "text-left text-[11px] font-bold uppercase tracking-wide text-[#6B6B6E] px-4 py-3 border-b border-[#EDEAE3]",
        children: col.header
      },
      col.key
    )) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("tbody", { children: [
      data.map((row) => /* @__PURE__ */ jsxRuntime.jsx("tr", { className: "hover:bg-[#EFEDE8] transition-colors", children: columns.map((col) => {
        var _a;
        return /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-4 py-3 border-b border-[#EDEAE3]", children: col.render ? col.render(row) : String((_a = row[col.key]) != null ? _a : "\u2014") }, col.key);
      }) }, row.id)),
      data.length === 0 && /* @__PURE__ */ jsxRuntime.jsx("tr", { children: /* @__PURE__ */ jsxRuntime.jsx("td", { colSpan: columns.length, className: "px-4 py-12 text-center text-[#6B6B6E] text-[14px]", children: empty != null ? empty : "No data yet." }) })
    ] })
  ] }) });
}
function Input(_a) {
  var _b = _a, { label, error, hint, className, id } = _b, props = __objRest(_b, ["label", "error", "hint", "className", "id"]);
  const inputId = id != null ? id : label == null ? void 0 : label.toLowerCase().replace(/\s+/g, "-");
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { htmlFor: inputId, className: "text-[13px] font-semibold text-[#3A3A3C]", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      __spreadValues({
        id: inputId,
        className: cn(
          "border rounded-[10px] px-3.5 py-2.5 text-[14px] text-[#1C1C1E] bg-white outline-none transition-all",
          "placeholder:text-[#C4BFB4]",
          error ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100" : "border-[#EDEAE3] focus:border-[#F97316] focus:ring-2 focus:ring-[rgba(249,115,22,0.10)]",
          className
        )
      }, props)
    ),
    hint && !error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[12px] text-[#6B6B6E]", children: hint }),
    error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[12px] text-red-500", children: error })
  ] });
}

exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.DataTable = DataTable;
exports.EmptyState = EmptyState;
exports.Input = Input;
exports.PageHeader = PageHeader;
exports.ProgressBar = ProgressBar;
exports.StatCard = StatCard;
exports.SubNav = SubNav;
exports.TopNav = TopNav;
exports.VeluLogo = VeluLogo;
exports.cn = cn;
exports.formatDate = formatDate;
exports.formatDateShort = formatDateShort;
exports.getInitials = getInitials;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map