export default function StatusBadge({ text }) {
  return (
    <div className=" relative inline-flex w-max items-center gap-2 pl-2 pr-7 py-1 bg-emerald-500/10 
      text-stone-300 backdrop-blur-sm ring-1 ring-emerald-500/20 transition-all duration-300
      hover:bg-emerald-500/15 hover:ring-emerald-400/30 hover:shadow-[0_0_24px_rgba(74,222,128,0.18)]
      [clip-path:polygon(0_0,90%_0,98%_50%,90%_100%,0_100%)]"
    >
      {/* Glowing Status Dot */}
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-100" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
      </span>

      {/* Text */}
      <span className="font-geist text-xs font-light tracking-tight">
        {text}
      </span>

      {/* Price Tag Hole */}
      <span
        className="absolute right-3.5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full
          bg-gray-950 ing-1 ring-emerald-500/20"
      />
    </div>
  );
}