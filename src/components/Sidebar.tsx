import { Link } from "react-router-dom";
import SellerDashboard from "../seller/Seller-dashboard";

const Sidebar = () => {
  return (
    <div>
      <div className="min-h-screen overflow-visible">
        <div className="drawer lg:drawer-open  ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content flex flex-col items-center justify-center">
            <div>
              <SellerDashboard />
            </div>
          </div>
          <div className="drawer-side bg-[#5bccf6] ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-60 h-screen overflow-visible">
              <div className="flex flex-col justify-between min-h-full">
                <div>
                  <li className="mb-2">
                    <Link to="/">Market Place</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/seller-dashboard">Dashboard</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/admin/add-product">Add New Product</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/admin/my-products">My Accounts</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <a>Logout</a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
