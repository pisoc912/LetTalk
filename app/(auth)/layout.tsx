import React, { ReactNode } from "react";
import "./styles.css"; // 引入CSS文件

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="authLayout">
      <div className="backgroundImage" />
      <div className="authLayoutContent">
          <h1>Imaging a placing...</h1>
        <p>
          ...where you can belong to any school club, any gaming group, or a
          worldwide art community.
        </p>
        <p>Where just you and anyone can spend time together.</p>
        <p>
          A place where strangers can become acquaintances...or maybe even
          friends.
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
