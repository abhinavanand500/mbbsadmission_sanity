export async function getNavbarData(id?: string, keywords?: string) {
  let query = encodeURIComponent(`*[_type in ["nav"]]`);
  const response = await fetch(
    "https://xz1irwuo.api.sanity.io/v2021-10-21/data/query/production?query=" +
      query
  );
  const fetchedData = await response.json();
  return fetchedData;
}

export async function getHomePageData(id?: string, keywords?: string) {
  let query = encodeURIComponent(`*[_type in ["homePage", "reviews"]]`);
  const response = await fetch(
    "https://xz1irwuo.api.sanity.io/v2021-10-21/data/query/production?query=" +
      query
  );
  const fetchedData = await response.json();
  return fetchedData;
}
