import React  from "react";
import {Button as MaterialButton} from "@material-ui/core";

export const Button = ({size, variant, color, text}) => {
  return (
    <MaterialButton size={size} variant={variant} color={color}>
      {text}
    </MaterialButton>
  )
}