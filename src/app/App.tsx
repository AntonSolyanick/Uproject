import "./styles/index.scss";

import { useTheme } from "./providers/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={classNames("app", { hovered: false, selected: true }, [theme])}
    >
      <Navbar className="nav"></Navbar>
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
export default App;
