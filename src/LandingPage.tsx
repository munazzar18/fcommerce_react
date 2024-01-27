import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

const LandingPage = () => {
  // const dispatch = useDispatch<AppDispatch>();

  // const products = useSelector((state: RootState) => state.products);

  // useEffect(() => {
  //   dispatch(productsAsync());
  // }, [dispatch]);

  const categories = [
    { id: 1, category: "Mobile" },
    { id: 2, category: "Headphones" },
    { id: 3, category: "Airpods" },
    { id: 4, category: "Chargers" },
    { id: 5, category: "Camera" },
    { id: 6, category: "Kids club" },
    { id: 7, category: "Shoes" },
  ];

  const products = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
  ];

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
                <div className="card w-36 bg-my_white shadow-md key={cat.id} mb-3">
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
                          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                          alt="product"
                          className="w-full aspect-square object-contain "
                        />
                      </figure>
                      <div className="card-body mb-2">
                        <p className="font-bold">Title Here</p>
                        <div className="flex justify-around">
                          <p className="indicator-item badge border-0 bg-[#030e12] text-my_white font-bold">
                            Rs.1000
                          </p>
                          <p className="text-end">Category</p>
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
