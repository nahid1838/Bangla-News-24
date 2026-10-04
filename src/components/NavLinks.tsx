import Link from "next/link";

interface INavLinks {
    slug: string;
    title: string;
    scrapable: boolean
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navLinks: INavLinks[] = data.data;
  const filteredNavLinks = navLinks.filter((navLink) => navLink.scrapable);

  return (
    <div className=" container mx-auto flex gap-5 justify-center mt-5">
        <Link className="hover:text-red-700 hover:font-semibold" href={"/"}>হোম</Link>
      {filteredNavLinks.map((navLink, id) => (
        <Link className="hover:text-red-700 hover:font-semibold" 
        key={id} 
        href={`/category/${navLink.slug}`}>
          {navLink.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
