"use client";

import { motion } from "framer-motion";
import {
  Users,
  Rocket,
  BarChart3,
  Target,
} from "lucide-react";

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
