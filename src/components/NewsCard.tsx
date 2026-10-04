import Image from "next/image";

const NewsCard = ({news}) => {
    return (
        <div>
            <div className="card bg-base-100 flex-1 border border-gray-300 rounded-2xl shadow-sm">
                    <figure className="overflow-hidden">
                      <Image className="transition-transform duration-300 hover:scale-110"
                      src={news.imageUrl}
                      alt={news.imageAlt}
                      height={600}
                      width={600}
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