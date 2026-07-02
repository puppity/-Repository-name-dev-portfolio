export default function Turtle() {
  // cute cartoon mascot for Turtle.Talking (น้องเต่า)
  const OUT = "#4E7A3E"; // outline / dark green
  return (
    <svg
      className="turtle"
      viewBox="0 0 240 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Turtle mascot — Turtle.Talking"
    >
      {/* ground shadow */}
      <ellipse cx="120" cy="200" rx="82" ry="11" fill="rgba(0,0,0,0.07)" />

      {/* back legs */}
      <ellipse cx="58" cy="152" rx="18" ry="23" fill="#BFE29A" stroke={OUT} strokeWidth="3.5" />
      <ellipse cx="182" cy="152" rx="18" ry="23" fill="#BFE29A" stroke={OUT} strokeWidth="3.5" />

      {/* front feet */}
      <ellipse cx="86" cy="178" rx="20" ry="17" fill="#BFE29A" stroke={OUT} strokeWidth="3.5" />
      <ellipse cx="154" cy="178" rx="20" ry="17" fill="#BFE29A" stroke={OUT} strokeWidth="3.5" />
      <g fill={OUT}>
        <circle cx="78" cy="184" r="2.3" />
        <circle cx="86" cy="186" r="2.3" />
        <circle cx="94" cy="184" r="2.3" />
        <circle cx="146" cy="184" r="2.3" />
        <circle cx="154" cy="186" r="2.3" />
        <circle cx="162" cy="184" r="2.3" />
      </g>

      {/* tail */}
      <path d="M36 150 q-16 3 -20 13 q17 3 26 -6 z" fill="#BFE29A" stroke={OUT} strokeWidth="3.5" strokeLinejoin="round" />

      {/* shell */}
      <path
        d="M32 150 C32 90 72 60 120 60 C168 60 208 90 208 150 C208 152 172 162 120 162 C68 162 32 152 32 150 Z"
        fill="#7FB069"
        stroke={OUT}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* shell bottom rim */}
      <path d="M34 149 C62 166 178 166 206 149" fill="none" stroke={OUT} strokeWidth="3" strokeLinecap="round" />

      {/* center scute */}
      <path
        d="M120 84 L150 103 L150 131 L120 149 L90 131 L90 103 Z"
        fill="#9BC77E"
        stroke={OUT}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      {/* scute dividers */}
      <path
        d="M120 84 L120 62 M150 103 L186 95 M150 131 L190 141 M90 103 L54 95 M90 131 L50 141"
        stroke={OUT}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* shell shine */}
      <path d="M64 96 q14 -14 34 -16" fill="none" stroke="#A9D98C" strokeWidth="5" strokeLinecap="round" />

      {/* head */}
      <path
        d="M94 44 C94 20 104 6 120 6 C136 6 146 20 146 44 C146 62 134 72 120 72 C106 72 94 62 94 44 Z"
        fill="#BFE29A"
        stroke={OUT}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* cheeks */}
      <ellipse cx="101" cy="50" rx="6" ry="4.5" fill="#F4A28C" opacity="0.6" />
      <ellipse cx="139" cy="50" rx="6" ry="4.5" fill="#F4A28C" opacity="0.6" />

      {/* eyes */}
      <ellipse cx="110" cy="38" rx="6.5" ry="8" fill="#fff" stroke={OUT} strokeWidth="2.2" />
      <ellipse cx="130" cy="38" rx="6.5" ry="8" fill="#fff" stroke={OUT} strokeWidth="2.2" />
      <circle cx="111" cy="40" r="3.4" fill="#2E4B27" />
      <circle cx="131" cy="40" r="3.4" fill="#2E4B27" />
      <circle cx="112.4" cy="38.4" r="1.2" fill="#fff" />
      <circle cx="132.4" cy="38.4" r="1.2" fill="#fff" />

      {/* smile */}
      <path d="M112 54 Q120 61 128 54" fill="none" stroke={OUT} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
