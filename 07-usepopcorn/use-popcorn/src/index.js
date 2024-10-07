import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./components/StarRating";
import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <StarRating
            maxRating={5}
            message={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
            defaultRating={3}
        />
        <StarRating maxRating={5} />
        <SetRating />
    </React.StrictMode>
);

function SetRating() {
    const [rating, setRating] = useState(0);

    function handleSetRating(rating) {
        setRating(rating);
    }

    return (
        <div>
            <StarRating maxRating={5} onSetRating={handleSetRating} />
            <p>This movie was rated {rating} stars</p>
        </div>
    );
}
