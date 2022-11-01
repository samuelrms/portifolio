import { Paper, Stack, Icon, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { Logo } from "../../assets";
import { ListItemLink } from "./menuLink";
import { useAppThemeContext } from "../../contexts";

export const MenuNavigation = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useAppThemeContext();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <Paper
      sx={{
        display: "flex",
        width: "100%",
        borderRadius: 3,
        paddingX: 2,
        paddingY: 1,
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "xl",
      }}
    >
      <Logo onClick={handleClick} />
      <Stack gap={0.5} flexDirection={"row"}>
        {routes.map((data, index) => (
          <ListItemLink key={index} label={data.label} path={data.path} />
        ))}
        <ListItemButton
          color="secondary"
          sx={{ borderRadius: "100%", paddingY: 1.5 }}
          onClick={toggleTheme}
        >
          <Icon color="secondary">light</Icon>
        </ListItemButton>
      </Stack>
    </Paper>
  );
};
