import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();

  const isLoggedIn = AuthService.isAuthenticated();
  const userData = AuthService.getUser();
  const username = userData?.username;
  const userId = userData?.id;
  const userRole = userData?.role;

  const handleLogOut = () => {
    AuthService.logout();
    navigate("/login");
  };

  const { cartItem, getUserCart } = useContext(CartContext);

  useEffect(() => {
    getUserCart(userId);
  }, [cartItem]);

  return (
    <div className="bg-my_white">
      <div className="navbar bg-my_white shadow-md pb-2 w-3/4 mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-outline text-xl ms-4">
            FCommerce
          </Link>
        </div>
        <div className="w-96 mx-2">
          <select className="select select-bordered w-full">
            <option value={""}>Categories</option>
            <option>Mobile</option>
            <option>Clothes</option>
          </select>
        </div>
        <div className="relative w-full mx-4">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered py-2 pl-10 pr-4 rounded-lg w-full"
          />
          <button className="absolute right-0 top-0 mt-3 mr-6">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <Link to="/cart">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-circle btn-ghost border-0 "
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {" "}
                    {cartItem}{" "}
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="dropdown dropdown-end me-6">
            <div tabIndex={0} role="button" className="">
              {isLoggedIn === true ? (
                <div className="w-10">
                  {" "}
                  <p className="text-xs">Hello, {username}</p>
                </div>
              ) : (
                <div className="w-10">
                  <p className="text-xs">Hello, Sign in</p>
                </div>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-my_white"
            >
              {isLoggedIn === true ? (
                <>
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                  {userRole === "seller" ? (
                    <li>
                      <Link to={"/seller-dashboard"}>My Dashboard</Link>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
