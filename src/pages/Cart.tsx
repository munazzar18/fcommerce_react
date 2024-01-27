import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
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
                    {/* row 1 */}
                    <tr>
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
                                src="/tailwind-css-component-profile-2@56w.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Product Title</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Desktop Support Technician
                        </span>
                      </td>
                      <td>Purple</td>
                      <th>
                        <div className="flex items-center">
                          <button
                            className="btn btn-sm btn-circle mr-2"
                            onClick={handleIncrement}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                          <input
                            id="quantity"
                            type="text"
                            value={quantity}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setQuantity(e.target.value)}
                            className="input input-border-0 w-16 text-center"
                          />
                          <button
                            className="btn btn-sm btn-circle ml-2"
                            onClick={handleDecrement}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-span-5 p-4 bg-my_white">
            <h3 className="text-xl mb-4">Order Summary</h3>
            <div className="flex justify-between mb-4">
              <div className="">
                <p className="text-md">Subtotal (1 Items)</p>
              </div>
              <div className="">
                <p className="text-md">Rs.422</p>
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
                <p className="text-md text-orange-400 font-semibold">Rs.422</p>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-[100%]">
                <Link to="/checkout" className="btn btn-outline w-[100%]">
                  Proceed To Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
