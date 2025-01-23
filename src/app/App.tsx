import { AppRouter } from "@/page";

import { AppProvider } from "./provider/AppProvider.tsx";
import "./style/global.css";

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
