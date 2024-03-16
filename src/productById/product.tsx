import { useContext, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import CartContext from "../context/CartContext";
import AuthService from "../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import { Product } from "../helper/interfaces";
import ApiService from "../services/ApiService";
import { CartContextProps } from "../helper/interfaces";

const product = () => {
  const isLoggedIn = AuthService.isAuthenticated();
  const navigate = useNavigate();
  const { id }: any = useParams();
  const { setCartItem, addToCart, getUserCart } = useContext(
    CartContext
  ) as CartContextProps;
  const [product, setProduct] = useState<Product>();

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    if (isLoggedIn) {
      const success = await addToCart(id, quantity);
      const itemQuantity = success.data.quantity;
      setCartItem(itemQuantity);
      toast.success(success.message);
      getUserCart(2);
    } else {
      navigate("/login");
    }
  };

  const handleBuyNow = async () => {
    if (isLoggedIn) {
      const formData = {
        productId: id,
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
    } else {
      navigate("/login");
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const getProductById = async () => {
    const res = await ApiService.get(`product/${id}`);
    setProduct(res.data.data);
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className="w-3/4 mx-auto mt-4 ">
      <div className="grid grid-cols-3 gap-2 mb-4 ">
        <div className="mb-4 rounded-lg bg-my_white p-4">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            dynamicHeight={true}
            className="rounded-b-lg"
          >
            {product?.images.map((img) => (
              <div className="h-80" key={img}>
                <img
                  className="w-full aspect-square object-contain"
                  src={img}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="mb-4 rounded-lg bg-my_white p-8">
          <div className="mb-8">
            <h1 className="text-xl font-bold mb-8"> {product?.title} </h1>
            <h2 className="text-xl font-bold">Rs.{product?.price} </h2>
          </div>

          <div className="flex justify-start items-center mb-8">
            <label htmlFor="quantity" className="text-lg mr-4">
              Quantity
            </label>
            <div className="flex items-center">
              <button
                className="btn btn-sm btn-circle mr-2"
                onClick={handleIncrement}
                disabled={quantity === product?.quantity}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <input
                id="quantity"
                type="text"
                value={quantity}
                max={product?.quantity}
                onChange={(e: any) => setQuantity(e.target.value)}
                className="input input-border-0 w-16 text-center"
              />
              <button
                className="btn btn-sm btn-circle ml-2"
                onClick={handleDecrement}
                disabled={quantity === 1}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="mx-2 w-36">
              <button
                className="btn btn-outline w-36"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <ToastContainer />
            </div>
            <div className="mx-2 w-36">
              <button className="btn btn-outline w-36" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4 rounded-lg bg-my_white p-8">
          <h5 className="text-base mb-2">Delivery</h5>

          <p>
            <span className="me-2">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            {product?.user.address}
          </p>
        </div>
      </div>
      <div className="mb-4 rounded-lg bg-my_white p-8">
        <h3 className="text-xl font-semibold">Product Description</h3>
        <p>{product?.description}</p>
      </div>
    </div>
  );
};

export default product;
