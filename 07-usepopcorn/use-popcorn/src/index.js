import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <StarRating
            maxRating={5}
            message={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
        />
        <StarRating maxRating={5} />
    </React.StrictMode>
);
