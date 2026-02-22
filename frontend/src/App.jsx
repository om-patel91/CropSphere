import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetail.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }/>
        <Route
        path="/admin" element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>}/>
    <Route path="/products" element={<Products/>} />
    <Route path="/products/:id" element={<ProductDetails/>}/>
    </Routes>
    
  );
}

export default App;