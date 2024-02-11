import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import AuthService from "../services/AuthService";
import { Cart } from "../helper/interfaces";
import CartContext from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserCart = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { cartItem, addToCart, removeFromCart, setCartItem, getUserCart } =
    useContext(CartContext);
  const user = AuthService.getUser();
  const userId = user?.id;

  const getMycart = async () => {
    const res = await ApiService.get(`cart/userCart/${userId}`);
    setCarts(res.data?.data);
  };

  useEffect(() => {
    getMycart();
  }, [cartItem]);

  const handleIncrement = async (productId: number, quantity: number) => {
    const success = await addToCart(productId, quantity);
    const ItemQuantity = success.data.quantity;
    setCartItem(ItemQuantity);
    toast.success(success.message);
    getUserCart(userId);
  };

  const handleDecrement = async (productId: number, quantity: number) => {
    const success = await removeFromCart(productId, quantity);
    const itemQuantity = success.data.quantity;
    setCartItem(itemQuantity);
    toast.success(success.message);
    getUserCart(userId);
  };

  const handleCheckout = async (productId: number, quantity: number) => {
    const formData = {
      productId: productId,
      quantity: quantity,
    };
    try {
      const res = await ApiService.post(`order-item`, formData);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/checkout");
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-3/4 mx-auto">
      <div className=" p-8 mb-4">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-7 bg-my_white">
            <h3 className="text-2xl p-4">Item(s) in cart</h3>
            <div className="mb-2">
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    {carts.map((cart) => (
                      <tr key={cart.id}>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={cart.product.images[0]}
                                  alt={cart.product.title}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">
                                {cart.product.title}
                              </div>
                              <div className="text-sm opacity-50">
                                Rs.{cart.product.price}/-
                              </div>
                            </div>
                          </div>
                        </td>

                        <td>
                          <p className="text-base font-semibold">
                            Rs.{cart.totalPrice}/-
                          </p>
                        </td>
                        <th>
                          <div className="flex items-center">
                            <button
                              className="btn btn-sm btn-circle mr-2"
                              onClick={() =>
                                handleIncrement(cart.product.id, quantity)
                              }
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                            <ToastContainer />
                            <input
                              id="quantity"
                              type="text"
                              value={cart.quantity}
                              onChange={(e: any) => setQuantity(e.target.value)}
                              className="input input-border-0 w-16 text-center"
                            />
                            <button
                              className="btn btn-sm btn-circle ml-2"
                              onClick={() =>
                                handleDecrement(cart.product.id, quantity)
                              }
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                          </div>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-span-5 p-4 bg-my_white">
            <h3 className="text-xl mb-4">Order Summary</h3>
            {carts.map((cart) => (
              <div key={cart.id}>
                <div className="flex justify-between mb-4">
                  <div className="">
                    <p className="text-md">Subtotal ({cart.quantity} Items)</p>
                  </div>
                  <div className="">
                    <p className="text-md">Rs.{cart.totalPrice}/-</p>
                  </div>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="">
                    <p className="text-md">Shipping Fee</p>
                  </div>
                  <div className="">
                    <p className="text-md">Free</p>
                  </div>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="">
                    <p className="text-md">Total</p>
                  </div>
                  <div className="">
                    <p className="text-md text-orange-400 font-semibold">
                      Rs.{cart.totalPrice}/-
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="w-[100%]">
                    <button
                      type="button"
                      onClick={() => handleCheckout(cart.product.id, quantity)}
                      className="btn btn-outline w-[100%]"
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
