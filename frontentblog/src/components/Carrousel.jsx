import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carrousel = () => {
  return (
    <>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
        <div>
          <img className="img-carousel"   src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_960_720.jpg" />
          <div
            className="border border-b-indigo-500 border-l-indigo-500 border-t-indigo-300 border-r-indigo-300 legend">
            <span className="md:text-8xl font-bold">5+</span>
            <p className="semi-bold text-4xl capitalize">years of experience</p>
          </div>
        </div>
        <div>
          <img className="img-carousel"   src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_960_720.jpg" />
          <div
            className="border border-b-indigo-500 border-l-indigo-500 border-t-indigo-300 border-r-indigo-300 legend">
            <span className="md:text-8xl font-bold">5+</span>
            <p className="semi-bold text-4xl capitalize">years of experience</p>
          </div>
        </div>
        <div>
          <img className="img-carousel"  src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_960_720.jpg" />
          <div
            className="border border-b-indigo-500 border-l-indigo-500 border-t-indigo-300 border-r-indigo-300 legend">
            <span className="md:text-8xl font-bold">5+</span>
            <p className="semi-bold text-4xl capitalize">years of experience</p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Carrousel;
