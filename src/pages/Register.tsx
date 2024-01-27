import { Link } from "react-router-dom";

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
};

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4">
        <div className="flex justify-center">
          <div className="flex bg-my_white rounded-l-xl">
            <img
              className="w-full aspect-[3/2] object-contain p-1"
              src="/ecommerce.png"
            />
          </div>
          <div className="p-8 rounded-r-xl bg-my_white">
            <h1 className="text-2xl font-bold">Register to Fcommerce</h1>
            <h2 className="text-xl mb-3 font-medium">
              Created & Designed by Munazzar
            </h2>
            <p className="text-red-500 font-semibold mb-1"></p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-2">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Mobile</span>
                  </div>
                  <input
                    name="mobile"
                    type="text"
                    placeholder="Last name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Password</span>
                  </div>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs mt-12">
                  <div className="flex justify-between">
                    <div>
                      <span className="label-text">
                        Want to become a seller?
                      </span>
                    </div>
                    <div>
                      <input type="checkbox" className="checkbox" />
                    </div>
                  </div>
                </label>
              </div>
              <label className="form-control w-full mb-4">
                <div className="label">
                  <span className="label-text">Address</span>
                </div>
                <textarea
                  name="address"
                  placeholder="Enter your full address here"
                  className="input input-bordered w-full min-h-[150px]"
                />
              </label>
              <div className="flex justify-center">
                <button type="submit" className="btn btn-outline w-72">
                  Register
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <p>
                Already have an account? &nbsp;
                <Link className="text-blue-800" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
