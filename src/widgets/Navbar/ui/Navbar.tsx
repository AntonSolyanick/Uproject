import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
      <div className={classNames(classes.Navbar, {}, [className])}>
          <div className={classes.links}>
              <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classes.mainLink}
          to={"/"}
        >
                  Main Page
              </AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                  About Page
              </AppLink>
          </div>
      </div>
  );
};
