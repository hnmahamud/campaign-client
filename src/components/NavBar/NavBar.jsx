import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { logout, isAuthenticated, user } = useAuth0();
  const location = useLocation();
  return (
    <div
      className={
        location.pathname === "/my-campaign"
          ? "navbar bg-base-200"
          : "absolute navbar bg-base-200"
      }
    >
      <div className="w-[80%] mx-auto">
        <div className="navbar bg-base-200">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {isAuthenticated && <p className="mb-5">{user.nickname}</p>}
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="my-campaign">My Campaign</NavLink>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Camp</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="my-campaign">My Campaign</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {isAuthenticated && (
              <p className="hidden md:block mr-5">{user.nickname}</p>
            )}
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="btn btn-sm btn-outline normal-case"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-sm btn-outline normal-case">
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
