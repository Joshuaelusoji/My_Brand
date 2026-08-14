import { experiences } from "../config/experiences";

export default function Experience() {
  return (
    <div>
      <h3 className="mt-4 mb-6 font-Inter font-semibold tracking-wider text-white">
        EXPERIENCES
      </h3>

      <div className="space-y-8">
        {experiences.map(
          ({ id, role, company, period, type, description, highlights }) => (
            <article key={id}>
              <div className="font-Inter font-semibold mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h4 className=" text-white">
                  {role}
                </h4>
                <span className="text-stone-500">•</span>
                <span className="text-sm text-stone-300/30">
                  {company}
                </span>
              </div>
              <div className="font-Inter mb-3 flex flex-wrap gap-x-4 text-base text-stone-300/50">
                <span>{period}</span>
                <span>{type}</span>
              </div>
              <p className="font-Inter text-sm leading-6 text-stone-300/70">
                {description}
              </p>
              <ul className="font-Inter mt-4 space-y-2">
                {highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-stone-300/70">
                    <span className="mr-2 text-stone-300/70">—</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          )
        )}
      </div>
    </div>
  );
}