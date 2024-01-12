import { useEffect, useState } from "react";
import { ProductForm } from "../../components/ProductForm";
import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/producst";
import { ProductProps } from "./../../@types/products.d";

export const EditProduct = () => {
  const { id } = useParams();
  const { getProductById } = useProducts();

  const [data, setData] = useState<ProductProps>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const response: ProductProps = await getProductById(id);
        setData({
          id: response.id,
          name: response.name,
          category: response.category,
          price: response.price,
          created_by: response.created_by,
          updated_by: response.updated_by,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <ProductForm
      confirmMessage="Confirma a atualização dos dados do produto?"
      pageTitle="Editar Produto"
      productData={data}
      productId={id ?? ""}
    />
  );
};
