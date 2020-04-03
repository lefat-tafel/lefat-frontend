import React from "react";
import { Formik } from "formik";
import { Grid, TextField, Button, makeStyles } from "@material-ui/core";
import { useAuthProvider } from "../../providers/auth.provider";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { TFunction } from "i18next";

const SignUpSchema = (t: TFunction) =>
  Yup.object().shape({
    email: Yup.string()
      .min(3, t("errors.textMinLength"))
      .max(50, t("errors.textMaxLength"))
      .required(t("errors.required")),
    password: Yup.string()
      .min(3, t("errors.textMinLength"))
      .max(50, t("errors.textMaxLength"))
      .required(t("errors.required")),
  });

const useStyles = makeStyles({
  form: {
    marginTop: "5rem",
  },
});

export const RegistrationPage = () => {
  const authProvider = useAuthProvider();
  const { t } = useTranslation("signupForm");
  const history = useHistory();
  const validationSchema = SignUpSchema(t);
  const classes = useStyles();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        debugger;
        await authProvider.signUp!(values);
        setSubmitting(false);
        history.push("/welcome");
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          noValidate
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Grid container>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                label={t("fields.email")}
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                label={"fields.password"}
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button color="primary" type="submit" disabled={isSubmitting || !touched}>
            {t("submit")}
          </Button>
          {JSON.stringify(errors)}
        </form>
      )}
    </Formik>
  );
};
