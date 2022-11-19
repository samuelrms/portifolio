import { Paper, Typography } from "@mui/material";
import React from "react";

export const childrenSlider = (data: any) => {
  return data?.map((data: any, index: number) => (
    <Paper key={index}>
      <Typography>{data.name}</Typography>
      <Typography>
        {data?.language &&
          `Linguagem predominante no projeto ${data?.language}`}
      </Typography>
    </Paper>
  ));
};
