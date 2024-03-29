interface Cart {
    id: number;
    quantity: number;
    totalPrice: number;
    product: Product
}

interface Product {
    id: number;
    title: string;
    description: string;
    quantity: number;
    price: number;
    images: string[];
    category: Category;
    avg_reviews: number;
    userId: number;
    user: User;
}

interface Category {
    id: number;
    category: string;
}

interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    mobile: string;
    roles: string;
    address: string;
}

interface OrderItem {
    id: number;
    quantity: number;
    totalPrice: number;
    product: Product;
    user: User;
}

interface CartContextProps {
    cartItem: number;
    setCartItem: React.Dispatch<React.SetStateAction<number>>;
    getUserCart: (id: number) => Promise<any>;
    addToCart: (productId: number, quantity: number) => Promise<any>;
    removeFromCart: (productId: number, quantity: number) => Promise<any>;
}


export type { Cart, OrderItem, Product, Category, User, CartContextProps }