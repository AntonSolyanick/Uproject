import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
    console.log(collapsed, classes.collapsed);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <button data-testid="toggleButton" onClick={onToggle}>
        toggle
      </button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
