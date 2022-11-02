import { useTheme } from "@mui/material";

export const stylePaper = {
  display: "flex",
  width: "100%",
  borderRadius: 3,
  paddingX: 2,
  paddingY: 1,
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "xl",
};

export const StyleMenuPaper = () => {
  const theme = useTheme();
  const style = {
    elevation: 2,
    sx: {
      overflow: "visible",
      background: theme.palette.common.black,
      mt: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        left: 14,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
    },
  };
  return style;
};
