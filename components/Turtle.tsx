export default function Turtle() {
  return (
    <svg
      className="turtle"
      viewBox="0 0 260 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Turtle — Turtle.Talking"
    >
      {/* ground shadow */}
      <ellipse className="t-shadow" cx="128" cy="168" rx="96" ry="10" />

      {/* tail */}
      <path className="t-skin" d="M46 108 L26 112 L44 122 Z" />

      {/* legs */}
      <rect className="t-skin" x="64" y="112" width="24" height="42" rx="12" />
      <rect className="t-skin" x="158" y="112" width="24" height="42" rx="12" />

      {/* head + neck */}
      <path
        className="t-skin"
        d="M196 100 C196 78 200 42 216 42 C230 42 238 52 238 66 C238 88 218 100 198 100 Z"
      />

      {/* shell */}
      <path
        className="t-shell"
        d="M40 110 C44 60 78 36 129 36 C180 36 214 60 218 110 Z"
      />

      {/* plastron / belly line */}
      <path className="t-belly" d="M42 111 C98 132 160 132 216 111" />

      {/* center scute */}
      <path className="t-scute" d="M129 58 L154 71 L154 93 L129 105 L104 93 L104 71 Z" />

      {/* scute dividers */}
      <path
        className="t-line"
        d="M129 58 L133 38 M154 71 L190 78 M154 93 L192 106 M104 71 L68 78 M104 93 L66 106 M129 105 L129 111"
      />

      {/* eye + smile */}
      <circle className="t-eye" cx="220" cy="60" r="3.6" />
      <path className="t-line" d="M224 72 C228 75 233 74 236 70" />
    </svg>
  );
}
