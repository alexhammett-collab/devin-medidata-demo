"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  AlertTriangle,
  Bot,
  BarChart3,
  FileText,
  Video,
  MessageSquare,
  ChevronRight,
  Clock,
  User,
  Tag,
  Layers,
  CheckCircle2,
  Search,
  Terminal,
  PlayCircle,
  Users,
  ExternalLink,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  STEP DEFINITIONS                                                   */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    id: "snow-incident",
    label: "Incident Raised",
    icon: AlertTriangle,
    color: "bg-snow-green",
    duration: 6000,
  },
  {
    id: "devin-session",
    label: "Devin Investigates",
    icon: Bot,
    color: "bg-devin-purple",
    duration: 12000,
  },
  {
    id: "sumo-query",
    label: "Sumologic Signals",
    icon: BarChart3,
    color: "bg-sumo-orange",
    duration: 7000,
  },
  {
    id: "snow-update",
    label: "ServiceNow Updated",
    icon: FileText,
    color: "bg-snow-green",
    duration: 6000,
  },
  {
    id: "devin-recording",
    label: "Video Recorded",
    icon: Video,
    color: "bg-red-500",
    duration: 7000,
  },
  {
    id: "teams-post",
    label: "Teams Notified",
    icon: MessageSquare,
    color: "bg-teams-purple",
    duration: 7000,
  },
];

/* ------------------------------------------------------------------ */
/*  TYPEWRITER HOOK                                                    */
/* ------------------------------------------------------------------ */

function useTypewriter(lines: string[], active: boolean, speed = 30) {
  const [displayed, setDisplayed] = useState<string[]>([]);

  useEffect(() => {
    if (!active) {
      setDisplayed([]);
      return;
    }

    let lineIdx = 0;
    let charIdx = 0;
    let currentLines: string[] = [];
    let cancelled = false;

    function tick() {
      if (cancelled) return;
      if (lineIdx >= lines.length) return;

      const line = lines[lineIdx];
      charIdx++;

      if (charIdx > line.length) {
        lineIdx++;
        charIdx = 0;
        // pause between lines
        setTimeout(tick, 200);
        return;
      }

      currentLines = [
        ...lines.slice(0, lineIdx),
        line.slice(0, charIdx),
      ];
      setDisplayed([...currentLines]);
      setTimeout(tick, speed);
    }

    tick();
    return () => {
      cancelled = true;
    };
  }, [lines, active, speed]);

  return displayed;
}

/* ------------------------------------------------------------------ */
/*  MOCK: ServiceNow Incident Form                                     */
/* ------------------------------------------------------------------ */

function SNOWIncidentForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden"
    >
      {/* SNOW Header bar */}
      <div className="bg-[#293e40] px-4 py-2.5 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 bg-[#1a2b2d] rounded px-3 py-1 text-xs text-gray-300 font-mono">
          medidata.service-now.com/incident.do?sys_id=INC0041892
        </div>
      </div>

      {/* SNOW Navigation */}
      <div className="bg-[#32474a] px-4 py-1.5 flex items-center gap-4 text-xs text-white/70">
        <span className="font-semibold text-white">ServiceNow</span>
        <span>Incident</span>
        <span>CMDB</span>
        <span>Change</span>
        <span>Knowledge</span>
      </div>

      {/* Form Header */}
      <div className="bg-gray-50 border-b px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-bold text-gray-800">INC0041892</h3>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700"
          >
            P1 — Critical
          </motion.span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700"
          >
            New → In Progress
          </motion.span>
        </div>
        <div className="text-[10px] text-gray-400">
          Opened: 2025-01-15 14:28:03 UTC
        </div>
      </div>

      {/* Form fields */}
      <div className="p-5 space-y-3 text-xs">
        <div className="grid grid-cols-2 gap-4">
          <FormField icon={Tag} label="Number" value="INC0041892" />
          <FormField icon={AlertTriangle} label="Priority" value="1 — Critical" valueClass="text-red-600 font-bold" />
          <FormField icon={Layers} label="Category" value="Application — Data Sync" />
          <FormField icon={Clock} label="SLA" value="Response: 15m / Resolve: 4h" />
          <FormField icon={User} label="Assigned To" value="Devin AI (Automated)" valueClass="text-devin-purple font-semibold" />
          <FormField icon={Layers} label="Configuration Item" value="Rave EDC — EU Sync Service" />
        </div>

        <div className="border-t pt-3 mt-3">
          <label className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1 block">Short Description</label>
          <div className="bg-gray-50 rounded border px-3 py-2 text-sm text-gray-800">
            Rave EDC data synchronisation failure across EU region — all clinical trial data sync operations failing with connection timeout errors
          </div>
        </div>

        <div>
          <label className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1 block">Description</label>
          <div className="bg-gray-50 rounded border px-3 py-2 text-gray-700 leading-relaxed">
            Multiple clinical sites reporting inability to sync trial data. Error logs indicate connection pool exhaustion on EU-WEST-1 Rave EDC sync service cluster. Impacting approximately 340 active trials. First reported by site coordinators at 14:25 UTC. Monitoring alerts triggered at 14:28 UTC.
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 flex items-start gap-3"
        >
          <Bot size={16} className="text-devin-purple mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-[10px] font-bold text-devin-purple uppercase tracking-wider">Automation Triggered</div>
            <div className="text-xs text-amber-800 mt-0.5">
              ServiceNow Flow Designer has triggered Devin AI for autonomous L3 investigation. Session ID: DEV-9a3f-b721
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function FormField({
  icon: Icon,
  label,
  value,
  valueClass = "text-gray-800",
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={12} className="text-gray-400 flex-shrink-0" />
      <span className="text-gray-400 w-24 flex-shrink-0">{label}:</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MOCK: Devin Investigation Session                                  */
/* ------------------------------------------------------------------ */

const DEVIN_LINES = [
  "$ devin investigate --incident INC0041892 --priority P1",
  "",
  "🔍 Loading incident context from ServiceNow...",
  "   Incident: Rave EDC data sync failure — EU region",
  "   Priority: P1 Critical | SLA: 4h resolve",
  "   CI: rave-edc-sync-eu-west-1",
  "",
  "📋 Planning investigation strategy...",
  "   → Phase 1: Recent deployment analysis",
  "   → Phase 2: Log analysis via Sumologic",
  "   → Phase 3: Infrastructure & config audit",
  "   → Phase 4: Root cause determination",
  "",
  "🚀 Phase 1: Checking deployment history...",
  "   Querying GitHub deploy events (last 48h)...",
  "   Found 3 deployments:",
  "   ├── v2.14.1  2025-01-14 09:15 UTC  ✓ stable",
  "   ├── v2.14.2  2025-01-15 08:22 UTC  ✓ stable",
  "   └── v2.14.3  2025-01-15 14:28 UTC  ⚠ CORRELATES WITH INCIDENT",
  "",
  "   Inspecting v2.14.3 changelog (PR #4718, #4719, #4721)...",
  "   PR #4721: \"Optimize connection pool for EU region\"",
  "   ⚠ Changed: max_pool_size: 50 → 5 (SUSPICIOUS)",
  "",
  "🔎 Phase 2: Querying Sumologic...",
  "   → _sourceCategory=prod/rave-edc/eu-west-1",
  "   → Timerange: 14:00–14:45 UTC",
  "   → 891 errors detected at peak (14:40 UTC)",
  "   → Error: \"ConnectionPoolExhausted: max connections (5) reached\"",
  "   → Latency spike: 45ms → 12,400ms at 14:32 UTC",
  "",
  "🔧 Phase 3: Config audit...",
  "   Checking kubernetes config for rave-edc-sync...",
  "   Pod replicas: 6 (expected: 6) ✓",
  "   Memory allocation: 4Gi (expected: 4Gi) ✓",
  "   Connection pool max: 5 (expected: 50) ✗ MISMATCH",
  "",
  "🎯 Root Cause Determined:",
  "   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
  "   Deploy v2.14.3 (PR #4721) reduced connection pool",
  "   max_pool_size from 50 to 5 — a typo in config.",
  "   Under normal EU load (~40 concurrent connections),",
  "   this caused immediate pool exhaustion and cascading",
  "   timeout failures across all sync operations.",
  "   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
  "",
  "📝 Remediation:",
  "   Option A: Rollback to v2.14.2 (immediate)",
  "   Option B: Hotfix PR #4721 → set max_pool_size=50",
  "   Recommendation: Option A (rollback) for immediate relief",
  "",
  "✅ Posting RCA to ServiceNow INC0041892...",
  "✅ Attaching session recording...",
  "✅ Notifying MS Teams #incident-p1-alerts...",
  "",
  "🏁 Investigation complete — Total time: 4m 32s",
];

function DevinSession({ active }: { active: boolean }) {
  const lines = useTypewriter(DEVIN_LINES, active, 18);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-gray-800 bg-[#0d1117] shadow-2xl overflow-hidden"
    >
      {/* Window chrome */}
      <div className="bg-[#161b22] px-4 py-2.5 flex items-center gap-3 border-b border-gray-800">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex items-center gap-2 ml-2">
          <Terminal size={12} className="text-devin-purple" />
          <span className="text-xs text-gray-400 font-mono">
            Devin AI — Session DEV-9a3f-b721
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] text-red-400 font-medium">REC</span>
        </div>
      </div>

      {/* Terminal output */}
      <div className="p-4 h-[420px] overflow-y-auto font-mono text-xs leading-relaxed scrollbar-thin">
        {lines.map((line, i) => (
          <div key={i} className={getLineColor(line)}>
            {line || "\u00A0"}
          </div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-green-400 ml-0.5"
        />
      </div>

      {/* Status bar */}
      <div className="bg-[#161b22] px-4 py-1.5 border-t border-gray-800 flex items-center justify-between text-[10px] text-gray-500">
        <span>Devin AI v3.2.1</span>
        <span>INC0041892 • P1 Critical</span>
        <span>Session: 4m 32s</span>
      </div>
    </motion.div>
  );
}

function getLineColor(line: string): string {
  if (line.startsWith("$")) return "text-green-400 font-semibold";
  if (line.startsWith("🎯") || line.startsWith("🏁")) return "text-green-400 font-semibold";
  if (line.startsWith("✅")) return "text-green-400";
  if (line.includes("⚠") || line.includes("SUSPICIOUS") || line.includes("CORRELATES")) return "text-yellow-400";
  if (line.includes("✗") || line.includes("MISMATCH")) return "text-red-400";
  if (line.includes("✓") || line.includes("stable")) return "text-gray-400";
  if (line.startsWith("   →") || line.startsWith("   ├") || line.startsWith("   └")) return "text-blue-300";
  if (line.startsWith("   ━")) return "text-amber-400";
  if (line.startsWith("📋") || line.startsWith("🔍") || line.startsWith("🚀") || line.startsWith("🔎") || line.startsWith("🔧") || line.startsWith("📝")) return "text-blue-400 font-semibold";
  return "text-gray-300";
}

/* ------------------------------------------------------------------ */
/*  MOCK: Sumologic Query Results                                      */
/* ------------------------------------------------------------------ */

function SumologicPanel() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden"
    >
      {/* Sumo header */}
      <div className="bg-[#1a1a2e] px-4 py-2.5 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 bg-[#0f0f1e] rounded px-3 py-1 text-xs text-gray-300 font-mono">
          service.sumologic.com/ui/#/search/Gn4w2kF8...
        </div>
      </div>

      <div className="bg-[#0f0f1e] px-4 py-2 flex items-center gap-3 text-xs text-gray-400 border-b border-gray-800">
        <Search size={12} className="text-sumo-orange" />
        <code className="text-sumo-orange">
          _sourceCategory=prod/rave-edc/eu-west-1 | where status_code &gt;= 500
        </code>
      </div>

      <div className="p-5">
        {/* Time range */}
        <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
          <span>Time range: 14:00 – 14:45 UTC, Jan 15 2025</span>
          <span className="text-red-500 font-semibold">891 errors at peak</span>
        </div>

        {/* Bar chart */}
        <div className="space-y-2 mb-6">
          <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-2">Error Count by 5-min Interval</div>
          {[
            { time: "14:00", count: 2, pct: 0.2 },
            { time: "14:05", count: 3, pct: 0.3 },
            { time: "14:10", count: 2, pct: 0.2 },
            { time: "14:15", count: 4, pct: 0.4 },
            { time: "14:20", count: 5, pct: 0.5 },
            { time: "14:25", count: 12, pct: 1.3 },
            { time: "14:30", count: 47, pct: 5.3 },
            { time: "14:35", count: 312, pct: 35 },
            { time: "14:40", count: 891, pct: 100 },
            { time: "14:45", count: 743, pct: 83 },
          ].map((bar, i) => (
            <div key={bar.time} className="flex items-center gap-3 text-xs">
              <span className="text-gray-400 w-12 text-right font-mono">{bar.time}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: loaded ? `${bar.pct}%` : 0 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  className={`h-full rounded-full ${
                    bar.pct > 50 ? "bg-red-500" : bar.pct > 10 ? "bg-amber-500" : bar.pct > 1 ? "bg-yellow-400" : "bg-green-400"
                  }`}
                />
              </div>
              <span className={`w-16 text-right font-mono font-semibold ${bar.pct > 50 ? "text-red-500" : bar.pct > 10 ? "text-amber-500" : "text-gray-500"}`}>
                {bar.count}
              </span>
            </div>
          ))}
        </div>

        {/* Deploy correlation marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
          transition={{ delay: 1.8 }}
          className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 flex items-start gap-3"
        >
          <AlertTriangle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
          <div className="text-xs">
            <div className="font-bold text-red-700">Anomaly Detected — Correlates with Deploy</div>
            <div className="text-red-600 mt-1">
              Error spike begins at 14:30 UTC — 2 minutes after deploy v2.14.3 at 14:28 UTC.
              Error message: <code className="bg-red-100 px-1 rounded">ConnectionPoolExhausted: max connections (5) reached</code>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MOCK: ServiceNow Updated with RCA                                  */
/* ------------------------------------------------------------------ */

function SNOWUpdated() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden"
    >
      <div className="bg-[#293e40] px-4 py-2.5 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 bg-[#1a2b2d] rounded px-3 py-1 text-xs text-gray-300 font-mono">
          medidata.service-now.com/incident.do?sys_id=INC0041892
        </div>
      </div>

      <div className="bg-gray-50 border-b px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-bold text-gray-800">INC0041892</h3>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700">P1</span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700"
          >
            Analysis Complete
          </motion.span>
        </div>
      </div>

      <div className="p-5 space-y-4 text-xs">
        {/* Updated fields */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={12} className="text-green-500" />
            <span className="text-gray-400 w-24">State:</span>
            <span className="text-green-600 font-bold">Analysis Complete</span>
          </div>
          <div className="flex items-center gap-2">
            <Bot size={12} className="text-devin-purple" />
            <span className="text-gray-400 w-24">Updated by:</span>
            <span className="text-devin-purple font-semibold">Devin AI</span>
          </div>
        </div>

        {/* Work Note / RCA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <label className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-2 block">
            Work Notes — Root Cause Analysis (posted by Devin AI)
          </label>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3 text-xs text-gray-700 leading-relaxed">
            <div>
              <span className="font-bold text-gray-900">Root Cause:</span> Connection pool exhaustion in Rave EDC EU sync service caused by misconfigured <code className="bg-amber-100 px-1 rounded">max_pool_size</code> parameter reduced from 50 to 5 in deploy v2.14.3 (PR #4721).
            </div>
            <div>
              <span className="font-bold text-gray-900">Evidence:</span> Sumologic error spike at 14:30 UTC correlates with deploy at 14:28 UTC. Error: <code className="bg-amber-100 px-1 rounded">ConnectionPoolExhausted</code>. Peak: 891 errors/5min at 14:40 UTC.
            </div>
            <div>
              <span className="font-bold text-gray-900">Impact:</span> ~340 active clinical trials unable to sync data for 17 minutes.
            </div>
            <div>
              <span className="font-bold text-gray-900">Remediation:</span> Immediate rollback to v2.14.2 recommended. Hotfix PR #4721 submitted to correct pool size.
            </div>
            <div>
              <span className="font-bold text-gray-900">Investigation Time:</span> 4 minutes 32 seconds (autonomous).
            </div>
          </div>
        </motion.div>

        {/* Attachments */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <label className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-2 block">Attachments</label>
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2 border">
              <Video size={14} className="text-red-500" />
              <span className="text-gray-700 font-medium">devin-session-DEV-9a3f-recording.mp4</span>
              <span className="text-gray-400 ml-auto">12m 32s</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2 border">
              <FileText size={14} className="text-blue-500" />
              <span className="text-gray-700 font-medium">rca-INC0041892-full-report.pdf</span>
              <span className="text-gray-400 ml-auto">4 pages</span>
            </div>
          </div>
        </motion.div>

        {/* Auto-created change */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 flex items-start gap-3"
        >
          <Layers size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
          <div className="text-xs">
            <div className="font-bold text-blue-700">Change Request Auto-Created</div>
            <div className="text-blue-600 mt-0.5">
              CHG0012456 — Rollback Rave EDC EU sync to v2.14.2. Status: Awaiting Approval.
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MOCK: Devin Video Recording                                        */
/* ------------------------------------------------------------------ */

function DevinRecording() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 0.5));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-gray-800 bg-[#0d1117] shadow-2xl overflow-hidden"
    >
      {/* Video player chrome */}
      <div className="bg-[#161b22] px-4 py-2.5 flex items-center gap-3 border-b border-gray-800">
        <Video size={14} className="text-red-500" />
        <span className="text-xs text-gray-400">
          Devin Session Recording — INC0041892
        </span>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-[10px] text-red-400">12:32</span>
        </div>
      </div>

      {/* "Video" content - simulated terminal replay */}
      <div className="p-4 h-[340px] font-mono text-xs text-gray-300 space-y-1 overflow-hidden">
        <div className="text-green-400">$ kubectl get pods -n rave-edc-eu</div>
        <div className="text-gray-400">NAME                              READY   STATUS    RESTARTS</div>
        <div className="text-gray-400">rave-edc-sync-7b9f4c6d8-x2kl4   1/1     Running   0</div>
        <div className="text-gray-400">rave-edc-sync-7b9f4c6d8-m9p3j   1/1     Running   0</div>
        <div className="text-gray-400">rave-edc-sync-7b9f4c6d8-h5w8n   1/1     Running   3</div>
        <div className="text-gray-400">rave-edc-sync-7b9f4c6d8-q1r6t   1/1     Running   2</div>
        <div className="text-gray-400">rave-edc-sync-7b9f4c6d8-a4v7y   1/1     Running   1</div>
        <div className="text-gray-400">rave-edc-sync-7b9f4c6d8-c8d2f   1/1     Running   4</div>
        <div className="mt-2 text-green-400">$ kubectl logs rave-edc-sync-7b9f4c6d8-h5w8n --tail=5</div>
        <div className="text-red-400">ERROR 2025-01-15T14:35:12Z ConnectionPoolExhausted: max connections (5) reached</div>
        <div className="text-red-400">ERROR 2025-01-15T14:35:12Z Failed to acquire connection within 30000ms</div>
        <div className="text-red-400">ERROR 2025-01-15T14:35:13Z DataSyncService: sync operation timed out for trial CT-EU-0847</div>
        <div className="text-yellow-400">WARN  2025-01-15T14:35:13Z Circuit breaker OPEN for eu-west-1-primary</div>
        <div className="text-red-400">ERROR 2025-01-15T14:35:14Z ConnectionPoolExhausted: max connections (5) reached</div>
        <div className="mt-2 text-green-400">$ git log --oneline -3 origin/main</div>
        <div className="text-gray-400">a3f7b21 (HEAD) feat: optimize connection pool for EU region</div>
        <div className="text-gray-400">e8c4d15 fix: update retry logic for sync timeouts</div>
        <div className="text-gray-400">b2a9f03 chore: bump dependencies</div>
        <div className="mt-2 text-green-400">$ git diff e8c4d15..a3f7b21 -- config/pool.yml</div>
        <div className="text-red-400">- max_pool_size: 50</div>
        <div className="text-green-400">+ max_pool_size: 5</div>
        <div className="mt-2 text-yellow-500 font-semibold">⚠ Configuration error detected: pool size reduced by 10x</div>
      </div>

      {/* Video controls */}
      <div className="bg-[#161b22] px-4 py-3 border-t border-gray-800">
        <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
          <motion.div
            className="bg-red-500 h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[10px] text-gray-500">
          <div className="flex items-center gap-3">
            <PlayCircle size={16} className="text-white cursor-pointer" />
            <span>{Math.floor((progress / 100) * 12)}:{String(Math.floor(((progress / 100) * 32) % 60)).padStart(2, "0")} / 12:32</span>
          </div>
          <span>Devin AI Session Recording — Full Audit Trail</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MOCK: MS Teams Post                                                */
/* ------------------------------------------------------------------ */

function TeamsPost() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden"
    >
      {/* Teams chrome */}
      <div className="bg-[#292b4a] px-4 py-2.5 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex items-center gap-2 text-white/80 text-xs">
          <MessageSquare size={14} />
          <span className="font-semibold">Microsoft Teams</span>
        </div>
      </div>

      {/* Channel header */}
      <div className="bg-[#f5f5f5] border-b px-5 py-2.5 flex items-center gap-2 text-sm">
        <span className="font-bold text-gray-800"># incident-p1-alerts</span>
        <span className="text-gray-400 text-xs">| SRE Incident Channel</span>
      </div>

      {/* Message */}
      <div className="p-5">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-devin-purple to-medidata-accent flex items-center justify-center flex-shrink-0">
            <Bot size={18} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-sm font-bold text-gray-800">Devin AI</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-devin-purple/10 text-devin-purple">APP</span>
              <span className="text-xs text-gray-400">Today at 14:47 UTC</span>
            </div>

            {/* Adaptive Card */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="border border-gray-200 rounded-lg overflow-hidden max-w-lg"
            >
              <div className="bg-devin-purple px-4 py-2">
                <div className="text-white font-bold text-sm flex items-center gap-2">
                  <Search size={14} />
                  Incident Investigation Complete
                </div>
              </div>
              <div className="p-4 space-y-3 text-xs bg-white">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-gray-400 text-[10px] uppercase">Incident</div>
                    <div className="font-semibold text-gray-800">INC0041892</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px] uppercase">Priority</div>
                    <div className="font-semibold text-red-600">P1 — Critical</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px] uppercase">Investigation Time</div>
                    <div className="font-semibold text-gray-800">4m 32s</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px] uppercase">Confidence</div>
                    <div className="font-semibold text-green-600">High (97%)</div>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="text-gray-400 text-[10px] uppercase mb-1">Root Cause</div>
                  <div className="text-gray-800 leading-relaxed">
                    Connection pool exhaustion in Rave EDC EU sync service. Deploy v2.14.3 (PR #4721) misconfigured <code className="bg-gray-100 px-1 rounded">max_pool_size</code> from 50 → 5.
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="text-gray-400 text-[10px] uppercase mb-1">Recommended Action</div>
                  <div className="text-gray-800">
                    Immediate rollback to v2.14.2. Change request CHG0012456 auto-created.
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-devin-purple text-white text-[11px] font-semibold">
                    <PlayCircle size={12} /> Watch Recording
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-snow-green text-white text-[11px] font-semibold">
                    <ExternalLink size={12} /> Open in ServiceNow
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-200 text-gray-700 text-[11px] font-semibold">
                    <CheckCircle2 size={12} /> Approve Rollback
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Mentions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-3 flex items-center gap-2 text-xs text-gray-500"
            >
              <Users size={12} />
              <span>
                <span className="text-teams-purple font-semibold">@sre-oncall</span>
                {" "}<span className="text-teams-purple font-semibold">@platform-leads</span>
                {" "}<span className="text-teams-purple font-semibold">@incident-commander</span>
                {" "}were notified
              </span>
            </motion.div>

            {/* Reactions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="mt-3 flex items-center gap-2"
            >
              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-xs">👀 3</span>
              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-xs">👍 5</span>
              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-xs">🚀 2</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN DEMO SECTION                                                  */
/* ------------------------------------------------------------------ */

export default function LiveDemoSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const advanceStep = useCallback(() => {
    setActiveStep((s) => {
      if (s >= STEPS.length - 1) {
        setPlaying(false);
        return s;
      }
      return s + 1;
    });
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(advanceStep, STEPS[activeStep].duration);
    return () => clearTimeout(timer);
  }, [playing, activeStep, advanceStep]);

  const handlePlay = () => {
    if (!hasStarted) setHasStarted(true);
    setPlaying(true);
  };

  const handleReset = () => {
    setActiveStep(0);
    setPlaying(false);
    setHasStarted(false);
  };

  const renderPanel = () => {
    switch (STEPS[activeStep].id) {
      case "snow-incident":
        return <SNOWIncidentForm key="snow-1" />;
      case "devin-session":
        return <DevinSession key="devin" active={activeStep === 1} />;
      case "sumo-query":
        return <SumologicPanel key="sumo" />;
      case "snow-update":
        return <SNOWUpdated key="snow-2" />;
      case "devin-recording":
        return <DevinRecording key="rec" />;
      case "teams-post":
        return <TeamsPost key="teams" />;
      default:
        return null;
    }
  };

  return (
    <section id="demo" className="relative py-28 bg-medidata-navy overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-4">
            <Play size={14} className="text-medidata-accent" />
            <span className="text-sm font-medium text-white/80">
              Interactive Demo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Walk through a real-world P1 incident from trigger to resolution —
            every screen Devin touches, every action it takes.
          </p>
        </motion.div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8 flex-wrap">
          {STEPS.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => {
                setActiveStep(idx);
                if (!hasStarted) setHasStarted(true);
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                idx === activeStep
                  ? "bg-white/15 text-white border border-white/30"
                  : idx < activeStep
                  ? "bg-white/5 text-white/60 border border-white/10"
                  : "bg-transparent text-white/30 border border-white/5"
              }`}
            >
              <step.icon size={14} />
              <span className="hidden sm:inline">{step.label}</span>
              {idx < activeStep && (
                <CheckCircle2 size={12} className="text-medidata-teal" />
              )}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {!playing ? (
            <button
              onClick={handlePlay}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-medidata-accent text-white text-sm font-semibold hover:bg-medidata-blue transition-colors"
            >
              <Play size={16} />
              {hasStarted ? "Resume" : "Play Demo"}
            </button>
          ) : (
            <button
              onClick={() => setPlaying(false)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 text-white text-sm font-semibold hover:bg-white/25 transition-colors"
            >
              <Pause size={16} />
              Pause
            </button>
          )}
          <button
            onClick={advanceStep}
            disabled={activeStep >= STEPS.length - 1}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-white/70 text-sm font-medium hover:bg-white/15 transition-colors disabled:opacity-30"
          >
            <SkipForward size={14} />
            Next
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-white/70 text-sm font-medium hover:bg-white/15 transition-colors"
          >
            <RotateCcw size={14} />
            Reset
          </button>
        </div>

        {/* Demo panel */}
        <div className="max-w-4xl mx-auto">
          {!hasStarted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-white/15 transition-colors" onClick={handlePlay}>
                <Play size={32} className="text-white ml-1" />
              </div>
              <p className="text-white/40 text-sm">
                Click Play to begin the end-to-end walkthrough
              </p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                {/* Step title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg ${STEPS[activeStep].color} flex items-center justify-center`}>
                    {(() => {
                      const Icon = STEPS[activeStep].icon;
                      return <Icon size={16} className="text-white" />;
                    })()}
                  </div>
                  <div>
                    <div className="text-white font-bold">
                      Step {activeStep + 1}: {STEPS[activeStep].label}
                    </div>
                    <div className="text-white/40 text-xs flex items-center gap-1">
                      <ChevronRight size={10} />
                      {activeStep < STEPS.length - 1
                        ? `Next: ${STEPS[activeStep + 1].label}`
                        : "Demo Complete"}
                    </div>
                  </div>
                </div>
                {renderPanel()}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
