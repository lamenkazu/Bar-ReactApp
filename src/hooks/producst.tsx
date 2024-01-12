import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useMemo,
  PropsWithChildren,
} from "react";
import { useAuth } from "./auth";

import { api } from "./../services/api";
import { NewProduct, ProductsContextData } from "../@types/products";

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);
const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }: PropsWithChildren) => {
  const { loading } = useAuth();

  const createNewProduct = useCallback(async (newProduct: NewProduct) => {
    try {
      if (loading) return;

      return await api.post("/products/admin", newProduct).then(() => {
        alert("Produto criado com sucesso!");
      });
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível criar um novo prato no banco de dados.");
      }
    }
  }, []);

  const productsDataValue = useMemo(
    () => ({
      createNewProduct,
    }),
    [createNewProduct]
  );

  return (
    <ProductsContext.Provider value={productsDataValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, useProducts };
