import Lottie from "lottie-react"
import chart from "../assets/lotties/chart.json"
import cube from "../assets/lotties/cube.json"
import party from "../assets/lotties/party.json"
import hammer from "../assets/lotties/hammer.json"
import qa from "../assets/lotties/qa.json"
import implementation from "../assets/lotties/implementation.json"
import design from "../assets/lotties/design.json"
import feedback from "../assets/lotties/feedback.json"




const workFlow = [
  {
    title: "Planificación",
    description:
      "Se definen objetivos y recursos. Se establece un plan detallado para cada fase del proyecto.",
      effect: cube
  },
  {
    title: "Análisis de requisitos",
    description:
      "Se determinan las necesidades del sistema. Este punto comprende los requisitos funcionales y no funcionales.",
      effect: chart
  },
  {
    title: "Diseño",
    description:
      "Se establece la arquitectura de la solución y se diseña la interfaz de usuario (UX/UI).",
      effect: design
  },
  {
    title: "Implementación",
    description:
      "Se desarrolla el código. Desarrolla funcionalidades según el diseño.",
      effect: implementation
  },
  {
    title: "Pruebas",
    description:
      "Se verifica la funcionalidad. Se busca posibles defectos y errores.",
      effect: qa
  },
  {
    title: "Feedback",
    description:
      "Se mantiene contacto mediante las pruebas para hacer un seguimiento efectivo.",
      effect: feedback
  },
  {
    title: "Despliegue a Producción",
    description:
      "Se configura un entorno de producción. Realiza pruebas finales en el entorno de producción. Implementa la aplicación o sitio web en producción.",
      effect: party
  },
  {
    title: "Mantenimiento",
    description:
      "Aseguramiento de la operatividad y relevancia a lo largo del tiempo.",
      effect: hammer
  },

];
const RoundedCard = () => {
  return (
    <>
      {workFlow.map((item) => (
        <div key={item.title} className="flex items-center">
          <div className="group relative">
            {/* Contenedor del SVG (Lottie) */}
            <div className="absolute inset-0">
              <Lottie className="w-full h-full" loop={true} animationData={item.effect} />
            </div>

            {/* Contenedor del texto */}
            <div className="h-96 flex flex-col flex-grow bg-white overflow-hidden border border-indigo-500 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg relative">
              <div className="flex flex-col items-center p-10">
                <span className="font-semibold text-white">{item.title}</span>
              </div>
              <div className="p-5 text-center font-semibold text-white">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RoundedCard;