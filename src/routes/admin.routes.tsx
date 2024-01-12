import { Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import { NotFound } from "../pages/NotFound";
import { NewProduct } from "../pages/NewProduct";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/produtos" element={<h1>Lista de Produtos</h1>} />
        <Route path="/produtos/novo" element={<NewProduct />} />
        <Route path="/produtos/editar" element={<h1>Editar Produto</h1>} />
        <Route path="/produtos/detalhes/:id" element={<h1>Detalhes prod</h1>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
