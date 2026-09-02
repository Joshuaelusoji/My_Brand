import { skills } from "../config/skills";
import { FaGamepad } from "../config/icons";
import GradientDivider from "./GradientDivider";
import { GrGallery, GrGamepad } from "react-icons/gr";

export default function Skills() {
  return (
    <div className="relative mt-4 mb-sm-4">
      <div className="mb-6 flex gap-2 items-center">
          {/* Floating Gamepad */}
        <div className="text-xl h-fit">
          <GrGamepad className="text-stone-500" />
        </div>
        {/* Skills */}
        <h3 className="font-Inter font-semibold tracking-normal text-neutral-300 md:text-lg">
          SKILLS
        </h3>
      </div>
      
      <div className="md:flex">
        {skills.map(({ category, skills: categorySkills }) => (
          <div key={category} className=" md:w-64 rounded-xl">
            <div className="flex items-center gap-2">
              <h4 className="font-Inter text-sm font-medium md:mb-3 text-gray-400">
                {category}
              </h4>

              <span className="h-px flex-1 bg-gradient-to-r from-gray-700/50 to-transparent" />
            </div>

            <div className="flex max-w-fit rounded flex-wrap gap-1 mb-6 font-Inter">
              {categorySkills.map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded border border-transparent bg-neutral-800/80 px-2 py-2 font-Inter text-xs font-light text-stone-300/70 backdrop-blur-md transition-all duration-500 hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-white"
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