export interface ProductsContextData {
  createNewProduct: (credentials: NewProduct) => Promise<void>;
}

export interface NewProduct {
  name: string;
  category: string;
  price: number;
}
