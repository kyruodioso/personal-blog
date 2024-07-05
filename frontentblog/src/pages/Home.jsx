import Carrousel from "../components/Carrousel";

const Home = () => {
  const products = [];

  return (
    <>
      <Carrousel />
      <div className="section text-center">
        <h2 className="text-2xl text-white font-semibold uppercase">
          {" "}
          recent work
        </h2>
        <h2 className="text-5xl text-white font-bold uppercase mt-2">
          {" "}
          take a look at my recent design ventures
        </h2>

        {products && Array.isArray(products) && (
          <div>
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
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {product.price}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="md:grid grid-cols-2 w-full text-white">
        <div className="col m-8">
          <p>working process</p>
          <h3 className="font-bold text-4xl mb-4 text-center">
            To design with perfect strategy
          </h3>
        </div>
        <div className="col m-8">
          <p>
            In my working process, I dive into a whirlwind of ideas, research,
            and design, crafting digital experiences that resonate.
          </p>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://cdn.pixabay.com/photo/2024/03/25/20/30/german-shorthaired-pointer-8655457_1280.jpg"
                  alt="prueba"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="https://cdn.pixabay.com/photo/2024/03/25/20/30/german-shorthaired-pointer-8655457_1280.jpg">
                      <span aria-hidden="true" className="absolute inset-0" />
                      product name
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">product color</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  product price
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://cdn.pixabay.com/photo/2024/03/25/20/30/german-shorthaired-pointer-8655457_1280.jpg"
                  alt="prueba"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="https://cdn.pixabay.com/photo/2024/03/25/20/30/german-shorthaired-pointer-8655457_1280.jpg">
                      <span aria-hidden="true" className="absolute inset-0" />
                      product name
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">product color</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  product price
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://cdn.pixabay.com/photo/2024/03/25/20/30/german-shorthaired-pointer-8655457_1280.jpg"
                  alt="prueba"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="https://cdn.pixabay.com/photo/2024/03/25/20/30/german-shorthaired-pointer-8655457_1280.jpg">
                      <span aria-hidden="true" className="absolute inset-0" />
                      product name
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">product color</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  product price
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://cdn.pixabay.com/photo/2024/03/25/20/30/german-shorthaired-pointer-8655457_1280.jpg"
                  alt="prueba"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="https://cdn.pixabay.com/photo/2024/03/25/20/30/german-shorthaired-pointer-8655457_1280.jpg">
                      <span aria-hidden="true" className="absolute inset-0" />
                      product name
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">product color</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  product price
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-2  w-full text-white">
        <div className="col  m-3">
          <img src="https://cdn.pixabay.com/photo/2024/03/11/12/33/crow-8626517_1280.jpg" alt="" />
        </div>
        <div className="col m-3 bg-white  border-slate-800 backdrop-filter backdrop-blur-sm bg-opacity-10 border p-5 border-b-indigo-500/50 border-l-indigo-500/50 rounded-lg shadow-lg">
          <span className="text-3-l mb-4 font-semibold">
            Story of nataliy
          </span>
          <h3 className="font-bold text-4xl mb-4 text-center">Designing experiences, building connections</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus
            fugit ipsa. Blanditiis impedit repellendus nobis enim laboriosam
            doloremque natus, quos placeat molestiae officiis obcaecati, sunt,
            quo excepturi id tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nobis error ipsam incidunt dolor, culpa veritatis quod! Nemo laborum ut accusamus veritatis natus expedita et, nobis, placeat, aspernatur voluptate eligendi.
          </p>
          <button className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full p-3 mt-8">Read more</button>

        </div>
      </div>
      <div className="w-full text-white mt-8 text-center">
      <span className="text-3-l mb-4 font-semibold">
            Pricing plan
          </span>
      <h3 className="font-bold text-4xl text-center">Pricing options that meets your budget and needs</h3>
     

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
						<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Lightsaber</span>
					</li>
					<li className="flex items-center">
						<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Robe</span>
					</li>
					<li className="flex items-center">
						<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Insurance</span>
					</li>
				</ul>
			</div>
			<div className="flex px-10 pb-10 justfy-center">
				<button className="flex items-center justify-center w-full h-12 px-6 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">Join now</button>
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
						<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
						<span className="ml-2 italic">Padawan +</span>
					</li>
					<li className="flex items-center">
						<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Solo missions</span>
					</li>
					<li className="flex items-center">
						<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Utility belt</span>
					</li>
				</ul>
			</div>
			<div className="flex px-10 pb-10 justfy-center">
				<button className="flex items-center justify-center w-full h-12 px-6 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">Join now</button>
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
						<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
						<span className="ml-2 italic">Jedi Knight +</span>
					</li>
					<li className="flex items-center">
						<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Sit on council</span>
					</li>
					<li className="flex items-center">
						<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
						<span className="ml-2">Stock options</span>
					</li>
				</ul>
			</div>
			<div className="flex px-10 pb-10 justfy-center">
				<button className="flex items-center justify-center w-full h-12 px-6 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">Join now</button>
			</div>
		</div>
	</div>
  </div>
      </div>
    </>
  );
};

export default Home;
