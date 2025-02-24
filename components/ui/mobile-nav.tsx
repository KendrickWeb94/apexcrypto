import Link from "next/link";
import { NAV_LINKS } from "../../constants";

export default function MobileNav() {
  return (
    <div className="p-4 bg-background border ds:block mdx:hidden smooth border-white/20 max-w-[200px] w-full fixed right-0 top-[4rem] rounded-md">
      <ul className="flex flex-col items-start gap-5">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className=" text-[0.98rem] smooth hover:text-primary text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
