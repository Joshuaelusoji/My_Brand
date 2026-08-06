// import { useState } from "react";
// import { useTheme } from "../context/ThemeContext";
// import { themes } from "../config/themes";

// export default function ThemeSwitcher() {
//   const { theme, setTheme } = useTheme();
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
      
//       {/* Theme options */}
//       {open && (
//         <div className="mb-3 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
//           {Object.values(themes).map((item) => (
//             <button
//               key={item.name}
//               onClick={() => {
//                 setTheme(item.name);
//                 setOpen(false);
//               }}
//               className={`
//                 rounded-xl px-4 py-2 text-sm transition
//                 ${
//                   theme === item.name
//                     ? "bg-white/20 text-white"
//                     : "text-stone-300 hover:bg-white/10"
//                 }
//               `}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Main button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="
//           flex h-12 w-12 items-center justify-center
//           rounded-full
//           border border-white/10
//           bg-white/10
//           text-white
//           backdrop-blur-xl
//           transition
//           hover:bg-white/20
//         "
//         aria-label="Change theme"
//       >
//         ◐
//       </button>

//     </div>
//   );
// }