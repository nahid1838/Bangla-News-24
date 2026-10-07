import MainNews from "@/components/MainNews";
import MostReaded from "@/components/MostReaded";
import NewsCard from "@/components/NewsCard";

interface IOtherSections {
  curationId: string;
  title: string;
  curationType: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IOtherSections[] = sections.slice(1);
  const filteredOtherSections = otherSections.filter(
    (section) => section.curationType !== "tipo-curation",
  );

  return (
    <div className="container mx-auto mt-5 px-3 md:px-0">
      <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-3 md:grid-rows-[auto_1fr]">
        {/* Main news */}
        <div className="md:col-span-2 md:col-start-1 md:row-start-1">
          <MainNews mainNews={mainNews} />
        </div>


        <div className="md:col-start-3 md:row-span-2 md:row-start-1">
          <MostReaded />
        </div>


        <div className="md:col-span-2 md:col-start-1 md:row-start-2">
          {filteredOtherSections.map((otherSection) => (
            <div className="mb-5" key={otherSection.curationId}>
              <p className="border-b-2 text-center md:text-left border-red-800 py-3 text-xl font-bold">
                {otherSection.title}
              </p>

              <div className="mt-5 px-4 sm:px-0 grid grid-cols-1 gap-4 md:grid-cols-3">
                {otherSection.articles.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}