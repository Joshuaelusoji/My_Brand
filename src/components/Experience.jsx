import { experiences } from "../config/experiences";
import { LuBriefcaseBusiness, SiMoleculer } from "../config/icons"

export default function Experience() {
  return (
    <div className="">
      <div className="flex items-center gap-2 mb-6">
        <SiMoleculer className="text-stone-500"/>
        <h3 className="font-Inter font-semibold md:text-lg tracking-wider text-neutral-300">
          EXPERIENCES
        </h3>
      </div>

      <div className="w-full md:max-h-[500px] md:overflow-y-auto space-y-8">
        {experiences.map(
          ({ id, role, company, period, type, description, highlights }) => (
            <article key={id}>
              <div className="text-neutral-500 font-Inter font-semibold flex flex-wrap items-center  gap-y-4">
                <h4 className="font-Inter">{role}</h4>
                <span className="text-sm">
                  {company}
                </span>
              </div>

              <div className="italic mb-1 leading-4 flex flex-wrap gap-x-4 font-Inter text-sm text-stone-300/50">
                <span>{period}</span>
                <span>{type}</span>
              </div>

              <p className="w-[clamp(22rem,80vw,full)] leading-0 font-geist font-light tracking-normal text-[clamp(0.935rem,1.2vw,1.125rem)] text-stone-300/90">
                {description}
              </p>

             
            </article>
          )
        )}
      </div>
    </div>
  );
}