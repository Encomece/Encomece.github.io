import React, { Fragment, useState } from "react";
import { toast } from "react-toastify"; //For pop-up notification
import { Formik, Form, Field } from "formik"; //Using Formik
import * as Yup from "yup";
//Material-UI
import { Button, CircularProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Alert } from "@material-ui/lab";

//Http-custom-Hook
import { useHttpClient } from "../../customHooks/http-hook";

const ResetPswd = () => {
  const { sendRequest, isLoading } = useHttpClient();

  //States
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  //ValidationSchema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email!")
      .required("Please enter your email"),
  });

  //Form-Submit-Handler
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(async () => {
      setSubmitting(false);
      const data = JSON.stringify(values, null, 2);
      setErrorMessage(null);
      setSuccessMessage(null);
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BASE_URL + "/email/forgot",
          "POST",
          data,
          {
            "Content-Type": "application/json",
          }
        );
        if (response.ok) {
          setSuccessMessage(response.message);
          toast.success(response.message, { position: "top-right" });
        } else toast.warn(response.message, { position: "top-right" });
      } catch (err) {
        console.log(err.message);
        setErrorMessage(err.message);
        toast.error("Something went wrong, Please Try again", {
          position: "top-right",
        });
      }
    }, 500);
  };

  return (
    <>
      <div className="auth-forgot-pswd-container">
        <h2 style={{ fontFamily: "Ubuntu" }}>Forgot your password ?</h2>
        <div className="auth-forgot-password-text">
          To reset your password, please enter the email address of your
          account.
        </div>
      </div>
      <div className="auth-forgot-pswd-form">
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <div className="auth-feild">
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  helperText="Please Enter Email"
                  fullWidth
                />
              </div>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  fullWidth
                  style={{ margin: "20px 0 10px 0" }}
                >
                  Reset My Password
                </Button>
              )}
              <br />
              {!!successMessage && (
                <Alert severity="success" style={{ margin: "20px 0 10px 0" }}>
                  {successMessage}
                </Alert>
              )}
              {!!errorMessage && (
                <Alert severity="error" style={{ margin: "20px 0 10px 0" }}>
                  {errorMessage &&
                    (errorMessage.length > 200
                      ? "Signup Attempt Failed"
                      : errorMessage)}
                </Alert>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ResetPswd;
