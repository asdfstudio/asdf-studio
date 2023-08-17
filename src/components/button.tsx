import { FC } from "react";
import { Typography, TypoVariants } from "./Typography";

type ButtonVariants = "primary" | "secondary" | "text" | "square" | "tag";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariants;
  endIcon?: React.ReactElement;
  typoVariant?: TypoVariants;
}

export const Button: FC<Props> = ({
  variant = "primary",
  children,
  className = "",
  endIcon,
  typoVariant = "title",
  ...rest
}) => {
  const buttonMapping: Record<ButtonVariants, string> = {
    primary:
      "shadow-buttonShadow text-white bg-main-orange rounded-[23px] pl-5 pr-3",
    secondary:
      "shadow-buttonShadow2 text-main-deepBlue bg-white rounded-[23px] pl-5 pr-3 font-semibold hover:bg-main-hoverWhite",
    text: "text-main-blue px-2",
    square: "shadow-buttonShadow3 rounded-[4.6px] bg-white px-2",
    tag: "text-main-white px-2",
  };

  return (
    <button className={[buttonMapping[variant], className].join(" ")} {...rest}>
      <div
        className={[
          "w-full flex items-center h-full",
          endIcon ? "justify-between" : "justify-center",
        ].join(" ")}
      >
        <Typography classname="uppercase" variant={typoVariant}>
          {children}
        </Typography>
        {endIcon && endIcon}
      </div>
    </button>
  );
};
