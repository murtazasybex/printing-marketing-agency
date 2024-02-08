import { useState } from "react";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Order } from "./Pages/Order";

//side bar
import Sidebar from "./components/Sidebar";
//react router dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import {
  Banner,
  BestSeller,
  BuildBrand,
  CTAOne,
  CTAThree,
  CTATwo,
  Categories,
  Footer,
  Header,
  Info,
  OnSale,
  SocialmediaPost,
  Testimonials,
  Value,
} from "./components";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Order />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      {/* <div>
        <Main />
      </div> */}
      <Header />
      <Banner />
      <Categories />
      <Value />
      <BestSeller />
      <OnSale />
      <CTAOne />
      <BuildBrand />
      <SocialmediaPost />
      <CTATwo />
      <Testimonials />
      <CTAThree />
      <Info />
      <Footer />
    </>
  );
};
