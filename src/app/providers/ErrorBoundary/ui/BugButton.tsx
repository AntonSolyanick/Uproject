import { useState, useEffect } from "react";
import { Button } from "shared/ui/Button/Button";

interface BugButtonProps {
  className?: string;
}

//компонент для тестирования
export const BugButton = ({ className }: BugButtonProps) => {
  const [isEroor, setIsError] = useState(false);
  const throwError = () => {
    setIsError((prevStaste) => !prevStaste);
  };

  useEffect(() => {
    if (isEroor) throw new Error("!!!!!");
  }, [isEroor]);
  return <Button onClick={throwError}> Throw Error</Button>;
};
