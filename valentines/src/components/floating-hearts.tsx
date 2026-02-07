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
                        top: "-10%",
                        fontSize: "24px",
                        animationDelay: `${i * 0.1}s`,
                    }}
                >
                    💗
                </span>
            ))}
        </div>
    );
}
