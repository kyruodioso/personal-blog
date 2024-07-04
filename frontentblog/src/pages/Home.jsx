import Carrousel from "../components/Carrousel"


const Home = () => {

  const products=[];

  return (
    <>
    <Carrousel/>
    <div className="section text-center">
      <h2 className="text-2xl text-white font-semibold uppercase"> recent work</h2>
      <h2 className="text-5xl text-white font-bold uppercase mt-2"> take a look at my recent design ventures</h2>

       {
        products && Array.isArray(products) &&(
          <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
    
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        )
       }
    
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