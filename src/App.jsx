import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SideBar from './Component/SideBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Page components
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Product from './pages/Product';
import Analytics from './pages/Analytics';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Comment from './pages/Comment';

// Car management components
import CreateCars from './Component/CreateCars';
import DeleteCars from './Component/DeleteCars';
import EditCars from './Component/EditCars';
import Read from './Component/Read';
import UpdateCars from './Component/UpdateCars';

function App() {
  const [cars, setCars] = useState([]);

  const addCar = (newCar) => {
    const id = cars.length + 1;
    setCars([...cars, { ...newCar, id }]);
  };

  const deleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const editCar = (updatedCar) => {
    setCars(cars.map((car) => (car.id === updatedCar.id ? updatedCar : car)));
  };

  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          {/* General Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comments" element={<Comment />} />
          <Route path="/product-list" element={<ProductList />} />

          {/* Car CRUD Routes */}
          <Route
            path="/read"
            element={<Read players={cars} onDelete={deleteCar} />}
          />
          <Route
            path="/CreateCars"
            element={<CreateCars addPlayer={addCar} />}
          />
          <Route path="/EditCars" element={<EditCars />} />
          <Route path="/UpdateCars" element={<UpdateCars />} />
          {/* Optional: Uncomment if using DeleteCars separately */}
          {/* <Route path="/DeleteCars" element={<DeleteCars />} /> */}
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
