import React from "react";
import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

interface LayoutBasePageProps {
  children: React.ReactNode;
}

export const LayoutBasePage: React.FC<LayoutBasePageProps> = ({ children }) => {
  const theme = useTheme();

  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box display="flex" flexDirection="column" maxWidth={"xl"} m={"0 auto"}>
        <Box flex={1}>
          <Box padding={3} minHeight={"100vh"}>
            {children}
          </Box>
        </Box>
      </Box>
      <Stack p={0} width={"100vw"} bgcolor={"#72FF4F1A"}>
        <Stack
          sx={{
            paddingX: 2,
            paddingY: 1,
            justifyContent: "center",
            maxWidth: "xl",
            width: "100%",
            margin: "0 auto",
          }}
          height={"90px"}
        >
          <Stack
            flexDirection={"row"}
            width={mdDown ? "100%" : "50%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography color={"#FFFFFF80"}>
              Copyright © Samuel Ramos · 2022
            </Typography>
            <Stack flexDirection={"row"}>
              <Stack
                component={"a"}
                href="https://www.linkedin.com/in/samuelaoramos/"
                target={"_blank"}
              >
                <LinkedIn
                  fontSize="large"
                  sx={{ cursor: "pointer", color: "#FFFFFF80", mr: 2 }}
                />
              </Stack>
              <Stack
                component={"a"}
                href="https://github.com/samuelrms"
                target={"_blank"}
              >
                <GitHub
                  fontSize="large"
                  sx={{ cursor: "pointer", color: "#FFFFFF80" }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
