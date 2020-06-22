import React from "react";

import "./sign-in-and-sign-out.styles.scss";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndSignOut = () => (
  <div className="sign-in-and-sign-out">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignOut;
