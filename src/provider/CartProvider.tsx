import { ReactNode, useState } from "react";
import CartContext from "../context/CartContext";
import ApiService from "../services/ApiService";

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItem, setCartItem] = useState(0);

  const getUserCart = async (id: number) => {
    // const res = await ApiService.get(`order-item/userId/${id}`);
    // const data = res.data.data;
    // data.forEach((item) => setCartItem(item.quantity));
    // return res.data;
    const res = await ApiService.get(`cart/userCart/${id}`);
    const data = res.data.data;
    data.forEach((item: any) => setCartItem(item.quantity));
    return res.data;
  };

  const addToCart = async (productId: number, quantity: number) => {
    const formData = {
      productId: productId,
      quantity: quantity,
    };
    // const res = await ApiService.post("order-item", formData);
    // return res.data;
    const res = await ApiService.post("cart", formData);
    return res.data;
  };

  const removeFromCart = async (productId: number, quantity: number) => {
    const formData = {
      productId: productId,
      quantity: quantity,
    };
    const res = await ApiService.post("cart/delete", formData);
    return res.data;
  };

  const value = {
    cartItem,
    setCartItem,
    getUserCart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
