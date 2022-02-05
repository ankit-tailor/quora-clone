export interface IButtonProps {
  variant?: string;
  color?: string;
  children?: JSX.Element[] | JSX.Element | string | number;
  className?: string;
  onClick?: () => void;
}
