import { RiCloseLine } from "@remixicon/react";
import { Link } from "react-router";

export default function MobileNav({ setShowMobileNav }) {
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
        <li key={link.id} className="w-fit">
            <Link
                to={link.path}
                className="block font-bold text-center uppercase w-[150px] py-2 hover:bg-[#2563eb80] hover:text-[#38BDF8] transition"
            >
                {link.title}
            </Link>
        </li>
    ));

    return (
        <div className="bg-[#010102] text-white py-5 fixed inset-0 w-screen h-screen z-10">
            <div
                className="container"
                onClick={() => {
                    setShowMobileNav(false);
                }}
            >
                <button className="block ml-auto cursor-pointer">
                    <RiCloseLine />
                </button>
                <nav className="text-[#8894B0]">
                    <ul className="flex flex-col justify-center items-center gap-5 pt-10">
                        {navList}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
