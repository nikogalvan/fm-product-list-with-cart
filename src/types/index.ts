export interface Product {
  id: string;
  image: {
    mobile?: string;
    desktop?: string;
    thumbnail?: string;
    tablet?: string;
  };
  price: number;
  name: string;
  category: string;
}

export interface UseProductResult {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export type CartContextType = {
  cart: ProductCart[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: Product["id"]) => void;
  decreaseQuantity: (id: Product["id"]) => void;
  clearCart: () => void;
};

export interface ProductCart extends Product {
  quantity: number;
}
