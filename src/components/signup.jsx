import React, { Component } from "react";
import Form from "./form";
import Joi from "joi-browser";
import apiClient from "../helper/apiclient";

class SignUp extends Form {
  state = {
    data: { firstName: "", lastName: "", email: "", password: "" },
    errors: {},
  };

  // email = React.createRef();
  doSubmit = async () => {
    try {
      const response = await apiClient.post("/Auth/signUp", this.state.data);
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup failed:", error);
      this.setState({
        errors: {
          ...this.state.errors,
          api: error.response?.data?.message || "Signup failed",
        },
      });
    }
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().min(8).required().label("Password"),
    firstName: Joi.string().required().label("First name"),
    lastName: Joi.string().required().label("Last name"),
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div className="container d-flex min-vh-100">
        <div className="row align-items-center justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-sm">
              <div className="card-body p-4 p-sm-5">
                <div className="text-center mb-4">
                  <h3 className="mb-2">Sign up</h3>
                  <p className="text-muted">Create new account</p>
                </div>

                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("firstName", "First name", "text")}

                  {this.renderInput("lastName", "Last name", "text")}

                  {this.renderInput("email", "Email", "email")}

                  {this.renderInput("password", "Password", "password")}

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-decoration-none">
                      Forgot password?
                    </a>
                  </div>

                  {this.renderButton("Sign up")}
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="text-decoration-none">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
