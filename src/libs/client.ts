import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: 'my-blog-2022-11',
  apiKey: process.env.API_KEY,
});
