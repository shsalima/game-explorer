import { RiSearchLine } from "@remixicon/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FilterSection({
    setGamesData,
    setLoading,
    setError,
    currentPage,
}) {
    const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

    const [filterValues, setFilterValues] = useState({
        search: "",
        genre: "All Genres",
    });

    function handleChange(e) {
        setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
    }

    const gamesPerPage = 9;
    const queries = {
        key: VITE_API_KEY,
        page_size: gamesPerPage,
        page: currentPage,
        search: filterValues.search,
    };

    if (filterValues.genre != "All Genres") {
        queries.genres = filterValues.genre.toLowerCase();
    }

    if (filterValues.search != "") {
        queries.search = filterValues.search;
    }

    useEffect(() => {
        axios
            .get(`${VITE_API_URL}/games`, {
                params: queries,
            })
            .then((res) => {
                const gamesData = {
                    games: res.data.results,
                    totalPages: Math.ceil(res.data.count / gamesPerPage),
                };

                setGamesData(gamesData);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [filterValues, currentPage]);
    return (
        <div className="flex gap-5 py-4 mt-6 border-y border-[#2563eb47]">
            <div className="text-[#f0f4ff] w-[250px] relative">
                <RiSearchLine className="absolute left-3 top-[50%] translate-y-[-50%] w-[14px]" />
                <input
                    type="text"
                    placeholder="Search games by name..."
                    className="bg-[#0e1628] w-full border border-[#2563eb47] outline-none px-8 py-2 rounded-md"
                    name="search"
                    value={filterValues.search}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
            </div>
            <select
                className="bg-[#0e1628] text-[#f0f4ff] border border-[#2563eb47] outline-none px-4 py-2 rounded-md"
                name="genre"
                value={filterValues.genre}
                onChange={(e) => {
                    handleChange(e);
                }}
            >
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
