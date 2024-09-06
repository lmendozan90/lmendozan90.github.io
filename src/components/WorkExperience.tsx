import * as React from "react";
import TrainIcon from "../assets/icons/trainIcon";
import BriefcaseIcon from "../assets/icons/briefcaseIcon";

const WorkExperience: React.FC = () => {
  return (
    <div
      id="workExperience"
      className="border-t border-[#36f3d1] px-[30px] pt-8 pb-[90px]"
    >
      <div className="text-center flex flex-col items-center">
        <div className="mx-auto mb-[27px]">
          <TrainIcon width="38" height="38" fill="currentColor" />
        </div>
        <span className="text-4xl leading-[46px] font-bold md:px-[12.5%] md:text-[46px] md:leading-[56px]">
          Work Experience
        </span>
      </div>
      <section className="border-t border-[#36f3d1] mt-10 pt-10 md:mt-[60px] md:pt-[60px] md:px-[12.5%]">
        {/* Work Experience */}
        {JobsDescription.map((job, index) => (
          <article key={index} className="mb-2.5 flex break-words z-10">
            <div className="pr-4 flex flex-col min-w-10 items-center md:ml-[-40px]">
              <BriefcaseIcon width="38" height="38" fill="currentColor" />
              <div className="h-full w-[1px] text-[#36f3d1] bg-current"></div>
            </div>
            <div className="pb-[15px]">
              <div className="mb-4 flex flex-col">
                <span>{job.date}</span>
                <span>{job.location}</span>
              </div>
              <div className="mb-4 flex flex-col">
                <div>
                  <span className="font-bold text-[26px] leading-[36px]">
                    {job.position}
                  </span>
                </div>
                <div>
                  <span className="text-[22px] leading-[32px]">
                    {job.company}
                  </span>
                </div>
              </div>
              {job.description && (
                <div>
                  <ul className="mb-2.5 list-disc ml-10">
                    {job.description.map((desc, index) => (
                      <li key={index} className="mb-2.5">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

const JobsDescription = [
  {
    date: "07/2022 – 01/2024",
    location: "Remote | USA",
    position: "Software Engineer",
    company: "CloudForecast",
    description: [
      "Led the development and deployment of multiple React pages, utilizing graph and grid libraries to enhance data visualization and accessibility of AWS cost information.",
      "Engineered a dynamic filtering system for AWS products and services by combining data from various sources, improving user experience through intuitive interfaces.",
      "Developed a cost optimization feature, analyzing AWS cost overhead and generating alerts from multiple AWS policies to support cost-saving initiatives.",
      "Collaborated closely with the CTO to align the application with business objectives and address customer requests promptly for seamless functionality.",
      "Enhanced application features and user experience by incorporating user feedback and implementing industry best practices continuously.",
      "Designed and implemented customized dashboards for internal use, consolidating administrative and financial data to facilitate data-driven decision-making processes.",
    ],
  },
  {
    date: "04/2018 – 07/2022",
    location: "Lima | Peru",
    position: "Software Development Engineer",
    company: "Able",
    description: [
      "Led the integration of React into Ruby on Rails products, transforming UX and UI to elevate user satisfaction and engagement levels.",
      "Worked collaboratively on migrating applications to a modern stack, implementing TailwindCSS, Typescript, and Vite to enhance UX, UI, and development efficiency.",
      "Provided leadership in product development cycles, working closely with Project Managers and Scrum Masters to ensure on-time delivery of high-quality features.",
      "Identified and resolved bugs in the codebase, conducted comprehensive code reviews, and participated in exploratory testing sessions, showcasing exceptional problem-solving skills.",
      "Advocated for best practices by writing unit tests using Jest and RSpec, as well as end-to-end tests using Cypress, ensuring the robustness and reliability of applications.",
      "Took on the task of maintaining and refactoring legacy code, updating it to conform to current development standards and practices.",
    ],
  },
  {
    date: "12/2016 – 04/2018",
    location: "Lima | Peru",
    position: "QA Test Engineer",
    company: "Banco Cencosud",
    description: [
      "Oversaw post-production testing of requirements, ensuring adherence to quality standards and functional specifications.",
      "Formulated quality indicators to evaluate performance and compliance of certified requirements, elevating overall product quality.",
      "Directed the estimation, planning, design, and execution of test cases to ensure comprehensive coverage and validation of product features.",
    ],
  },
  {
    date: "02/2016 – 12/2016",
    location: "Lima | Peru",
    position: "QA Test Engineer",
    company: "Choucair testing S.A.",
  },
  {
    date: "02/2015 – 12/2015",
    location: "Lima | Peru",
    position: "QA Test Engineer",
    company: "MDP CONSULTING S.A.C - Cliente Equifax Peru",
  },
  {
    date: "04/2014 – 12/2014",
    location: "Lima | Peru",
    position: "QA Test Engineer",
    company: "everis Perú",
  },
  {
    date: "12/2012 – 03/2014",
    location: "Lima | Peru",
    position: "Software Developer",
    company: "Banco de la Nación",
  },
];

export default WorkExperience;
