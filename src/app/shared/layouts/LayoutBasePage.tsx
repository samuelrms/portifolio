import React from "react";
import { Box } from "@mui/material";

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
      <Box padding={3} flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
