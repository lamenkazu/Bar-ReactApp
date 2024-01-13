export interface ProductsContextData {
  createNewProduct: (credentials: NewProduct) => Promise<void>;
  getProductById: (credentials: string) => Promise<ProdctProps>;
  deleteProduct: (credentials: string) => Promise<void>;
  getCategories: () => Promise<string[] | undefined>;
  getProducts: () => Promise<ProductListProps | undefined>;
  getProductsByCategory: (
    credentials: string
  ) => Promise<ProductListProps | undefined>;
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
}

export interface ProductListProps {
  products: ProductProps[];
}
