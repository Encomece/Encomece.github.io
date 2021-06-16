import React, { useContext } from "react";

//Material-ui core componets
import { Button, LinearProgress, Box } from "@material-ui/core";
import { DatePicker } from "formik-material-ui-pickers";

//Formik Components
import { Formik, Form, Field } from "formik"; //Using Formik
import { Autocomplete } from "formik-material-ui-lab";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { TextField } from "formik-material-ui";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import MuiTextField from "@material-ui/core/TextField";

import { TaskType } from "./TaskData/TaskType";
import { useHttpClient } from "../../../../customHooks/http-hook";
import { AuthContext } from "../../../../context/authContext";
import { TaskContext } from "../../../../context/taskContext";

//styles
import "../css/style.css";

const FormContainer = () => {
  //custom-hook for all http work
  const { sendRequest, isLoading } = useHttpClient();

  //context
  const auth = useContext(AuthContext);
  const taskContext = useContext(TaskContext);

  //form initial-values
  const initialValues = {
    projectName: "",
    projectType: "none",
    taskDescription: "",
    dueDate: new Date(),
  };

  //Vaidation the input
  const validationSchema = Yup.object().shape({
    projectName: Yup.string().required("Add a Project"),
  });

  //Submitting the form
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(async () => {
      setSubmitting(false);
      const formData = JSON.stringify(values, null, 2);
      var data = JSON.parse(formData);
      var id = uuidv4();
      console.log(auth.userName);
      var extraData = {
        userId: auth.userId,
        userName: auth.userName,
        userEmail: auth.userEmail,
        projectId: id,
      };
      data = { ...data, ...extraData };
      data = JSON.stringify(data);
      console.log(data);
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BASE_URL + "/dashboard/workspace/project",
          "POST",
          data,
          {
            "Content-Type": "application/json",
          }
        );
        console.log(response);
        if (response.ok) {
          taskContext.setAllTasksHandler(response.task);
          console.log(response.message);
          resetForm({ values: "" });
        }
      } catch (error) {
        console.log(error);
      }
    }, 500);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting, touched, errors }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Form>
            <div className="dash-createTask-formContainer">
              <div className="dash-createTask-feild">
                <Field
                  component={TextField}
                  name="projectName"
                  type="text"
                  label="Task Heading"
                  style={{ width: "40%" }}
                />
              </div>
              <div className="dash-createTask-feild">
                <Field
                  component={Autocomplete}
                  name="projectType"
                  options={TaskType}
                  style={{ width: "40%" }}
                  renderInput={(params) => (
                    <MuiTextField
                      {...params}
                      helperText={touched["projectType"] && errors["projectType"]}
                      label="Task Type"
                    />
                  )}
                />
              </div>
              <div className="dash-createTask-feild">
                <Field
                  component={TextField}
                  name="taskDescription"
                  type="textarea"
                  row="5"
                  fullWidth
                  label="Task Description"
                  style={{ width: "40%" }}
                />
              </div>
              <div className="dash-createTask-feild">
                <Field
                  component={DatePicker}
                  name="dueDate"
                  label="Due Date"
                  style={{ width: "40%" }}
                />
              </div>
              <div className="dash-createTask-button">
                {isLoading && (
                  <>
                    <br />
                    <LinearProgress />
                    <br />
                  </>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  style={{
                    margin: "5px 0 0 0",
                    borderRadius: "5px",
                    width: "130px",
                    backgroundColor: "#091D55",
                  }}
                >
                  Add Task
                </Button>
              </div>
            </div>
          </Form>
        </MuiPickersUtilsProvider>
      )}
    </Formik>
  );
};

export default FormContainer;
