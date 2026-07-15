// ============================================================
//  shared/constants.js — Neel's Cafe
//  Admin aur Customer DONO mein yeh same file rakho
// ============================================================

export const SHOP = {
  id:           "neels-cafe",
  name:         "Neel's Cafe",
  tagline:      "We Serve Taste & Trust",
  location:     "Jaipur",
  logoEmoji:    "👨‍🍳",
  primaryColor: "#1B2A6B",
  accentColor:  "#E8A020",

  whatsapp:     "918005977273",
  instagram:    "",
  zomato:       "",
  googleReview: "",
  appLink:      " https://neelscafe-customers.vishtechfixes.com/",
};

// ── ADMIN ──────────────────────────────────────────────────
export const ADMIN = {
  defaultPassword: "nc2025",
};

// ── POINTS CONFIG ───────────────────────────────────────────
export const POINTS = {
  welcome:       200,
  perVisit:      5,
  instagram:     25,
  googleReview:  30,
  whatsapp:      20,
  zomato:        20,
};

// ── OFFER DEFAULTS ──────────────────────────────────────────
export const DEFAULTS = {
  welcomeDiscPct:  10,
  visitGoal:       5,
  visitReward:     "FREE Ice Cream ya Cold Coffee",
  refSteps:        [50, 120, 200],
  winbackDays:     30,
  lowStockAlert:   5,
  billPointsMsg:   true,
};

// ── COUPON PREFIXES ─────────────────────────────────────────
export const COUPON = {
  welcome:  "NC",
  birthday: "NCBDAY",
  visit:    "NCVIS",
  special:  "NCSPEC",
};

// ── MENU CATEGORIES ─────────────────────────────────────────
export const CATEGORIES = [
  "Ice Cream",
  "Patties",
  "Chaat Items",
  "Pasta",
  "Hot Drinks",
  "Pizza",
  "Burger",
  "Sandwich",
  "Momos",
  "Meggie",
  "Shake",
  "Coffee",
  "Fast Food",
  "Cake",
  "Combos",
];

// ── FIRESTORE COLLECTION NAMES ──────────────────────────────
export const COLLECTIONS = {
  users:    "users",
  bills:    "bills",
  menu:     "menu",
  settings: "settings",
  shop:     "shop",
  feedback: "feedback",
};

// ── LOCALSTORAGE KEYS (offline fallback) ────────────────────
export const LS = {
  users:    "nc_users",
  bills:    "nc_bills",
  menu:     "nc_menu",
  settings: "nc_settings",
  shop:     "nc_shop",
  feedback: "nc_feedback",
  theme:    "nc_theme",
  adminPw:  "nc_admin_pass",
  current:  "nc_current",
};










