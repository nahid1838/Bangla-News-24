import Image from "next/image";

export interface IMainNews {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}


const MainNews = ({mainNews}: {mainNews: IMainNews[]}) => {

    const [firstNews, ...otherNews] = mainNews;

  return (
    <div className="flex gap-5">
      <div className="card bg-base-100 flex-1 border border-gray-300 rounded-2xl shadow-sm">
        <figure>
          <Image
          src={firstNews.imageUrl}
          alt={firstNews.imageAlt}
          height={600}
          width={600}
          />
        </figure>
        <div className="card-body">
            <p className="text-red-700 font-semibold">{firstNews.category}</p>
          <h2 className="card-title text-2xl">{firstNews.title}</h2>
          <p>
            {firstNews.description}
          </p>
        </div>
      </div>

      <div className="border border-gray-300 flex-1 rounded-2xl">
        {
            otherNews.slice(0, 5).map((ONews, id) => 
                <div className="px-5 py-3 border-b border-gray-300 last:border-b-0" key={id}>
                    <p className="text-red-700 font-semibold">{firstNews.category}</p>
                    <div className="text-lg font-semibold">{ONews.title}</div>
                </div>
            )
        }
      </div>
    </div>
  );
};

export default MainNews;
