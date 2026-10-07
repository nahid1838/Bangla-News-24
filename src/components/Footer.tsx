// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

interface INavLinks {
  slug: string;
  title: string;
  scrapable: boolean;
}

const links = [
  { label: "আমাদের সম্পর্কে", href: "/about" },
  { label: "যোগাযোগ", href: "/contact" },
  { label: "বিজ্ঞাপন দিন", href: "/advertise" },
  { label: "ক্যারিয়ার", href: "/career" },
  { label: "সম্পাদকীয় নীতিমালা", href: "/editorial-policy" },
];

const legal = [
  { label: "গোপনীয়তা নীতি", href: "/privacy-policy" },
  { label: "ব্যবহারের শর্তাবলী", href: "/terms" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/banglanews24",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    path: "M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19C2 8.76 2 12 2 12s0 3.24.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81ZM10 15V9l5.2 3-5.2 3Z",
  },
  {
    name: "X",
    href: "https://x.com/",
    path: "M17.53 3H20.5l-6.5 7.43L21.65 21h-6l-4.7-6.15L5.57 21H2.6l6.95-7.95L2.2 3h6.15l4.25 5.62L17.53 3Zm-1.05 16.2h1.65L7.45 4.7H5.67l10.8 14.5Z",
  },
];

const linkClass =
  "inline-block py-0.5 transition hover:text-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500";

const getCategories = async (): Promise<INavLinks[]> => {
  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
      next: { revalidate: 3600 }, // ১ ঘণ্টা ক্যাশ
    });
    if (!res.ok) return [];
    const data = await res.json();
    const navLinks: INavLinks[] = data.data;
    return navLinks.filter((navLink) => navLink.scrapable);
  } catch {
    return []; // API ফেল করলেও ফুটার ভাঙবে না
  }
};

const Footer = async () => {
  const categories = await getCategories();
  const year = new Date().getFullYear().toLocaleString("bn-BD", {
    useGrouping: false,
  });

  return (
    <footer className="mt-12 border-t-4 border-red-700 bg-slate-900 text-slate-300 sm:mt-16">
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-14 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
          {/* ব্র্যান্ড */}
          <div className="col-span-2 text-center sm:text-left lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
            >
              <Image
                src="/logo.webp"
                alt="Bangla News 24 Logo"
                height={50}
                width={50}
                className="h-10 w-10 sm:h-[50px] sm:w-[50px]"
              />
              <span className="text-2xl font-bold text-white sm:text-3xl">
                Bangla News <span className="text-red-500">24</span>
              </span>
            </Link>

            <p className="mx-auto mt-4 max-w-md leading-7 text-slate-400 sm:mx-0 sm:mt-5 sm:leading-8">
              দেশ ও বিশ্বের সর্বশেষ খবর, নির্ভুল তথ্য আর নিরপেক্ষ বিশ্লেষণ নিয়ে
              আপনার পাশে আছে Bangla News 24। সত্য খবর, সবার আগে।
            </p>

            <div className="mt-5 flex justify-center gap-3 sm:mt-6 sm:justify-start">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-700 text-slate-300 transition hover:border-red-600 hover:bg-red-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* বিভাগ (API থেকে) */}
          <nav aria-label="বিভাগ" className="col-span-2 lg:col-span-3">
            <h4 className="mb-4 text-lg font-bold text-white sm:mb-5">বিভাগ</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-2">
              <li>
                <Link href="/" className={linkClass}>
                  হোম
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}`} className={linkClass}>
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* গুরুত্বপূর্ণ লিংক */}
          <nav
            aria-label="গুরুত্বপূর্ণ লিংক"
            className="col-span-2 sm:col-span-1 lg:col-span-2"
          >
            <h4 className="mb-4 text-lg font-bold text-white sm:mb-5">
              গুরুত্বপূর্ণ লিংক
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* যোগাযোগ */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <h4 className="mb-4 text-lg font-bold text-white sm:mb-5">
              যোগাযোগ
            </h4>
            <address className="space-y-2.5 not-italic leading-7">
              <p>ঢাকা, বাংলাদেশ</p>
              <p>
                <a
                  href="mailto:info@banglanews24.com"
                  className="break-all transition hover:text-red-400"
                >
                  info@banglanews24.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+8801000000000"
                  className="transition hover:text-red-400"
                >
                  +৮৮০ ১০০০ ০০০০০০
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* নিচের অংশ */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-slate-800 pt-6 text-center text-sm text-slate-400 sm:mt-12 md:flex-row md:justify-between md:text-left">
          <p>© {year} Bangla News 24। সর্বস্বত্ব সংরক্ষিত।</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-red-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;