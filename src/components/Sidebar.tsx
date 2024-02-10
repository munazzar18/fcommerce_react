import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const Sidebar = ({ pageContent }: { pageContent: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <div>
      <div className="min-h-screen overflow-visible">
        <div className="drawer lg:drawer-open  ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content flex mx-6 mt-6">{pageContent}</div>
          <div className="drawer-side bg-my_white ">
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
                    <Link to="/seller-add-product">Add New Product</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
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
