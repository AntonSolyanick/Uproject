import { classNames } from "shared/lib/classNames/classNames";
import { useTheme, Theme } from "app/providers/themeProvider";

import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "../Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
      <Button
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
      className={classNames("", {}, [className])}
    >
          {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
      </Button>
  );
};
