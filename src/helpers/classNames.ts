type Mods = Record<string, boolean | string>;

export function classNames(
  className: string,
  mods: Mods,
  additionalClasses: string[]
): string {
  return [
    className,
    ...additionalClasses,
    Object.entries(mods)
      .filter(([ke, value]) => Boolean(value))
      .map((className) => className),
  ].join(" ");
}
