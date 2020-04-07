import { useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Formik } from "formik";
import * as React from "react";
import * as yup from "yup";
import { Button } from "./Button";
import { InputTextField } from "./InputTextField";
import { theme } from "../theme";
import createSpacing from "@material-ui/core/styles/createSpacing";

/**
 * INTERFACES
 */

interface Values {
  adress: {
    address_line_1: string;
    address_zipcode: string;
    address_town: string;
  };
  contact_information: {
    contact_name: string;
    contact_phone: string;
    contact_email: string;
  };
  people_in_household: number;
  status: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

/**
 * STYLES
 */

const useStyles = makeStyles(_theme => ({
  gridContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

/**
 * VALIDATIONS
 */

const validationSchema = yup.object({
  contact_name: yup.string().required("Bitte angeben!")
});

/**
 * COMPONENT
 */

export const RecipientForm: React.FC<Props> = ({ onSubmit }) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();
  return (
    //Formik holds all the functions of the form
    <Formik
      initialValues={{
        contact_name: "",
        people_in_household: "",
        adress: {
          address_line_1: "",
          address_zipcode: "",
          address_town: ""
        },
        contact_information: {
          contact_name: "",
          contact_phone: "",
          contact_email: ""
        }
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log("submit: ", data);
        //API Post with axios old
        /* axios.default
          .post("/api/v1/recipients", data)
          .then(function(response) {
            if (response.status === 200) {
            }
          })
          .catch(function(error) {
            console.log(error);
          }); */
        // Fetch API function call
        setSubmitting(false);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={9}>
              <InputTextField
                name={"contact_information.contact_name"}
                label="Vollständiger Name"
              />
            </Grid>
            <Grid item xs={3}>
              <InputTextField
                name="people_in_household"
                type="number"
                inputProps={{ min: 1, max: 2 }}
                label="Pers."
              />
            </Grid>
            <Grid item xs={12}>
              <InputTextField
                name={"adress.address_line_1"}
                label="Straße und Hausnummer"
              />
            </Grid>
            <Grid item xs={4}>
              <InputTextField name={"adress.address_zipcode"} label="PLZ" />
            </Grid>
            <Grid item xs={8}>
              <InputTextField name={"adress.address_town"} label="Stadt" />
            </Grid>
            <Grid item xs={12}>
              <InputTextField
                name={"contact_information.contact_phone"}
                label="Telefon"
              />
            </Grid>
            <Grid item xs={12}>
              <InputTextField
                name={"contact_information.contact_email"}
                label="E-Mail"
              />
            </Grid>
            <Button
              style={{ marginTop: "1rem", fontSize: "1rem" }}
              disabled={isSubmitting}
              type="submit"
            >
              Als Empfänger melden
            </Button>
          </Grid>
          <div>
            <pre>
              {//Only Developing - Delete after!!!
              JSON.stringify(values, null, 2)}
            </pre>
          </div>
        </Form>
      )}
    </Formik>
  );
};
