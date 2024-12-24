import { classNames } from "shared/lib/classNames/classNames";
import classes from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      Page not found
    </div>
  );
};
