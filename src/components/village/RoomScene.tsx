export function RoomScene() {
  return (
    <div className="relative w-full aspect-[390/220] pixel-border overflow-hidden bg-[#E8D5C4]">
      <svg
        viewBox="0 0 390 220"
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Wall */}
        <rect x={0} y={0} width={390} height={140} fill="#F5E6C8" />
        <rect x={0} y={0} width={390} height={8} fill="#E4C89A" />
        {/* Floor */}
        <rect x={0} y={140} width={390} height={80} fill="#D4B896" />
        {Array.from({ length: 24 }).map((_, i) => (
          <rect
            key={i}
            x={i * 16}
            y={140}
            width={8}
            height={80}
            fill={i % 2 === 0 ? "#C9A880" : "#D4B896"}
          />
        ))}

        {/* Window */}
        <rect x={280} y={24} width={72} height={56} fill="#8ECEF4" />
        <rect x={284} y={28} width={64} height={48} fill="#A8D8F4" />
        <rect x={314} y={24} width={4} height={56} fill="#8B6E44" />
        <rect x={280} y={50} width={72} height={4} fill="#8B6E44" />
        {/* Curtains */}
        <rect x={276} y={20} width={12} height={64} fill="#E88BA0" opacity={0.8} />
        <rect x={344} y={20} width={12} height={64} fill="#E88BA0" opacity={0.8} />

        {/* Bed */}
        <rect x={24} y={100} width={80} height={48} fill="#8B6E44" />
        <rect x={28} y={96} width={72} height={12} fill="#E4C89A" />
        <rect x={32} y={88} width={64} height={16} fill="#FFF7E6" />
        <rect x={36} y={84} width={24} height={8} fill="#F48C5B" />

        {/* Desk */}
        <rect x={120} y={120} width={64} height={8} fill="#8B6E44" />
        <rect x={124} y={96} width={56} height={28} fill="#C4A882" />
        {/* Laptop */}
        <rect x={136} y={88} width={32} height={20} fill="#6B4F2A" />
        <rect x={138} y={90} width={28} height={14} fill="#8ECEF4" />
        {/* Lamp */}
        <rect x={168} y={72} width={4} height={28} fill="#8B6E44" />
        <rect x={160} y={64} width={20} height={12} fill="#F5D76E" />

        {/* Bookshelf */}
        <rect x={200} y={48} width={48} height={88} fill="#A67C52" />
        <rect x={204} y={52} width={40} height={2} fill="#8B6E44" />
        <rect x={204} y={72} width={40} height={2} fill="#8B6E44" />
        <rect x={204} y={92} width={40} height={2} fill="#8B6E44" />
        <rect x={208} y={56} width={8} height={12} fill="#E25D5D" />
        <rect x={220} y={56} width={6} height={12} fill="#7FC97F" />
        <rect x={230} y={56} width={10} height={12} fill="#8ECEF4" />

        {/* Ramen pot on floor */}
        <rect x={300} y={160} width={24} height={16} fill="#6B4F2A" />
        <rect x={304} y={152} width={16} height={12} fill="#E25D5D" />
        <rect x={308} y={148} width={8} height={4} fill="#F48C5B" />

        {/* Character */}
        <g transform="translate(160, 148)">
          <rect x={3} y={0} width={6} height={2} fill="#4A3728" />
          <rect x={2} y={2} width={8} height={5} fill="#F5D6B8" />
          <rect x={3} y={3} width={2} height={2} fill="#3B2F23" />
          <rect x={7} y={3} width={2} height={2} fill="#3B2F23" />
          <rect x={2} y={7} width={8} height={5} fill="#5B8FB9" />
          <rect x={2} y={12} width={3} height={3} fill="#3B2F23" />
          <rect x={7} y={12} width={3} height={3} fill="#3B2F23" />
        </g>

        {/* Speech bubble */}
        <rect x={148} y={118} width={80} height={24} fill="#FFF7E6" stroke="#8B6E44" strokeWidth={2} />
        <polygon points="168,142 176,148 184,142" fill="#FFF7E6" stroke="#8B6E44" strokeWidth={2} />
        <text
          x={188}
          y={134}
          textAnchor="middle"
          fill="#3B2F23"
          style={{ fontSize: "8px", fontFamily: "sans-serif" }}
        >
          커피값 걱정...
        </text>

        {/* Plant */}
        <rect x={60} y={128} width={4} height={12} fill="#8B6E44" />
        <rect x={52} y={120} width={20} height={12} fill="#7FC97F" />
        <rect x={56} y={116} width={12} height={8} fill="#6BAB62" />
      </svg>

      <div className="absolute top-2 right-2 text-pixel-xs bg-cream-100/90 px-2 py-1 pixel-border text-brown-600">
        🎵 라면 끓이는 소리
      </div>
    </div>
  );
}
