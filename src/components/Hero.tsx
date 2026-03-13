"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Bot,
  BarChart3,
  FileCheck,
  Video,
  MessageSquare,
  ArrowRight,
  Zap,
} from "lucide-react";

const floatingIcons = [
  { icon: AlertTriangle, label: "ServiceNow", color: "text-snow-green", delay: 0 },
  { icon: Bot, label: "Devin AI", color: "text-devin-purple", delay: 0.5 },
  { icon: BarChart3, label: "Sumologic", color: "text-sumo-orange", delay: 1.0 },
  { icon: FileCheck, label: "Documentation", color: "text-medidata-accent", delay: 1.5 },
  { icon: Video, label: "Recording", color: "text-red-400", delay: 2.0 },
  { icon: MessageSquare, label: "MS Teams", color: "text-teams-purple", delay: 2.5 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-6"
            >
              <Zap size={14} className="text-medidata-accent" />
              <span className="text-white/80 text-sm font-medium">
                Autonomous L3 Incident Resolution
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              From incident to{" "}
              <span className="bg-gradient-to-r from-medidata-accent via-medidata-teal to-devin-purple bg-clip-text text-transparent">
                resolution
              </span>
              <br />
              — autonomously.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed"
            >
              Devin by Cognition plugs directly into Medidata&apos;s ServiceNow
              workflow — performing autonomous root-cause investigation, pulling
              Sumologic signals, documenting findings, recording video evidence,
              and posting to MS&nbsp;Teams — all without human intervention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#workflow"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-medidata-dark transition-all hover:shadow-xl hover:shadow-white/20 hover:scale-105"
              >
                See How It Works
                <ArrowRight size={16} />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Explore Capabilities
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-14 grid grid-cols-3 gap-4 sm:gap-6"
            >
              {[
                { value: "< 5 min", label: "Avg. triage time" },
                { value: "24/7", label: "Autonomous coverage" },
                { value: "100%", label: "Audit documented" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Animated flow icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Central Devin orb */}
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-40 h-40 rounded-full bg-gradient-to-br from-devin-purple to-medidata-accent flex items-center justify-center shadow-2xl shadow-devin-purple/30"
              >
                <div className="text-center">
                  <Bot size={40} className="text-white mx-auto" />
                  <span className="text-white text-xs font-semibold mt-1 block">
                    Devin AI
                  </span>
                </div>
              </motion.div>

              {/* Orbiting icons */}
              {floatingIcons.map((item, i) => {
                const angle = (i / floatingIcons.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 170;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: item.delay + 0.5, duration: 0.5 }}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px - 28px)`,
                      top: `calc(50% + ${y}px - 28px)`,
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: item.delay * 0.3,
                      }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                        <item.icon size={22} className={item.color} />
                      </div>
                      <span className="text-[10px] text-white/60 mt-1.5 font-medium">
                        {item.label}
                      </span>
                    </motion.div>

                    {/* Connecting line to center */}
                    <svg
                      className="absolute pointer-events-none"
                      style={{
                        left: "28px",
                        top: "28px",
                        width: "1px",
                        height: "1px",
                        overflow: "visible",
                      }}
                    >
                      <motion.line
                        x1="0"
                        y1="0"
                        x2={-x}
                        y2={-y}
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: item.delay + 0.8, duration: 0.8 }}
                      />
                    </svg>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
