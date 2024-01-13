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
import {
  NewProduct,
  ProductListProps,
  ProductsContextData,
} from "../@types/products";

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
        alert("Não foi possível criar um novo produto no banco de dados.");
      }
    }
  }, []);

  const getProductById = useCallback(async (id: string) => {
    try {
      if (loading) return;

      const response = await api.get(`/products/${id}`);

      return response.data;
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível acessar os dados desse produto.");
      }
    }
  }, []);

  const deleteProduct = useCallback(async (id: string) => {
    try {
      if (loading) return;

      return await api.delete(`/products/admin/${id}`).then(() => {
        alert("Produto removido com sucesso.");
      });
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível deletar o prato do banco de dados.");
      }
    }
  }, []);

  //TODO alterar API para retornar direto as categorias dos produtos cadastrados
  const getCategories = useCallback(async () => {
    try {
      if (loading) return;

      const response = await api.get("/products?name&category");
      const data: ProductListProps = response.data;

      const uniqueCategories = new Set(
        data.products?.map((product) => product.category)
      );

      const uniqueCategoriesArray = Array.from(uniqueCategories);

      return uniqueCategoriesArray;
    } catch (err: any) {
      if (err.response) {
        alert(`${err.response.status} ${err.response.data.message}`);
      } else {
        console.log(err);

        alert("Não foi possível pegar as categorias no banco de dados.");
      }
    }
  }, [loading]);

  const getProducts = useCallback(async () => {
    try {
      if (loading) return;

      const response = await api.get("/products?name&category");

      const data: ProductListProps = response.data;

      return data;
    } catch (err: any) {
      if (err.response) {
        alert(`${err.response.status} ${err.response.data.message}`);
      } else {
        console.log(err);

        alert("Não foi possível pegar os produtos do banco de dados.");
      }
    }
  }, []);

  const getProductsByCategory = useCallback(async (category: string) => {
    try {
      if (loading) return;

      const response = await api.get(`/products?name&category=${category}`);

      const data: ProductListProps = response.data;

      return data;
    } catch (err: any) {
      if (err.response) {
        alert(`${err.response.status} ${err.response.data.message}`);
      } else {
        console.log(err);

        alert("Não foi possível pegar os produtos do banco de dados.");
      }
    }
  }, []);

  const productsDataValue = useMemo(
    () => ({
      createNewProduct,
      getProductById,
      deleteProduct,
      getCategories,
      getProducts,
      getProductsByCategory,
    }),
    [
      createNewProduct,
      getProductById,
      deleteProduct,
      getCategories,
      getProducts,
      getProductsByCategory,
    ]
  );

  return (
    <ProductsContext.Provider value={productsDataValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, useProducts };
