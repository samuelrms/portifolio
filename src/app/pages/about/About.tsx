import {
  ExpandLess,
  ExpandMore,
  SubdirectoryArrowRight,
} from "@mui/icons-material";
import {
  Avatar,
  Collapse,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import avatar from "../../shared/assets/images/avatarAboutSecond.png";
import { useLanguage } from "../../shared/hooks";

export const About = () => {
  const [openSkills, setOpenSkills] = useState(false);
  const [openKnowledge, setOpenKnowledge] = useState(false);
  const { about } = useLanguage();
  const theme = useTheme();

  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const openSkillsPersonal = () => {
    setOpenSkills(!openSkills);
  };

  const openKnowledgeIn = () => {
    setOpenKnowledge(!openKnowledge);
  };

  return (
    <Container maxWidth="xl">
      <Stack
        flexDirection={mdDown ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={mdDown ? "center" : ""}
        paddingY={8}
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
      <Divider />
      <Stack
        // flexDirection={mdDown ? "column" : "row"}
        // justifyContent={"space-between"}
        // alignItems={mdDown ? "center" : ""}
        paddingTop={8}
      >
        <Stack>
          <Typography variant="h2" fontWeight={"bold"}>
            {about.resume.resumeTitle}
          </Typography>
          <Typography pl={2} pt={2}>
            {about.resume.resume}
          </Typography>
        </Stack>
        <Stack flexDirection={mdDown ? "column" : "row"}>
          <Stack width={mdDown ? "100%" : "50%"}>
            <ListItem sx={{ pl: 0, pt: 4 }} onClick={openSkillsPersonal}>
              <Typography
                width={smDown ? "100%" : "60%"}
                variant={"h4"}
                children={about.resume.titleSkillsPersonal}
                sx={{ cursor: "pointer" }}
              />
              {openSkills ? (
                <ExpandLess sx={{ cursor: "pointer" }} />
              ) : (
                <ExpandMore sx={{ cursor: "pointer" }} />
              )}
            </ListItem>
            <Collapse in={openSkills} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {about.resume.listSkillsPersonal.map((data, index) => (
                  <ListItem sx={{ pl: 4, paddingY: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                      <SubdirectoryArrowRight />
                    </ListItemIcon>
                    <ListItemText>
                      <ListItemText primary={data} key={index} />
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Stack>
          <Stack width={mdDown ? "100%" : "50%"}>
            <ListItem sx={{ pl: 0, pt: 4 }} onClick={openKnowledgeIn}>
              <Typography
                width={smDown ? "100%" : "60%"}
                variant={"h4"}
                children={about.resume.titleKnowledgeIn}
                sx={{ cursor: "pointer" }}
              />
              {openKnowledge ? (
                <ExpandLess sx={{ cursor: "pointer" }} />
              ) : (
                <ExpandMore sx={{ cursor: "pointer" }} />
              )}
            </ListItem>
            <Collapse in={openKnowledge} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {about.resume.listKnowledgeIn.map((data, index) => (
                  <ListItem sx={{ pl: 4, paddingY: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                      <SubdirectoryArrowRight />
                    </ListItemIcon>
                    <ListItemText>
                      <ListItemText primary={data} key={index} />
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
