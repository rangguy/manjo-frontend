import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  isRouteErrorResponse,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Transaction from "./pages/Transaction";
import "./index.css";

const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    const statusCode = error.status || error.statusCode;
    if (statusCode === 404) {
      return <p>Error Not Found!</p>;
    }

    if (statusCode === 500) {
      return <p>Error server {error.statusText}</p>;
    }
  }
  return <p>Error Server</p>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Transaction title="transaction" />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
