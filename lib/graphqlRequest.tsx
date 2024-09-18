/**
 * @param {{ query: string; }} query
 */
export default async function graphqlRequest(query: {
  query: string;
}): Promise<any> {
  const url: string = 'https://www.kashmironline.com/blog/graphql';
  const headers: { 'Content-Type': string } = {
    'Content-Type': 'application/json',
  };

  const res: Response = await fetch(url, {
    headers,
    method: 'POST',
    body: JSON.stringify(query),
  });

  const resJson: any = await res.json();
  return resJson;
}
