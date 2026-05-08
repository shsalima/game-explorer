import { RiMenuLine } from "@remixicon/react";
import { Link, useLocation } from "react-router";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function AppHeader() {
    const { pathname } = useLocation();

    const links = [
        {
            title: "home",
            path: "/",
        },
        {
            title: "games",
            path: "/games",
        },
        {
            title: "creators",
            path: "/creators",
        },
    ];

    const navList = links.map((link, i) => (
        <li key={i}>
            <Link
                to={link.path}
                className={`block text-center font-bold uppercase w-[100px] py-1 hover:bg-[#2563eb80] hover:text-[#38BDF8] main-transition ${
                    link.path == pathname ? "bg-[#2563eb80] text-[#38BDF8]" : ""
                }`}
            >
                {link.title}
            </Link>
        </li>
    ));

    const [showMobileNav, setShowMobileNav] = useState(false);

    return (
        <header className="sticky top-0 z-20 bg-[#010102] text-white py-5">
            <div className="container flex justify-between items-center">
                <Link
                    to="/"
                    className="bg-[linear-gradient(to_right,#38BDF8,#2563EB)] text-transparent bg-clip-text text-xl font-bold uppercase"
                >
                    GameExplorer
                </Link>
                <nav className="text-[#8894B0]">
                    <button
                        className="md:hidden cursor-pointer"
                        onClick={() => {
                            setShowMobileNav(true);
                        }}
                    >
                        <RiMenuLine />
                    </button>
                    <ul className="max-md:hidden flex gap-5">{navList}</ul>
                </nav>
            </div>
            {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} />}
        </header>
    );
}
