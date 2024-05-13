import "./Experience.css";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceModel from "./interfaces/Experience";

function Experience() {
  const experienceData: ExperienceModel[] = [
    {
      From: 2023,
      JobTitle: "Senior Full-Stack Developer",
      Company: "Objectivity (Part of Accenture)",
      CompanyUrl: "https://www.accenture.com/",
      Languages: [".Net", "MongoDb", "Azure", "Docker", "React", "JS", "TS"],
      Description: "Build and maintain a future state architecture web application that is meant to replace a legacy system for the client." +
      "Experienced with both the Backend and the Frontend aspect of the application",
    },
    {
      From: 2020,
      To: 2023,
      JobTitle: "Senior Full-Stack Developer",
      Company: "Dayforce",
      CompanyUrl: "https://www.dayforce.com/",
      Languages: [".Net", "SQL", "Dojo", "JS", "TS"],
      Description: "Did Some more Stuffs",
    },
    {
        From: 2018,
        To: 2018,
        JobTitle: "Internship",
        Company: "Dayforce",
        CompanyUrl: "https://www.dayforce.com/",
        Languages: [".Net", "SQL", "HTML", "JS", "CSS", "MVC"],
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
