import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./validationSchema";
import "./userForm.css";
import { TUserFormProps } from "./type";

const UserForm: React.FC<TUserFormProps> = ({
  onSubmit,
  initialValues,
  editIndex,
  onVisible,
}) => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "skyblue",
        }}
      >
        <div className="formContainer">
          <div style={{ textAlign: "center" }}>
            <h1>LOG IN</h1>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {() => (
              <Form className="formy">
                <Field
                  type="text"
                  placeholder="Name"
                  className="xyz"
                  name="userName"
                />

                <ErrorMessage
                  name="userName"
                  component="div"
                  className="error"
                />
                <br />
                <Field
                  type="email"
                  placeholder="Email"
                  className="xyz"
                  name="userEmail"
                />
                <ErrorMessage
                  name="userEmail"
                  component="div"
                  className="error"
                />
                <br />
                {editIndex === null ? (
                  <button type="submit" className="xyz" onClick={onVisible}>
                    Submit
                  </button>
                ) : (
                  <button className="xyz">Update</button>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default UserForm;
