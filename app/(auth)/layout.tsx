import React, { ReactNode } from "react";
import "./styles.css";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="authLayout">
      <div className="backgroundImage" />
      {children}
    </div>
  );
};

export default AuthLayout;
