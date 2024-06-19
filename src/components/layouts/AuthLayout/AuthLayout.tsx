import React from "react";
import PropTypes from "prop-types";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-dark-blue min-h-screen flex flex-col items-center justify-center">
      <h4 className="text-white my-4 font-bold font-mono text-3xl">Layer3 Admin</h4>
      {children}
    </div>
  );
}

AuthLayout.propTypes = {};

export default AuthLayout;
