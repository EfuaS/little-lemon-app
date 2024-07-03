import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export default function BookingForm(props) {
  const [formData, setformData] = React.useState({
    date: "",
    guests: 0,
    occassion: "",
    time: "",
  });

  function handleFormSubmission(formData) {
    props.triggerSubmit(formData);
    props.passFormData(formData);
  }

  return (
    <div>
      <Formik
        initialValues={{
          date: "",
          time: "",
          guests: "",
          occassion: "",
        }}
        onSubmit={(values) => {
          handleFormSubmission(values);
        }}
        validateOnChange
        validationSchema={Yup.object({
          date: Yup.date().required("Required"),
          time: Yup.string().required("Required"),
          guests: Yup.number().required("Required"),
          occassion: Yup.string().required("Required"),
        })}
      >
        {(formikProp) => (
          <form
            onSubmit={formikProp.handleSubmit}
            style={{
              display: "grid",
              maxWidth: "200px",
              gap: "20px",
              margin: "auto",
            }}
          >
            <label for="res-date">Choose date</label>
            <input
              value={formikProp.values.date}
              onChange={formikProp.handleChange}
              name="date"
              type="date"
              id="res-date"
            />
            {formikProp.errors.date && (
              <p style={{ color: "red", marginBottom: " 5px" }}>
                {formikProp.errors.date}
              </p>
            )}
            <label for="res-time">Choose time</label>
            <select
              value={formikProp.values.time}
              onChange={formikProp.handleChange}
              name="time"
              id="res-time "
            >
              <option value={""}>Choose</option>
              {props.availableTimes.map((time, index) => (
                <option value={time} key={index}>
                  {time}
                </option>
              ))}
            </select>
            {formikProp.errors.time && (
              <p style={{ color: "red", marginBottom: " 5px" }}>
                {formikProp.errors.time}
              </p>
            )}

            <label for="guests">Number of guests</label>
            <input
              value={formikProp.values.guests}
              onChange={formikProp.handleChange}
              name="guests"
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
            />
            {formikProp.errors.guests && (
              <p style={{ color: "red", marginBottom: " 5px" }}>
                {formikProp.errors.guests}
              </p>
            )}

            <label for="occasion">Occasion</label>
            <select
              value={formikProp.values.occassion}
              onChange={formikProp.handleChange}
              name="occassion"
              id="occasion"
            >
              <option value={""}>Choose</option>

              <option value={"Birthday"}>Birthday</option>
              <option value={"Anniversary"}>Anniversary</option>
            </select>
            {formikProp.errors.occassion && (
              <p style={{ color: "red", marginBottom: " 5px" }}>
                {formikProp.errors.occassion}
              </p>
            )}

            <button type="submit">"Make Your reservation"</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
