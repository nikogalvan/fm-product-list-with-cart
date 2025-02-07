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
