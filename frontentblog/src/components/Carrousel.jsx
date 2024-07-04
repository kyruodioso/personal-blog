import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carrousel = () => {
  return (
    <>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/12/05/16/08/abstract-1078386_960_720.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/11/16/16/41/web-1045994_960_720.jpg" />
          <div
            className="border border-b-indigo-500 border-l-indigo-500 border-t-indigo-300 border-r-indigo-300 legend">
            <span className="md:text-8xl font-bold">5+</span>
            <p className="semi-bold text-4xl capitalize">years of experience</p>
          </div>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default Carrousel;
