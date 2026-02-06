const hearts = Array.from({ length: 12 });

export default function FloatingHearts() {
    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
            {hearts.map((_, i) => (
                <span
                    key={i}
                    className="absolute animate-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        bottom: "-10%",
                        fontSize: "24px",
                        animationDelay: `${i * 0.5}s`,
                    }}
                >
                    💗
                </span>
            ))}
        </div>
    );
}
