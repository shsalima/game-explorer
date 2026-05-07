import { RiSearchLine } from "@remixicon/react";
import axios from "axios";
import { useEffect } from "react";

export default function FilterSection({ setGames }) {
    const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

    useEffect(() => {
        axios
            .get(`${VITE_API_URL}/games?key=${VITE_API_KEY}&page_size=10`)
            .then((res) => {
                setGames(res.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="flex gap-5 py-4 mt-6 border-y border-[#2563eb47]">
            <div className="text-[#f0f4ff] w-[250px] relative">
                <RiSearchLine className="absolute left-3 top-[50%] translate-y-[-50%] w-[14px]" />
                <input
                    type="text"
                    placeholder="Search games by name..."
                    className="bg-[#0e1628] w-full border border-[#2563eb47] outline-none px-8 py-2 rounded-md"
                />
            </div>
            <select className="bg-[#0e1628] text-[#f0f4ff] border border-[#2563eb47] outline-none px-4 py-2 rounded-md">
                <option>All Genres</option>
                <option>Action</option>
                <option>RPG</option>
                <option>Adventure</option>
                <option>Strategy</option>
                <option>Shooter</option>
                <option>Sports</option>
                <option>Racing</option>
                <option>Simulation</option>
            </select>
        </div>
    );
}
