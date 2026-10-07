import NavLink from "./NavLink";

interface INavLinks {
  slug: string;
  title: string;
  scrapable: boolean;
}

async function getNavLinks(): Promise<INavLinks[]> {
  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
      next: { revalidate: 3600 }, // category porivartan hoy kom, 1 ghonta cache
      signal: AbortSignal.timeout(15000),
    });
    
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return (data.data ?? []).filter((navLink: INavLinks) => navLink.scrapable);
  } catch (e) {
    console.error("Categories fetch failed:", e);
    return [];
  }
}

const NavLinks = async () => {
  const navLinks = await getNavLinks();

  return (
    <nav
      aria-label="Categories"
      className="mt-3 border-t border-gray-200 sm:mt-5"
    >
      <div className="container mx-auto overflow-x-auto px-3 [scrollbar-width:none] [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)] md:px-1 lg:[mask-image:none] [&::-webkit-scrollbar]:hidden">

        <div className="flex w-max min-w-full items-center gap-4 py-2.5 text-sm whitespace-nowrap sm:gap-5 sm:py-3 sm:text-base lg:justify-center [&>*]:shrink-0">

          <NavLink href="/">হোম</NavLink>
          {navLinks.map((navLink) => (
            <NavLink key={navLink.slug} href={`/category/${navLink.slug}`}>
              {navLink.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
