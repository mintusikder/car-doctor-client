import checkout from "../../../assets/images/checkout/checkout.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="relative">
      <img className="mx-auto w-full" src={checkout} alt="Checkout" />
      <div className="text-overlay">
        <h2 className="overlay-text">Add New Service</h2>
        
      </div>
    </div>
  );
};

export default Banner;
