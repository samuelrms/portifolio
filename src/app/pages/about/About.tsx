import {
  Avatar,
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import avatar from "../../shared/assets/images/avatarAboutSecond.png";
import { useLanguage } from "../../shared/hooks";

export const About = () => {
  const { about } = useLanguage();
  const theme = useTheme();

  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl">
      <Stack
        flexDirection={mdDown ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={mdDown ? "center" : ""}
        paddingTop={8}
      >
        <Stack width={mdDown ? "60%" : "35%"} height={"100%"}>
          <Avatar
            alt="Samuel Ramos"
            src={avatar}
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
        </Stack>
        <Stack width={mdDown ? "100%" : "60%"} paddingTop={2}>
          <Paper
            sx={{
              padding: 2,
              maxWidth: 150,
              borderRadius: 4,
              justifyContent: "center",
              display: "flex",
              marginBottom: 3,
            }}
            elevation={1}
          >
            <Typography fontWeight={"bold"}>{about.about}</Typography>
          </Paper>
          <Stack paddingRight={2}>
            <Typography fontWeight={"bold"} color={"#fff"} variant="h3">
              {about.nameFirst}
            </Typography>
            <Typography
              fontWeight={"bold"}
              color={"#fff"}
              marginBottom={2}
              variant="h3"
            >
              {about.nameSecond}
            </Typography>
            <Typography fontWeight={"semiBold"} marginBottom={1} color="#FFF">
              {about.presentation}
            </Typography>
            <Typography fontWeight={"semiBold"} marginBottom={1} color="#FFF">
              {about.experience}
            </Typography>
            <Typography fontWeight={"semiBold"} marginBottom={1} color="#FFF">
              {about.interest}
            </Typography>
            <Typography fontWeight={"semiBold"} marginBottom={1} color="#FFF">
              {about.evolution}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
