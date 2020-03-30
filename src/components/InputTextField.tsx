import * as React from "react";
import { useField, FieldAttributes } from "formik";
import { TextField, TextFieldProps } from "@material-ui/core";

export const InputTextField: React.FC<FieldAttributes<{}> & TextFieldProps> = ({label, ...props}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...field} //Handels name="", value="", onChange="", onBlur=""
      label={label}
      helperText={errorText}
      error={!!errorText}
    />
  );
};
