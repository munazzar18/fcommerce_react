import { useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";
import AuthService from "../services/AuthService";
import { useEffect, useState } from "react";
import { OrderItem } from "../helper/interfaces";

const Checkout = () => {
  const [items, setItems] = useState<OrderItem[]>([]);
  const user = AuthService.getUser();
  const userId = user?.id;
  const navigate = useNavigate();

  const getOrderItems = async () => {
    const res = await ApiService.get(`order-item/userId/${userId}`);
    setItems(res.data.data);
  };

  const handleOrder = () => {
    navigate("/order");
  };

  useEffect(() => {
    getOrderItems();
  }, []);

  return (
    <div className="w-3/4 mx-auto">
      <div className=" p-8 mb-4">
        <div className="grid grid-cols-12 gap-3">
          {items.map((item) => (
            <div
              className="col-span-7 p-4 bg-my_white rounded-lg"
              key={item.id}
            >
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
                <h3 className="text-base mb-2 font-bold">
                  {" "}
                  {item.product.title}{" "}
                </h3>
                <div className="flex justify-between items-center">
                  <div>
                    <img
                      src={item.product.images[0]}
                      className="w-28 aspect-[3/2] object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm mb-2">No. of Items</p>
                    <p className="text-md font-bold text-center">
                      {item.quantity}{" "}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm mb-2">Total Price</p>
                    <p className="text-md font-bold text-center">
                      Rs.{item.totalPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {items.map((item) => (
            <div
              className="col-span-5 p-4 bg-my_white rounded-lg"
              key={item.id}
            >
              <h3 className="text-lg mb-4">Order Summary</h3>
              <div className="flex justify-between mb-4">
                <div className="">
                  <p className="text-sm font-bold">Items Total</p>
                </div>
                <div className="">
                  <p className="text-sm font-semibold">
                    Rs.{item.product.price}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div className="">
                  <p className="text-sm font-bold">Items Quantity</p>
                </div>
                <div className="">
                  <p className="text-sm font-semibold">{item.quantity}</p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div className="">
                  <p className="text-sm font-bold">Total Payment</p>
                </div>
                <div className="">
                  <p className="text-sm font-semibold">Rs.{item.totalPrice}</p>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-[100%]">
                  <button
                    className="btn btn-outline w-[100%]"
                    onClick={handleOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Checkout;
