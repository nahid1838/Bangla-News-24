import MainNews from "@/components/MainNews";
import MostReaded from "@/components/MostReaded";

export default async function Home() {

  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">

          <MainNews mainNews={mainNews}></MainNews>
          <div>

          </div>
        </div>

        <div className="col-span-1">
          <MostReaded></MostReaded>
        </div>
      </div>
    </div>
  );
}
