"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Bot,
  BarChart3,
  Search,
  FileText,
  Video,
  MessageSquare,
  CheckCircle2,
  ArrowDown,
  Zap,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: AlertTriangle,
    color: "bg-snow-green",
    borderColor: "border-snow-green/30",
    label: "Incident Triggered",
    platform: "ServiceNow",
    description:
      "A P1/P2 incident is raised in ServiceNow. An automated workflow rule triggers Devin via API, passing the incident ID, severity, affected service, and initial description.",
    detail: "INC0041892 — Rave EDC data sync failure across EU region",
  },
  {
    id: 2,
    icon: Bot,
    color: "bg-devin-purple",
    borderColor: "border-devin-purple/30",
    label: "Devin Activated",
    platform: "Cognition Devin",
    description:
      "Devin spins up an autonomous session — reading the incident payload, identifying the affected system, and planning its root cause investigation strategy. No human needs to assign or supervise.",
    detail: "Session DEV-9a3f started • Strategy: log analysis → dependency check → config audit",
  },
  {
    id: 3,
    icon: Search,
    color: "bg-devin-purple",
    borderColor: "border-devin-purple/30",
    label: "L3 Root Cause Investigation",
    platform: "Devin AI",
    description:
      "Devin performs deep L3-level investigation: examining code paths, reviewing recent deployments, checking configuration changes, analysing error patterns, and correlating across microservices — working exactly like a senior SRE.",
    detail: "Checked 14 repos • 3 recent deployments • 47 config changes in last 24h",
  },
  {
    id: 4,
    icon: BarChart3,
    color: "bg-sumo-orange",
    borderColor: "border-sumo-orange/30",
    label: "Sumologic Signal Correlation",
    platform: "Sumologic",
    description:
      "Devin queries Sumologic to pull live logs, metrics, and traces. It correlates error spikes, latency anomalies, and throughput drops with the incident timeline to validate its hypothesis and strengthen conclusions.",
    detail: "Queried 3 log sources • Identified error spike at 14:32 UTC matching deploy window",
  },
  {
    id: 5,
    icon: FileText,
    color: "bg-snow-green",
    borderColor: "border-snow-green/30",
    label: "Results Posted to ServiceNow",
    platform: "ServiceNow",
    description:
      "Devin compiles its findings into a structured root-cause analysis and posts it directly into the ServiceNow incident record — including timeline, evidence, root cause, impact assessment, and recommended remediation.",
    detail: "Work note added • RCA attached • State → Analysis Complete • Ready for review",
  },
  {
    id: 6,
    icon: Video,
    color: "bg-red-500",
    borderColor: "border-red-500/30",
    label: "Video Evidence Recorded",
    platform: "Devin Session Recording",
    description:
      "Throughout its investigation, Devin records its entire session on video — every terminal command, log query, code review, and analysis step — providing a complete audit trail and evidence package.",
    detail: "12 min investigation recording • Attached to INC0041892 as evidence",
  },
  {
    id: 7,
    icon: MessageSquare,
    color: "bg-teams-purple",
    borderColor: "border-teams-purple/30",
    label: "MS Teams Notification",
    platform: "Microsoft Teams",
    description:
      "Devin posts a summary to the designated MS Teams incident channel, tags the on-call team, attaches the video recording link, and provides quick-action buttons — keeping everyone informed in real-time.",
    detail: "#incident-p1-alerts • @sre-oncall tagged • Video + RCA linked",
  },
  {
    id: 8,
    icon: CheckCircle2,
    color: "bg-medidata-teal",
    borderColor: "border-medidata-teal/30",
    label: "Trigger Follow-Up Actions",
    platform: "ServiceNow Orchestration",
    description:
      "ServiceNow can use Devin's structured output to automatically trigger downstream actions: change requests, runbook execution, escalation workflows, or automated remediation — closing the loop end-to-end.",
    detail: "CHG0012456 auto-created • Remediation runbook queued • Escalation paused",
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="relative py-28 bg-white">
      <div className="mesh-gradient absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-medidata-light px-4 py-1.5 mb-4">
            <Zap size={14} className="text-medidata-blue" />
            <span className="text-sm font-medium text-medidata-blue">
              End-to-End Workflow
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-medidata-navy tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            From the moment an incident fires in ServiceNow to a fully documented
            resolution — entirely autonomous.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-medidata-blue/20 via-devin-purple/20 to-medidata-teal/20 lg:-translate-x-px" />

          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-start gap-6 mb-12 lg:mb-16 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-16 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                    isLeft ? "lg:pr-6" : "lg:pl-6"
                  }`}
                >
                  <div
                    className={`glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border ${step.borderColor}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-white bg-medidata-slate rounded-full px-2.5 py-0.5">
                        Step {step.id}
                      </span>
                      <span className="text-xs font-medium text-gray-400">
                        {step.platform}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-medidata-navy mb-2">
                      {step.label}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Simulated terminal detail */}
                    <div className="terminal-bg rounded-lg px-4 py-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      </div>
                      <code className="text-xs text-green-400 leading-relaxed">
                        $ {step.detail}
                      </code>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
              </motion.div>
            );
          })}

          {/* Final arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <div className="flex flex-col items-center gap-2">
              <ArrowDown size={24} className="text-medidata-teal animate-bounce" />
              <span className="text-sm font-semibold text-medidata-teal">
                Incident Resolved — Zero Human Intervention
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
