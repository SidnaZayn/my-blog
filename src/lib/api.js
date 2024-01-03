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
            content
            featuredImage{
              node{
                uri
                altText
              }
            } 
          }
        }
      }
    }
    `);
  const data_ = data?.posts.edges.map(({ node }) => {
    const featuredImage = node.featuredImage.node.uri
    const inputString = node.content

    const firstNewlineIndex = inputString.indexOf("\n") + 1;
    const secondNewlineIndex = inputString.indexOf("\n", firstNewlineIndex);

    const extractedContent = inputString.substring(firstNewlineIndex, secondNewlineIndex);

    return { title: node.title, slug: node.slug, featuredImage, tldr: extractedContent }
  });
  return data_;
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
        featuredImage{
          node{
            altText
            databaseId
            uri
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

export async function getRecentPages() {
  const data = await fetchAPI(`
  {
    posts(where:{orderby:{field:DATE,order:DESC}}) {
      edges {
        node {
          slug
          title
          author{
            node{
              firstName
              lastName
              username
            }
          }
        }
      }
    }
  }
  `);

  return data.posts.edges.map(({ node }) => node);
}

