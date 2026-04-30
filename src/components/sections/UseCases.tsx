"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  MessageSquare,
  Target,
  AlertTriangle,
  Activity,
  Server,
  Zap,
  ArrowRight
} from "lucide-react";

/* ─── Components ────────────────────────────────────────── */

const TagChip = ({ text }: { text: string }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
    {text}
  </span>
);

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  impact: string;
  archHint?: string;
  isFeatured?: boolean;
  delay?: number;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  icon,
  title,
  description,
  tags,
  impact,
  archHint,
  isFeatured = false,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)" }}
      className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 group ${
        isFeatured
          ? "md:col-span-2 lg:col-span-2 bg-slate-800/60 border border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]"
          : "glass-card border border-white/5 hover:border-white/10"
      }`}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

      {isFeatured && (
        <div className="absolute -top-3 right-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/20 flex items-center gap-1.5">
          <Zap className="w-3 h-3" />
          Featured Project
        </div>
      )}

      <div className="flex items-start gap-4 mb-4">
        <div
          className={`p-3 rounded-xl shrink-0 ${
            isFeatured ? "bg-blue-500/20" : "bg-slate-800/60"
          }`}
        >
          {icon}
        </div>
        <div>
          <h3 className={`text-xl font-bold ${isFeatured ? "text-blue-50" : "text-slate-50"} mb-2`}>
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, i) => (
              <TagChip key={i} text={tag} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
        {description}
      </div>

      <div className="mt-auto pt-5 border-t border-white/10 flex flex-col gap-3">
        {archHint && (
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <ArrowRight className="w-3 h-3 text-blue-500" />
            {archHint}
          </div>
        )}
        <div className="font-semibold text-emerald-400 text-sm">
          {impact}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Data ─────────────────────────────────────────────── */

const useCases = [
  {
    icon: <FileText className="w-7 h-7 text-blue-400" />,
    title: "AI-Driven Invoice Automation System",
    description:
      "Automated invoice processing by combining OCR and LLM-based validation to extract, classify, and integrate data into ERP systems → eliminated manual data entry and improved accuracy.",
    tags: ["N8N", "OCR", "Azure OpenAI", "API Integration"],
    impact: "⚡ 85% faster processing · 98% accuracy",
    archHint: "OCR → LLM → Validation → ERP API",
    isFeatured: true,
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-violet-400" />,
    title: "AI-Powered Customer Feedback Analytics",
    description:
      "Built an AI pipeline to analyze large-scale customer feedback, classify sentiment, and identify recurring product issues → enabled data-driven decision-making.",
    tags: ["LLM", "NLP", "Sentiment Analysis"],
    impact: "⚡ 90% reduction in manual analysis",
  },
  {
    icon: <Target className="w-6 h-6 text-emerald-400" />,
    title: "Intelligent Lead Qualification System",
    description:
      "Developed an AI-assisted workflow to classify and prioritize leads using automation logic and NLP → improved response time and conversion efficiency.",
    tags: ["AI Classification", "Workflow Automation"],
    impact: "⚡ Faster response & improved conversions",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
    title: "AI-Driven IT Incident Automation",
    description:
      "Designed a system to classify ITSM tickets using LLMs and trigger automated remediation workflows → reduced manual triage effort and improved incident response.",
    tags: ["LLM", "ITSM", "Auto-Remediation"],
    impact: "⚡ Reduced triage time significantly",
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-400" />,
    title: "AI-Based Log Intelligence System",
    description:
      "Built an AI-assisted log analysis pipeline to detect anomalies and trigger proactive alerts → improved system reliability and reduced downtime.",
    tags: ["AI", "Log Analysis", "Monitoring"],
    impact: "⚡ Reduced downtime & improved reliability",
  },
  {
    icon: <Server className="w-6 h-6 text-cyan-400" />,
    title: "Autonomous Infrastructure Automation",
    description:
      "Developed monitoring-driven automation systems that detect and resolve infrastructure issues automatically → enabled self-healing IT operations.",
    tags: ["StackStorm", "Python", "Monitoring"],
    impact: "⚡ 90% reduction in IT downtime",
  },
];

/* ─── Main Component ───────────────────────────────────── */

export const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 mb-6 uppercase">
              Applied AI in Production
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-50 mb-6">
              AI & LLM Use Cases
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Real-world AI systems I've built to automate operations, reduce
              manual effort, and improve decision-making at scale.
            </p>
          </motion.div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              tags={useCase.tags}
              impact={useCase.impact}
              archHint={useCase.archHint}
              isFeatured={useCase.isFeatured}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
