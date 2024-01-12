import { Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import { NotFound } from "../pages/NotFound";

export function CommonRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/produtos" element={<h1>Lista de Produtos</h1>} />
        <Route path="/produtos/detalhes/:id" element={<h1>Detalhes prod</h1>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
