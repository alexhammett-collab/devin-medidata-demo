"use client";

import { motion } from "framer-motion";
import {
  TrendingDown,
  Clock,
  Shield,
  DollarSign,
  Users,
  Rocket,
  BarChart3,
  Target,
} from "lucide-react";

const metrics = [
  {
    icon: Clock,
    value: "85%",
    label: "Reduction in MTTR",
    description: "From hours to minutes — Devin investigates instantly, 24/7.",
    color: "text-medidata-accent",
    bgColor: "bg-medidata-accent/10",
  },
  {
    icon: TrendingDown,
    value: "90%",
    label: "Less L3 Toil",
    description: "Senior engineers freed from repetitive triage and documentation.",
    color: "text-devin-purple",
    bgColor: "bg-devin-purple/10",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Audit Coverage",
    description: "Every investigation fully documented with video evidence.",
    color: "text-snow-green",
    bgColor: "bg-snow-green/10",
  },
  {
    icon: DollarSign,
    value: "$2.4M",
    label: "Est. Annual Savings",
    description: "Reduced downtime costs and reclaimed engineering hours.",
    color: "text-sumo-orange",
    bgColor: "bg-sumo-orange/10",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Instant Response, Any Time",
    description:
      "No waiting for on-call. Devin begins investigating within seconds of the ServiceNow trigger — nights, weekends, holidays.",
  },
  {
    icon: Users,
    title: "Engineers Focus on Innovation",
    description:
      "Your senior SREs and platform engineers spend time on proactive improvements, not repetitive incident triage.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Conclusions",
    description:
      "Every root-cause analysis is backed by Sumologic data — no guesswork, no assumptions, just evidence.",
  },
  {
    icon: Target,
    title: "Consistent Quality",
    description:
      "Devin follows the same thorough investigation methodology every time — no fatigue, no shortcuts, no human error.",
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="relative py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-medidata-teal/10 px-4 py-1.5 mb-4">
            <BarChart3 size={14} className="text-medidata-teal" />
            <span className="text-sm font-medium text-medidata-teal">
              Business Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-medidata-navy tracking-tight">
            Measurable Impact
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Autonomous incident resolution delivers immediate, quantifiable value
            to Medidata operations.
          </p>
        </motion.div>

        {/* Metrics row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-2xl bg-white border border-gray-100 p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${m.bgColor} flex items-center justify-center mx-auto mb-4`}
              >
                <m.icon size={24} className={m.color} />
              </div>
              <div className={`text-4xl font-extrabold ${m.color} mb-1`}>
                {m.value}
              </div>
              <div className="text-sm font-semibold text-medidata-navy mb-2">
                {m.label}
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex gap-5 items-start rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-medidata-blue to-medidata-accent flex items-center justify-center flex-shrink-0">
                <b.icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-medidata-navy mb-1">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
