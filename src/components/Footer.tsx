import { Github, Linkedin, Mail, Code, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-8 relative z-10 bg-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Saksham. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/Saksham811" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/saksham-617086395/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/saksham811dv/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="LeetCode">
            <Code size={20} />
          </a>
          <a href="https://tryhackme.com/p/Serzex" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="TryHackMe">
            <Shield size={20} />
          </a>
          <a href="mailto:saksham811dv@gmail.com" className="text-white/60 hover:text-white transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
