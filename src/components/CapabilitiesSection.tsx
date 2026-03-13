"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Search,
  GitBranch,
  Terminal,
  BarChart3,
  FileSearch,
  ShieldCheck,
  Clock,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Autonomous Reasoning",
    description:
      "Devin plans its own investigation strategy based on the incident context — deciding which logs to check, which services to inspect, and which hypotheses to test first.",
    color: "from-devin-purple to-devin-violet",
    bgColor: "bg-devin-purple/5",
  },
  {
    icon: Search,
    title: "Deep Log Analysis",
    description:
      "Queries Sumologic across multiple log sources, parses stack traces, correlates timestamps, and identifies the exact error chain that led to the incident.",
    color: "from-sumo-orange to-amber-600",
    bgColor: "bg-sumo-orange/5",
  },
  {
    icon: GitBranch,
    title: "Code & Deploy Correlation",
    description:
      "Automatically inspects recent Git commits, deployment histories, and config changes to determine if the incident was triggered by a code or infrastructure change.",
    color: "from-medidata-blue to-medidata-accent",
    bgColor: "bg-medidata-blue/5",
  },
  {
    icon: Terminal,
    title: "Live System Inspection",
    description:
      "Devin can SSH into systems, run diagnostic commands, check service health, review container states, and inspect database connections — just like an L3 engineer.",
    color: "from-medidata-teal to-emerald-600",
    bgColor: "bg-medidata-teal/5",
  },
  {
    icon: BarChart3,
    title: "Metric Correlation",
    description:
      "Pulls application and infrastructure metrics from Sumologic to identify anomalies in CPU, memory, latency, error rates, and throughput that align with the incident window.",
    color: "from-sumo-orange to-red-500",
    bgColor: "bg-sumo-orange/5",
  },
  {
    icon: FileSearch,
    title: "Structured RCA Output",
    description:
      "Produces a complete Root Cause Analysis: timeline of events, evidence collected, root cause identified, blast radius, and recommended remediation — all written back to ServiceNow.",
    color: "from-snow-green to-emerald-600",
    bgColor: "bg-snow-green/5",
  },
  {
    icon: ShieldCheck,
    title: "Full Audit Trail",
    description:
      "Every action Devin takes is logged and recorded on video. The entire investigation is auditable, replayable, and can be reviewed by senior engineers or compliance teams.",
    color: "from-medidata-blue to-devin-purple",
    bgColor: "bg-medidata-blue/5",
  },
  {
    icon: Clock,
    title: "24/7 Instant Response",
    description:
      "No waiting for on-call engineers to wake up. Devin starts investigating within seconds of the ServiceNow trigger, dramatically reducing Mean Time to Resolution (MTTR).",
    color: "from-medidata-accent to-medidata-teal",
    bgColor: "bg-medidata-accent/5",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-devin-purple/10 px-4 py-1.5 mb-4">
            <Brain size={14} className="text-devin-purple" />
            <span className="text-sm font-medium text-devin-purple">
              Devin&apos;s Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-medidata-navy tracking-tight">
            L3 Investigation Power
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Devin brings the full capability of a senior SRE — reasoning, analysis,
            and documentation — to every incident, at machine speed.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className={`group relative rounded-2xl ${cap.bgColor} border border-gray-100 p-6 hover:shadow-xl hover:shadow-medidata-blue/5 hover:-translate-y-1 transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <cap.icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-bold text-medidata-navy mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
