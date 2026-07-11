// ============================================================
//  shared/constants.js
//  Naye shop ke liye SIRF YEH FILE BADLO
//  Admin aur Customer dono yahan se import karte hain
// ============================================================

export const SHOP = {
  id:           "neels-cafe",
  name:         "Neels Cafe",
  tagline:      "We Serve Taste & Trust",
  location:     " Jaipur",
  logoEmoji:    "🌯",
  primaryColor: "#FFD600",
  accentColor:  "#E5222A",

  whatsapp:     "918005977273",
  instagram:    "https://www.instagram.com/ne",
  zomato:       "https://www.zomato.com/jaipur/nel ",
  googleReview: "https://m",
};

// ── ADMIN ──────────────────────────────────────────────────
export const ADMIN = {
  defaultPassword: "krh2025",
};

// ── POINTS CONFIG ───────────────────────────────────────────
export const POINTS = {
  welcome:       0,
  perVisit:      1,
  instagram:     2,
  googleReview:  2,
  whatsapp:      2,
  zomato:        2,
};

// ── OFFER DEFAULTS ──────────────────────────────────────────
export const DEFAULTS = {
  welcomeDiscPct:  10,
  visitGoal:       5,
  visitReward:     "FREE Roll ya Momos",
  refSteps:        [50, 120, 200],
  winbackDays:     30,
  lowStockAlert:   5,
  billPointsMsg:   true,
};

// ── COUPON PREFIXES ─────────────────────────────────────────
export const COUPON = {
  welcome:  "ROLL",
  birthday: "BDAY",
  visit:    "VIS",
  special:  "SPEC",
};

// ── MENU CATEGORIES ─────────────────────────────────────────
export const CATEGORIES = [
  "Kathi Roll",
  "Momos",
  "Chinese",
  "Shake",
  "Coffee",
  "Snacks",
  "Dessert",
  "Other",
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
  users:    "krh_users",
  bills:    "krh_bills",
  menu:     "krh_menu",
  settings: "krh_settings",
  shop:     "krh_shop",
  feedback: "krh_feedback",
  theme:    "krh_theme",
  adminPw:  "krh_admin_pass",
  current:  "krh_current",
};