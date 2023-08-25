import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-eog6bj7silaulgkm.us.auth0.com"
    clientId="Xu7dRqRkjbLbgZDxvIEhhv9dPVhXNeB7"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router}></RouterProvider>
  </Auth0Provider>
);
