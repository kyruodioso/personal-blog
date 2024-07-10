import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carrousel = () => {
  return (
    <>
      <div className="relative ">
        <button className="text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded p-2 absolute left-0 top-1/2 transform -translate-y-1/2 ml-10 z-30">
          Say Hello
        </button>
        <button className="text-sm hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded p-2 absolute left-0 top-1/2 transform -translate-y-1/2 ml-40 z-30">
          Work Demo
        </button>

        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          className="bg-gradient-to-r from-indigo-500 to-indigo-300"
        >
          <div>
            <img
              className="img-carousel"
              src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_960_720.jpg"
            />
            <div className="border border-gray-400 legend">
              <span className="md:text-8xl font-bold">5+</span>
              <p className="semi-bold text-4xl capitalize">
                years of experience
              </p>
            </div>
          </div>
          <div>
            <img
              className="img-carousel"
              src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_960_720.jpg"
            />
            <div className="border border-gray-400 legend">
              <span className="md:text-8xl font-bold">5+</span>
              <p className="semi-bold text-4xl capitalize">
                years of experience
              </p>
            </div>
          </div>
          <div>
            <img
              className="img-carousel"
              src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_960_720.jpg"
            />
            <div className="border border-gray-400 legend">
              <span className="md:text-8xl font-bold">5+</span>
              <p className="semi-bold text-4xl capitalize">
                years of experience
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Carrousel;
