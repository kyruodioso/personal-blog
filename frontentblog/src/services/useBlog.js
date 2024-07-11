import client from './client';

export const useBlog = async () => {
  try {
    const posts = await client.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            _updatedAt,
            categories[0]{
    _ref
  }
        }`);
    return posts;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; 
  }
};