import client from './client';

export const useAboutMe = async () => {
  try {
    const aboutme = await client.fetch(`*[_type == "author"]{
  name,
    image{
    asset->{
          _id,
          url
        }
  },
    bio
}`);
    return aboutme;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; 
  }
};