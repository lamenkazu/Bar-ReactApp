interface ProductInOrder {
  id: string;
  quantity: number;
  name: string;
  price: number;
}

export interface Order {
  id: string;
  to: string | undefined;
  products: ProductInOrder[];
  total: number;
  method: string;
  created_by: string;
  updated_by: string;
}

export interface NewOrder {
  products: ProductInOrder[];
  total: number;
}

export interface FinalizedOrder {
  id: string;
  method: string;
}

export interface SalesContextData {
  getOpenOrders: () => Promise<Void>;
  getOrderById: (credentials: string) => Promise<Order>;
  createOrder: (credentials: NewOrder) => Promise<void>;
  updateOrder: (credentials: Order) => Prmise<void>;
  finalizeOrder: (
    credentials: FinalizedOrder
  ) => Promise<AxiosResponse<any, any>>;
  deleteOrder: (credentials: string) => Promise<void>;
}
