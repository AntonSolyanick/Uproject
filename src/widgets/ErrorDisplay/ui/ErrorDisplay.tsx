import { classNames } from "shared/lib/classNames/classNames";
import classes from "./ErrorDisplay.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface ErrorDisplayProps {
  className?: string;
}

export const ErrorDisplay = ({ className }: ErrorDisplayProps) => {
  const { t } = useTranslation();
  const reloadPageHandler = () => {
    location.reload();
  };
  return (
    <div className={classNames(classes.ErrorDisplay, {}, [className])}>
      <p>{t("Произошла непредвиденная ошибка!")}</p>
      <Button onClick={reloadPageHandler}>{t("Перезагрузить страницу")}</Button>
    </div>
  );
};
