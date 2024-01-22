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
  FinalizedOrder,
  NewOrder,
  Order,
  SalesContextData,
} from "./../@types/sales.d";

const SalesContext = createContext<SalesContextData>({} as SalesContextData);
const useSales = () => useContext(SalesContext);

const SalesProvider = ({ children }: PropsWithChildren) => {
  const { loading } = useAuth();

  const getOpenOrders = useCallback(async () => {
    try {
      if (loading) return;

      const response = await api.get(`/sales/open`);

      return response?.data;
    } catch (err: any) {
      if (err.response) {
        alert(`${err.response.status} ${err.response.data.message}`);
      } else {
        console.log(err);

        alert("Não foi possivel acessar os pedidos de venda abertos.");
      }
    }
  }, []);

  const getOrderById = useCallback(async (id: string) => {
    try {
      if (loading) return;

      const response = await api.get(`/sales/${id}`);

      return response.data;
    } catch (err: any) {
      if (err.response) {
        alert(`${err.response.status} ${err.response.data.message}`);
      } else {
        console.log(err);

        alert("Não foi possivel acessar ps dados desse pedido de venda.");
      }
    }
  }, []);

  const createOrder = useCallback(async (newSale: NewOrder) => {
    try {
      if (loading) return;

      await api.post(`/sales`, newSale);
    } catch (err: any) {
      if (err.response) {
        alert(`${err.response.status} ${err.response.data.message}`);
      } else {
        console.log(err);

        alert("Não foi possivel criar um novo pedido de venda.");
      }
    }
  }, []);

  const updateOrder = useCallback(async (updatedOrder: Order) => {
    try {
      if (loading) return;

      await api.put(`/sales/${updatedOrder.id}`, {
        products: updatedOrder.products,
        total: updatedOrder.total,
        to: updatedOrder.to,
      });
    } catch (err: any) {
      if (err.response) {
        alert(`${err.response.status} ${err.response.data.message}`);
      } else {
        console.log(err);

        alert("Não foi possivel criar um novo pedido de venda.");
      }
    }
  }, []);

  const finalizeOrder = useCallback(async (finalizeOrder: FinalizedOrder) => {
    try {
      if (loading) return;

      const { id, method } = finalizeOrder;

      await api.patch(`/sales/${id}`, {
        method,
      });
    } catch (err: any) {
      if (err.response) {
        alert(`${err.response.status} ${err.response.data.message}`);
      } else {
        console.log(err);

        alert("Não foi possivel criar um novo pedido de venda.");
      }
    }
  }, []);

  const salesDataValue = useMemo(
    () => ({
      getOpenOrders,
      getOrderById,
      createOrder,
      updateOrder,
      finalizeOrder,
    }),
    [getOpenOrders, getOrderById, createOrder, updateOrder, finalizeOrder]
  );

  return (
    <SalesContext.Provider value={salesDataValue}>
      {children}
    </SalesContext.Provider>
  );
};

export { useSales, SalesProvider };
