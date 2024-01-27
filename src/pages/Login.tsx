import { Link } from "react-router-dom";
import { AppDispatch } from "../state/Store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginAsync } from "../features/users/users.slice";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";

const Login = () => {
  const [cookies, setCookes] = useCookies(["authUser"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const formData = {
    email: email,
    password: password,
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginAsync(formData)).then((response) => {
      if (response.payload != undefined) {
        setCookes("authUser", response.payload.data);
        toast.success(response.payload.message);
      } else {
        toast.error(response?.error.message);
      }
    });

    console.log("Cookie:", cookies);

    setEmail("");
    setPassword("");
  };

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
                name="email"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={handleChange}
              />
            </label>
            <label className="form-control w-full max-w-xs mb-8">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered w-full max-w-xs"
                value={password}
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className="btn btn-outline w-80"
              onClick={handleLogin}
            >
              Login
            </button>
            <ToastContainer />
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
