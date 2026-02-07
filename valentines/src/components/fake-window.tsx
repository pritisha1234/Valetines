export default function CuteWindow({ onCLick }: { onCLick: () => void }) {
    return (
        <div className="flex items-center justify-center">
            {/* Window */}
            <div className="w-182.5 bg-[#fdecec] rounded-2xl border-4 border-[#7a4b5e] shadow-xl relative">
                {/* Polaroid Photo */}
                <div className="absolute -bottom-10 -left-8 -rotate-6 z-20">
                    <div className="absolute -top-2 left-6 w-12 h-4 bg-yellow-200 opacity-70 rotate-3"></div>

                    <div className="bg-white p-2 pb-6 border-2 border-[#7a4b5e] shadow-lg w-28">
                        <img
                            src="/sushil.JPG"
                            className="w-full h-24 object-cover"
                        />
                        <p className="text-[10px] text-center mt-2 text-[#5a2f3d] font-handwriting">
                            💕
                        </p>
                    </div>
                </div>

                {/* Title bar */}
                <div className="flex bg-[#f79ca5] rounded-t-xl items-center justify-between border-b-4 border-[#7a4b5e]" style={{ padding: '12px 16px' }}>
                    <span className="text-[#5a2f3d] font-bold text-sm">
                        Sushil OS &lt;3
                    </span>

                    {/* Window buttons */}
                    <div className="flex gap-2">
                        <button className="w-8 h-8 bg-[#ffd966] rounded-sm border border-[#5a2f3d] flex items-center justify-center text-[#5a2f3d] font-bold hover:bg-[#ffed99]">−</button>
                        <button className="w-8 h-8 bg-[#a4d4ae] rounded-sm border border-[#5a2f3d] flex items-center justify-center text-[#5a2f3d] font-bold hover:bg-[#c4f4ce]">□</button>
                        <button className="w-8 h-8 bg-[#f26d6d] rounded-sm border border-[#5a2f3d] flex items-center justify-center text-[#5a2f3d] font-bold hover:bg-[#ff8d8d]">✕</button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-20 justify-between h-full" style={{ padding: '24px' }}>
                    <div className="flex flex-col items-center justify-center flex-1">
                        <span className="p-6">
                            Made with 💖 by Pritisha
                        </span>
                        <button
                            className="pixel-button"
                            onClick={onCLick}
                        >
                            ▶ PRESS START
                        </button>
                    </div>

                    <h1 className="text-xl tracking-widest text-[#5a2f3d] text-right">
                        WITH LOVE,<br />Baby
                    </h1>
                </div>
            </div>
        </div>
    );
}
