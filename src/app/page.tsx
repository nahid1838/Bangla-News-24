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
  const filteredOtherSections = otherSections.filter(filteredOtherSection => filteredOtherSection.curationType !== "tipo-curation");

  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <MainNews mainNews={mainNews}></MainNews>
          <div>
            {filteredOtherSections.map((otherSection, id: number) => (
              <div className="mt-5" key={id}>
                <p className="border-b-2 border-red-800 py-3 text-xl font-semibold">{otherSection.title}</p>

                <div className="grid grid-cols-3 gap-4 mt-5">
                  {otherSection.articles.map((news) => (
                    <NewsCard key={news.id} news={news}></NewsCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1">
          <MostReaded></MostReaded>
        </div>
      </div>
    </div>
  );
}
