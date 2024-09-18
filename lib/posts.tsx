/* eslint-disable no-console */
import type { Post } from '@/types/blog';

import graphqlRequest from './graphqlRequest';

export async function getPostList(
  endCursor = null,
  taxonomy = null,
): Promise<any> {
  let condition = `after: "${endCursor}", first: 4, where: {orderby: {field: DATE, order: DESC}}`;

  if (taxonomy) {
    // @ts-ignore
    condition = `after: "${endCursor}", first: 4, where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}`;
  }

  const query = {
    query: `query getAllPosts {
            posts(${condition}) {
              nodes {
                date
                slug
                title
                excerpt(format: RENDERED)
                featuredImage {
                  node {
                    mediaDetails {
                      file
                      sizes {
                        sourceUrl
                        width
                        height
                      }
                    }
                  }
                }
               
                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }`,
  };
  try {
    const resJson = await graphqlRequest(query);
    const allPosts = resJson.data.posts;
    return allPosts;
  } catch(e) {
    return false;
  }
}

/**
 * @param {any} slug
 */
export async function getSinglePost(slug: any): Promise<any> {
  const query = {
    query: `query getSinglePost {
            post(id: "${slug}", idType: SLUG) {
              content(format: RENDERED)
              date
              excerpt(format: RENDERED)
              modified
              slug
              title(format: RENDERED)
              databaseId
              featuredImage {
                node {
                  mediaDetails {
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
              author {
                node {
                  name
                }
              }
            }
          }`,
  };
  try {
    const resJson = await graphqlRequest(query);
    const singlePost = resJson.data.post;

    return singlePost;
  } catch(e) {
    return false;
  }
}

export async function getPostSlugs(): Promise<any> {
  const query = {
    query: `query getPostSlugs {
            posts {
              nodes {
                slug
                id
              }
            }
          }`,
  };
  try {
    const resJson = await graphqlRequest(query);
    const slug = resJson.data.posts.nodes;
    return slug;
  } catch(e) {
    return {};
  }
}

export async function getCategorySlugs(): Promise<any> {
  const query = {
    query: `query getCatetorySlugs {
      categories {
        nodes {
          slug
        }
      }
    }`,
  };
  
  const resJson = await graphqlRequest(query);
  const categories = resJson.data.categories.nodes;

  return categories;
}

/**
 * @param {any} categoryName
 */
export async function getCategoryDetails(categoryName: any): Promise<any> {
  const query = {
    query: `query getCategoryDetails {
      category(id: "${categoryName}", idType: SLUG) {
        count
        name
        slug
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  const categoryDetails = resJson.data.category;

  return categoryDetails;
}

export async function getLatestPostList(): Promise<Post[]> {
  const query = {
    query: `query NewQuery {
      posts(where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          date
          author {
            node {
              id
              firstName
              lastName
            }
          }
          categories {
            nodes {
              id
              name
              link
            }
          }
          id
          title
          link
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              link
              title
            }
          }
          slug
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts.nodes;
  return allPosts;
}

export async function getPostsByCatgoryId(categoryId: number): Promise<Post[]> {
  const query = {
    query: `query NewQuery {
      posts(where: {categoryId: ${categoryId}}) {
        nodes {
          date
          author {
            node {
              id
              firstName
              lastName
            }
          }
          categories {
            nodes {
              id
              name
              link
            }
          }
          id
          title
          link
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              link
              title
            }
          }
          slug
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts.nodes;
  return allPosts;
}

export async function getPostsByCategoryNotIn(
  categoryId: number,
): Promise<Post[]> {
  const query = {
    query: `query NewQuery {
      posts(where: {categoryNotIn: ${categoryId}}) {
        nodes {
          date
          author {
            node {
              id
              firstName
              lastName
            }
          }
          categories {
            nodes {
              id
              name
              link
            }
          }
          id
          title
          link
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              link
              title
            }
          }
          slug
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts.nodes;
  return allPosts;
}
