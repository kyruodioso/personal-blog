import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Blog = () => {
  const category = useLoaderData();

  return (
    <>
      <div className="section text-center mt-8">
        <h2 className="text-2xl text-white font-semibold uppercase">
          {" "}
          recent work
        </h2>
        <h2 className="text-5xl text-white font-bold uppercase mt-2">
          {" "}
          take a look at my recent design ventures
        </h2>

        <div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
              {category?.map((singleCategory) => (
                <>
                  <div className="col mx-4 mt-2 pt-8 hover:bg-white hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 border-slate-800 backdrop-filter backdrop-blur-sm bg-opacity-10 border p-5 border-t-cyan-500/50 border-b-cyan-500/50 border-r-transparent border-l-cyan-500/50 rounded-lg shadow-lg">
                  <Link to={`/blog/${singleCategory._id}`}>
                    <h3 className="font-bold text-4xl text-cyan-300">
                      {singleCategory.title}
                    </h3>
                    <p className="mt-3 text-white">{singleCategory.description}</p>
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
