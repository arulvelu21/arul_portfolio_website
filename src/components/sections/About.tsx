"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { BrainCircuit, Workflow, Bot, Server, Award, GraduationCap, Lightbulb } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */

const capabilities = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-blue-400" />,
    title: "AI & Intelligent Automation",
    description:
      "Designing LLM-powered systems for classification, summarization, and decision automation → replacing manual workflows with intelligent pipelines.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-violet-400" />,
    title: "Event-Driven Automation",
    description:
      "Building real-time automation using Kafka and StackStorm → enabling instant system responses across enterprise platforms.",
  },
  {
    icon: <Bot className="w-6 h-6 text-emerald-400" />,
    title: "AI Chatbot Systems",
    description:
      "Developing AI-driven chatbots and self-healing systems → reducing IT workload and improving user experience.",
  },
  {
    icon: <Server className="w-6 h-6 text-amber-400" />,
    title: "Cloud & Infrastructure Automation",
    description:
      "Automating infrastructure with Terraform, Ansible, Docker, Kubernetes → enabling scalable and zero-touch deployments.",
  },
];

const timeline = [
  {
    role: "Workflow Automation Engineer",
    company: "Tesco",
    period: "2020 – Present",
    highlights: [
      "Built enterprise-scale automation systems across IT and business workflows",
      "Designed AI-driven pipelines using Azure OpenAI for classification and decision automation",
      "Implemented real-time event processing using Apache Kafka",
    ],
  },
  {
    role: "Chatbot & Automation Developer",
    company: "Hexaware Technologies",
    period: "2017 – 2020",
    highlights: [
      "Developed AI-powered chatbots using Python, Node.js, Dialogflow, LUIS",
      "Built self-healing IT automation systems",
      "Reduced helpdesk workload by 60%",
    ],
  },
  {
    role: "Automation Engineer",
    company: "Cognizant (CTS)",
    period: "2015 – 2017",
    highlights: [
      "Developed automation scripts and workflows for IT operations",
      "Built event-driven automation using StackStorm",
      "Reduced downtime and manual monitoring effort",
    ],
  },
];

const achievements = [
  "Automated reconciliation across 3,000+ stores → reduced effort by 80%",
  "Reduced IT downtime by 90% through automated monitoring",
  "Eliminated certificate renewal delays → reduced from days to minutes",
  "Improved server performance by 40% via automated log management",
  "Reduced manual IT workload by up to 95% across multiple initiatives",
];

const certifications = [
  "Azure AI Engineer Associate",
  "Kubernetes Administration",
  "PowerShell Automation",
];

const awards = [
  "Tesco – Outstanding Automation",
  "Hexaware – AI Innovation",
  "Cognizant – Outstanding Performance",
];

/* ─── Component ────────────────────────────────────────── */

export const About = () => {
  return (
    <section id="about" className="pt-28 pb-24 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1 — Introduction + Capability Cards
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Text */}
          <div>
            <SectionHeading
              title="Automation & AI Engineer"
              subtitle="10+ years building scalable, event-driven automation systems across enterprise environments."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-slate-400 text-base leading-relaxed"
            >
              <p>
                I design and build intelligent automation systems that combine AI, APIs, and event-driven architectures to eliminate manual operations at scale.
              </p>
              <p>
                My work focuses on transforming enterprise workflows into self-operating systems—reducing human effort, improving reliability, and enabling faster decision-making.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="mt-8"
            >
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                Education
              </h4>
              <ul className="space-y-1 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  M.S. Software Systems – BITS Pilani
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  B.E. Electrical &amp; Electronics
                </li>
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="mt-6"
            >
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-xs font-medium text-blue-300"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="mt-6"
            >
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-amber-400" />
                Awards
              </h4>
              <div className="flex flex-wrap gap-2">
                {awards.map((award, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-amber-600/10 border border-amber-500/20 text-xs font-medium text-amber-300"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Capability Cards */}
          <div className="grid gap-5">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 8px 30px rgba(59, 130, 246, 0.08)",
                }}
                className="capability-card p-5 rounded-2xl flex gap-4 cursor-default"
              >
                <div className="p-3 bg-slate-800/60 rounded-xl h-fit shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-50 mb-1">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 2 — Career Timeline
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mt-28">
          <SectionHeading
            title="Career Journey"
            subtitle="Experience building enterprise automation and AI systems."
          />

          <div className="relative mt-12 ml-4 md:ml-10">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-500 ring-4 ring-slate-900" />

                  <div className="glass-card p-6 rounded-2xl hover:border-blue-500/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-50">
                          {item.role}
                        </h3>
                        <span className="text-blue-400 font-medium text-sm">
                          {item.company}
                        </span>
                      </div>
                      <span className="text-sm text-slate-500 font-mono mt-1 md:mt-0">
                        {item.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-slate-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3 — Key Achievements
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-28"
        >
          <SectionHeading
            title="Key Achievements"
            subtitle="Measurable impact from automation and AI systems."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="achievement-card p-5 rounded-xl flex items-start gap-3 cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600/15 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4 — How I Design Systems
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-violet-600/15 rounded-xl">
              <Lightbulb className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
              How I Design Systems
            </h2>
          </div>

          <div className="system-design-card p-8 rounded-2xl space-y-5 text-slate-400 leading-relaxed">
            <p>
              I approach automation as a <span className="text-slate-200 font-medium">system design problem</span>—not just scripting tasks.
            </p>
            <p>
              My goal is to build intelligent systems that can <span className="text-blue-400 font-medium">observe</span>, <span className="text-violet-400 font-medium">decide</span>, and <span className="text-emerald-400 font-medium">act</span>—minimizing human intervention and enabling self-operating workflows.
            </p>
            <p>
              I focus on combining AI, event-driven architecture, and automation tools to create scalable and resilient systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
