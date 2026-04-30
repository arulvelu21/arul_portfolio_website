"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Store,
  ShieldCheck,
  Bot,
  Lock,
  Activity,
  Cloud,
  Zap,
  ArrowRight,
  Building2
} from "lucide-react";

/* ─── Components ────────────────────────────────────────── */

const TagChip = ({ text }: { text: string }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
    {text}
  </span>
);

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  description: string;
  tags: string[];
  impact: string;
  archHint: string;
  isFeatured?: boolean;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  icon,
  title,
  company,
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
          Flagship Project
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
          <h3 className={`text-xl font-bold ${isFeatured ? "text-blue-50" : "text-slate-50"} mb-1.5`}>
            {title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            {company}
          </div>
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
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
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

const projects = [
  {
    icon: <Store className="w-7 h-7 text-blue-400" />,
    title: "Enterprise Retail Reconciliation Automation",
    company: "Tesco",
    description:
      "Replaced manual reconciliation workflows across 3,000+ retail stores with an event-driven automation system → enabled real-time processing and eliminated operational bottlenecks.",
    tags: ["Resolve.io", "Process Automation", "Event-Driven Systems"],
    archHint: "Event Trigger → Workflow Engine → Processing → Reporting",
    impact: "⚡ Reduced effort by 80% across 3,000+ stores",
    isFeatured: true,
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Identity & Access Automation System",
    company: "Tesco",
    description:
      "Built an automated identity and access management system to enforce role-based access policies → ensured compliance and eliminated manual intervention.",
    tags: ["Resolve.io", "IAM", "Compliance Automation"],
    archHint: "Access Request → Validation → Role Assignment → Audit",
    impact: "⚡ 100% compliance · Zero manual intervention",
  },
  {
    icon: <Bot className="w-6 h-6 text-violet-400" />,
    title: "AI-Powered ITSM Automation Platform",
    company: "Hexaware Technologies",
    description:
      "Developed an AI-driven chatbot platform integrated with ITSM tools to automate support workflows and enable self-healing systems → reduced operational workload and improved response time.",
    tags: ["Node.js", "Python", "Dialogflow", "LUIS", "MS Teams"],
    archHint: "User Input → AI Processing → Workflow Execution → Resolution",
    impact: "⚡ 60% fewer helpdesk tickets · 40% faster response",
  },
  {
    icon: <Lock className="w-6 h-6 text-amber-400" />,
    title: "Automated Certificate Lifecycle Management",
    company: "Tesco",
    description:
      "Replaced manual SSL/TLS certificate renewal processes with automated workflows → improved security and eliminated operational delays.",
    tags: ["Python", "PowerShell", "Infrastructure Automation"],
    archHint: "Expiry Detection → Renewal Trigger → Deployment → Validation",
    impact: "⚡ Reduced renewal time from days to minutes",
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-400" />,
    title: "Self-Healing Server Monitoring System",
    company: "Tesco",
    description:
      "Built monitoring-driven automation to detect system issues and trigger automated remediation → improved system stability and reduced downtime.",
    tags: ["StackStorm", "Python", "Splunk", "New Relic"],
    archHint: "Monitoring → Detection → Automation → Resolution",
    impact: "⚡ 90% downtime reduction · 40% performance improvement",
  },
  {
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    title: "Event-Driven Multi-Cloud Provisioning Platform",
    company: "Tesco / Cognizant",
    description:
      "Automated infrastructure provisioning across multi-cloud environments using event-driven orchestration → reduced manual workload and improved deployment efficiency.",
    tags: ["Terraform", "Ansible", "Kafka", "Docker", "Kubernetes"],
    archHint: "Event Trigger → Orchestration → Provisioning → Deployment",
    impact: "⚡ Reduced manual IT workload by up to 95%",
  },
];

/* ─── Main Component ───────────────────────────────────── */

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

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
              Production Systems
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-50 mb-6">
              Enterprise Automation Projects
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Enterprise-scale automation systems designed to eliminate manual
              operations, improve system reliability, and drive measurable
              business impact.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              icon={project.icon}
              title={project.title}
              company={project.company}
              description={project.description}
              tags={project.tags}
              impact={project.impact}
              archHint={project.archHint}
              isFeatured={project.isFeatured}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
