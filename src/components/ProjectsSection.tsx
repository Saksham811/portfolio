"use client";

import Section from "./ui/Section";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "GitHub Repo Explainer",
      description: "An LLM-powered application that takes a GitHub repository URL, analyzes the codebase using OpenRouter API, and generates structured explanations for developers.",
      tech: ["Next.js", "TypeScript", "LLMs", "Tailwind CSS"],
      github: "https://github.com/Saksham811/Github-Repo-Explainer",
    },
    {
      title: "LeetCode Progress Analyzer",
      description: "A developer dashboard that fetches LeetCode user data via GraphQL, visualizes problem-solving trends with Chart.js, and provides AI-powered study suggestions.",
      tech: ["Next.js", "TypeScript", "GraphQL", "Chart.js"],
      github: "https://github.com/Saksham811/Leetcode-Progress-Analyzer",
      live: "https://leetcode-progress-analyzer.vercel.app/",
    },
    {
      title: "File Integrity Checker",
      description: "File Integrity Checker using SHA 256",
      tech: ["Python", "Flask", "CSS"],
      github: "https://github.com/Saksham811/File-Integrity-Checker",
      live: "https://file-integrity-checker-puce.vercel.app",
    },
    {
      title: "Hotel-Booking",
      description: "A project for a hotel booking system proving all details with unique feature of 360 degrees of room view along with property.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Saksham811/Hotel-Booking",
    },
    {
      title: "library-management-sys",
      description: "📚 A library management system implemented using concepts of OOP in JAVA, GUI designed using Java Swing and MS SQL as database.",
      tech: ["Java", "Java Swing", "MS SQL"],
      github: "https://github.com/Saksham811/library-management-sys",
    },
    {
      title: "Password Strength Analyzer",
      description: "A password strength analyzer.",
      tech: ["CSS", "HTML", "JavaScript"],
      github: "https://github.com/Saksham811/password-strength-analyzer",
      live: "https://password-strength-analyzerlive-gp80ah8yo.vercel.app/",
    },
  ];

  return (
    <Section id="projects" className="bg-black/20 w-full max-w-none">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center">
          Featured Projects<span className="text-accent">.</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => window.open(project.github, "_blank")}
              className="flex flex-col p-8 rounded-3xl bg-cardBg border border-white/10 hover:border-accent/40 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 group-hover:from-accent/10 transition-colors duration-500 pointer-events-none" />

              <h3 className="text-2xl font-bold mb-3 text-white transition-colors">{project.title}</h3>
              <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-xs font-semibold px-2 py-1 bg-white/10 text-accent rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto" onClick={(e) => e.stopPropagation()}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  <Github size={18} /> View Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All on GitHub CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="https://github.com/Saksham811"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-accent/60 hover:bg-accent/10 transition-all duration-300 font-medium"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </Section>
  );
}
