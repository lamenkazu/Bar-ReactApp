import { Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import { NotFound } from "../pages/NotFound";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<h1>Home Admin</h1>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
