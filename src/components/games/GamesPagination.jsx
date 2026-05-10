import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

export default function GamesPagination({
    currentPage,
    setCurrentPage,
    totalPages,
}) {
    function handlePreviousPage() {
        if (currentPage == 1) {
            return;
        }
        setCurrentPage(currentPage - 1);
    }
    function handleNextPage() {
        if (currentPage == totalPages) {
            return;
        }
        setCurrentPage(currentPage + 1);
    }
    return (
        <div className="text-[#f0f4ff]">
            <h5 className="text-center mb-2">Total Pages: {totalPages}</h5>
            <div className="flex justify-center items-center gap-3">
                <button
                    className="bg-[#0E1628] w-[40px] h-[40px] border border-[#2563eb9c] rounded-md flex justify-center items-center cursor-pointer"
                    onClick={handlePreviousPage}
                >
                    <RiArrowLeftSLine />
                </button>
                <div className="bg-[#0E1628] w-[40px] h-[40px] border border-[#2563eb9c] rounded-md flex justify-center items-center">
                    <span>{currentPage}</span>
                </div>
                <button
                    className="bg-[#0E1628] w-[40px] h-[40px] border border-[#2563eb9c] rounded-md flex justify-center items-center cursor-pointer"
                    onClick={handleNextPage}
                >
                    <RiArrowRightSLine />
                </button>
            </div>
        </div>
    );
}
