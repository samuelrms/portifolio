import {
  ArrowDownwardSharp,
  GitHub,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { Avatar } from "../../shared/assets";

export const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Stack flexDirection={"row"}>
        <Stack maxWidth={"412px"} pt={25} width={"100%"}>
          <Paper
            sx={{ maxWidth: "160px", width: "100%", p: 1, borderRadius: 4 }}
          >
            <Typography fontWeight="bold" fontSize={20}>
              👋 Saudações!
            </Typography>
          </Paper>
          <Typography color={"#fff"} variant="h2" fontWeight="bold">
            Samuel
          </Typography>
          <Typography color={"#fff"} variant="h2" fontWeight="bold">
            Ramos
          </Typography>
          <Typography color={"#FFFFFF80"}>Front-end developer </Typography>
          <Stack flexDirection={"row"} pt={2}>
            <LinkedIn sx={{ cursor: "pointer", color: "#FFFFFF80", mr: 2 }} />
            <GitHub sx={{ cursor: "pointer", color: "#FFFFFF80" }} />
          </Stack>
        </Stack>
        <Stack pt={5.5} width={"100%"}>
          <Avatar width={"100%"} />
        </Stack>
        <Stack maxWidth={"200px"} mt={39} width={"100%"}>
          <Stack justifyContent={"flex-end"} flexDirection={"row"} pb={1}>
            <Typography sx={{ cursor: "pointer" }}>Baixar CV </Typography>
            <ArrowDownwardSharp sx={{ cursor: "pointer", ml: 0.5 }} />
          </Stack>
          <Stack
            component={Button}
            flexDirection={"row"}
            borderRadius={4}
            p={1}
            border={"1px solid rgba(114, 255, 79, 0.5)"}
            sx={{ cursor: "pointer" }}
          >
            <WhatsApp sx={{ color: "#72FF4F" }} fontSize="small" />
            <Typography pr={0.5}>Vamos conversar </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
