import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero min-h-screen text-white"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Start Your Campaign</h1>
          <p className="mb-5">
            Empower Dreams, Transform Futures: Join the ChangeMakers Initiative
            and Be the Catalyst for Positive Global Change!
          </p>
          <Link
            to="/login"
            className="btn btn-outline btn-wide normal-case text-lg text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
