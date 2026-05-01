"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  FileSearch,
  MessageSquare,
  Network,
  BarChart,
  Target,
  AlertTriangle,
  ArrowRight,
  Zap
} from "lucide-react";

/* ─── Components ────────────────────────────────────────── */

const TagChip = ({ text }: { text: string }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 whitespace-nowrap">
    {text}
  </span>
);

interface SystemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  impact: string;
  archHint: string;
  isFeatured?: boolean;
  delay?: number;
  isLastOdd?: boolean;
}

const SystemCard: React.FC<SystemCardProps> = ({
  icon,
  title,
  description,
  tags,
  impact,
  archHint,
  isFeatured = false,
  delay = 0,
  isLastOdd = false,
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
          ? "md:col-span-2 bg-slate-800/60 border border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]"
          : isLastOdd
          ? "md:col-span-2 glass-card border border-white/5 hover:border-white/10"
          : "glass-card border border-white/5 hover:border-white/10"
      }`}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

      {isFeatured && (
        <div className="absolute -top-3 right-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/20 flex items-center gap-1.5">
          <Zap className="w-3 h-3" />
          Featured System
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
          <h3 className={`text-xl font-bold ${isFeatured ? "text-blue-50" : "text-slate-50"} mb-3`}>
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

      <div className="mt-auto pt-5 border-t border-white/10 flex flex-col gap-4">
        {/* Architecture Hint Line */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
          <ArrowRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span className="truncate">{archHint}</span>
        </div>
        
        {/* Impact Line */}
        <div className="font-semibold text-emerald-400 text-sm flex items-center gap-1.5">
          <span className="text-emerald-500">⚡</span> {impact}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Data ─────────────────────────────────────────────── */

const aiSystems = [
  {
    icon: <Database className="w-7 h-7 text-blue-400" />,
    title: "Enterprise Knowledge Retrieval System (RAG)",
    description: "Built a Retrieval-Augmented Generation (RAG) system to enable intelligent querying of enterprise documentation → reduced manual search effort and improved knowledge accessibility.",
    tags: ["LLM", "Embeddings", "Vector DB", "LangChain", "OpenAI"],
    impact: "Faster knowledge retrieval · Reduced manual lookup effort",
    archHint: "Documents → Embeddings → Vector DB → LLM Retrieval → Response",
    isFeatured: true,
  },
  {
    icon: <FileSearch className="w-7 h-7 text-violet-400" />,
    title: "AI-Driven Invoice Classification System",
    description: "Automated invoice classification using OCR and LLMs to extract and categorize financial data → reduced manual processing effort and improved accuracy.",
    tags: ["OCR", "Azure OpenAI", "APIs"],
    impact: "Reduced manual effort · Improved accuracy",
    archHint: "OCR → LLM → Classification → Output",
    isFeatured: true,
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
    title: "AI-Powered Conversational Workflow Assistant",
    description: "Built a conversational AI assistant to trigger workflows and retrieve system data → reduced manual interactions and improved operational efficiency.",
    tags: ["LLM", "Tool Calling", "Agents"],
    impact: "Reduced manual interaction · Faster task execution",
    archHint: "User Query → LLM → Tool Calling → Workflow Execution",
  },
  {
    icon: <Network className="w-6 h-6 text-amber-400" />,
    title: "Enterprise Knowledge Automation with MCP",
    description: "Developed an MCP-based system integrating Jira and Confluence to enable intelligent querying and workflow automation → improved knowledge access and reduced manual effort.",
    tags: ["MCP", "Jira API", "Confluence"],
    impact: "Faster information retrieval · Reduced manual effort",
    archHint: "Query → MCP → Jira/Confluence → Response",
  },
  {
    icon: <BarChart className="w-6 h-6 text-cyan-400" />,
    title: "AI-Assisted Automation Reporting Dashboard",
    description: "Built a reporting dashboard using AI copilots to generate insights from automation data → enabled faster decision-making and reduced manual analysis.",
    tags: ["AI Copilot", "Data Analytics", "Dashboards"],
    impact: "Faster insights · Reduced reporting effort",
    archHint: "Data → AI → Insights → Dashboard",
  },
  {
    icon: <Target className="w-6 h-6 text-rose-400" />,
    title: "Intelligent Lead Qualification System",
    description: "Developed an AI-driven system to classify and prioritize leads → improved response time and conversion efficiency.",
    tags: ["AI Classification", "Lead Routing"],
    impact: "Improved response time · Increased conversions",
    archHint: "Input → AI Classification → Routing",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-orange-400" />,
    title: "AI-Based Incident Triage & Routing System",
    description: "Designed an AI-powered system to classify incidents and route them automatically → reduced manual triage effort and improved resolution speed.",
    tags: ["LLM", "ITSM", "Triage Classification"],
    impact: "Reduced triage time · Faster resolution",
    archHint: "Ticket → LLM → Classification → Routing",
  }
];

/* ─── Main Component ───────────────────────────────────── */

export const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 relative overflow-hidden">
      {/* Subtle background gradients (hidden on mobile for performance) */}
      <div className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

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
              AI & Intelligent Systems
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-4">
              Production-grade AI systems designed to automate operations, reduce manual effort, and enable intelligent decision-making at scale.
            </p>
            <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
              <span className="w-8 h-px bg-slate-700"></span>
              Built using LLMs, RAG, APIs, and event-driven architectures
            </div>
          </motion.div>
        </div>

        {/* AI Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiSystems.map((system, index) => {
            // Calculate if this is the last normal card and an odd number, to expand it.
            // We have 2 featured cards (index 0 and 1).
            // Normal cards are index 2 through 6 (5 cards).
            const isLastOdd = index === aiSystems.length - 1 && (aiSystems.length - 2) % 2 !== 0;

            return (
              <SystemCard
                key={index}
                icon={system.icon}
                title={system.title}
                description={system.description}
                tags={system.tags}
                impact={system.impact}
                archHint={system.archHint}
                isFeatured={system.isFeatured}
                delay={index * 0.1}
                isLastOdd={isLastOdd}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
