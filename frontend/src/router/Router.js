import { Navigate, useRoutes } from "react-router-dom";
import Error404Page from "app/main/404/Error404Page";
import Layout from "app/main/layout/Layout";
import Content from "app/main/content/Content";
import SignIn from "app/main/sign-in";
import SignUp from "app/main/sign-up";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "features/auth/user_login/LoginAPI";

const AuthWrapper = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token =
        localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken");

      if (token) {
        try {
          dispatch(verifyToken(token))
            .then(() => {
              setAuthStatus(true);
            })
            .catch(() => {
              setAuthStatus(false);
            });
        } catch (error) {
          console.error("Token verification failed:", error);
          setAuthStatus(false);
        }
      } else {
        setAuthStatus(false);
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  if (authStatus === null) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth status
  }

  return children(authStatus);
};

/**
 *
 * @returns
 */
const Router = () => {
  const routing = useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <AuthWrapper>
              {(authStatus) =>
                authStatus ? <Content /> : <Navigate to="/sign-in" />
              }
            </AuthWrapper>
          ),
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
      ],
    },
    {
      path: "*",
      element: <Error404Page onGoHome={() => (window.location.href = "/")} />,
    },
  ]);

  return routing;
};

export default Router;
