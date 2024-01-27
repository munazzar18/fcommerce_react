import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../state/Store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productByIdAsync } from "../features/products/Products.slice";

import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const product = () => {
  //   const product = useSelector((state: RootState) => state.products);
  //   const dispatch = useDispatch<AppDispatch>();
  //   const { id } = useParams();

  //   useEffect(() => {
  //     dispatch(productByIdAsync(Number(id)));
  //   }, []);

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
            <div className="h-80">
              <img
                className="w-full aspect-[3/2] object-contain"
                src="/test1.jpg"
              />
            </div>
            <div className="h-80">
              <img
                className="w-full aspect-[3/2] object-contain"
                src="/test2.jpg"
              />
            </div>
            <div className="h-80">
              <img
                className="w-full aspect-[3/2] object-contain"
                src="/test3.jpg"
              />
            </div>
          </Carousel>
        </div>
        <div className="mb-4 rounded-lg bg-my_white p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-8">Product Title here</h1>
            <h2 className="text-2xl font-bold">Product Price Here</h2>
          </div>

          <div className="flex justify-start items-center mb-8">
            <label htmlFor="quantity" className="text-lg mr-4">
              Quantity
            </label>
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setQuantity(e.target.value)
                }
                className="input input-border-0 w-16 text-center"
              />
              <button
                className="btn btn-sm btn-circle ml-2"
                onClick={handleDecrement}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="mx-2 w-36">
              <button className="btn btn-outline w-36">Add to Cart</button>
            </div>
            <div className="mx-2 w-36">
              <button className="btn btn-outline w-36">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="mb-4 rounded-lg bg-my_white p-8">
          <h2>Shipping Details here</h2>
        </div>
      </div>
      <div className="mb-4 rounded-lg bg-my_white p-8">
        <h3 className="text-xl font-semibold">Product Description</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          alias ab ipsam officia id placeat repellat reprehenderit dolor quasi
          quidem quae possimus facere corporis ipsum illum ratione nobis eaque
          tempore, rem iste quos. Necessitatibus enim autem alias amet nostrum
          nemo odit sint omnis ipsa consectetur, tempora voluptatum aspernatur
          quae expedita nulla, dicta sed veritatis ea optio tenetur animi! Eos
          quam culpa exercitationem voluptatibus dicta.
        </p>
      </div>
    </div>
  );
};

export default product;
