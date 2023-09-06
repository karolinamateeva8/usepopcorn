import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2Version from "./App2version";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   //onSetRating gives the ability to get access to the internal state inside this Test component
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App2Version />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={0} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
