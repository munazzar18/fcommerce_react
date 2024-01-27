const Checkout = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div className=" p-8 mb-4">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-7 p-4 bg-my_white rounded-lg">
            <h3 className="text-base mb-2">Deliver to: Buyer Name</h3>
            <div className="mb-8">
              <p className="text-sm">
                House no 25, Hussain Block, Cheema Town , phase1 Near govt
                Junior Model Girls High School Bahawalpur, Chaudhry town,
                Bahawalpur, Punjab, Near train station
              </p>
              <p className="text-sm">03047279400</p>
            </div>
            <div className="divider">Product Summary</div>
            <div className="mb-4">
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
          <div className="col-span-5 p-4 bg-my_white rounded-lg">
            <h3 className="text-lg mb-4">Order Summary</h3>
            <div className="flex justify-between mb-4">
              <div className="">
                <p className="text-sm font-bold">Items Total</p>
              </div>
              <div className="">
                <p className="text-sm font-semibold">Rs.422</p>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="">
                <p className="text-sm font-bold">Delivery Fee</p>
              </div>
              <div className="">
                <p className="text-sm font-semibold">Free</p>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="">
                <p className="text-sm font-bold">Total Payment</p>
              </div>
              <div className="">
                <p className="text-sm font-semibold">Rs.422</p>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-[100%]">
                <button className="btn btn-outline w-[100%]">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
