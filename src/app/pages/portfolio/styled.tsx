import { StackProps } from "@mui/material";
import { Stack } from "@mui/material";
import { FC } from "react";

export const SlideContainer: FC<StackProps> = (props) => (
  <Stack
    {...props}
    sx={{
      position: "relative",
      ".swiper-container": {
        width: "100%",
        height: "20rem",
      },
      ".swiper-pagination": {
        "&.swiper-pagination-fraction": {
          color: "white",
          fontWeight: 5,
        },
      },
      ".swiper-pagination-bullet-active.swiper-pagination-bullet": {
        bg: "gray.9",
        opacity: 1,
      },
      ".swiper-pagination-bullet": {
        bg: "white",
        opacity: 1,
      },
      ".swiper-pagination-progressbar .swiper-pagination-progressbar-fill": {
        bg: "dark",
      },
    }}
  />
);
