import { RiMenuLine } from "@remixicon/react";
import { Link } from "react-router";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function AppHeader() {
    const links = [
        {
            id: 1,
            title: "home",
            path: "/",
        },
        {
            id: 1,
            title: "games",
            path: "/games",
        },
        {
            id: 1,
            title: "creators",
            path: "/creators",
        },
    ];

    const navList = links.map((link) => (
        <li key={link.id}>
            <Link
                to={link.path}
                className="font-bold uppercase px-4 py-2 hover:bg-[#2563eb80] hover:text-[#38BDF8] transition"
            >
                {link.title}
            </Link>
        </li>
    ));

    const [showMobileNav, setShowMobileNav] = useState(false);

    return (
        <header className="bg-[#010102] text-white py-5">
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
