interface BlogDetails {
  data: any;
  faq: any;
  youtubeEmbedRes: any;
  notFound: boolean;
}

export async function getBlogDetails(routeURL: string): Promise<BlogDetails> {
  const apiHost = process.env.NEXT_PUBLIC_API_HOST;
  const query = encodeURIComponent(
    `*[ _type == "pages" && slug.current == "${routeURL}" ]`
  );
  const url = apiHost + query;
  const result = await fetch(url).then((res) => res.json());
  const data = result.result[0];

  if (!data) {
    return {
      data: null,
      faq: null,
      youtubeEmbedRes: null,
      notFound: true,
    };
  }

  const faqId =
    data.hasOwnProperty("frequentlyAskedQuestion") &&
    data.frequentlyAskedQuestion.map((id: any) => "'" + id._ref + "'").join();
  const faqQuery = encodeURIComponent(`*[_type == "faq" && _id in [${faqId}]]`);
  const faqUrl = apiHost + faqQuery;
  const faqResult = await fetch(faqUrl).then((res) => res.json());
  const faq = faqResult.result;

  const youtubeId =
    data.hasOwnProperty("youtubeEmbedUrl") &&
    data.youtubeEmbedUrl.map((id: any) => "'" + id._ref + "'").join();
  const youtubeEmbedQuery = encodeURIComponent(
    `*[_type == "youtubeEmbed" && _id in [${youtubeId}]]`
  );
  const youtubeEmbedUrl = apiHost + youtubeEmbedQuery;
  const youtubeEmbedResult = await fetch(youtubeEmbedUrl).then((res) =>
    res.json()
  );
  const youtubeEmbedRes = youtubeEmbedResult.result;

  return {
    data,
    faq,
    youtubeEmbedRes,
    notFound: false,
  };
}
