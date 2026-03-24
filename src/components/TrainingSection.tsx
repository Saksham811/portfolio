import Section from "./ui/Section";
import { BookOpenCheck } from "lucide-react";

export default function TrainingSection() {
  return (
    <Section id="training">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Training<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="flex flex-col p-8 md:p-10 rounded-3xl bg-cardBg border border-white/10 hover:border-accent/40 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 group-hover:from-accent/10 transition-colors duration-500 pointer-events-none" />

          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent group-hover:scale-110 transition-transform">
              <BookOpenCheck size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white transition-colors">CipherSchools – Data Structures and Algorithms with Java</h3>
              <p className="text-white/50 text-sm mt-1">Jun–Jul 2025</p>
            </div>
          </div>
          
          <ul className="text-white/70 space-y-3 mb-8 relative z-10 list-disc list-inside leading-relaxed">
            <li>Completed structured learning focused on core and advanced Data Structures & Algorithms using Java</li>
            <li>Covered arrays, strings, linked lists, stacks, queues, trees, graphs, hashing</li>
            <li>Learned recursion, sorting, searching, greedy, divide & conquer, dynamic programming</li>
            <li>Improved logical thinking and Big-O analysis</li>
            <li>Strengthened OOP and clean coding practices</li>
          </ul>

          <div className="flex flex-wrap gap-2 relative z-10 mt-auto pt-4 border-t border-white/10">
            {["Java", "DSA", "Algorithms", "Problem Solving"].map((tag, i) => (
              <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-white/5 text-accent rounded-lg border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center relative z-10">
            <a
              href="https://www.cipherschools.com/certificate/preview?id=689ad37f94c24c5a4c609d96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-1"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
