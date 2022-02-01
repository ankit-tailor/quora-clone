import React, { FC } from "react";
import { IButtonProps } from "./types";

const getClassNameByBtnVariant = (variant?: string, color?: string): string => {
  if (variant === "primary") {
    return `bg-${color}`;
  }
  return `border-2 border-${color}`;
};

export const Button: FC<IButtonProps> = ({
  variant,
  color,
  children,
  className,
  ...props
}) => {
  const modefiedClassName = `${getClassNameByBtnVariant(
    variant,
    color
  )} ${className} cursor-pointer`;

  return <button className={modefiedClassName}>{children}</button>;
};
