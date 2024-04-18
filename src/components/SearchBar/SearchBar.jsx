import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{
        query: "",
      }}
      onSubmit={(values, action) => {
        onSearch(values.query), action.resetForm();
      }}
    >
      <Form>
        <Field type="text" name="query"></Field>
        <button type="submit"></button>
      </Form>
    </Formik>
  );
}
