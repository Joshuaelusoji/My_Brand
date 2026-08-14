import { skills } from "../config/skills";

export default function Skills() {
  return (
    <div>
      {/* Skills */}
      <h3 className="mb-6 font-Inter font-bold tracking-normal text-white">
        SKILLS
      </h3>

      <div className=" flex flex-wrap gap-3">
        {skills.map(({ category, skills: categorySkills }) => (
          <div key={category} className="mb-4 w-full rounded-xl">
            <h4 className="mb-1 font-Inter text-sm font-medium text-gray-400">
              {category}
            </h4>

            <div className="flex max-w-64 flex-wrap gap-2 font-Inter">
              {categorySkills.map(
                ({ name, icon: Icon, color, hover }) => (
                  <span
                    key={name}
                    className={`${hover} inline-flex items-center gap-2 rounded border border-transparent 
                    px-2 py-2 font-Inter text-xs font-light italic bg-neutral-800/80 text-gray-400 backdrop-blur-md
                    transition-all duration-500 hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-white`}
                  >
                    <Icon className={`text-base ${color}`} />{name}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}