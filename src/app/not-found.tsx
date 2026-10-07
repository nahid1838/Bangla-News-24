import Link from "next/link";
import { Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";

const sans = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});
const serif = Noto_Serif_Bengali({ subsets: ["bengali", "latin"] });


const sections = [
  { label: "সর্বশেষ", href: "/latest" },
  { label: "বাংলাদেশ", href: "/bangladesh" },
  { label: "আন্তর্জাতিক", href: "/international" },
  { label: "অর্থনীতি", href: "/economy" },
  { label: "খেলা", href: "/sports" },
  { label: "বিনোদন", href: "/entertainment" },
];

export default function NotFound() {
  return (
    <main
      className={`${sans.className} grid min-h-screen place-items-center bg-slate-100 px-5 py-10 text-slate-900 dark:bg-[#0b1320] dark:text-slate-100`}
    >
      {/* টিকারের অ্যানিমেশন */}
      <style>{`
        @keyframes nf-slide { to { transform: translateX(-50%); } }
        .nf-run { animation: nf-slide 28s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .nf-run { animation: none; } }
      `}</style>

      <section className="w-full max-w-2xl text-center">
        {/* বড় ৪০৪ */}
        <h1
          className={`${serif.className} text-[clamp(6rem,26vw,13rem)] font-black leading-[1.05] tracking-tight`}
        >
          ৪০৪
        </h1>

        {/* ব্রেকিং টিকার */}
        <div
          aria-hidden="true"
          className="mb-9 mt-2 flex overflow-hidden rounded bg-red-600 text-white dark:bg-red-500"
        >
          <span className="flex-none bg-slate-900 px-4 py-2 font-bold text-slate-100 dark:bg-slate-100 dark:text-slate-900">
            ব্রেকিং
          </span>
          <div className="flex flex-1 items-center overflow-hidden">
            <div className="nf-run flex flex-none whitespace-nowrap">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="flex items-center pr-12 font-medium">
                  <span className="mr-12 inline-block h-2 w-2 rounded-full bg-white/70" />
                  এই পাতাটি খুঁজে পাওয়া যায়নি
                </span>
              ))}
            </div>
          </div>
        </div>

        <h2
          className={`${serif.className} mb-3 text-2xl font-bold leading-snug sm:text-3xl`}
        >
          আপনি যে খবরটি খুঁজছেন, সেটি এখানে নেই
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-400">
          লিংকটি ভুল হতে পারে, অথবা পাতাটি সরিয়ে নেওয়া হয়েছে। হোমপেজে ফিরে যান
          কিংবা নিচের বিভাগগুলো থেকে খবর পড়ুন।
        </p>

        {/* বাটন */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-md border-2 border-slate-900 bg-slate-900 px-6 py-3 font-semibold text-slate-100 transition hover:border-red-600 hover:bg-red-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
          >
            হোমপেজে ফিরুন
          </Link>
        </div>
      </section>
    </main>
  );
}