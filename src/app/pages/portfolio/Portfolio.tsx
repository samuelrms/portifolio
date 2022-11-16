import { Css, Html, Javascript } from "@mui/icons-material";
import {
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";
import { TypescriptIcon } from "../../shared/assets";

import { useLanguage } from "../../shared/hooks";
import { API } from "../../shared/services/api/API";
import Slider from "./Slider";

export const Portfolio = () => {
  const [repos, setRepos] = useState<any>();
  const { portfolio } = useLanguage();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    API.get("/repos").then((data) => setRepos(data));
  }, []);

  const colorLanguage = (data: any) => {
    if (data.language === "CSS") return "#6f90d3";
    if (data.language === "HTML") return "#f25320";
    if (data.language === "JavaScript") return "#da9b27";
    if (data.language === "TypeScript") return "#8faac7";
  };

  return (
    <Container maxWidth="xl">
      <Stack
        pt={6}
        alignItems="center"
        flexDirection={mdDown ? "column" : "row"}
        justifyContent="space-between"
      >
        <Typography fontWeight={"bold"} color={"#fff"} variant="h4">
          {portfolio.title}
        </Typography>
        <Stack
          pt={mdDown ? 4 : 0}
          width={mdDown ? "100%" : "50%"}
          flexDirection={smDown ? "column" : "row"}
          alignItems={smDown ? "flex-start" : "center"}
          flexWrap={"wrap"}
          justifyContent="space-between"
        >
          {portfolio.technologies.map((data, index) => (
            <Paper sx={{ padding: 2, borderRadius: 4, mt: 2 }} key={index}>
              <Typography>{data}</Typography>
            </Paper>
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Slider>
          {repos?.data.map((data: any) => {
            console.log(data.topics);
            return (
              <Stack key={data.id}>
                <Stack alignItems={"flex-end"}>
                  <Stack pb={8}>
                    <Typography
                      display={"flex"}
                      justifyContent={"center"}
                      fontSize={32}
                      flexWrap={"nowrap"}
                      color={"#FFf"}
                    >
                      {data.name}
                    </Typography>
                    <Typography
                      display={"flex"}
                      pt={2}
                      width={"80%"}
                      margin={"0 auto"}
                      flexWrap={"wrap"}
                    >
                      {data.description}
                    </Typography>
                    <Typography
                      pt={8}
                      color={colorLanguage(data)}
                      width={"80%"}
                      margin={"0 auto"}
                      display={"flex"}
                      justifyContent={"flex-end"}
                      fontWeight={900}
                    >
                      {data.language}
                    </Typography>
                    <Stack
                      width={"80%"}
                      margin={"0 auto"}
                      alignItems={"flex-end"}
                      pt={4}
                    >
                      <Typography>Tags utilizadas</Typography>
                      <Stack
                        flexDirection={"row"}
                        flexWrap={"wrap"}
                        justifyContent={"flex-end"}
                      >
                        {!!data.topics.length ? (
                          data?.topics.map((data: any) => {
                            return (
                              <Stack p={1} m={1} component={Paper} key={data}>
                                {data}
                              </Stack>
                            );
                          })
                        ) : (
                          <Typography>Sem tag no momento</Typography>
                        )}
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            );
          })}
        </Slider>
      </Stack>
    </Container>
  );
};
