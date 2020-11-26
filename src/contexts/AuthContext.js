import React from "react";
import { authMethods } from "../firebase/methods";

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  return (
    <firebaseAuth.Provider
      value={{
        test: "context is working",
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
