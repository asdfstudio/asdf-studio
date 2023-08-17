import { FC } from "react";

export type TypoVariants =
  | "label"
  | "title"
  | "title-semi"
  | "heading"
  | "body"
  | "body1"
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "heading7"
  | "heading8"
  | "label1"
  | "label2"
  | "label3"
  | "title1"
  | "body2"
  | "body3"
  | "body4"
  | "title2"
  | "title3"
  | "title4"
  | "title5"
  | "title6"
  | "tag"
  | "title-semi-button"
  | "title-semi-button2"
  ;

type Props = {
  children: React.ReactNode;
  variant?: TypoVariants;
  classname?: string;
};

export const Typography: FC<Props> = ({
  children,
  variant = "label",
  classname = "",
}) => {
  const variantMapping: Record<TypoVariants, string> = {
    label: "text-[10px] tracking-[1.4px] leading-[24px] font-bold",
    title: "text-[16px] font-medium leading-[24px] tracking-[1.5px]",
    "title-semi":
      "text-[14px] sm:text-[14px] font-semibold leading-normal sm:leading-[24px] tracking-[5px] sm:tracking-[1.5px] font-demi",
    "title-semi-button":
      "text-[14px] font-semibold leading-[24px] tracking-[1.5px] font-demi",
    "title-semi-button2":
      "text-[14px] font-semibold leading-normal font-sans",
    title1: "text-[16px] leading-[20px] sm:tracking-[0.5px] tracking-normal",
    title2: "text-[30px] leading-[50px] -tracking-[0.82px]",
    title3: "text-[16px] leading-[20px] tracking-[1.5px] font-sans",
    title4: "text-[16px] leading-[20px] font-bold",
    title5: "text-[16px] leading-[20px]",
    title6: "text-[16px] leading-[20px] tracking-normal font-sans font-[500]",
    heading: "text-[40px] font-medium",
    body: "text-[14px] font-man font-bold tracking-[1px] leading-[24px]",
    heading1:
      "text-[55px] sm:text-[75px] leading-[114px] sm:-tracking-[2.05px] -tracking-[1.5px]",
    heading2:
      "text-[35px] sm:text-[49.5px] leading-[35px] sm:leading-normal -tracking-[0.95px] sm:-tracking-[1.35px]",
    heading3:
      "text-[35px] sm:text-[50px] leading-[1] sm:leading-[50px] -tracking-[0.95px] sm:-tracking-[1.36px]",
    heading4: "text-[40px] leading-[45px] -tracking-[1.09px] font-normal",
    heading5: "text-[30px] leading-[25px] -tracking-[1.09px] font-sans",
    heading6: "text-[30px] leading-[50px] -tracking-[1.09px] font-sans",
    heading7:
      "text-[55px] leading-[64px] sm:text-[75px] leading-[114px] sm:-tracking-[2.05px] -tracking-[1.5px]",
    heading8:
      "text-[30px] leading-normal -tracking-[1.35px] sm:text-[56px]",
    body1: "text-[20px] leading-[26px] tracking-normal",
    body2: "text-[12px] leading-normal tracking-[0.2px]",
    body3: "text-[12px] tracking-[0.2px] leading-4",
    body4: "text-[18px] font-medium tracking-[-0.8px] leading-normal",
    label1:
      "text-[13.5px] font-demi font-semibold leading-normal tracking-[0px]",
    label2: "text-[13.5px]  leading-normal tracking-[0.84px]",
    label3: "text-[14px] font-light tracking-normal leading-[10px]",
    tag: "text-[14px] font-normal leading-normal tracking-[1px] capitalize",
  };

  return (
    <span className={[variantMapping[variant], classname].join(" ")}>
      {children}
    </span>
  );
};
