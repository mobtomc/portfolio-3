import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" SocialMonger is a social media application for sociopaths! It was made using MERN Stack.It has authentication using bcrypt and jwt token. "
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Roshni is an e-commerce business selling ezquisite lamps,It was made using MERN stack and sass."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" A realtime chat application using node.js and socket.io enabling conversation between client and server at the same time."
          src={projectThree}
        />
        <ProjectsCard
          title="Landing page "
          des="This is nikes landing page designed using figma and made using raectjs and tailwind."
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" SoftwareIndia is a software as a service startup,its website was made using reactjs and tailwind."
          src={projectOne}
        />
        <ProjectsCard
          title="Engineering-Notes-Website"
          des="This is an open source website which I have contributed to in its Ui."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects