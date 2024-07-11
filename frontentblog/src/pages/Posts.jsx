import { useLoaderData, useParams } from "react-router-dom";
import dateFormat from 'dateformat';

const Posts = () => {
  const posts = useLoaderData();
  const  categoryId  = useParams();

  console.log(categoryId.id)

  const filteredPosts = posts.filter((post) => {
    return post.categories._ref === categoryId.id
  });
  console.log(filteredPosts)

  return (
    <>
      <div className="md:grid grid-cols-2 mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8 text-white ">
        <div className="col mx-4 mt-2 pr-20">
          <p className="mb-2">working process</p>
          <h3 className="font-bold text-4xl">
            To design with perfect strategy
          </h3>
        </div>
        <div className="col mx-4 mt-2 pt-8">
          <p>
            In my working process, I dive into a whirlwind of ideas, research,
            and design, crafting digital experiences that resonate.
          </p>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {filteredPosts?.map((post) => (
            <>
                <div className="group relative" key={post.title}>
                  <div
                    
                    className=" flex flex-col flex-grow bg-white overflow-hidden rounded-lg border border-indigo-500 backdrop-filter backdrop-blur-sm bg-opacity-10"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={post.mainImage.asset.url}
                        className="h-48 w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="p-10 text-white">
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                          />
                        </svg>
                        <span className="ml-1">{dateFormat(post._updatedAt, "dd/mm/yyyy")}</span>
                      </div>
                      <span className="font-semibold mt-4 text-2xl" >
                        {post.title.slice(0, 12)}...
                      </span>
                      <span>{post.categories._ref}</span>

                      <p className="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui debitis quibusdam eum velit sunt est nesciunt.
                      </p>
                    </div>
                  </div>
                </div>
            </>
          ))}
                        </div>

        </div>
      </div>
    </>
  );
};

export default Posts;
