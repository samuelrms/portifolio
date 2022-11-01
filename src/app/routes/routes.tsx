import { Dashboard } from "../pages";

export const routes = [
  {
    label: "Home",
    path: "/home",
    element: <Dashboard />,
  },
  {
    label: "Sobre mim",
    path: "/about",
    element: "Sobre mim",
  },
  {
    label: "Portfólio",
    path: "/portfolio",
    element: "Portfólio",
  },
  {
    label: "Skills",
    path: "/skills",
    element: "Skills",
  },
  {
    label: "Carreira",
    path: "/career",
    element: "Carreira",
  },
  {
    label: "Recomendações",
    path: "/remembrances",
    element: "Recomendações",
  },
  {
    label: "Contato",
    path: "/contact",
    element: "Contato",
  },
];
