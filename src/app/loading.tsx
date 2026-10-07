// app/loading.tsx
import { Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";

const sans = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});
const serif = Noto_Serif_Bengali({ subsets: ["bengali", "latin"] });

const LoadingPage = () => {
  return (
    <main
      role="status"
      aria-live="polite"
      className={`${sans.className} grid min-h-screen place-items-center bg-slate-100 px-5 py-10 text-slate-900 dark:bg-[#0b1320] dark:text-slate-100`}
    >
      {/* লোডিং বারের অ্যানিমেশন */}
      <style>{`
        @keyframes ld-slide {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
        .ld-bar { animation: ld-slide 1.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ld-bar { animation: none; transform: translateX(0); width: 100%; }
        }
      `}</style>

      <section className="w-full max-w-md text-center">
        {/* ব্রেকিং ট্যাগ */}
        <div className="mb-6 inline-flex overflow-hidden rounded text-sm font-bold">
          <span className="bg-slate-900 px-3 py-1 text-slate-100 dark:bg-slate-100 dark:text-slate-900">
            ব্রেকিং
          </span>
          <span className="bg-red-600 px-3 py-1 text-white dark:bg-red-500">
            খবর আসছে
          </span>
        </div>

        <h1
          className={`${serif.className} mb-2 text-3xl font-black leading-snug sm:text-4xl`}
        >
          খবর লোড হচ্ছে
          <span className="ml-1 inline-flex gap-1 align-middle">
            <span className="h-2 w-2 rounded-full bg-red-600 motion-safe:animate-bounce dark:bg-red-500" />
            <span className="h-2 w-2 rounded-full bg-red-600 motion-safe:animate-bounce [animation-delay:150ms] dark:bg-red-500" />
            <span className="h-2 w-2 rounded-full bg-red-600 motion-safe:animate-bounce [animation-delay:300ms] dark:bg-red-500" />
          </span>
        </h1>
        <p className="mb-8 text-slate-600 dark:text-slate-400">
          অনুগ্রহ করে একটু অপেক্ষা করুন
        </p>

        {/* ইন্ডিটারমিনেট প্রগ্রেস বার */}
        <div className="mb-10 h-1.5 w-full overflow-hidden rounded-full bg-slate-300 dark:bg-slate-700">
          <div className="ld-bar h-full w-1/4 rounded-full bg-red-600 dark:bg-red-500" />
        </div>

        {/* খবরের কার্ডের স্কেলেটন */}
        <div
          aria-hidden="true"
          className="space-y-3 border-t border-slate-300 pt-6 text-left dark:border-slate-700"
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex gap-3 motion-safe:animate-pulse">
              <div className="h-14 w-20 flex-none rounded bg-slate-300 dark:bg-slate-700" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-3 w-full rounded bg-slate-300 dark:bg-slate-700" />
                <div className="h-3 w-2/3 rounded bg-slate-300 dark:bg-slate-700" />
              </div>
            </div>
          ))}
        </div>

        <span className="sr-only">পাতাটি লোড হচ্ছে</span>
      </section>
    </main>
  );
};

export default LoadingPage;