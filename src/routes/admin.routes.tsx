import { Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import { NotFound } from "../pages/NotFound";
import { NewProduct } from "../pages/NewProduct";
import { EditProduct } from "../pages/EditProduct";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/produtos" element={<h1>Lista de Produtos</h1>} />
        <Route path="/produtos/novo" element={<NewProduct />} />
        <Route path="/produtos/editar/:id" element={<EditProduct />} />
        <Route path="/produtos/detalhes/:id" element={<h1>Detalhes prod</h1>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
