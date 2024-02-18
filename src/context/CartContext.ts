import { createContext } from "react";

interface CartContextProps {
    cartItem: number;
    setCartItem: React.Dispatch<React.SetStateAction<number>>;
    getUserCart: (id: number) => Promise<any>; // Update the return type accordingly
    addToCart: (productId: number, quantity: number) => Promise<any>; // Update the return type accordingly
    removeFromCart: (productId: number, quantity: number) => Promise<any>; // Update the return type accordingly
}
const CartContext = createContext<CartContextProps | undefined>(undefined);

export default CartContext