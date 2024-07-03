import React from "react";
import HeroSection from "./HeroSection";
import HighlightsSction from "./HighlightsSction";
import Testimonials from "./Testimonials";
import BookingPage from "./BookingPage";
import { submitAPI } from "../api/booking-api";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [bookkingState, setbookkingState] = React.useState({});
  const navigate = useNavigate();

  function submitForm(formData) {
    const result = submitAPI(formData);
    console.log(result);
    if (result) navigate("/booking-confirmed");
  }

  return (
    <main>
      <HeroSection />
      <HighlightsSction />
      <Testimonials />
      <BookingPage
        bookkingState={bookkingState}
        setformState={(state) => setbookkingState(state)}
        triggerSubmit={(formData) => {
          submitForm(formData);
        }}
      />
    </main>
  );
}
