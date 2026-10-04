import Link from "next/link";

interface IMostReaded {
    title: string;
    category: string;
    id: string;
}


const MostReaded = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    const mostReaded: IMostReaded[] = data.data;

    return (
        <div className="space-y-4 border border-gray-300 rounded-2xl p-5">
            <h3 className="text-xl font-bold">সর্বাধিক পঠিত</h3>
            {
                mostReaded.map((mostRead, id: number) => 
                <div key={id}>
                    <Link href={`/news/${mostRead.id}`}>
                        <h3 className="flex gap-3 text-lg font-semibold hover:text-red-700"><span className="text-lg text-red-600">{id+1}</span>{mostRead.title}</h3>
                    </Link>
                </div>
                )
            }
        </div>
    );
};

export default MostReaded;