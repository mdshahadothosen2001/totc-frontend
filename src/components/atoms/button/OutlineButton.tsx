import React from "react";
import BaseButton, { type BaseButtonProps } from "./BaseButton";

type Props = Omit<BaseButtonProps, "variant">;

const OutlineButton: React.FC<Props> = (props) => (
  <BaseButton variant="outline" {...props} />
);

export default OutlineButton;
