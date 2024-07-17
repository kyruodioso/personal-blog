import { Link, useLoaderData } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import RoundedCard from "../components/RoundedCard";

const Home = () => {
  const projects = useLoaderData();
  return (
    <>
      <Carrousel />
      <div className="section text-center mt-8">
        <h2 className="text-2xl text-white font-semibold uppercase">
          {" "}
          Trabajos recientes
        </h2>
        <h2 className="text-5xl text-white font-bold uppercase mt-2">
          {" "}
          Una muestra de mis últimos trabajos
        </h2>

        {projects && Array.isArray(projects) && (
          <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                {projects?.map((project) => (
                  <a
                    key={project.mainImage.asset._id}
                    href={project.link}
                    className="group"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={project.mainImage.asset.url}
                        alt={project.mainImage.alt}
                        className="h-48 w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-white">{project.title}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {project.date}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="md:grid grid-cols-2 mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8 text-white ">
        <div className="col mx-4 mt-2 pr-20">
          <p className="mb-2">proceso de trabajo</p>
          <h3 className="font-bold text-4xl">
            Siguiendo un flujo para un mejor desempeño
          </h3>
        </div>
        <div className="col mx-4 mt-2 pt-8">
          <p>
            Iniciando en las mismas ideas con un gratificante diseño visual, una
            sólida estructura de software y un camino de crecimiento por el
            proyecto poniendo foco en lo que le dió origen al mismo.
          </p>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <RoundedCard />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute z-10 w-full mt-12 hidden md:block"
      >
        <path
          fill="#00cba9"
          fillOpacity="1"
          d="M0,96L24,128C48,160,96,224,144,213.3C192,203,240,117,288,85.3C336,53,384,75,432,85.3C480,96,528,96,576,85.3C624,75,672,53,720,80C768,107,816,181,864,208C912,235,960,213,1008,181.3C1056,149,1104,107,1152,106.7C1200,107,1248,149,1296,186.7C1344,224,1392,256,1416,272L1440,288L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
      <div className="md:grid grid-cols-2 mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8 text-white items-center">
        <div className="col mx-4 pr-20 z-20">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/11/12/33/crow-8626517_1280.jpg"
            alt=""
          />
        </div>
        <div className="col mx-4 z-20">
          <span className="text-3-l mb-4 font-semibold">Tecnologias</span>
          <h3 className="font-bold text-4xl mb-4">Diseñando experiencia,</h3>
          <p>Implementación de las últimas tecnologias</p>
          <button as={Link} className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 ">
            Saber más
          </button>
        </div>
      </div>

      <div className="w-full text-white mt-8 text-center">
        <span className="text-3-l mb-4 font-semibold">Pricing plan</span>
        <h3 className="font-bold text-4xl text-center">
          Pricing options that meets your budget and needs
        </h3>

        <div className="flex flex-col items-center justify-center min-h-screen p-10 ">
          <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
            <div className="flex flex-col flex-grow bg-white mt-8 overflow-hidden rounded-lg border border-slate-800 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-indigo-500/50 border-l-indigo-500/50">
              <div className="flex flex-col items-center p-10 ">
                <span className="font-semibold">Padawan</span>
                <div className="flex items-center">
                  <span className="text-3xl">$</span>
                  <span className="text-5xl font-bold">20</span>
                  <span className="text-2xl text-gray-500">/mo</span>
                </div>
              </div>
              <div className="p-10">
                <ul>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Lightsaber</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Robe</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Insurance</span>
                  </li>
                </ul>
              </div>
              <div className="flex px-10 pb-10 justfy-center">
                <button className="flex items-center justify-center w-full h-12 px-6 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                  Join now
                </button>
              </div>
            </div>

            <div className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white  shadow-lg md:scale-110 rounded-lg border border-slate-800 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-indigo-500/50 border-l-indigo-500/50">
              <div className="flex flex-col items-center p-10 ">
                <span className="font-semibold">Jedi Knight</span>
                <div className="flex items-center">
                  <span className="text-3xl">$</span>
                  <span className="text-6xl font-bold">50</span>
                  <span className="text-2xl text-gray-500">/mo</span>
                </div>
              </div>
              <div className="p-10">
                <ul>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 italic">Padawan +</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Solo missions</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Utility belt</span>
                  </li>
                </ul>
              </div>
              <div className="flex px-10 pb-10 justfy-center">
                <button className="flex items-center justify-center w-full h-12 px-6 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                  Join now
                </button>
              </div>
            </div>

            <div className="flex flex-col flex-grow overflow-hidden bg-white shadow-lg mt-19 rounded-lg border border-slate-800 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-indigo-500/50 border-l-indigo-500/50">
              <div className="flex flex-col items-center p-10 ">
                <span className="font-semibold">Jedi Master</span>
                <div className="flex items-center">
                  <span className="text-3xl">$</span>
                  <span className="text-5xl font-bold">99</span>
                  <span className="text-2xl text-gray-500">/mo</span>
                </div>
              </div>
              <div className="p-10">
                <ul>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 italic">Jedi Knight +</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Sit on council</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Stock options</span>
                  </li>
                </ul>
              </div>
              <div className="flex px-10 pb-10 justfy-center">
                <button className="flex items-center justify-center w-full h-12 px-6 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                  Join now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
