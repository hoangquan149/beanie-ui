/* eslint-disable no-unused-vars */
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { PUBLIC_ROUTES } from "./router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Suspense fallback={<span>loading...</span>}>
          <Routes>
            {PUBLIC_ROUTES.map((route, index) => (
              <Route
                key={index}
                element={<route.component />}
                path={route?.path}
              />
            ))}
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;
