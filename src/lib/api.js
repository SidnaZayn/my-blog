import dotenv from 'dotenv';
dotenv.config();
const API_URL = process.env.WP_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPagesWithSlugs() {
  const data = await fetchAPI(`
    {
      posts {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
    `);
  return data?.posts;
}

export async function getPageBySlug(slug) {
  const data = await fetchAPI(`
    {
      post(id: "${slug}", idType: SLUG) {
        id
        databaseId
        date
    		author{
          node{
            name
            username
          }
        }
        title
        uri
        content
      }
    }
    `);
  return data?.post;
}

