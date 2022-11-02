import {
  Paper,
  Stack,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  ListItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { Logo } from "../../assets";
import { ListItemLink } from "./menuLink";
import { useAppThemeContext } from "../../contexts";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { StyleMenuPaper, stylePaper } from "./styles/styles";
import { Brightness4Outlined, Language } from "@mui/icons-material";

export const MenuNavigation = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useAppThemeContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickHome = () => {
    navigate("/home");
  };

  return (
    <Paper sx={stylePaper}>
      <Stack gap={0.5} flexDirection={"row"}>
        <Tooltip title="Settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon color="primary" fontSize="large" />
          </IconButton>
        </Tooltip>
      </Stack>
      <Logo onClick={handleClickHome} />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={StyleMenuPaper()}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        sx={{ padding: 0 }}
      >
        {routes.map((data, index) => (
          <MenuItem sx={{ padding: 0, marginY: 1 }} key={index}>
            <ListItemLink
              icon={data.icon}
              label={data.label}
              path={data.path}
            />
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
            <Typography>Alterar tema</Typography>
            <Brightness4Outlined />
          </ListItem>
        </MenuItem>
        <MenuItem sx={{ padding: 0, marginY: 1 }}>
          <ListItem
            sx={{
              borderRadius: "100%",
              justifyContent: "space-between",
            }}
            // onClick={toggleTheme}
          >
            <Typography>Alterar idioma - en-us</Typography>
            <Language />
          </ListItem>
        </MenuItem>
      </Menu>
    </Paper>
  );
};
