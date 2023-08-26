import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { FaPlusCircle, FaMailBulk } from "react-icons/fa";

const CampaignDetails = () => {
  const { id } = useParams();

  const location = useLocation();
  const data = { pathname: location.pathname, id };

  const { data: singleCampaign = {}, isLoading } = useQuery({
    queryKey: ["single-campaign", id],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/single-campaign/${id}`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner fullScreen={false}></LoadingSpinner>;
  }

  return (
    <div className="w-[80%] mx-auto">
      <div className="card card-side bg-base-100 shadow-md rounded-md border mt-5">
        <div className="card-body">
          <h2 className="card-title">Campaign Title: {singleCampaign.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 my-5">
            <div>
              <p>
                <strong>Goal:</strong> {singleCampaign.goal}
              </p>
              <p>
                <strong>Criteria:</strong> {singleCampaign.criteria}
              </p>
            </div>
            <div>
              <p>
                <strong>Start Date:</strong> {singleCampaign.start_date}
              </p>
              <p>
                <strong>End Date:</strong> {singleCampaign.end_date}
              </p>
            </div>
          </div>
          <p>
            <strong>Content:</strong> {singleCampaign.content}
          </p>
        </div>
      </div>

      <div className="flex justify-between my-5">
        <Link
          to="/add-prospect"
          state={data}
          className="mt-5 btn btn-sm btn-outline normal-case"
        >
          <FaPlusCircle></FaPlusCircle>
          Add Prospect
        </Link>

        <Link
          to="/add-campaign"
          className="mt-5 btn btn-sm btn-outline normal-case"
        >
          <FaMailBulk></FaMailBulk>
          Send Email
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignDetails;
