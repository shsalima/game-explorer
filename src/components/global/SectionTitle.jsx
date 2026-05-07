export default function SectionTitle({ category, title }) {
    return (
        <div id="section-title" className="mb-6">
            <span className="text-[#38bdf8] font-bold uppercase pl-10 relative before:absolute before:bg-[#38bdf8] before:left-0 before:top-[35%] translate-y-[-50%] before:w-[30px] before:h-[4px]">
                {category}
            </span>
            <h2 className="text-white text-4xl font-bold uppercase">{title}</h2>
        </div>
    );
}
