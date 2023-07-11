export const PUBLIC_LAYOUT = "default";

export const PROFILE_OPTIONS = [
  {
    name: "My Wallet",
    icon: "fa-solid fa-wallet text-2xl",
    route: {
      name: "Home",
      params: {},
    },
  },
  {
    name: "Tools",
    icon: "fa-solid fa-toolbox text-2xl",
    route: {
      name: "Home",
      params: {},
    },
  },
  {
    name: "Privacy",
    icon: "fa-solid fa-lock text-2xl",
    route: {
      name: "Home",
      params: {},
    },
  },
  {
    name: "About",
    icon: "fa-solid fa-question text-2xl",
    route: {
      name: "Home",
      params: {},
    },
  },
  {
    name: "Logout",
    icon: "fa-solid fa-right-from-bracket text-2xl",
    route: {
      name: "Login",
      params: {},
    },
    textColor: "text-red",
  },
];

export const NAV_BOTTOM_ITEMS = [
  {
    icon: "fa-solid fa-house",
    text: "Home",
    name: "Home",
  },
  {
    icon: "fa-solid fa-chart-simple",
    text: "Budget",
    name: "Budget",
  },
  {
    icon: "fa-brands fa-rocketchat",
    text: "Report",
    name: "Report",
  },
  {
    icon: "fa-solid fa-user",
    text: "Profile",
    name: "Profile",
  },
];
