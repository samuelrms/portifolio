import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

interface LayoutBasePageProps {
  children: React.ReactNode;
}

export const LayoutBasePage: React.FC<LayoutBasePageProps> = ({ children }) => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      maxWidth={"xl"}
      m={"0 auto"}
    >
      <Box flex={1} overflow="auto">
        <Box padding={3}>{children}</Box>
        <Stack
          sx={{
            paddingX: 2,
            paddingY: 1,
            justifyContent: "center",
            maxWidth: "xl",
          }}
          height={90}
          bgcolor={"#72FF4F1A"}
        >
          <Stack
            flexDirection={"row"}
            width={"50%"}
            justifyContent={"space-between"}
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
      </Box>
    </Box>
  );
};
