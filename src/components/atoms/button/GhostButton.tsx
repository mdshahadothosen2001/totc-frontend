import React from "react";
import BaseButton, { type BaseButtonProps } from "./BaseButton";

type Props = Omit<BaseButtonProps, "variant">;

const GhostButton: React.FC<Props> = (props) => (
  <BaseButton variant="ghost" {...props} />
);

export default GhostButton;
