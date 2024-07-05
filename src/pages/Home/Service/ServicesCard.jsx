import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { title, img, price,_id } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl ">
    <figure className="px-10 pt-10">
      <img
        src={img}
        alt="Shoes"
        className="rounded-xl" />
    </figure>
    <div className=" flex items-center p-10 justify-between">
     <div>
     <h2 className="card-title">{title}</h2>
     <p>${price}</p>
     </div>
      <div className="card-actions">
       <Link to={`/book/${_id}`}>
       <button className="btn btn-primary">Buy Now</button>
       </Link>
      </div>
    </div>
  </div>
  );
};

export default ServicesCard;
