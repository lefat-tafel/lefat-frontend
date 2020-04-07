import * as React from "react";
import { useField, FieldAttributes } from "formik";
import { TextField, TextFieldProps, InputProps } from "@material-ui/core";

export const InputTextField: React.FC<FieldAttributes<{}> & TextFieldProps> = ({label, type, inputProps, ...props}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...field} //Handels name="", value="", onChange="", onBlur=""
      label={label}
      type={type}
      inputProps={inputProps}
      helperText={errorText}
      error={!!errorText}
      fullWidth={true}
    />
  );
};
