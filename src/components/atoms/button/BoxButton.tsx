import React from "react";
import BaseButton from "./BaseButton";

type Props = React.ComponentProps<typeof BaseButton>;

const BoxButton: React.FC<Props> = (props) => (
  <BaseButton borderRadius="0" {...props} />
);

export default BoxButton;
