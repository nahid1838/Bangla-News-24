import NewsCard, { INews } from "@/components/NewsCard";
import { notFound } from "next/navigation";

const CategoryNews = async ({params}: {params: {categoryId: string}}) => {

    const {categoryId} = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const categoryNews: INews[] = data.data;

    if(!categoryNews) {
        notFound();
      }

    return (
        <div className="container mx-auto mt-5">
            <h3 className="text-2xl text-center md:text-left font-bold border-b-2 border-red-800 py-2">{data.title}</h3>

            <div className="mt-5 grid px-4 sm:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                   categoryNews.map(news => <NewsCard key={news.id} news={news}/>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;