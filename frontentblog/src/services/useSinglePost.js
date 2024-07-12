import client from './client';

export const useSinglePost = async (id) => {
  
      const singlePost = await client.fetch(`*[slug.current == ${id}]{
        title,
        _id,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": author->name,
        "authorImage": author->image
    }`);
    return singlePost;
  
};





