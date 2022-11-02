import {
  ArrowDownwardSharp,
  GitHub,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { Avatar } from "../../shared/assets";

export const Dashboard = () => {
  const onDownload = () => {
    fetch("curriculum.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Curriculum_Samuel_Ramos.pdf";
        alink.click();
      });
    });
  };

  return (
    <Container maxWidth="xl">
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Stack maxWidth={"200px"} pt={25} width={"100%"}>
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
            <Stack
              component={"a"}
              href="https://www.linkedin.com/in/samuelaoramos/"
              target={"_blank"}
            >
              <LinkedIn sx={{ cursor: "pointer", color: "#FFFFFF80", mr: 2 }} />
            </Stack>
            <Stack
              component={"a"}
              href="https://github.com/samuelrms"
              target={"_blank"}
            >
              <GitHub sx={{ cursor: "pointer", color: "#FFFFFF80" }} />
            </Stack>
          </Stack>
        </Stack>
        <Stack pt={5.5}>
          <Avatar width={680} />
        </Stack>
        <Stack maxWidth={"200px"} mt={39} width={"100%"}>
          <Stack justifyContent={"flex-end"} flexDirection={"row"} pb={1}>
            <Stack
              flexDirection={"row"}
              sx={{ cursor: "pointer" }}
              onClick={onDownload}
            >
              <Typography>Baixar CV </Typography>
              <ArrowDownwardSharp sx={{ ml: 0.5 }} />
            </Stack>
          </Stack>
          <Stack
            component={"a"}
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5534988676166"
            target={"_blank"}
            sx={{ textDecoration: "none" }}
          >
            <Stack
              component={Button}
              flexDirection={"row"}
              borderRadius={4}
              p={1}
              width={"100%"}
              border={"1px solid rgba(114, 255, 79, 0.5)"}
            >
              <WhatsApp sx={{ color: "#72FF4F" }} fontSize="small" />
              <Typography pl={1}>Vamos conversar </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
