import dotenv from 'dotenv';
dotenv.config();
const API_URL = process.env.WP_URL;

async function fetchAPI(query, { variables } = {}) {
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });

    let json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }

    return json.data;
  } catch (error) {
    return { msg: "error", error }
  }
}

export async function getAllPagesWithSlugs() {
  try {
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
                  sourceUrl
                  altText
                }
              } 
            }
          }
        }
      }
      `);

    if (data.msg === "error") throw new Error("failed to fetch API");

    const data_ = data?.posts.edges.map(({ node }) => {
      const featuredImage = node.featuredImage.node.sourceUrl
      const inputString = node.content

      const firstNewlineIndex = inputString.indexOf("\n") + 1;
      const secondNewlineIndex = inputString.indexOf("\n", firstNewlineIndex);

      const extractedContent = inputString.substring(firstNewlineIndex, secondNewlineIndex);

      return { title: node.title, slug: node.slug, featuredImage, tldr: extractedContent }
    });
    return data_;
  } catch (error) {
    console.log(error)
  }
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
            sourceUrl
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

