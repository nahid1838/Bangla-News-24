import Image from "next/image";

const NewsDetailsPage = async ({ params }: {params: {newsId: string}}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  const news = data.data;
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <article className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* Main Image */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={news.imageUrl}
            alt={news.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="px-5 py-8 sm:px-8 md:px-12">
          {/* Source & Date */}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">
              {news.source}
            </span>

            <span>
              Published:{" "}
              {new Date(news.firstPublished).toLocaleDateString("bn-BD", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>

            <span>•</span>

            <span>
              Updated:{" "}
              {new Date(news.lastPublished).toLocaleDateString("bn-BD", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            {news.title}
          </h1>

          {/* Author */}
          <div className="mt-6 border-b border-gray-200 pb-6">
            {news.byline?.map(
              (author: { name: string; role: string }, index: number) => (
                <div key={index}>
                  <p className="font-semibold text-gray-800">{author.name}</p>
                  <p className="text-sm text-gray-500">{author.role}</p>
                </div>
              ),
            )}
          </div>

          {/* Topics */}
          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold text-gray-700">Topics</p>

            <div className="flex flex-wrap gap-2">
              {news.topics?.map((topic: { id: string; name: string }) => (
                <span
                  key={topic.id}
                  className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                >
                  {topic.name}
                </span>
              ))}
            </div>
          </div>

          {/* Intro / Description */}
          <div className="mt-8 rounded-xl bg-gray-50 p-5">
            <p className="text-lg font-medium leading-8 text-gray-700">
              {news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text}
            </p>
          </div>

          {/* Article Body */}
          <div className="mt-10">
            {news.body?.map((item: any, index: number) => {
              /* Text */
              if (item.type === "text") {
                return (
                  <p
                    key={index}
                    className="mb-6 text-base leading-8 text-gray-700 sm:text-lg"
                  >
                    {item.text}
                  </p>
                );
              }

              /* Subheading */
              if (item.type === "subheading") {
                return (
                  <h2
                    key={index}
                    className="mb-5 mt-10 text-2xl font-bold text-gray-900 sm:text-3xl"
                  >
                    {item.text}
                  </h2>
                );
              }

              /* Image */
              if (item.type === "image") {
                return (
                  <figure
                    key={index}
                    className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-gray-50"
                  >
                    <div className="relative w-full">
                      <Image
                        src={item.url}
                        alt={item.altText || item.caption || news.title}
                        width={item.width}
                        height={item.height}
                        className="h-auto w-full object-cover"
                      />
                    </div>

                    {/* Caption */}
                    {item.caption && (
                      <figcaption className="px-4 py-3 text-sm leading-6 text-gray-600">
                        {item.caption}
                      </figcaption>
                    )}

                    {/* Copyright */}
                    {item.copyrightHolder && (
                      <p className="border-t border-gray-200 px-4 py-2 text-xs text-gray-400">
                        © {item.copyrightHolder}
                      </p>
                    )}
                  </figure>
                );
              }

              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 border-t border-gray-200 pt-6">
            <p className="mb-3 text-sm font-semibold text-gray-700">Tags</p>

            <div className="flex flex-wrap gap-2">
              {news.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article ID */}
          <div className="mt-6 border-t border-gray-100 pt-4 text-xs text-gray-400">
            Article ID: {news.id}
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsDetailsPage;
