import { useLoaderData } from "react-router-dom";


const About = () => {
  const aboutme= useLoaderData()

  console.log(aboutme)

  return (
    <>

     <div className="flex flex-col min-h-screen p-10 ">
     <h2 className="text-2xl text-white font-semibold uppercase">
          {" "}
          recent work
        </h2>
        <h2 className="text-5xl text-white font-bold uppercase mt-2">
          {" "}
          take a look at my recent design ventures
        </h2>
        <div className="md:grid grid-cols-2 mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8 text-white ">
        <div className="col mx-4 mt-2 pt-8">
          <p className="mb-2">working process</p>
          <h3 className="font-bold text-4xl">
            To design with perfect strategy
          </h3>
          <p className="mt-3">{aboutme[0].bio[0].children[0].text}</p>
        </div>
        <div className="col mx-4 mt-2 pt-8 ">
          <p>
            In my working process, I dive into a whirlwind of ideas, research,
            and design, crafting digital experiences that resonate.
          </p>
        </div>
      </div>
            </div>
            
    </>
   
  )
}

export default About