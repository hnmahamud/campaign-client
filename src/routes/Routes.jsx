import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyCampaign from "../pages/MyCampaign/MyCampaign";
import PrivateRoute from "./PrivateRoute";
import AddCampaign from "../pages/AddCampaign/AddCampaign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/my-campaign",
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-campaign",
        element: (
          <PrivateRoute>
            <AddCampaign></AddCampaign>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
