import {
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Swiper from "react-id-swiper";
import { useState, useEffect } from "react";

import { useLanguage } from "../../shared/hooks";
import { SlideContainer } from "./styled";
import { API } from "../../shared/services/api/API";
import { childrenSlider } from "./childrenSlider";
import { Repositories } from "../../shared/interface";
import { AxiosResponse } from "axios";

export const Portfolio = () => {
  const [repos, setRepos] = useState<Repositories[]>([]);
  const { portfolio } = useLanguage();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  console.log(repos);

  useEffect(() => {
    API.get("/repos").then(({ data }: AxiosResponse<Repositories[]>) =>
      setRepos(data),
    );
  }, []);

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
      <Stack
        sx={{
          "& .swiper-container": {
            display: "flex",
            width: "100%",
          },
          "& .swiper-wrapper": {
            display: "flex",
          },
        }}
      >
        <SlideContainer>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ el: ".swiper-pagination", type: "progressbar" }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {childrenSlider(repos)}
          </Swiper>
        </SlideContainer>
      </Stack>
    </Container>
  );
};
