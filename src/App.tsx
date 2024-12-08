import "./styles/index.scss";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Suspense } from "react";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={classNames("app", { hovered: false, selected: true }, [theme])}
    >
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={"/"}> Main Page</Link>
      <Link to={"/about"}>About Page</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />}></Route>
          <Route path={"/about"} element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
