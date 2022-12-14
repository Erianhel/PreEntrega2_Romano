

import { NavBar } from "./components/navBar/NavBar" 
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { CartWidget } from "./components/cartWidget/CartWidget";

const App = () => {
  // const check = false

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={"Hola Florencia"}/>}
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting={"Hola Florencia"}/>}
        />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<h2>Acá está el carrito</h2>} />
        <Route path="*" element={<h1>Error 404: La url no existe</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;