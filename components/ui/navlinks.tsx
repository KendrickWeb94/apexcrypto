// components/Navlinks.tsx
import Link from "next/link";
import { NAV_LINKS } from "../../constants"; // Import your constants

const Navlinks: React.FC = () => {
  return (
    <nav className="">
      <ul className="flex gap-5">
        {NAV_LINKS.map(
          (
            link // Use the imported constant
          ) => (
            <li key={link.label}>
              <Link href={link.href} legacyBehavior>
                <a className=" text-[0.98rem] smooth hover:text-primary text-white">
                  {link.label}
                </a>
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navlinks;
