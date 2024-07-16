const workFlow = [
  {
    title: "Planificación",
    description:
      "Se definen objetivos y recursos. Se establece un plan detallado para cada fase del proyecto.",
  },
  {
    title: "Análisis de requisitos",
    description:
      "Se determinan las necesidades del sistema. Este punto comprende los requisitos funcionales y no funcionales.",
  },
  {
    title: "Diseño",
    description:
      "Se establece la arquitectura de la solución y se diseña la interfaz de usuario (UX/UI).",
  },
  {
    title: "Implementación",
    description:
      "Se desarrolla el código. Desarrolla funcionalidades según el diseño.",
  },
  {
    title: "Pruebas",
    description: "Se verifica la funcionalidad. Se busca posibles defectos y errores.",
  },
  {
    title: "Mantenimiento",
    description: "Aseguramiento de la operatividad y relevancia a lo largo del tiempo.",
  },
  {
    title: "Despliegue a Producción",
    description:
      "Se configura un entorno de producción. Realiza pruebas finales en el entorno de producción. Implementa la aplicación o sitio web en producción.",
  },
];

const RoundedCard = () => {
  return (
    <>
    {
      workFlow.map((item)=>(
       
            <div key={item.title} className="group relative">
              <div className="flex flex-col flex-grow bg-white overflow-hidden border border-indigo-500 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-full">
                <div className="flex flex-col items-center p-10">
                  <span className="font-semibold text-white">{item.title}</span>
          
                </div>
                <div className="p-5 text-center text-white">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
         
      ))
    }
    </>
  )
};

export default RoundedCard;
