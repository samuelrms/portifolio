import { Brightness4Outlined, Language } from "@mui/icons-material";
import { ListItem, MenuItem, Typography } from "@mui/material";
import { useLanguage } from "../../../hooks";
import { mapMenu } from "./mapMenu";
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

  return (
    <>
      {mapMenu(menu).map((data, index) => (
        <MenuItem sx={{ padding: 0, marginY: 1 }} key={index}>
          <ListItemLink icon={data.icon} label={data.label} path={data?.path} />
        </MenuItem>
      ))}
      <MenuItem sx={{ padding: 0, marginY: 1 }}>
        <ListItem
          sx={{
            borderRadius: "100%",
            paddingY: 2,
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
            paddingY: 2,
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
