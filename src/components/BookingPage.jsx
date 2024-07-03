import React from "react";
import BookingForm from "./BookingForm";

export default function BookingPage(props) {
  return (
    <div className="formStyle">
      <h2> Fill the form below to book a table</h2>
      <BookingForm
        triggerSubmit={() => {
          props.triggerSubmit();
        }}
        passFormData={(state) => props.setformState(state)}
      />
    </div>
  );
}
