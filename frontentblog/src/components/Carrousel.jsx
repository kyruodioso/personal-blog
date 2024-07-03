import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Carrousel = () => {
  return (
    <>
               <Carousel autoPlay={true} infiniteLoop={true}>
                <div >
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_1280.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </>
  )
}

export default Carrousel