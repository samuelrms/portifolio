import { Brightness4Outlined, Language } from "@mui/icons-material";
import { ListItem, MenuItem, Typography } from "@mui/material";
import { useLanguage } from "../../../hooks";
import { ListItemLink } from "./menuLink";

interface ListMenuProps {
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export const ListMenu: React.FC<ListMenuProps> = ({
  toggleLanguage,
  toggleTheme,
}) => {
  const { menu } = useLanguage();

  const routes = [
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
  return (
    <>
      {routes.map((data, index) => (
        <MenuItem sx={{ padding: 0, marginY: 1 }} key={index}>
          <ListItemLink icon={data.icon} label={data.label} path={data?.path} />
        </MenuItem>
      ))}
      <MenuItem sx={{ padding: 0, marginY: 1 }}>
        <ListItem
          sx={{
            borderRadius: "100%",
            justifyContent: "space-between",
          }}
          onClick={toggleTheme}
        >
          <Typography>{menu.changeTheme}</Typography>
          <Brightness4Outlined />
        </ListItem>
      </MenuItem>
      <MenuItem sx={{ padding: 0, marginY: 1 }}>
        <ListItem
          sx={{
            borderRadius: "100%",
            justifyContent: "space-between",
          }}
          onClick={toggleLanguage}
        >
          <Typography>{menu.changeLanguage}</Typography>
          <Language sx={{ ml: 3 }} />
        </ListItem>
      </MenuItem>
    </>
  );
};
