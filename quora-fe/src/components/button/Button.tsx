import React, { FC } from "react";
import { IButtonProps } from "./types";

const getClassNameByBtnVariant = (variant?: string, color?: string): string => {
  if (variant === "primary") {
    return `bg-${color}`;
  } else {
    return `border-2 border-${color}`;
  }
};

export const Button: FC<IButtonProps> = React.memo(function Button({
  variant,
  color,
  children,
  className,
  ...props
}) {
  const modefiedClassName = `${getClassNameByBtnVariant(
    variant,
    color
  )} ${className} cursor-pointer`;

  return (
    <button className={modefiedClassName} {...props}>
      {children}
    </button>
  );
});
