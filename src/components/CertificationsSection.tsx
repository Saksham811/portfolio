import Section from "./ui/Section";
import { Timeline } from "./ui/Timeline";
import { Code, Cloud, ShieldCheck } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Basic Python towards AI/ML",
      subtitle: "CsePathshala",
      date: "Oct–Nov 2023",
      icon: <Code size={18} />,
      link: "https://drive.google.com/file/d/1SHYL5vccpNtCHgfAVbqxFNHl2vtgfmm_/view?usp=sharing",
    },
    {
      title: "Cloud Computing",
      subtitle: "NPTEL",
      date: "Jun–Jul 2024",
      icon: <Cloud size={18} />,
      link: "https://drive.google.com/file/d/1T_A1GCBz69J5kb4eJXYgQUoZ2j4eKoY6/view?usp=sharing",
    },
    {
      title: "Pre-Security",
      subtitle: "TryHackMe",
      date: "Jan–Feb 2026",
      icon: <ShieldCheck size={18} />,
      link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-EWEFHBEYVE.pdf",
    },
  ];

  return (
    <Section id="certifications">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Certifications<span className="text-accent">.</span>
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Credentials that validate my expertise.
        </p>
      </div>

      <Timeline items={certifications} />
    </Section>
  );
}
