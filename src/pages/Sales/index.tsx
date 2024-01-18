import { useEffect, useState } from "react";
import { useSales } from "../../hooks/sales";

import { Order } from "../../@types/sales";

import { Container, OpenSales, OrderHead } from "./styles";
import { SaleOrder } from "../../components/SaleOrder";

import { CiBookmarkPlus } from "react-icons/ci";

export const Sales = () => {
  const { getOpenOrders, getOrderById, createOrder } = useSales();
  const [openOrders, setOpenOrders] = useState<Order[]>();
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [openOrderData, setOpenOrderData] = useState<Order>({} as Order);

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

  useEffect(() => {
    const fetchOpenSales = async () => {
      setOpenOrders(await getOpenOrders());
      if (openOrders && firstTime) {
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
            <p> {order.id} </p>
          </OrderHead>
        ))}

        <CiBookmarkPlus size={32} onClick={handleCreateOrder} />
      </OpenSales>
    </Container>
  );
};
