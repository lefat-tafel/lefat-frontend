import * as axios from "axios";
import { Form, Formik } from "formik"; // https://github.com/jaredpalmer/formik
import * as React from "react";
import * as yup from "yup"; // https://github.com/jquense/yup
import { Button } from "./Button";
import { InputTextField } from "./InputTextField";

interface Values {
  contact_name: string;
  address_line_1: string;
  address_zipcode: string;
  address_town: string;
  contact_phone: string;
  contact_email: string;
}
interface Props {
  onSubmit: (values: Values) => void;
}

//Can be used as a very easy and powerful validation schema
const validationSchema = yup.object({
  contact_name: yup.string().required("Bitte angeben!")
});

export const RecipientForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    //Formik holds all the functions of the form
    <Formik
      initialValues={{
        contact_name: "",
        address_line_1: "",
        address_zipcode: "",
        address_town: "",
        contact_phone: "",
        contact_email: ""
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log("submit: ", data);
        //API Post with axios
        axios.default.post("/api/v1/recipients", data).then(function (response) {
          if (response.status === 200) {
              
          }
        }).catch(function (error) {
          console.log(error);
        });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <InputTextField
              name="contact_name"
              type="input"
              label="Vollständiger Name"
            />
          </div>
          <div>
            <InputTextField
              name="address_line_1"
              label="Straße und Hausnummer"
            />
          </div>
          <div>
            <InputTextField name="address_zipcode" label="PLZ" />
          </div>
          <div>
            <InputTextField name="address_town" label="Stadt" />
          </div>
          <div>
            <InputTextField name="contact_phone" label="Telefon" />
          </div>
          <div>
            <InputTextField name="contact_email" label="E-Mail" />
          </div>
          <div>
            <Button
              style={{ marginTop: "1rem", fontSize: "1rem" }}
              disabled={isSubmitting}
              type="submit"
            >
              Als Empfänger melden
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
