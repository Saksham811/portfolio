import Section from "./ui/Section";
import { Timeline } from "./ui/Timeline";
import { Trophy, Star } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Advent of Cyber Contest",
      subtitle: "Completed 24-day cybersecurity challenge",
      date: "Dec 2025",
      icon: <Star size={18} />,
      link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-BIMX4RTLCG.pdf",
    },
    {
      title: "Coding Milestone",
      subtitle: "Achieved Platinum League badge on TryHackMe",
      date: "Feb 2026",
      icon: <Trophy size={18} />,
    },
  ];

  return (
    <Section id="achievements">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Achievements<span className="text-accent">.</span>
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Milestones and recognition in my journey.
        </p>
      </div>

      <Timeline items={achievements} />
    </Section>
  );
}
