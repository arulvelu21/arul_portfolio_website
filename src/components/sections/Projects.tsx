"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Store,
  MapPin,
  ShieldCheck,
  Lock,
  Activity,
  Cloud,
  FileText,
  Terminal,
  Mail,
  Zap,
  ArrowRight,
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
          ? "md:col-span-2 lg:col-span-1 glass-card border border-white/5 hover:border-white/10"
          : "glass-card border border-white/5 hover:border-white/10"
      }`}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

      {isFeatured && (
        <div className="absolute -top-3 right-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/20 flex items-center gap-1.5">
          <Zap className="w-3 h-3" />
          Flagship System
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
          <h3
            className={`text-xl font-bold ${
              isFeatured ? "text-blue-50" : "text-slate-50"
            } mb-3`}
          >
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
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

const featuredSystems = [
  {
    icon: <ShieldAlert className="w-7 h-7 text-blue-400" />,
    title: "Fraud Prevention & Transaction Monitoring Automation",
    description:
      "Designed an automation system to monitor and validate retail financial transactions, identifying anomalies and preventing fraudulent activities → improved transaction integrity and reduced operational risk.",
    tags: ["Event-Driven", "Anomaly Detection", "Real-Time Processing"],
    impact: "Reduced fraud risk · Improved transaction accuracy",
    archHint: "Transaction → Validation → Anomaly Detection → Alert / Action",
    isFeatured: true,
  },
  {
    icon: <Store className="w-7 h-7 text-emerald-400" />,
    title: "Enterprise Retail Reconciliation Automation",
    description:
      "Replaced manual reconciliation workflows across 3,000+ retail stores with an event-driven automation system → enabled real-time processing and eliminated operational bottlenecks.",
    tags: ["Resolve.io", "Process Automation", "Event-Driven Systems"],
    impact: "Reduced effort by 80% across 3,000+ stores",
    archHint: "Event Trigger → Workflow Engine → Processing → Reporting",
    isFeatured: true,
  },
];

const coreSystems = [
  {
    icon: <MapPin className="w-6 h-6 text-violet-400" />,
    title: "Automated Driver License Provisioning System",
    description:
      "Automated provisioning and assignment of navigation licenses for delivery drivers → ensured timely access to mapping tools and improved delivery readiness.",
    tags: ["Trimble Maps", "Provisioning", "API Integration"],
    impact: "Faster onboarding · Eliminated provisioning delays",
    archHint: "Driver Assignment → License Provisioning → Integration → Access",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Identity & Access Automation System",
    description:
      "Built an automated system to manage role-based access and enforce compliance policies → eliminated manual intervention and ensured consistent access governance.",
    tags: ["IAM", "Compliance", "Role-Based Access"],
    impact: "100% compliance · Zero manual effort",
    archHint: "Access Request → Validation → Role Assignment → Audit",
  },
  {
    icon: <Lock className="w-6 h-6 text-amber-400" />,
    title: "Automated Certificate Lifecycle Management",
    description:
      "Automated SSL/TLS certificate renewal workflows across infrastructure → eliminated delays and improved security compliance.",
    tags: ["Python", "PowerShell", "Infrastructure"],
    impact: "Reduced renewal time from days to minutes",
    archHint: "Expiry Detection → Renewal → Deployment → Validation",
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-400" />,
    title: "Self-Healing Server Monitoring System",
    description:
      "Developed monitoring-driven automation to detect system issues and trigger remediation workflows → improved reliability and reduced downtime.",
    tags: ["StackStorm", "Python", "Splunk", "New Relic"],
    impact: "90% downtime reduction · Improved system performance",
    archHint: "Monitoring → Detection → Automation → Resolution",
  },
  {
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    title: "Event-Driven Multi-Cloud Provisioning Platform",
    description:
      "Built an event-driven system to automate infrastructure provisioning across cloud environments → reduced manual workload and improved deployment efficiency.",
    tags: ["Terraform", "Ansible", "Kafka", "Docker", "Kubernetes"],
    impact: "Reduced manual workload by up to 95%",
    archHint: "Event → Orchestration → Provisioning → Deployment",
  },
];

const additionalSystems = [
  {
    icon: <FileText className="w-5 h-5 text-sky-400" />,
    title: "On-Demand Log Generation & Ticket Automation",
    description:
      "Automated log generation through Zendesk ticket workflows → improved issue resolution speed and eliminated manual effort.",
    tags: ["Zendesk", "Automation"],
    impact: "Reduced manual effort by 95% · Faster resolution",
    archHint: "Ticket → Trigger → Log Generation → Delivery",
  },
  {
    icon: <Terminal className="w-5 h-5 text-lime-400" />,
    title: "Automated Linux Patching System",
    description:
      "Automated OS patching using Ansible → improved security compliance and minimized downtime.",
    tags: ["Ansible", "Linux", "Security"],
    impact: "Reduced patch time by 85% · Improved compliance",
    archHint: "Patch Trigger → Ansible → Deployment → Validation",
  },
  {
    icon: <Mail className="w-5 h-5 text-orange-400" />,
    title: "Enterprise Mailbox & Distribution List Automation",
    description:
      "Automated provisioning and management of distribution lists and shared mailboxes → reduced manual workload and ensured access compliance.",
    tags: ["Exchange", "PowerShell", "Compliance"],
    impact: "Reduced IT workload by 70% · Improved compliance",
    archHint: "Request → Validation → Provisioning → Access Control",
  },
];

/* ─── Main Component ───────────────────────────────────── */

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Subtle background gradients (hidden on mobile for performance) */}
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

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
              Enterprise Automation Systems
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Automation systems designed to eliminate manual operations, improve
              system reliability, and scale enterprise workflows across IT and
              business environments.
            </p>
          </motion.div>
        </div>

        {/* Featured Systems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featuredSystems.map((system, index) => (
            <SystemCard
              key={`featured-${index}`}
              icon={system.icon}
              title={system.title}
              description={system.description}
              tags={system.tags}
              impact={system.impact}
              archHint={system.archHint}
              isFeatured={system.isFeatured}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Core Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreSystems.map((system, index) => {
            const isLastOdd =
              index === coreSystems.length - 1 && coreSystems.length % 3 !== 0;
            return (
              <SystemCard
                key={`core-${index}`}
                icon={system.icon}
                title={system.title}
                description={system.description}
                tags={system.tags}
                impact={system.impact}
                archHint={system.archHint}
                delay={index * 0.1}
                isLastOdd={isLastOdd}
              />
            );
          })}
        </div>

        {/* Additional Systems Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-slate-700"></span>
            <h3 className="text-lg font-semibold text-slate-400 uppercase tracking-wider">
              Additional Systems
            </h3>
            <span className="flex-1 h-px bg-slate-800"></span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {additionalSystems.map((system, index) => (
            <motion.div
              key={`additional-${index}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                y: -3,
                boxShadow: "0 8px 30px -10px rgba(0,0,0,0.4)",
              }}
              className="relative flex flex-col p-5 rounded-xl glass-card border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-slate-800/60">{system.icon}</div>
                <h4 className="text-base font-bold text-slate-100">
                  {system.title}
                </h4>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-grow">
                {system.description}
              </p>

              <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {system.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/50 text-[10px] font-medium text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                  <ArrowRight className="w-3 h-3 text-blue-400 shrink-0" />
                  {system.archHint}
                </div>
                <div className="font-semibold text-emerald-400 text-xs flex items-center gap-1">
                  <span className="text-emerald-500">⚡</span> {system.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
