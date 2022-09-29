import Link from "next/link";
import { useState } from "react"; // import state

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between px-6 py-6 md:px-12">
      <div className="cursor-pointer">
        <Link href="/">
          <a>
            <h1 className="text-4xl font-normal uppercase font-mont">ganco</h1>
          </a>
        </Link>
      </div>
      <nav>
        <section className="flex">
          <div
            className="space-y-2 md:cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 bg-gray-900"></span>
            <span className="block h-0.5 w-8 bg-gray-900"></span>
          </div>
          <div
            className={
              isNavOpen
                ? "z-10 w-screen top-0 left-0 h-screen absolute bg-red-200"
                : "hidden"
            }
          >
            <div
              className="absolute top-0 px-6 py-6 right-4 md:right-10 md:cursor-pointer"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="px-8 py-4">
              <ul className="flex flex-col items-start min-h-[250px]">
                <li>
                  <Link href="/">
                    <a>
                      <p className="py-2 text-xl font-bold uppercase font-mont">
                        Digital
                      </p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/art">
                    <a>
                      <p className="py-2 text-xl font-bold uppercase font-mont">
                        Papers
                      </p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/design">
                    <a>
                      <p className="py-2 text-xl font-bold uppercase font-mont">
                        Shop
                      </p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
}
