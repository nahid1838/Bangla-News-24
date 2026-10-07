import Link from "next/link";
import { Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";

const sans = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});
const serif = Noto_Serif_Bengali({ subsets: ["bengali", "latin"] });


export default function NotFound() {
  return (
    <main
      className={`${sans.className} container mx-auto grid min-h-[70dvh] place-items-center bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:min-h-[75dvh] lg:py-20 xl:py-24 dark:bg-[#0b1320] dark:text-slate-100`}
    >
      <style>{`
        @keyframes nf-slide { to { transform: translateX(-50%); } }
        .nf-run { animation: nf-slide 20s linear infinite; }
        @media (min-width: 640px) { .nf-run { animation-duration: 28s; } }
        @media (min-width: 1280px) { .nf-run { animation-duration: 34s; } }
        @media (prefers-reduced-motion: reduce) { .nf-run { animation: none; } }
      `}</style>

      <section className="w-full max-w-md text-center sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        
        <h1
          className={`${serif.className} text-7xl leading-[1.05] font-black tracking-tight sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem]`}
        >
          ৪০৪
        </h1>
        <h2
          className={`${serif.className} mb-3 text-xl leading-snug font-bold sm:text-2xl md:mb-4 md:text-3xl lg:text-4xl xl:text-5xl`}
        >
          আপনি যে খবরটি খুঁজছেন, সেটি এখানে নেই
        </h2>
        <p className="mx-auto mb-6 max-w-sm text-base leading-7 text-slate-600 sm:mb-8 sm:max-w-lg sm:text-lg sm:leading-8 md:max-w-xl lg:mb-10 lg:max-w-2xl lg:text-xl lg:leading-9 dark:text-slate-400">
          লিংকটি ভুল হতে পারে, অথবা পাতাটি সরিয়ে নেওয়া হয়েছে। হোমপেজে ফিরে যান
          কিংবা নিচের বিভাগগুলো থেকে খবর পড়ুন।
        </p>


        <div className="mb-8 flex justify-center sm:mb-10 lg:mb-12">
          <Link
            href="/"
            className="w-full rounded-md border-2 border-slate-900 bg-slate-900 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-red-600 hover:bg-red-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 sm:w-auto sm:px-8 lg:px-10 lg:py-3.5 lg:text-lg dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
          >
            হোমপেজে ফিরুন
          </Link>
        </div>
      </section>
    </main>
  );
}