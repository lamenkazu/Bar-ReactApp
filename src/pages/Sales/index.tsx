import { useEffect, useState } from "react";
import { useSales } from "../../hooks/sales";

import { Order } from "../../@types/sales";

import { Container, OpenSales, OrderHead } from "./styles";
import { SaleOrder } from "../../components/SaleOrder";

import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

export const Sales = () => {
  const { getOpenOrders, getOrderById, createOrder, deleteOrder } = useSales();
  const [openOrders, setOpenOrders] = useState<Order[]>();
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [openOrderData, setOpenOrderData] = useState<Order>({
    id: "",
    to: "",
    products: [],
    total: 0,
    method: "",
    created_by: "",
    updated_by: "",
  } as Order);

  const [firstTime, setFirstTime] = useState(true); //Verifica se é o primeiro load da pagina

  const handleOrderHeadClick = (index: number, orderId: string) => {
    setOpenIndex(index);

    const fetchOpenOrderData = async () => {
      setOpenOrderData(await getOrderById(orderId));
    };

    fetchOpenOrderData();
  };

  const handleCreateOrder = async () => {
    await createOrder({
      products: [],
      total: 0,
    });
  };

  const handleFinishOpenOrder = async () => {
    if (confirm("Tem certeza que deseja apagar esse pedido de venda?")) {
      await deleteOrder(openOrderData.id);
      setFirstTime(true);
    }
  };

  useEffect(() => {
    const fetchOpenSales = async () => {
      setOpenOrders(await getOpenOrders());
      if (openOrders && openOrders.length > 0 && firstTime) {
        handleOrderHeadClick(0, openOrders[0].id);
        setFirstTime(false);
      }
    };

    fetchOpenSales();
  }, [openOrders]);

  return (
    <Container>
      {openIndex !== -1 && <SaleOrder data={openOrderData} />}

      <OpenSales>
        {openOrders?.map((order: Order, index) => (
          <OrderHead
            key={order.id}
            open={index === openIndex}
            onClick={() => {
              handleOrderHeadClick(index, order.id);
            }}
          >
            <p>{order.to === "" ? order.id : order.to}</p>
            <IoIosClose size={32} onClick={handleFinishOpenOrder} />
          </OrderHead>
        ))}

        <CiBookmarkPlus size={32} onClick={handleCreateOrder} />
      </OpenSales>
    </Container>
  );
};
