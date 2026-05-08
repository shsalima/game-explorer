import { RiErrorWarningFill } from "@remixicon/react";

export default function FailError() {
    return (
        <div className="text-white w-[300px] border p-4">
            <h4 className="text-xl font-bold mx-auto my-2 flex items-center gap-1">
                <RiErrorWarningFill />
                <span>Error</span>
            </h4>
            <p className="mb-4">Somthing Went wrong...</p>
            <button
                className="font-bold px-4 py-1 border rounded-md cursor-pointer"
                onClick={() => {
                    location.reload();
                }}
            >
                Reload
            </button>
        </div>
    );
}
