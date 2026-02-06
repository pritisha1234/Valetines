export default function CuteWindow({ onCLick }: { onCLick: () => void }) {
    return (
        <div className="flex items-center justify-center bg-[#dfeaf2] font-mono">
            {/* Window */}
            <div className="w-[720px] h-[420px] bg-[#fdecec] rounded-2xl border-4 border-[#7a4b5e] shadow-xl relative">

                {/* Title bar */}
                <div className="h-12 bg-[#f79ca5] rounded-t-xl flex items-center justify-between p-4 border-b-4 border-[#7a4b5e]">
                    <span className="text-[#5a2f3d] font-bold text-sm">
                        For You &lt;3
                    </span>

                    {/* Window buttons */}
                    <div className="flex gap-2">
                        <div className="w-3 h-3 bg-[#ffd966] rounded-sm border border-[#5a2f3d]" />
                        <div className="w-3 h-3 bg-[#a4d4ae] rounded-sm border border-[#5a2f3d]" />
                        <div className="w-3 h-3 bg-[#f26d6d] rounded-sm border border-[#5a2f3d]" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex h-full p-6 gap-6">
                    {/* Left area (character / pixi later) */}
                    <div className="w-1/2 flex items-center justify-center">
                        <div className="w-48 h-48 bg-white/60 rounded-xl border-2 border-dashed border-[#7a4b5e] flex items-center justify-center text-xs text-[#7a4b5e]">
                            PIXI CANVAS
                        </div>
                    </div>

                    {/* Right text */}
                    <div className="w-1/2 flex flex-col justify-center">
                        <h1 className="text-5xl tracking-widest text-[#5a2f3d] leading-tight">
                            LOVE,<br />SULEI
                        </h1>
                        <button
                            className="pixel-button m-6"
                            onClick={onCLick}
                        >
                            ▶ PRESS START
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
