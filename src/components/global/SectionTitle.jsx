export default function SectionTitle({ category, title }) {
    return (
        <div id="section-title" className="mb-4">
            <span className="text-[#38bdf8] pl-10 relative before:absolute before:bg-[#38bdf8] before:left-0 before:top-[39%] translate-y-[-50%] before:w-[30px] before:h-[4px]">
                {category}
            </span>
            <h2 className="text-white text-3xl font-bold">{title}</h2>
        </div>
    );
}
