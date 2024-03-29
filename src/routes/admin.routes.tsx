import { Routes, Route, Navigate } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import { NotFound } from "../pages/NotFound";
import { NewProduct } from "../pages/NewProduct";
import { EditProduct } from "../pages/EditProduct";
import { ListProducts } from "../pages/ListProducts";
import { ViewProduct } from "../pages/ViewProduct";
import { Sales } from "../pages/Sales";
import { SignUp } from "../pages/SignUp";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/vendas" replace />} />

        {/* Auth */}
        <Route path="/cadastrar" element={<SignUp />} />

        {/* Products */}
        <Route path="/produtos" element={<ListProducts />} />
        <Route path="/produtos/novo" element={<NewProduct />} />
        <Route path="/produtos/editar/:id" element={<EditProduct />} />
        <Route path="/produtos/visualizar/:id" element={<ViewProduct />} />

        {/* Sales */}
        <Route path="/vendas" element={<Sales />} />
        <Route path="/vendas/visualizar" element={<h1>Listar vendas</h1>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
