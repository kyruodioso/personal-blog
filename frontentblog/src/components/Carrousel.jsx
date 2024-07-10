import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carrousel = () => {
  return (
    <>
    <div className="relative ">
  <button
    className="bg-white rounded-full p-2 absolute left-0 top-1/2 transform -translate-y-1/2 z-30"
    onClick={() => window.location.href = 'https://www.google.com/'}
  >
    Hola
  </button>

      <Carousel autoPlay={true}
  infiniteLoop={true}
  showThumbs={false}
  className="bg-gradient-to-r from-indigo-500 to-indigo-300" >
    
          <div>
          <img className="img-carousel"   src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_960_720.jpg" />
          <div
            className="border border-gray-400 legend">
            <span className="md:text-8xl font-bold">5+</span>
            <p className="semi-bold text-4xl capitalize">years of experience</p>
          </div>
        </div>
        <div>
          <img className="img-carousel"   src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_960_720.jpg" />
          <div
            className="border border-gray-400 legend">
            <span className="md:text-8xl font-bold">5+</span>
            <p className="semi-bold text-4xl capitalize">years of experience</p>
          </div>
        </div>
        <div>
          <img className="img-carousel"  src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_960_720.jpg" />
          <div
            className="border border-gray-400 legend">
            <span className="md:text-8xl font-bold">5+</span>
            <p className="semi-bold text-4xl capitalize">years of experience</p>
          </div>
        </div>
      </Carousel>
      </div>
    </>
  );
};

export default Carrousel;
