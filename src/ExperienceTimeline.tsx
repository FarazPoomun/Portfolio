import "./ExperienceTimeline.css";
import ExperienceModel from "./interfaces/Experience";
import ExperienceTimelineItem from "./ExperienceTimelineItem";

interface ExperienceTimelineProp {
  experienceModels: ExperienceModel[];
}

function ExperienceTimeline({ experienceModels }: ExperienceTimelineProp) {
  return (
    <>
      <h2 className="section-header padding-top-5">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-600 dark:decoration-blue-600">
          Experience
        </span>
      </h2>

      <div className="experience-card-container">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {experienceModels.map((experienceModel) => (
            <ExperienceTimelineItem experienceModel={experienceModel} />
          ))}
        </ol>
      </div>
    </>
  );
}

export default ExperienceTimeline;
