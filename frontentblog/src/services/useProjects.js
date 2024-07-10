import client from './client';

export const useProjects = async () => {
  try {
    const projects = await client.fetch(`*[_type == "proyectos"]{
      title,
      publishedAt,
      link,
      description,
      projectType,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`);
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; 
  }
};

