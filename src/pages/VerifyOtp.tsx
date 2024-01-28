const VerifyOtp = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex justify-center">
        <div className="bg-my_white rounded-xl w-96 mt-28">
          <div className="p-8">
            <h3 className="text-md font-bold">
              Enter the otp to complete registration
            </h3>
            <form>
              <label className="form-control w-full max-w-xs mb-8">
                <div className="label">
                  <span className="label-text">OTP</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter OTP here"
                  name="otp"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </form>
            <div className="w-full">
              <button className="btn btn-outline w-full">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
