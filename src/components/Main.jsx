import React from "react";
import HeroSection from "./HeroSection";
import HighlightsSction from "./HighlightsSction";
import Testimonials from "./Testimonials";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import BookingPage from "./BookingPage";

<Routes>
   <Route path="/" element={<App />}></Route>
  <Route path="/booking" element={<BookingPage />}></Route>
</Routes>;

export default function Main() {
  return (
    <main>
      <HeroSection />
      <HighlightsSction />
      <Testimonials />
    </main>
  );
}
