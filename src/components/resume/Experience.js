import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer Intern"
            subTitle="Oasis Infobyte (June 2023 - July 2023)"
            result="remote"
            des="Collaborated with the tech lead to develop a fully automated pizza delivery app, incorporating real-time tracking
features to enhance customer experience and streamline operations. Utilized mentorship from the tech lead to ensure seamless integration of automation tools and efficient delivery
tracking, resulting in improved service reliability and customer satisfaction. "
          />
          <ResumeCard
            title="React Developer Intern"
            subTitle="Software India (June 2023 - August 2023)"
            result="New Delhi"
            des="Created a user-friendly dashboard for Software India to manage interns, syncing with Google Forms for smooth hiring
automation.
 Developed a system to instantly generate and send offer letters, simplifying the onboarding process for approved interns.
Developed and designed their main website ensuring scalability while maintaining traffic."
          />
          <ResumeCard
            title="MERN Developer Intern"
            subTitle="Bicaps business solutions Private Ltd(July 2024-present)"
            result="New Delhi"
            des="Developed a full-stack data management system to track employee timesheets, calculate salaries, and manage client details.
Implemented features for efficient data handling and real-time reporting."
          />
        </div>
      </div>
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;
