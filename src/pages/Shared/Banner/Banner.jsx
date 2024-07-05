import { Link } from "react-router-dom";
import checkout from "../../../assets/images/checkout/checkout.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="relative mb-8">
      <img className="mx-auto w-full" src={checkout} alt="Checkout" />
      <div className="text-overlay">
        <div className="overlay-text">
          <h2>Add New Service</h2>
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
