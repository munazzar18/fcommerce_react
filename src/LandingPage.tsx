import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ApiService from "./services/ApiService";
import { useEffect, useState } from "react";
import { type Product } from "./helper/interfaces";

const LandingPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = async () => {
    const res = await ApiService.get("product?page=1");
    setProducts(res.data.data);
  };

  const categories = [
    { id: 1, category: "Mobile" },
    { id: 2, category: "Headphones" },
    { id: 3, category: "Airpods" },
    { id: 4, category: "Chargers" },
    { id: 5, category: "Camera" },
    { id: 6, category: "Kids club" },
    { id: 7, category: "Shoes" },
  ];

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="w-3/4 mx-auto">
        <div className="mb-4 rounded-lg ">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            className="rounded-b-lg"
          >
            <div>
              <img src="landing_page/c1.jpg" />
            </div>
            <div>
              <img src="landing_page/c2.jpg" />
            </div>
            <div>
              <img src="landing_page/c3.jpg" />
            </div>
            <div>
              <img src="landing_page/c4.jpg" />
            </div>
            <div>
              <img src="landing_page/c5.jpg" />
            </div>
            <div>
              <img src="landing_page/c6.jpg" />
            </div>
          </Carousel>
        </div>
        <div className="bg-my_white rounded-lg p-8 mb-4">
          <div className="flex flex-wrap justify-between">
            {categories.map((cat) => {
              return (
                <div
                  className="card w-36 bg-my_white shadow-md mb-3"
                  key={cat.id}
                >
                  <Link to={`categories/${cat.id}`}>
                    <figure>
                      <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="p-4 flex justify-center align-middle">
                      <h2 className="text-base font-semibold">
                        {cat.category}
                      </h2>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-my_white rounded-lg p-8 mb-4">
          <div className="flex flex-wrap justify-around">
            {products.map((prod) => {
              return (
                <div className="card shadow-md m-2" key={prod.id}>
                  <div className="card card-compact w-56 h-[350px] bg-my_white text-[#030e12] hover:shadow-sm hover:shadow-[#030e12]">
                    <Link to={`/product/${prod.id}`}>
                      <figure className="rounded-t-lg bg-my_white">
                        <img
                          src={prod.images[0]}
                          alt="product"
                          className="w-full aspect-square object-contain "
                        />
                      </figure>
                      <div className="card-body mb-2">
                        <p className="font-bold"> {prod.title} </p>
                        <div className="flex justify-around">
                          <p className="indicator-item badge border-0 bg-[#030e12] text-my_white font-bold">
                            Rs.{prod.price}
                          </p>
                          <p className="text-end">{prod.category.category}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
