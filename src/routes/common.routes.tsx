import { Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import { NotFound } from "../pages/NotFound";
import { ListProducts } from "../pages/ListProducts";
import { ViewProduct } from "../pages/ViewProduct";

export function CommonRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/produtos" element={<ListProducts />} />
        <Route path="/produtos/visualizar/:id" element={<ViewProduct />} />

        {/* Sales */}
        <Route path="/vendas" element={<h1>Home de Vendas</h1>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
