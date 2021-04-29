import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getUserId } from "../../store/user/select";
import { getAccountType } from "../../store/user/select";

const ProtectedRoute = ({ isLoggedIn, userType, location, ...rest }) => {
  if (!isLoggedIn) {
    return <Route {...rest} />;
  }

  if (useSelector(getUserId) !== "") {
    if (userType) {
      if (userType.indexOf(useSelector(getAccountType)) !== -1) {
        return <Route {...rest} />;
      }
    } else {
      return <Route {...rest} />;
    }
  }

  return (
    <Redirect
      to={{
        pathname: "/admin/auth/login",
        state: {
          from: location,
        },
      }}
    />
  );
};

export default ProtectedRoute;

