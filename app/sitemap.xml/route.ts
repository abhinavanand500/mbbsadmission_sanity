import { NextResponse } from "next/server";

const EXTERNAL_DATA_URL = "https://www.mbbsadmissionsinabroad.com";

function generateSiteMap(allPagesData: { slug: string; updatedAt: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${EXTERNAL_DATA_URL}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${EXTERNAL_DATA_URL}/blog</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${EXTERNAL_DATA_URL}/contact</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${EXTERNAL_DATA_URL}/gallery</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    ${allPagesData
      .map(
        (data) => `
    <url>
        <loc>${EXTERNAL_DATA_URL}/${data.slug}</loc>
        <lastmod>${data.updatedAt}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>`
      )
      .join("")}
  </urlset>`;
}

export async function GET() {
  try {
    const query = encodeURIComponent(
      `*[_type in ["nav", "homePage", "reviews", "pages"]]`
    );

    const response = await fetch(
      `https://xz1irwuo.api.sanity.io/v2021-10-21/data/query/production?query=${query}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from Sanity");
    }

    const apiResult = await response.json();

    const pagesData = apiResult.result
      .filter(
        (item: any) =>
          item._type === "pages" &&
          item.slug &&
          item.slug.current &&
          item._updatedAt
      )
      .map((item: any) => ({
        slug: item.slug.current,
        updatedAt: item._updatedAt,
      }));

    const sitemap = generateSiteMap(pagesData);

    // Return the XML sitemap
    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new NextResponse("Error generating sitemap", { status: 500 });
  }
}
