import Carrousel from "../components/Carrousel"


const Home = () => {
  return (
    <>
    <Carrousel/>
    <div className="section container">
    <div className="grid grid-cols-2">
      <div className="col m-2">
      <img src="https://cdn.pixabay.com/photo/2016/11/21/12/59/couch-1845270_1280.jpg" alt="" />
      </div>
      <div className="col m-2">
      <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl uppercase">Designing for your lifestile</h2>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home