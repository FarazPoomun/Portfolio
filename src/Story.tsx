import ExperienceTimeline from "./ExperienceTimeline";
import "./Story.css";

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
          Pluralsight or CodeWithMosh to keep up to date with both side of the
          software.
          <br />
          <br />
          When I’m not at the computer, I’m usually still at the screen,
          smashing the buttons on my controller and enjoying the best that the
          IT world has to provide which of course is Gaming (YES, I know PC is
          superior!), or hanging out with my wife and our pets.
        </p>
        <ExperienceTimeline />

        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            Coded in Visual Studio Code by yours truly. Built with React + Vite,
            Flowbite and TailwindCSS, deployed with GitHub.
          </div>
        </footer>
      </div>
    </>
  );
}

export default Story;
