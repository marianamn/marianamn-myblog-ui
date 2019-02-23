import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import sessionServices from "./sessionServices";

const getGlobalStateFromStorage = () => {
  const token = sessionServices.get("token");
  const user = sessionServices.get("user");

  return {
    token,
    user,
  };
};

const AdminOnlyState = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one, or to the
  // landing page if none is specified and the user is already logged in
  redirectPath: "/",

  // This prevents us from adding the query parameter when we send the user away
  // from the login page
  allowRedirectBack: false,

  // Determine if the user is authenticated or not
  authenticatedSelector: () => {
    const currentUser = getGlobalStateFromStorage();
    const isUserAdmin = currentUser.token && currentUser.user.role === "admin";
    return isUserAdmin;
  },
  wrapperDisplayName: "UserIsNotAuthenticated",
});

export { AdminOnlyState, getGlobalStateFromStorage };
