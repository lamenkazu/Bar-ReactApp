export interface ProductsContextData {
  createNewProduct: (credentials: NewProduct) => Promise<void>;
  getProductById: (credentials: string) => Promise<ProdctProps>;
  deleteProduct: (credentials: string) => Promise<void>;
  getCategories: () => Promise<string[] | undefined>;
  getProducts: (
    credentials: ProductIndexSearch
  ) => Promise<ProductListProps | undefined>;
  getProductsByCategory: (
    credentials: string
  ) => Promise<ProductListProps | undefined>;
}

export interface ProductIndexSearch {
  name?: string;
  category?: string;
}

export interface NewProduct {
  name: string;
  category: string;
  price: number;
}

export interface ProductProps {
  id: string;
  name: string;
  price: string;
  category: string;
  created_by: string;
  updated_by: string;
  quantity?: number;
  cost_price?: number;
  quantity_sold?: number;
  total_sales?: number;
  net_profit?: number;
}

export interface ProductListProps {
  products: ProductProps[];
}
