import Lottie from "lottie-react";
import login_anim from "../../assets/animations/login-anim.json";
import { FaLinkedin } from "react-icons/fa";

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5">Login with!</h1>
          <button className="btn btn-outline btn-wide normal-case text-lg">
            <FaLinkedin></FaLinkedin>
            Linkedin
          </button>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm">
          <Lottie animationData={login_anim} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;
