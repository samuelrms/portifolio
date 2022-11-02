interface MenuProps {
  home: string;
  about: string;
  portfolio: string;
  skills: string;
  career: string;
  recommendations: string;
  contact: string;
  changeTheme: string;
  changeLanguage: string;
}

export const mapMenu = (menu: MenuProps) => [
  {
    label: menu.home,
    path: "/home",
    icon: "home",
  },
  {
    label: menu.about,
    path: "/about",
    icon: "info",
  },
  {
    label: menu.portfolio,
    path: "/portfolio",
    icon: "portrait",
  },
  {
    label: menu.skills,
    path: "/skills",
    icon: "equalizer",
  },
  {
    label: menu.career,
    path: "/career",
    icon: "business_center",
  },
  {
    label: menu.recommendations,
    path: "/remembrances",
    icon: "record_voice_over",
  },
  {
    label: menu.contact,
    path: "/contact",
    icon: "contact_phone",
  },
];
