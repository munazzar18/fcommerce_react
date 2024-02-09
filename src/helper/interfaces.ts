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
}

interface Category {
    id: number;
    category: string;
}


export type { Cart, Product, Category }