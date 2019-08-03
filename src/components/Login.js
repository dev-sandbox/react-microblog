import React from "react";
import { Formik } from "formik";

class Login extends React.Component {
  render() {
      const { user } = this.props;
    return (
      <Formik
        initialValues={user}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        validate={values => {
          let errors = {};

          // Email
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          // Password
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <p>User name</p>
              <input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <p style={{ color: "red" }}>{errors.email}</p>
            </div>

            <div>
              <p>Password</p>
              <input
                type="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              <p style={{ color: "red" }}>
                {errors.password}
              </p>
            </div>

            <div>
              <input type="submit" value="Login" />
            </div>
          </form>
        )}
      />
    );
  }
}

export default Login;
