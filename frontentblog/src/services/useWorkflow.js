import client from './client';

export const useWorkFlow = async () => {
  try {
    const workFlow = await client.fetch(`*[_type == "workFlow"]{
title,
description
}`);
    return workFlow;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; 
  }
};

