import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Categories from "./components/Categories";
import SubCategories from "./components/SubCategories";
import Products from "./components/Products";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        <Route
          path="/"
          element={<Login />}
        />


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          }
        />

        <Route
          path="/subcategories"
          element={
            <ProtectedRoute>
              <SubCategories />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />


      </Routes>

    </BrowserRouter>

  );

}


export default App;