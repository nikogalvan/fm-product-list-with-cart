import { useCallback, useEffect, useState } from "react";
import { Product, UseProductResult } from "../types";

export const useProducts = (url: string): UseProductResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      const resp = await fetch(url);
      if (!resp.ok) throw new Error(`HTTP error: Status: ${resp.status}`);

      const data: Product[] = await resp.json();

      const productsWithId: Product[] = data.map(
        (product: Omit<Product, "id">) => ({
          ...product,
          id: crypto.randomUUID(),
        })
      );

      setProducts(productsWithId);
    } catch (err) {
      setError((err as Error).message);
      console.error("Error fetching products:", (err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error };
};
