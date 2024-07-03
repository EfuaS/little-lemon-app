import React from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../api/booking-api";

export default function BookingPage(props) {
  const [availableTimes, setavailableTimes] = React.useState([]);

  React.useEffect(() => {
    setavailableTimes(fetchAPI(new Date()));
  }, []);

  return (
    <div className="formStyle">
      <h2> Fill the form below to book a table</h2>
      <BookingForm
        triggerSubmit={() => {
          props.triggerSubmit();
        }}
        availableTimes={availableTimes}
        passFormData={(state) => props.setformState(state)}
      />
    </div>
  );
}
