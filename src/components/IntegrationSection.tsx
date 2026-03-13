"use client";

import { motion } from "framer-motion";
import {
  Database,
  ArrowRightLeft,
  Video,
  MessageSquare,
  FileText,
  Bell,
  PlayCircle,
  Users,
  ShieldCheck,
} from "lucide-react";

const integrations = [
  {
    name: "ServiceNow",
    icon: Database,
    color: "bg-snow-green",
    tagColor: "text-snow-green bg-snow-green/10",
    features: [
      "Incident trigger via webhook / Flow Designer",
      "Structured work notes & RCA attachments",
      "State transitions & field updates",
      "Change request auto-creation",
      "CMDB correlation for blast radius",
    ],
    mockUI: (
      <div className="terminal-bg rounded-lg p-3 sm:p-4 mt-4 text-[10px] sm:text-xs overflow-x-auto">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-gray-500 ml-2 text-[10px]">ServiceNow — INC0041892</span>
        </div>
        <div className="space-y-1.5 font-mono">
          <div><span className="text-gray-500">State:</span> <span className="text-green-400">Analysis Complete</span></div>
          <div><span className="text-gray-500">Priority:</span> <span className="text-red-400">P1 — Critical</span></div>
          <div><span className="text-gray-500">Assigned:</span> <span className="text-blue-400">Devin AI (Auto)</span></div>
          <div className="border-t border-gray-700 pt-1.5 mt-2">
            <span className="text-gray-500">Work Note:</span>
            <div className="text-amber-300 mt-1 leading-relaxed break-words">
              Root cause: EU Rave EDC sync failure caused by misconfigured connection pool limit in deploy v2.14.3. Sumologic error spike at 14:32 UTC correlates with deploy. Remediation: rollback to v2.14.2 or hotfix PR #4721.
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Sumologic",
    icon: Database,
    color: "bg-sumo-orange",
    tagColor: "text-sumo-orange bg-sumo-orange/10",
    features: [
      "Log query via Sumologic Search Job API",
      "Multi-source correlation (app, infra, CDN)",
      "Error pattern & anomaly detection",
      "Metric dashboards for latency & throughput",
      "Evidence export for audit trail",
    ],
    mockUI: (
      <div className="terminal-bg rounded-lg p-3 sm:p-4 mt-4 text-[10px] sm:text-xs overflow-x-auto">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-gray-500 ml-2 text-[10px]">Sumologic — Query Results</span>
        </div>
        <div className="font-mono space-y-1">
          <div className="text-blue-400 truncate">_sourceCategory=prod/rave-edc/eu-west-1</div>
          <div className="text-gray-500">| where status_code &gt;= 500</div>
          <div className="text-gray-500">| timeslice 5m | count by _timeslice</div>
          <div className="border-t border-gray-700 pt-2 mt-2 space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-400">14:25 UTC</span>
              <span className="text-green-400">██░░░░░░░░ 12 errors</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">14:30 UTC</span>
              <span className="text-yellow-400">████░░░░░░ 47 errors</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">14:35 UTC</span>
              <span className="text-red-400">█████████░ 312 errors</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">14:40 UTC</span>
              <span className="text-red-400">██████████ 891 errors</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Microsoft Teams",
    icon: MessageSquare,
    color: "bg-teams-purple",
    tagColor: "text-teams-purple bg-teams-purple/10",
    features: [
      "Devin posts directly via webhook",
      "On-call team tagging (@mentions)",
      "Video recording link attachment",
      "Adaptive Cards with RCA summary",
      "Quick-action buttons for escalation",
    ],
    mockUI: (
      <div className="bg-[#1b1a2e] rounded-lg p-3 sm:p-4 mt-4 text-[10px] sm:text-xs">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
          <div className="w-5 h-5 rounded bg-teams-purple flex items-center justify-center">
            <MessageSquare size={10} className="text-white" />
          </div>
          <span className="text-white/80 font-medium">#incident-p1-alerts</span>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-devin-purple to-medidata-accent flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-bold">D</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-semibold text-xs">Devin AI</span>
              <span className="text-gray-500 text-[10px]">Today 14:47 UTC</span>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border-l-2 border-devin-purple">
              <div className="text-white/90 leading-relaxed">
                <div className="font-semibold text-devin-purple mb-1">🔍 INC0041892 — RCA Complete</div>
                <div className="text-white/70">
                  Root cause: connection pool exhaustion in Rave EDC EU sync service following deploy v2.14.3.<br />
                  <span className="text-white/50">MTTR: 4m 32s • Confidence: High</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 rounded bg-devin-purple/20 text-devin-purple text-[10px] font-medium flex items-center gap-1">
                  <PlayCircle size={10} /> Watch Recording
                </span>
                <span className="px-2 py-1 rounded bg-snow-green/20 text-snow-green text-[10px] font-medium flex items-center gap-1">
                  <FileText size={10} /> View in ServiceNow
                </span>
              </div>
            </div>
            <div className="text-gray-500 text-[10px] mt-2 flex items-center gap-1">
              <Users size={10} /> @sre-oncall @platform-leads tagged
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function IntegrationSection() {
  return (
    <section id="integration" className="relative py-28 bg-white">
      <div className="mesh-gradient absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-medidata-light px-4 py-1.5 mb-4">
            <ArrowRightLeft size={14} className="text-medidata-blue" />
            <span className="text-sm font-medium text-medidata-blue">
              Platform Integrations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-medidata-navy tracking-tight">
            Seamless Integration
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Devin connects natively to your existing toolchain — no custom middleware
            or complex setup required.
          </p>
        </motion.div>

        {/* Integration cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {integrations.map((integ, idx) => (
            <motion.div
              key={integ.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl ${integ.color} flex items-center justify-center`}
                >
                  <integ.icon size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-medidata-navy">
                    {integ.name}
                  </h3>
                </div>
              </div>

              <ul className="space-y-2 mb-2">
                {integ.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-medidata-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {integ.mockUI}
            </motion.div>
          ))}
        </div>

        {/* Video recording callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-medidata-navy to-medidata-dark p-5 sm:p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-4">
                <Video size={14} className="text-red-400" />
                <span className="text-sm font-medium text-white/80">
                  Session Recording
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Every Investigation, Recorded
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Devin records its entire investigation session — every command,
                query, analysis, and conclusion — on video. These recordings are
                automatically attached to the ServiceNow incident, posted to
                MS&nbsp;Teams, and available for compliance review.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, label: "Compliance Ready" },
                  { icon: PlayCircle, label: "Replayable Evidence" },
                  { icon: FileText, label: "Auto-Attached to SNOW" },
                  { icon: Bell, label: "Linked in Teams" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <item.icon size={16} className="text-medidata-accent" />
                    <span className="text-sm text-white/70">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl bg-black/40 border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-black/30 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[11px] text-red-400 font-medium">REC</span>
                  <span className="text-[11px] text-white/40 ml-auto">12:47</span>
                </div>
                <div className="p-3 sm:p-4 font-mono text-[10px] sm:text-xs space-y-2 overflow-x-auto">
                  <div className="text-green-400">$ devin investigate INC0041892</div>
                  <div className="text-white/50">→ Loading incident context...</div>
                  <div className="text-white/50">→ Querying Sumologic logs (eu-west-1)...</div>
                  <div className="text-yellow-400">→ Anomaly detected: error spike @ 14:32 UTC</div>
                  <div className="text-white/50">→ Checking deploy history...</div>
                  <div className="text-yellow-400">→ Deploy v2.14.3 @ 14:28 UTC — correlation: HIGH</div>
                  <div className="text-white/50">→ Inspecting connection pool config...</div>
                  <div className="text-red-400">→ ROOT CAUSE: max_pool_size=5 (expected: 50)</div>
                  <div className="text-green-400">→ RCA generated. Posting to ServiceNow...</div>
                  <div className="text-blue-400">→ Notifying #incident-p1-alerts on Teams...</div>
                  <div className="text-green-400 font-semibold mt-2">✓ Investigation complete — 4m 32s</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

