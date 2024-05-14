import "./ExperienceTimeline.css";
import ExperienceModel from "./interfaces/Experience";
import ExperienceTimelineItem from "./ExperienceTimelineItem";

function ExperienceTimeline() {
  const experienceData: ExperienceModel[] = [
    {
      From: 2023,
      JobTitle: "Senior Full-Stack Developer",
      Company: "Objectivity (Part of Accenture)",
      CompanyUrl: "https://www.accenture.com/",
      Languages: [".Net", "MongoDb", "Azure", "Docker", "React", "JS", "TS"],
    },
    {
      From: 2020,
      To: 2023,
      JobTitle: "Senior Full-Stack Developer",
      Company: "Dayforce",
      CompanyUrl: "https://www.dayforce.com/",
      Languages: [".Net", "SQL", "Dojo", "JS", "TS"],
    },
    {
      From: 2018,
      To: 2018,
      JobTitle: "Internship",
      Company: "Dayforce",
      CompanyUrl: "https://www.dayforce.com/",
      Languages: [".Net", "SQL", "HTML", "JS", "CSS", "MVC"],
    },
  ];

  return (
    <>
      <h2 className="section-header padding-top-5">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-600 dark:decoration-blue-600">
          Experience
        </span>
      </h2>

      <div className="experience-card-container">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <ExperienceTimelineItem experienceModel={experienceData[0]}>
            Build and maintain a future state architecture web application that
            is meant to replace a legacy system for the client. Experienced with
            both the Backend and the Frontend aspect of the application as well as cloud services(Azure).
          </ExperienceTimelineItem>

          <ExperienceTimelineItem experienceModel={experienceData[1]}>
            Built and maintained features for one of the top HCM software globally. 
            Groomed new joiners in terms of .Net expertise. 
            Worked closely with developers to enforced design patterns and clean code standards.
          </ExperienceTimelineItem>

          <ExperienceTimelineItem experienceModel={experienceData[2]}>
          Using .NET framework, redesigned and refactored 
          Dayforce's internal tool UI. Also underwent multiple 
          training to improve soft skills and technical skills.
          </ExperienceTimelineItem>
        </ol>
      </div>
    </>
  );
}

export default ExperienceTimeline;
