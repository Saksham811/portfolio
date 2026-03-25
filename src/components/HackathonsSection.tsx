import Section from "./ui/Section";
import { Terminal } from "lucide-react";

export default function HackathonsSection() {
  const hackathons = [
    {
      title: "Republic of Cyber Sentinels Capture The Flag (RCSCTF24) Event",
      description: "Participated in the Republic of Cyber Sentinels CTF event, solving cybersecurity challenges.",
      link: "https://drive.google.com/file/d/17CrdG1_tKlsn-Wpm7CyU2JAYS7lcuhHA/view?usp=sharing",
    },
    {
      title: "National Level Hackathon",
      description: "Worked on security-focused solution involving network monitoring and threat detection.",
    },
  ];

  return (
    <Section id="hackathons">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Hackathons<span className="text-accent">.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Competitive events where I engaged in collaborative problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, i) => (
            <div
              key={i}
              className="flex flex-col p-8 rounded-3xl bg-cardBg border border-white/10 hover:border-accent/40 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 group-hover:from-accent/10 transition-colors duration-500 pointer-events-none" />

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent group-hover:scale-110 transition-transform">
                  <Terminal size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white transition-colors">{hackathon.title}</h3>
              </div>
              
              <p className={`text-white/60 flex-grow leading-relaxed relative z-10 ${hackathon.link ? 'mb-6' : 'mb-0'}`}>
                {hackathon.description}
              </p>

              {hackathon.link && (
                <div className="mt-auto relative z-10">
                  <a
                    href={hackathon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    View Details
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
