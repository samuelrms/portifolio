import {
  ArrowDownwardSharp,
  GitHub,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { avatar, CodeIcon, ProjectIcon } from "../../shared/assets";
import { useLanguage } from "../../shared/hooks";

export const Dashboard = () => {
  const { dashboard } = useLanguage();

  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const onDownload = () => {
    fetch("curriculum.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "curriculum_samuel_ramos.pdf";
        alink.click();
      });
    });
  };

  return (
    <Container maxWidth="xl">
      <Stack
        flexDirection={mdDown ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={mdDown ? "center" : ""}
        paddingBottom={10}
      >
        <Stack
          maxWidth={mdDown ? (smDown ? "100%" : "65%") : "200px"}
          pt={mdDown ? 10 : 25}
          width={"100%"}
        >
          <Paper
            sx={{ maxWidth: "160px", width: "100%", p: 1, borderRadius: 4 }}
          >
            <Typography fontWeight="bold" fontSize={16}>
              {dashboard.greetings}
            </Typography>
          </Paper>
          <Typography
            color={"#fff"}
            variant={"h2"}
            fontSize={mdDown ? (smDown ? "2.75rem" : "3.25rem") : "3.75rem"}
            fontWeight="bold"
          >
            Samuel
          </Typography>
          <Typography
            color={"#fff"}
            variant={"h2"}
            fontSize={mdDown ? (smDown ? "2.75rem" : "3.25rem") : "3.75rem"}
            fontWeight="bold"
          >
            Ramos
          </Typography>
          <Typography color={"#FFFFFF80"}>{dashboard.function}</Typography>
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
        <Stack pt={5.5} maxWidth={mdDown ? (smDown ? "100%" : "65%") : "50%"}>
          <Box component={"img"} src={avatar} alt={""} />
        </Stack>
        <Stack
          maxWidth={mdDown ? (smDown ? "100%" : "65%") : "200px"}
          mt={mdDown ? 10 : 39}
          width={"100%"}
          alignItems={"flex-end"}
          flexDirection={mdDown ? "row" : "column"}
          justifyContent={mdDown ? "space-around" : ""}
        >
          <Stack justifyContent={"flex-end"} flexDirection={"row"} pb={1}>
            <Stack
              flexDirection={"row"}
              sx={{ cursor: "pointer" }}
              onClick={onDownload}
            >
              <Typography>{dashboard.curriculum}</Typography>
              <ArrowDownwardSharp sx={{ ml: 0.5 }} />
            </Stack>
          </Stack>
          <Stack
            component={"a"}
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5534988676166"
            target={"_blank"}
            sx={{ textDecoration: "none", width: "max-content" }}
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
              <Typography pl={1}>{dashboard.talk}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack alignItems={"center"}>
        <Stack
          paddingY={10}
          width={"100%"}
          maxWidth={900}
          alignItems={mdDown ? "center" : ""}
          flexDirection={mdDown ? "column" : "row"}
          justifyContent={"space-between"}
        >
          <Stack
            maxWidth={250}
            width={"100%"}
            height={200}
            borderRadius={4}
            border={"1px solid #72FF4F80"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <CodeIcon />
            <Stack alignItems={"center"} paddingY={2}>
              <Typography color={"#fff"}>
                {dashboard.timeWorkingProgramer.time}
              </Typography>
              <Typography
                color={"#fff"}
                fontWeight={"bold"}
                fontSize={"1.75rem"}
              >
                {dashboard.timeWorkingProgramer.function}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            component={Paper}
            maxWidth={250}
            width={"100%"}
            height={200}
            borderRadius={4}
            marginTop={mdDown ? 5 : ""}
            border={`1px solid ${theme.palette.background.paper}`}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <ProjectIcon />
            <Stack alignItems={"center"} paddingY={2}>
              <Typography color={"#fff"}>
                {dashboard.workingTimeAJob.time}
              </Typography>
              <Typography
                color={"#fff"}
                fontWeight={"bold"}
                fontSize={"1.75rem"}
              >
                {dashboard.workingTimeAJob.function}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          component={Paper}
          display={mdDown ? "none" : "flex"}
          height={110}
          maxWidth={900}
          width={"100%"}
          marginBottom={10}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          borderRadius={4}
          paddingX={7}
        >
          <Stack>
            <Typography>{dashboard.developer.developer}</Typography>
            <Typography fontWeight={"bold"} fontSize={"1.75rem"}>
              {dashboard.developer.function}
            </Typography>
          </Stack>
          <Stack>
            <Typography>{dashboard.experience.projects}</Typography>
            <Typography fontWeight={"bold"} fontSize={"1.75rem"}>
              {dashboard.experience.experience}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
