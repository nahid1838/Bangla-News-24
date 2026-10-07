import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IHeadlines {
  id: string
  title: string
  description: string
  link: string
  imageUrl: string
  imageAlt: string
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  lastPublished: string
  source: string
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=8");
  const data = await res.json();
  const headlines: IHeadlines[] = data.data;

  return (
    <div className="bg-red-700 text-white">
      <div className="flex container mx-auto">
        <p className=" bg-red-900 py-2 px-5 font-bold">সর্বশেষ</p>

        <MarqueeText className="py-2" direction={"right"} duration={10}>
          {headlines.map((headline) => (
            <Link href={`/news/${headline.id}`} key={headline.id}>
              <span className="hover:underline">{headline.title}</span>
              <span className="px-5">•</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
