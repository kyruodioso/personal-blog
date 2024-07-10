import { createClient } from '@sanity/client';

const client = createClient({
  projectId: import.meta.env.VITE_STUDIO_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-03-07',
});

export default client;