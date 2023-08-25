import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyCampaign = () => {
  return (
    <div className="w-[80%] mx-auto space-y-5">
      <Link
        to="/add-campaign"
        className="mt-5 btn btn-sm btn-outline normal-case"
      >
        <FaPlusCircle></FaPlusCircle>
        Add New
      </Link>
      <div className="alert rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>Oops! No campaign create yet.</span>
      </div>
    </div>
  );
};

export default MyCampaign;
