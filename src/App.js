import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import DashboardHome from './Pages/Dashboard/Dashboard/DashboardHome';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import UserProfile from './Pages/Dashboard/UserProfile/UserProfile';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Products from './Pages/Products/Products/Products';
import PlaceOrder from './Pages/Shared/PlaceOrder/PlaceOrder';
import Test from './Pages/Shared/PlaceOrder/CheckOut';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/test" element={<Test></Test>} />

          <Route path="/dashboard" element={<DashboardHome />}>
            <Route path="/dashboard/userProfile" element={<UserProfile />} />
            <Route path={`/dashboard/addProduct`} element={<AddProduct></AddProduct>} />

            <Route path={`/dashboard/manageProduct`} element={<ManageProduct></ManageProduct>} />

            <Route path={`/dashboard/addReview`} element={<AddReview></AddReview>} />

            <Route exact path="/dashboard" element={<UserProfile />} />
          </Route>

          <Route path="/login" element={<Login />} />

          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
