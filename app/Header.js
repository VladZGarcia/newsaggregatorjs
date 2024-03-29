import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <header>
        <div className="grid grid-cols-3 md:grid-cols-1 p-10 items-center">
            <Bars3Icon className="h-8 w-8 cursor-pointer md:hidden" />
            <Link href='/'>
            <div className="justify-end">
            <h1 className="font-serif text-4xl text-center">El{" "}
                <span className="underline decoration-6 decoration-orange-400">
                Mensajero
                    </span> </h1>
            </div>
                
            </Link>
            <div className="flex items-center justify-end space-x-2">
                <DarkModeButton/>
                {/* <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
                    Subscrivete
                </button> */}
            </div>
        </div>
        <NavLinks />
        <SearchBox />
    </header>
  );
}

export default Header;