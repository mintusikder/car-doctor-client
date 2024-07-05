import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item rounded-xl relative w-full">
        <img src={img1} className="w-full rounded-xl" alt="Banner 1" />
        <div className="absolute rounded-xl items-center top-0 left-0 flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
          <div className="text-white pl-12 space-y-7 w-1/2">
            <h2 className="text-7xl font-bold">Affordable Price For Car Servicing</h2>
            <p>Get the best deals on car servicing without compromising on quality.</p>
            <div>
              <button className="btn btn-warning mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-5">
          <a href="#slide6" className="btn btn-circle mr-5">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" alt="Banner 2" />
        <div className="absolute items-center top-0 left-0 flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
          <div className="text-white pl-12 space-y-7 w-1/2">
            <h2 className="text-7xl font-bold">Expert Mechanics</h2>
            <p>Our team of skilled mechanics ensures top-notch service for your car.</p>
            <div>
              <button className="btn btn-warning mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-5">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" alt="Banner 3" />
        <div className="absolute items-center top-0 left-0 flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
          <div className="text-white pl-12 space-y-7 w-1/2">
            <h2 className="text-7xl font-bold">Quality Parts</h2>
            <p>We use only high-quality parts to ensure your car runs smoothly.</p>
            <div>
              <button className="btn btn-warning mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-5">
          <a href="#slide2" className="btn btn-circle mr-5">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" alt="Banner 4" />
        <div className="absolute items-center top-0 left-0 flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
          <div className="text-white pl-12 space-y-7 w-1/2">
            <h2 className="text-7xl font-bold">Customer Satisfaction</h2>
            <p>Our priority is to provide excellent service that meets your needs.</p>
            <div>
              <button className="btn btn-warning mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-5">
          <a href="#slide3" className="btn btn-circle mr-5">❮</a>
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" alt="Banner 5" />
        <div className="absolute items-center top-0 left-0 flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
          <div className="text-white pl-12 space-y-7 w-1/2">
            <h2 className="text-7xl font-bold">Modern Equipment</h2>
            <p>We use state-of-the-art equipment to provide the best service possible.</p>
            <div>
              <button className="btn btn-warning mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-5">
          <a href="#slide4" className="btn btn-circle mr-5">❮</a>
          <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" alt="Banner 6" />
        <div className="absolute items-center top-0 left-0 flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
          <div className="text-white pl-12 space-y-7 w-1/2">
            <h2 className="text-7xl font-bold">Convenient Location</h2>
            <p>Our service centers are located at convenient places for your ease.</p>
            <div>
              <button className="btn btn-warning mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-5">
          <a href="#slide5" className="btn btn-circle mr-5">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
