import { About, Dashboard } from "../pages";

export const routes = [
  {
    label: "Home",
    path: "/home",
    element: <Dashboard />,
    icon: "home",
  },
  {
    label: "Sobre mim",
    path: "/about",
    element: <About />,
    icon: "info",
  },
  {
    label: "Portfólio",
    path: "/portfolio",
    element: "Portfólio",
    icon: "portrait",
  },
  {
    label: "Skills",
    path: "/skills",
    element: "Skills",
    icon: "equalizer",
  },
  {
    label: "Carreira",
    path: "/career",
    element: "Carreira",
    icon: "business_center",
  },
  {
    label: "Recomendações",
    path: "/remembrances",
    element: "Recomendações",
    icon: "record_voice_over",
  },
  {
    label: "Contato",
    path: "/contact",
    element: "Contato",
    icon: "contact_phone",
  },
];
