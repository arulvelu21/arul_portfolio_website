"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  BrainCircuit,
  Code2,
  Database,
  Cloud,
  Activity,
  Users,
  Zap
} from "lucide-react";

/* ─── Components ────────────────────────────────────────── */

const TagChip = ({ text, colorClass }: { text: string; colorClass: string }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 text-xs font-medium ${colorClass} transition-colors hover:bg-slate-700/80`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
    {text}
  </span>
);

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
  colorTheme: string;
  isHighlighted?: boolean;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description,
  tools,
  colorTheme,
  isHighlighted = false,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)" }}
      className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 ${isHighlighted
        ? "bg-slate-800/60 border border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]"
        : "glass-card border border-white/5 hover:border-white/10"
        }`}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

      {isHighlighted && (
        <div className="absolute -top-3 right-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/20">
          Core Expertise
        </div>
      )}

      <div className="flex items-center gap-4 mb-4">
        <div
          className={`p-3 rounded-xl shrink-0 ${isHighlighted ? "bg-blue-500/20" : "bg-slate-800/60"
            }`}
        >
          {icon}
        </div>
        <h3 className={`text-lg font-bold ${isHighlighted ? "text-blue-50" : "text-slate-50"}`}>
          {title}
        </h3>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tools.map((tool, i) => (
          <TagChip key={i} text={tool} colorClass={colorTheme} />
        ))}
      </div>
    </motion.div>
  );
};

const StatsPanel = () => {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Technologies" },
    { value: "100+", label: "Automation Projects" },
    { value: "3,000+", label: "Systems Automated" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 lg:mt-0 lg:ml-auto">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
          className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:bg-slate-800/60 transition-colors"
        >
          <div className="text-2xl font-extrabold hero-gradient-text mb-1">
            {stat.value}
          </div>
          <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

/* ─── Data ─────────────────────────────────────────────── */

const skillCategories = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-blue-400" />,
    title: "AI & Intelligent Automation",
    description:
      "Building LLM-powered systems for classification, summarization, anomaly detection, and intelligent decision automation",
    tools: [
      "Azure OpenAI",
      "LangChain",
      "MCP",
      "OpenAI API",
      "Hugging Face",
      "Vector DBs",
      "OCR (Tesseract)",
    ],
    colorTheme: "text-blue-300",
    isHighlighted: true,
  },
  {
    icon: <Workflow className="w-6 h-6 text-violet-400" />,
    title: "Automation & Workflow Engineering",
    description:
      "Designing end-to-end automation workflows that replace manual operations and improve efficiency across enterprise systems",
    tools: [
      "Resolve.io",
      "N8N",
      "Make",
      "Zapier",
      "UiPath",
      "Automation Anywhere",
      "StackStorm",
      "Power Automate",
    ],
    colorTheme: "text-violet-300",
    isHighlighted: true,
  },
  {
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    title: "Programming & Scripting",
    description:
      "Developing automation logic, API integrations, and custom scripts for scalable system operations",
    tools: ["Python", "PowerShell", "Groovy", "Bash", "REST APIs", "Webhooks"],
    colorTheme: "text-emerald-300",
  },
  {
    icon: <Database className="w-6 h-6 text-amber-400" />,
    title: "Data & Messaging Systems",
    description:
      "Enabling real-time data processing and event-driven automation using streaming and database technologies",
    tools: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Apache Kafka"],
    colorTheme: "text-amber-300",
  },
  {
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    title: "Cloud & Infrastructure Automation",
    description:
      "Automating infrastructure provisioning, deployments, and orchestration across multi-cloud environments",
    tools: [
      "AWS",
      "Azure",
      "GCP",
      "Terraform",
      "Ansible",
      "Docker",
      "Kubernetes",
      "Jenkins",
    ],
    colorTheme: "text-cyan-300",
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-400" />,
    title: "ITSM & Monitoring",
    description:
      "Automating incident response, monitoring, and operational workflows for high system reliability",
    tools: ["Jira", "Zendesk", "Splunk", "New Relic", "Confluence", "Miro"],
    colorTheme: "text-rose-300",
  },
  {
    icon: <Users className="w-6 h-6 text-teal-400" />,
    title: "Leadership & Delivery",
    description:
      "Leading automation initiatives, managing stakeholders, and delivering scalable engineering solutions",
    tools: [
      "Agile/Scrum",
      "Sprint Planning",
      "KPI Tracking",
      "Stakeholder Management",
      "Team Leadership",
    ],
    colorTheme: "text-teal-300",
  },
];

/* ─── Main Component ───────────────────────────────────── */

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-bold tracking-widest text-slate-400 mb-6 uppercase">
                My Toolkit
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-50 mb-4">
                Core Capabilities & Technologies
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Technologies I use to design AI-powered, event-driven automation
                systems that eliminate manual work and scale enterprise
                operations.
              </p>
            </motion.div>
          </div>

          <StatsPanel />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              tools={category.tools}
              colorTheme={category.colorTheme}
              isHighlighted={category.isHighlighted}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Impact Statement Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 relative p-[1px] rounded-2xl overflow-hidden group"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-slate-900 px-8 py-10 rounded-2xl text-center md:px-16 flex flex-col md:flex-row items-center gap-6 justify-center">
            <div className="p-4 bg-blue-500/10 rounded-full shrink-0">
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed max-w-4xl text-left">
              "I combine <span className="text-blue-400">AI</span>, <span className="text-violet-400">automation</span>, and cloud technologies to build self-operating systems that reduce manual work by <span className="text-emerald-400 font-bold">up to 95%</span>, improve reliability, and drive measurable business impact."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
