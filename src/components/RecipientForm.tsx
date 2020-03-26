import { Field, Form, Formik } from "formik";
import * as React from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";
import * as axios from "axios";

interface Values {
  contact_name: string;
  address_line_1: string;
  address_zipcode: string;
  address_town: string;
  contact_phone: string;
  contact_email: string;
}
interface Props {
  onSubmit: (values: Values) => void
}



export const RecipientForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        contact_name: "",
        address_line_1: "",
        address_zipcode: "",
        address_town: "",
        contact_phone: "",
        contact_email: ""
      }}
      onSubmit={values => {  
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              name="contact_name"
              label="Vollständiger Name"
              component={InputField}
            />
          </div>
          <div>
            <Field
              name="address_line_1"
              label="Straße und Hausnummer"
              component={InputField}
            />
          </div>
          <div>
            <Field name="address_zipcode" label="PLZ" component={InputField} />
          </div>
          <div>
            <Field name="address_town" label="Stadt" component={InputField} />
          </div>
          <div>
            <Field
              name="contact_phone"
              label="Telefon"
              component={InputField}
            />
          </div>
          <div>
            <Field name="contact_email" label="E-Mail" component={InputField} />
          </div>
          <div>
            <Button
              style={{ marginTop: "1rem", fontSize: "1rem" }}
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
