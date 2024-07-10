import client from './client';

export const useCategory = async () => {
  try {
    const category = await client.fetch(`*[_type == "category"]{
  title,
    description,
    _id
}`);
    return category;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; 
  }
};