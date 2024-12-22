import "./styles/index.scss";

import { useTheme } from "./providers/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Suspense fallback="">
      <div
        className={classNames("app", { hovered: false, selected: true }, [
          theme,
        ])}
      >
        <Navbar className="nav"></Navbar>
        <div className="content-page">
          efwe
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
export default App;
