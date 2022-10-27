import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes/App.routes";
import { MenuNavigation } from "./shared/components";
import { AppThemeProvider } from "./shared/contexts";
import { LayoutBasePage } from "./shared/layouts";

export const App = () => {
  return (
    <AppThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <LayoutBasePage>
          <MenuNavigation />
          <AppRoutes />
        </LayoutBasePage>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
