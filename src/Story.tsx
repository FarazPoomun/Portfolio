
import { Link } from '@chakra-ui/react'
import ExperienceTimeline from "./ExperienceTimeline";
import "./Story.css";
import Footer from './Footer';

function Story() {

  setTimeout(() => {
    const storyContainer = document.getElementById("story-container");
    storyContainer!.style.display = "block";
  }, 5500);

  return (
    <>
      <div className="story-container" id="story-container">
        <h2 className="section-header">
          <span className="underline underline-offset-3 decoration-8 decoration-blue-600 dark:decoration-blue-600">
            About
          </span>
        </h2>

        <p>
          Back in 2016, I stumbled into the rabbit hole of coding and web
          development in University which immediately captivated me.
          Fast-forward to today, and I’ve had the privilege of learning and
          programming for some of the big names in the industry. I most enjoy
          building software in the sweet spot where there is challenges and new
          things to be learnt. I'm a huge fan of learning through sharing and
          have been in multiple mentorship programs.
          <br />
          <br />
          My main objective these days are to continously gain a grasp on newer
          technologies. While i do prefer the challenging aspect of the backend
          of a software, I am a full stack developer, who tries to know the
          whole product from end to end including the frontend. So, in my free
          time, I do follow courses on new tech stack where needed from
         <Link href='https://www.pluralsight.com/' isExternal color='teal.400' fontWeight={500}> Pluralsight </Link>
         or <Link href='https://codewithmosh.com/'isExternal color='teal.400' fontWeight={500}>CodeWithMosh</Link> to keep up to date with both side of the
          software.
          <br />
          <br />
          When I’m not at the computer, I’m usually still at the screen,
          smashing the buttons on my controller and enjoying the best that the
          IT world has to provide which of course is Gaming (YES, I know PC is
          superior!), or hanging out with my wife-to-be and our pets.
        </p>
        <ExperienceTimeline />

       <Footer/>
      </div>
    </>
  );
}

export default Story;
