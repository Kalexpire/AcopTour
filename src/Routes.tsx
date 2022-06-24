import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import Restaurante from "pages/Restaurante";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const BRoutes = () => (
<BrowserRouter>
<Navbar/>
<Routes>
<Route path = "/"element={<Home/>}/>
<Route path ="/products" element={<Catalog/>}/> 
<Route path ="/products2" element={<Restaurante/>}/> 
</Routes>
</BrowserRouter>
);
export default BRoutes;