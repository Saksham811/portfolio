import Section from "./ui/Section";
import { Timeline } from "./ui/Timeline";
import { GraduationCap, BookOpen, School } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      title: "Matriculation",
      subtitle: "Maharishi Vidya Mandir, Dharamshala, Himachal Pradesh",
      date: "Apr 2018 – Mar 2020",
      description: <span>Score: 73</span>,
      icon: <School size={18} />,
    },
    {
      title: "Intermediate",
      subtitle: "Kendriya Vidyalaya, Dharamshala, Himachal Pradesh",
      date: "Apr 2020 – Mar 2022",
      description: <span>Score: 67</span>,
      icon: <BookOpen size={18} />,
    },
    {
      title: "Bachelor of Technology",
      subtitle: "Lovely Professional University, Punjab, India",
      date: "Present",
      description: (
        <div className="flex flex-col gap-1">
          <span>Degree: Computer Science and Engineering</span>
          <span>CGPA: 7.35</span>
        </div>
      ),
      icon: <GraduationCap size={18} />,
    },
  ];

  return (
    <Section id="education">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Education<span className="text-accent">.</span>
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          My academic journey and qualifications.
        </p>
      </div>

      <Timeline items={education} />
    </Section>
  );
}
