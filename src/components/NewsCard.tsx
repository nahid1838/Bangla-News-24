import Image from "next/image";

export interface INews {
    id: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    title: string;
    description: string
}

const NewsCard = ({news}: {news: INews}) => {
    return (
        <div>
            <div className="card bg-base-100 flex-1 border w-full h-[500px] border-gray-300 rounded-2xl shadow-sm">
                    <figure className="overflow-hidden">
                      <Image 
                      src={news.imageUrl}
                      alt={news.imageAlt || news.title}
                      height={600}
                      width={600}
                      className="transition-transform duration-300 hover:scale-110 w-full h-58"
                      />
                    </figure>
                    <div className="px-3 py-4 space-y-2">
                        <p className="text-red-700 font-semibold">{news.category}</p>
                      <h2 className="card-title text-xl">{news.title}</h2>
                      <p className="text-gray-700">
                        {news.description}
                      </p>
                    </div>
                  </div>
        </div>
    );
};

export default NewsCard;