import Link from "next/link";
import { useState } from "react"; // import state

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between px-6 py-6 md:px-12">
      <div className="cursor-pointer">
        <Link href="/">
          <a>
            <h1 className="text-4xl font-light uppercase font-mont">ganco</h1>
          </a>
        </Link>
      </div>
      <div>
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
              ? "z-10 w-screen top-0 left-0 h-screen absolute bg-slate-100"
              : "hidden"
          }
        >
          <div
            className="absolute top-0 px-6 py-6 right-0 md:right-10 md:cursor-pointer"
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
            <div className="cursor-pointer pt-2">
              <Link href="/">
                <a>
                  <h1 className="text-4xl font-light uppercase font-mont">
                    ganco
                  </h1>
                </a>
              </Link>
            </div>
            <div className="grid grid-cols-1 py-12">
              <div className="flex justify-center">
                <ul className="">
                  <li>
                    <Link href="/ganco">
                      <a>
                        <h1 className="font-mont font-light text-2xl text-center text-gray-600">
                          Ganco
                        </h1>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/productos">
                      <a>
                        <h1 className="pt-2 font-mont font-light text-2xl text-center text-gray-600">
                          Productos
                        </h1>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicios">
                      <a>
                        <h1 className="pt-2 font-mont font-light text-2xl text-center text-gray-600">
                          Servicios
                        </h1>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacto">
                      <a>
                        <h1 className="pt-2 font-mont font-light text-2xl text-center text-gray-600">
                          Contacto
                        </h1>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-orange-200">2</div>
              <div className="bg-red-200">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
