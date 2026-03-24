"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description?: ReactNode;
  icon?: ReactNode;
  tags?: string[];
  link?: string;
}

export function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="relative max-w-4xl mx-auto py-10">
      {/* Vertical Line */}
      <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot / Icon */}
              <div className="absolute left-[20px] md:left-1/2 top-4 md:top-1/2 w-10 h-10 -translate-x-1/2 md:-translate-y-1/2 rounded-full border border-white/20 bg-black flex items-center justify-center shadow-[0_0_0_8px_rgba(0,0,0,1)] z-10 text-accent">
                {item.icon || (
                  <div className="w-3 h-3 rounded-full bg-accent" />
                )}
              </div>

              {/* Content Card */}
              <div className={`w-full pl-20 md:pl-0 md:w-[calc(50%-3rem)] ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                <div className="p-6 md:p-8 rounded-3xl bg-cardBg border border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent mb-4">
                      {item.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-md font-medium text-white/70 mb-4">
                      {item.subtitle}
                    </h4>
                    
                    {item.description && (
                      <div className="text-white/50 text-sm leading-relaxed mb-4">
                        {item.description}
                      </div>
                    )}

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs font-semibold px-2 py-1 bg-white/5 text-white/60 rounded-md border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {item.link && (
                      <div className="mt-6 flex items-center">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                          View Certificate
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
