import { Link, useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";
import AuthService from "../services/AuthService";
import { useEffect, useMemo, useState } from "react";
import { OrderItem, User } from "../helper/interfaces";
import { toast } from "react-toastify";

const Checkout = () => {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [userData, setUserData] = useState<User>();
  const [subtotal, setSubtotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderItemId, setOrderItemId] = useState<number[]>([]);
  const [quantity, setQuantity] = useState<number[]>([]);

  const user = AuthService.getUser();
  const userId = user?.id;
  const navigate = useNavigate();

  const getOrderItems = async () => {
    const res = await ApiService.get(`order-item/userId/${userId}`);
    setItems(res.data.data);
  };

  useMemo(() => {
    const calculatedSubtotal = items?.reduce(
      (total: number, item: OrderItem) => total + item.quantity,
      0
    );
    const calculatedTotalAmount = items?.reduce(
      (amount: number, item: OrderItem) => amount + item.totalPrice,
      0
    );

    setSubtotal(calculatedSubtotal);
    setTotalAmount(calculatedTotalAmount);
    items.map((item) => setUserData(item.user));
    setOrderItemId(() => items.map((item) => item.id));
    setQuantity(() => items.map((item) => item.quantity));
  }, [items]);

  const handleOrder = async () => {
    const formData = {
      orderItemIds: orderItemId,
      quantities: quantity,
    };

    try {
      const res = await ApiService.post("order", formData);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/order");
      }, 1500);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getOrderItems();
  }, []);

  return (
    <div className="w-3/4 mx-auto">
      <div className=" p-8 mb-4">
        {items.length === 0 ? (
          <div>
            <div className="flex flex-wrap justify-center">
              <div className="card shadow-md m-2">
                <div className="card card-compact w-full h-[420px] bg-my_white text-[#030e12] hover:shadow-sm hover:shadow-[#030e12]">
                  <div className="card-body mb-4">
                    <img
                      src="/empty_cart1.png"
                      alt="empty cart"
                      className="w-full aspect-[3/2] object-contain"
                    />
                    <h4 className="text-2xl font-bold text-center mb-4">
                      No Item to buy!
                    </h4>
                    <div className="text-center mb-4">
                      <Link to="/" className="btn btn-outline">
                        Continue Shoping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-7 p-4 bg-my_white rounded-lg">
              <div className="divider text-lg mb-4">Product Summary</div>
              <h3 className="text-base mb-2">
                Deliver to: {userData?.firstName + " " + userData?.lastName}
              </h3>
              <div className="mb-8">
                <p className="text-sm">{userData?.address}</p>
                <p className="text-sm">{userData?.mobile}</p>
              </div>
              {items.map((item) => (
                <div key={item.id}>
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
            </div>

            <div className="col-span-5 p-4 bg-my_white rounded-lg">
              <div className="flex flex-col justify-between h-full ">
                <div>
                  <h3 className="divider text-lg mb-8">Order Summary</h3>

                  <div className="flex justify-between mb-8">
                    <div className="">
                      <p className="text-sm font-bold">Total Quantity</p>
                    </div>
                    <div className="">
                      <p className="text-sm font-semibold">{subtotal}</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <div className="">
                      <p className="text-sm font-bold">Total Payment</p>
                    </div>
                    <div className="">
                      <p className="text-sm font-semibold">Rs.{totalAmount}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-end">
                  <div className="w-[100%]">
                    <button
                      className="btn btn-outline w-[100%]"
                      onClick={() => handleOrder()}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Checkout;
