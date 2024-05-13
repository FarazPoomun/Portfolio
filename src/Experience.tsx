import ExperienceCard from "./ExperienceCard";
import './Experience.css';

function Experience(){

    return(<>
    <div className="experience-container">
    <ExperienceCard from={2012} jobTitle={"Senior Full-Stack Developer"} company = {'Objectivity (Part of Accenture)'} companyUrl="https://www.accenture.com/" languages={['C#', 'MongoDb', 'Azure', 'Docker', 'React']}>cdaxc</ExperienceCard>
    </div>
    </>)

}

export default Experience;