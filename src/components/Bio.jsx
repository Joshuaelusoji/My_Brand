import { bio } from "../config/bio";
import GradientDivider from "./GradientDivider";

export default function Bio() {
  return (
    <div className="mt-14">
      {/* Skills */}
      <h3 className="mb-6 font-Inter font-bold md:text-lg tracking-normal text-neutral-300">
        Bio
      </h3>

      <div className="flex gap-6">
        {bio.map(({ category, bio: categoryBio }) => (
          <div key={category} className="w-full rounded-xl">
            <div className="mb-3 flex items-center gap-2">
              <h4 className="font-Inter text-sm font-medium text-gray-400">
                {category}
              </h4>
              {/* <span className="h-px flex-1 bg-gradient-to-r from-gray-700/50 to-transparent" /> */}
            </div>

            <div className="flex max-w-fit flex-wrap gap-2 font-Inter">
              {categoryBio.map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  className={`inline-flex items-center gap-2 rounded border border-transparent 
                  px-2 py-2 font-Inter text-xs font-light bg-neutral-800/80 text-stone-300/70 backdrop-blur-md
                  transition-all duration-500 hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-white`}
                >
                  <Icon className={`text-base ${color}`} />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}