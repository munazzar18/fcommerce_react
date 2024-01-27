import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex justify-center">
        <div className="flex bg-my_white rounded-l-xl w-96 mt-28">
          <img
            className="w-full aspect-[3/2] object-contain p-1"
            src="/ecommerce.png"
          />
        </div>
        <div className="p-16 rounded-r-xl mt-28 bg-my_white">
          <h1 className="text-2xl  font-bold">Welcome to Fcommerce</h1>
          <h2 className="text-xl mb-3  font-medium">
            Created & Designed by Munazzar
          </h2>
          <p className="text-red-500 font-semibold mb-1"></p>
          <form>
            <label className="form-control w-full max-w-xs mb-8">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                placeholder="Email"
                v-model="email"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs mb-8">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="Password"
                v-model="password"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <button type="submit" className="btn btn-outline w-80">
              Login
            </button>
          </form>
          <div className="">
            <p>
              Don't have an account? &nbsp;
              <Link className="text-blue-800" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
