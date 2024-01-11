import { Route, Routes } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
