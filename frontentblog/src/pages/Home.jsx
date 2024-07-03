import Carrousel from "../components/Carrousel"


const Home = () => {
  return (
    <>
    <Carrousel/>
    <div ></div>
    <div className="section w-full">
    <div className="md:grid grid-cols-2">
      <div className="col m-2 p-2">
      <img src="https://cdn.pixabay.com/photo/2016/11/21/12/59/couch-1845270_1280.jpg" alt="" />
      </div>
      <div className="col m-2 p-2">
        <h3 className="text-3xl font-semibold tracking-tight  sm:text-4xl uppercase inline-block align-baseline">crafting spaces</h3>
      <h2 className="text-3xl font-semibold tracking-tight  sm:text-4xl uppercase inline-block align-baseline">Designing for your lifestile</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iste eligendi a vel perferendis, eius odio? Excepturi nesciunt voluptate assumenda deleniti minus, eaque rerum modi eveniet debitis impedit reprehenderit earum!</p>
      </div>
      </div>
    </div>
    
    <div className="md:grid grid-cols-2 bg-sky-400 w-full text-white text-center">
        <div className="col m-8">
          <span className="text-8xl font-bold underline decoration-solid">150+</span>
          <h3 className="semi-bold text-4xl capitalize mt-3">our exterpise</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus fugit ipsa. Blanditiis impedit repellendus nobis enim laboriosam doloremque natus, quos placeat molestiae officiis obcaecati, sunt, quo excepturi id tenetur.</p>
        </div>
        <div className="col m-8">
        <span className="text-8xl font-bold underline decoration-solid">900+</span>
        <h3 className="semi-bold text-4xl capitalize mt-3">happy clients</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus fugit ipsa. Blanditiis impedit repellendus nobis enim laboriosam doloremque natus, quos placeat molestiae officiis obcaecati, sunt, quo excepturi id tenetur.</p>
        </div>
      </div>
    </>
  )
}

export default Home