import React from "react";
import BaseButton, { type BaseButtonProps } from "./BaseButton";

type Props = Omit<BaseButtonProps, "variant">;

const SecondaryButton: React.FC<Props> = (props) => (
  <BaseButton variant="secondary" {...props} />
);

export default SecondaryButton;
