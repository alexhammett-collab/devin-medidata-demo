"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section
        id="contact"
        className="relative py-28 hero-gradient overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to Transform<br />
              Incident Resolution?
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Let us show you how Devin can autonomously handle L3 incident
              investigation for Medidata — reducing MTTR, eliminating toil,
              and providing complete audit coverage.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:demo@cognition.ai"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-medidata-dark transition-all hover:shadow-xl hover:shadow-white/20 hover:scale-105"
              >
                Schedule a Live Demo
                <ArrowRight size={16} />
              </a>
              <a
                href="https://cognition.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Learn About Devin
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medidata-navy py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-medidata-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-white/80 text-sm font-medium">
                Medidata, a Dassault Systèmes company
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <span>Powered by</span>
              <a
                href="https://cognition.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-devin-purple hover:text-white transition-colors font-medium"
              >
                Cognition — Devin AI
              </a>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Prototype Demo 2025</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-white/20">
              This is a demonstration prototype showcasing the integration concept
              between Devin AI and Medidata&apos;s ServiceNow workflow. All data shown
              is illustrative.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
