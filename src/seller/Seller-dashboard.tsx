import { Link } from "react-router-dom";
import ApiService from "../services/ApiService";
import AuthService from "../services/AuthService";
import type { Product } from "../helper/interfaces";
import { useEffect, useState } from "react";
const SellerDashboard = () => {
  const [myProducts, setMyProducts] = useState<Product[]>([]);

  const userData = AuthService.getUser();
  const userId = userData?.id;

  const getMyProducts = async () => {
    const res = await ApiService.get(`product/userId/${userId}`);
    setMyProducts(res.data.data);
  };

  useEffect(() => {
    getMyProducts();
  }, []);

  return (
    <div className="w-[900px] w-min-[600px]">
      <div className="flex justify-center w-full">
        <div className="p-8 rounded-xl bg-my_white w-full">
          <h1 className="text-2xl font-bold mb-4">My Products</h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myProducts?.map((product, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category.category}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <Link className="btn btn-ghost btn-xs" to={""}>
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
