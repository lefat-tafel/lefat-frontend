import { Field, Form, Formik } from "formik";
import * as React from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";

interface Values {
  firstName: string;
  lastName: string;
  phone: string;
}
interface Props {
  onSubmit: (values: Values) => void;
}

export const RecipientForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", phone: "" }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field name="firstName" label="Vorname" component={InputField} />
          </div>
          <div>
            <Field name="lastName" label="Nachname" component={InputField} />
          </div>
          <div>
            <Field name="phone" label="Telefon" component={InputField} />
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
