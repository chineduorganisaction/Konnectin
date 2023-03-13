import { useState } from "react";
import { Link } from "react-router-dom";
import { FieldForm } from "../../../components/form/";
import ForgetPassword from "./forgetPassword";
import { loginForm } from "../signData";

function Login() {
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <h1 className="text-4xl">Welcome back...</h1>
        <p>Continue from where you stopped</p>
      </div>
      <div className="w-full flex flex-col items-stretch text-xs md:text-sm">
        <FieldForm
          handleSubmit={handleSubmit}
          params={loginForm}
          formFor="Sign in"
          errorState={errorState}
          errorMessage={errorMessage}
        >
          <ForgetPassword />
        </FieldForm>

        {/* Log In Link */}
        <p className="self-center mt-6">
          You don't have an account?{" "}
          <Link to="/signup" className="text-secondary-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;