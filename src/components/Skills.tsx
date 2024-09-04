import * as React from "react";
import { HiStar } from "react-icons/hi";

const Stars = ({ count }: { count: Number }) => {
  return (
    <span>
      {[...Array(count)].map((_, i) => (
        <HiStar key={i} className="inline text-yellow-500" />
      ))}
    </span>
  );
};

const SkillLabel = ({ name }: { name: String }) => {
  return (
    <div className="bg-[#E96479] rounded-md p-1 shadow-sm text-center self-center">
      <h3 className="text-xs font-semibold flex justify-between text-[#DEF2F1]">
        {name}
        <Stars count={5} />
      </h3>
    </div>
  );
};

const SkillSubSection = ({
  title,
  children,
}: {
  title: String;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold tracking-tight mt-3">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-3">
        {children}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="py-20 md:py-24" id="skills">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-evenly">
        <div className="space-y-2 text-center">
          <h2 className="text-[4.4em] font-semibold font-mono leading-none tracking-tight text-[#4D455D] max-w-[24rem]">
            Technical Skills
          </h2>
        </div>
        <div className="text-[#4D455D]">
          <SkillSubSection title="Programming Languages">
            <SkillLabel name="Ruby" />
            <SkillLabel name="Javascript" />
            <SkillLabel name="Typescript" />
            <SkillLabel name="HTML" />
            <SkillLabel name="CSS" />
          </SkillSubSection>
          <SkillSubSection title="Frameworks & Libraries">
            <SkillLabel name="Ruby on Rails" />
            <SkillLabel name="React" />
            <SkillLabel name="TailwindCSS" />
          </SkillSubSection>
          <SkillSubSection title="Build Tools">
            <SkillLabel name="Webpack" />
            <SkillLabel name="Vite" />
          </SkillSubSection>
          <SkillSubSection title="Testing Tools">
            <SkillLabel name="RSpec" />
            <SkillLabel name="Jest" />
            <SkillLabel name="Cypress" />
          </SkillSubSection>
          <SkillSubSection title="Database Management">
            <SkillLabel name="PostgreSQL" />
            <SkillLabel name="MySQL" />
          </SkillSubSection>
          <SkillSubSection title="Version Control">
            <SkillLabel name="Git" />
          </SkillSubSection>
          <SkillSubSection title="Cloud Services">
            <SkillLabel name="AWS" />
          </SkillSubSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;
