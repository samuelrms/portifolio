import {
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLanguage } from "../../shared/hooks";

export const Portfolio = () => {
  const { portfolio } = useLanguage();

  const theme = useTheme();
  // const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl">
      <Stack
        pt={8}
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
          flexDirection={"row"}
          alignItems="center"
          justifyContent="space-between"
        >
          {portfolio.technologies.map((data, index) => (
            <Paper sx={{ padding: 2, borderRadius: 4 }} key={index}>
              <Typography>{data}</Typography>
            </Paper>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
