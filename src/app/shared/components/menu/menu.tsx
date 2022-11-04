import { Paper, Stack, Tooltip, IconButton, Menu } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
import { useAppLanguageContext, useAppThemeContext } from "../../contexts";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { StyleMenuPaper, stylePaper } from "./styles/styles";
import { ListMenu } from "./components/listMenu";

export const MenuNavigation = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { toggleLanguage } = useAppLanguageContext();
  const { toggleTheme } = useAppThemeContext();
  const navigate = useNavigate();

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
            <MenuIcon sx={{ color: "#72FF4F" }} fontSize="large" />
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
        <ListMenu toggleLanguage={toggleLanguage} toggleTheme={toggleTheme} />
      </Menu>
    </Paper>
  );
};
