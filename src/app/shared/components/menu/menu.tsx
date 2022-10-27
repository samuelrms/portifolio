import { useState } from "react";
import { Settings } from "@mui/icons-material";
import {
  Paper,
  Stack,
  SpeedDial,
  Icon,
  Backdrop,
  SpeedDialAction,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { Logo } from "../../assets";
import { ListItemLink } from "./menuLink";

export const MenuNavigation = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        position: "relative",
      }}
    >
      <Logo onClick={handleClick} />
      <Stack gap={0.5} flexDirection={"row"} mr={8}>
        {routes.map((data, index) => (
          <ListItemLink
            key={index}
            label={data.label}
            path={data.path}
            onClick={() => undefined}
          />
        ))}
        <Backdrop open={open} />
        <SpeedDial
          sx={{
            position: "absolute",
            right: 0,
            top: 4,
          }}
          ariaLabel="config"
          direction="down"
          icon={<Settings fontSize="medium" />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          <SpeedDialAction
            key={"teste"}
            icon={
              <Icon color="primary" fontSize="medium">
                light
              </Icon>
            }
            tooltipTitle={"Alterar tema"}
            tooltipOpen
            onClick={handleClose}
          />
        </SpeedDial>
      </Stack>
    </Paper>
  );
};
