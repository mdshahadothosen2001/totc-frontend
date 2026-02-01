import React from "react";
import BaseButton, { type BaseButtonProps } from "./BaseButton";

type Props = Omit<BaseButtonProps, "variant">;

const PrimaryButton: React.FC<Props> = (props) => (
  <BaseButton variant="primary" {...props} />
);

export default PrimaryButton;
