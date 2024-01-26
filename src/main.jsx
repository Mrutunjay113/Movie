import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";
// import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      size={24}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating defaultRating={3} color="red" />
  </React.StrictMode>
);
