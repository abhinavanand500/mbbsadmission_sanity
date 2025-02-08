export async function getBlogData(id?: string, keywords?: string) {
  const query = encodeURIComponent(`*[ _type == "pages" && isBlog == true]`);
  const response = await fetch(
    "https://xz1irwuo.api.sanity.io/v2021-10-21/data/query/production?query=" +
      query
  );
  const fetchedData = await response.json();
  return fetchedData;
}
