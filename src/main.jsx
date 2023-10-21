import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import  { NavbarTop } from "./common/Navbar/Navbar.jsx";
import Footer from "./pages/Footer/Footer.jsx";

const persistor = persistStore(store);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <NavbarTop scrollToTop={scrollToTop} />
          <App />
          <Footer/>

        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
