import { ReactNode, useState } from "react";
import { faMinus, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ExperienceCard.css';

interface ExperienceCardProp{
    from: number,
    to?: number,
    jobTitle: string,
    company: string,
    companyUrl: string,
    languages : string[]
    children: ReactNode
}

function ExperienceCard({from, to, jobTitle,company,companyUrl, languages, children}: ExperienceCardProp) {
    const [displayRedirect, setDisplayRedirect] =  useState<boolean>(false);


const redirect =() =>{
    window.open(companyUrl, "_blank");
}

    return (<>
    <div className="experience-card-container">
        <div className="card-details" onMouseOver={() => setDisplayRedirect(true)}
            onMouseOut={() => setDisplayRedirect(false)}>
            <div className="card-dates">{from} - {to ?? 'ONGOING'}</div>
            <div 
            className="card-company-title">{jobTitle} 
                <FontAwesomeIcon icon={faMinus} className="seperator"/>
                {company}
                {displayRedirect && <FontAwesomeIcon icon={faLocationArrow} className="redirect-company" onClick={redirect}/>}
                </div>
        </div>
        <div className="card-body">{children}

        </div>

    
        </div></>);

}

export default ExperienceCard;