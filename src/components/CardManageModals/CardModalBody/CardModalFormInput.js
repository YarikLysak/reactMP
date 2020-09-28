import React from "react";
import { cardManageBodyStyles } from "./CardModalBody.styles";
import { TextField } from "@material-ui/core";

export const CardModalFormInput = ({
  title,
  id,
  value,
  setData,
  changeKey,
  ...rest
}) => {
  const { formFieldWrapper, cardModalInput } = cardManageBodyStyles();

  return (
    <div className={formFieldWrapper}>
      <label htmlFor={id}>{title}</label>
      <TextField
        id={id}
        className={cardModalInput}
        variant="outlined"
        fullWidth
        value={value}
        {...rest}
      />
    </div>
  );
};
