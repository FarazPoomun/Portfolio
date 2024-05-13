import "./Experience.css";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceModel from "./interfaces/Experience";

function Experience() {
  const experienceData: ExperienceModel[] = [
    {
      From: 2012,
      JobTitle: "Senior Full-Stack Developer",
      Company: "Objectivity (Part of Accenture)",
      CompanyUrl: "https://www.accenture.com/",
      Languages: [".Net", "MongoDb", "Azure", "Docker", "React"],
      Description: "Did SomeStuffs",
    },
    {
      From: 2010,
      To: 2012,
      JobTitle: "Senior Full-Stack Developer",
      Company: "Dayforce",
      CompanyUrl: "https://www.dayforce.com/",
      Languages: [".Net", "SQL", "Dojo"],
      Description: "Did Some more Stuffs",
    },
  ];
  return (
    <>
      <div className="experience-container">
        <ExperienceTimeline experienceModels={experienceData} />
      </div>
    </>
  );
}

export default Experience;
