import Section from "./ui/Section";
import { Briefcase } from "lucide-react";

export default function InternshipSection() {
  return (
    <Section id="internship">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Internship<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="flex flex-col p-8 md:p-12 rounded-3xl bg-cardBg border border-white/10 hover:border-accent/40 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 group-hover:from-accent/10 transition-colors duration-500 pointer-events-none" />

          <div className="flex items-center gap-4 mb-6 relative z-10 justify-center">
            <div className="p-4 rounded-full bg-white/5 border border-white/10 text-accent group-hover:scale-110 transition-transform">
              <Briefcase size={28} />
            </div>
          </div>
          
          <p className="text-white/80 text-lg md:text-xl text-center leading-relaxed relative z-10 font-medium max-w-2xl mx-auto">
            &quot;Currently seeking internship opportunities in Cybersecurity where I can apply my skills, gain hands-on experience, and contribute to securing systems and networks.&quot;
          </p>
        </div>
      </div>
    </Section>
  );
}
