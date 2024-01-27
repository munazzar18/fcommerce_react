const Order = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-6">
          <div className="p-8 mb-4 rounded-b-lg bg-my_white">
            <h3 className="text-base mb-2">Product Title</h3>
            <div className="flex justify-between">
              <div>
                <p className="text-sm">Product Image</p>
              </div>
              <div>
                <p className="text-sm">Product Quantity</p>
              </div>
              <div>
                <p className="text-sm">Product Price</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="p-8 mb-4 bg-my_white rounded-b-lg">
            <div className="mb-4">
              <p className="text-sm mb-4">Order is placed</p>
              <div className="font-bold">Select Payment Method</div>
            </div>
            <div className="flex mb-2">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="text-md font-semibold mr-4">
                    Cash on delivery
                  </span>
                  <input type="checkbox" name="cod" className="checkbox" />
                </label>
              </div>
            </div>
            <div className="flex mb-2">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="text-md font-semibold mr-4">
                    Payment via Credit Card
                  </span>
                  <input
                    type="checkbox"
                    name="creditCard"
                    className="checkbox"
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-[100%]">
                <button className="btn btn-outline w-[100%]">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
