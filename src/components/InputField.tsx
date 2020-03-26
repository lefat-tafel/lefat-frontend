import * as React from "react";
import { FieldProps } from "formik";
import { TextField, TextFieldProps } from "@material-ui/core";

export const InputField: React.FC<FieldProps & TextFieldProps> = ({
  label,
  field
}) => {
  return (
    <TextField
      label={label}
      {...field} //Handels name="", value="", onChange="", onBlur=""
    />
  );
};
