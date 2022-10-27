import { Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { Logo } from "../../assets";
import { ListItemLink } from "./menuLink";

export const MenuNavigation = () => {
  const navigate = useNavigate();

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
      }}
    >
      <Logo onClick={handleClick} />
      <Stack gap={0.5} flexDirection={"row"}>
        {routes.map((data, index) => (
          <ListItemLink
            key={index}
            label={data.label}
            path={data.path}
            onClick={() => undefined}
          />
        ))}
      </Stack>
    </Paper>
  );
};
