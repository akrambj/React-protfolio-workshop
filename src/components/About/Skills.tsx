import { useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  percentage: number;
};

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: "UX", percentage: 80 },
    { name: "Website Design", percentage: 75 },
    { name: "App Design", percentage: 95 },
    { name: "Graphic Design", percentage: 73 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateSkills();
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateSkills = () => {
    setAnimatedSkills(skills.map((skill) => ({ ...skill, percentage: 0 }))); // Start animation from 0%

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setAnimatedSkills((prev) =>
        skills.map((skill) => ({
          ...skill,
          percentage: Math.min(step, skill.percentage),
        }))
      );
      if (step >= Math.max(...skills.map((s) => s.percentage))) {
        clearInterval(interval);
      }
    }, 20);
  };

  return (
    <div className="flex flex-col gap-4" ref={skillsRef}>
      {skills.map((skill, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <h2>{skill.name}</h2>
          <div className="relative w-full bg-gray-200 h-4 rounded-md">
            <div
              className="absolute top-0 left-0 rounded-l-md bg-primary h-full transition-all duration-300 ease-out"
              style={{ width: `${animatedSkills[index]?.percentage || 0}%` }}
            >
              <div className="absolute -right-3 -top-[7%]  w-5 h-5 border-primary border-2 bg-white rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
