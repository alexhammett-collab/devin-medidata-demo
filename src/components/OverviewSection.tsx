"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Sparkles } from "lucide-react";

export default function OverviewSection() {
  return (
    <section id="overview" className="relative py-28 bg-white">
      <div className="mesh-gradient absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-medidata-light px-4 py-1.5 mb-4">
            <Sparkles size={14} className="text-medidata-blue" />
            <span className="text-sm font-medium text-medidata-blue">
              The Vision
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-medidata-navy tracking-tight">
            Autonomous Incident Resolution
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Today, critical incidents at Medidata require senior L3 engineers to
            manually triage, investigate, and document root causes — often at 3am.
            What if that entire process could happen autonomously, at machine speed,
            with full audit trails?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="rounded-2xl border border-red-100 bg-red-50/50 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-5">
              <span className="text-2xl">⚠️</span>
            </div>
            <h3 className="text-xl font-bold text-medidata-navy mb-3">The Challenge</h3>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                P1 incidents require immediate L3 attention — often outside business hours
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                Manual log analysis across multiple tools is slow and error-prone
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                Documentation is inconsistent, often done after-the-fact
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                Senior engineers burn out on repetitive triage work
              </li>
            </ul>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-medidata-blue/20 bg-medidata-light/50 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-medidata-blue to-medidata-accent flex items-center justify-center mb-5">
              <Bot size={22} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-medidata-navy mb-3">The Solution</h3>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-medidata-blue flex-shrink-0" />
                Devin is triggered automatically by ServiceNow incidents
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-medidata-blue flex-shrink-0" />
                Performs full L3 investigation autonomously — logs, code, config
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-medidata-blue flex-shrink-0" />
                Correlates signals from Sumologic for evidence-backed conclusions
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-medidata-blue flex-shrink-0" />
                Documents everything in ServiceNow, records video, notifies Teams
              </li>
            </ul>
          </motion.div>

          {/* The Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-medidata-teal/20 bg-medidata-teal/5 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-medidata-teal to-emerald-600 flex items-center justify-center mb-5">
              <Workflow size={22} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-medidata-navy mb-3">The Outcome</h3>
            <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-medidata-teal flex-shrink-0" />
                MTTR drops from hours to minutes — 24/7 coverage
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-medidata-teal flex-shrink-0" />
                100% of investigations are documented and auditable
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-medidata-teal flex-shrink-0" />
                Senior engineers reclaim 90%+ of triage hours
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-medidata-teal flex-shrink-0" />
                ServiceNow can trigger automated remediation from Devin&apos;s output
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
