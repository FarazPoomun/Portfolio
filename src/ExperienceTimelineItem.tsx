import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExperienceModel from "./interfaces/Experience";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useRef, useState } from "react";
import "./ExperienceTimeline.css";
import { Link, useColorMode } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface ExperienceTimelineItemProp {
  experienceModel: ExperienceModel;
  children: ReactNode;
}

function ExperienceTimelineItem({
  experienceModel,
  children,
}: ExperienceTimelineItemProp) {
  const {colorMode} = useColorMode();

  const [displayRedirect, setDisplayRedirect] = useState<boolean>(false);
  const timelineNode = useRef<HTMLDivElement>(null);
  const wholeExperienceContainer = useRef<HTMLDivElement>(null);

  const onExperienceHover = () => {
    setDisplayRedirect(true);
    timelineNode &&
      timelineNode.current &&
      timelineNode.current.classList.add("blue-bg");
    wholeExperienceContainer &&
      wholeExperienceContainer.current &&
      wholeExperienceContainer.current.classList.add("experience-shadow");
  };

  const onExperienceOut = () => {
    setDisplayRedirect(false);
    timelineNode &&
      timelineNode.current &&
      timelineNode.current.classList.remove("blue-bg");
    wholeExperienceContainer &&
      wholeExperienceContainer.current &&
      wholeExperienceContainer.current.classList.remove("experience-shadow");
  };

  return (
    <li
      className="mb-10 ms-4"
      onMouseOver={onExperienceHover}
      onMouseOut={onExperienceOut}
    >
      <div
        ref={timelineNode}
        className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <div ref={wholeExperienceContainer} className="padding-1">
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {experienceModel.From} - {experienceModel.To ?? "CURRENT"}
        </time>
        <h3 className="text-lg font-semibold">
          {experienceModel.JobTitle}{" "}
          <FontAwesomeIcon icon={faMinus} className="seperator" />
          <Link href={experienceModel.CompanyUrl} isExternal>
            {experienceModel.Company}
            {displayRedirect && <ExternalLinkIcon mx="2px" />}
          </Link>
        
        </h3>
        <p className={colorMode === "light"? "mb-4 text-base font-normal text-gray-500": "mb-4 text-base font-normal text-gray-200"}>
          {children}
        </p>
        <div className="card-languages">
          {experienceModel.Languages.map((language) => (
            <span
              key={experienceModel.Company + language}
              className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}

export default ExperienceTimelineItem;
