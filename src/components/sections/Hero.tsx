"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, User } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "10+", label: "Years in Automation & AI Systems" },
  { value: "95%", label: "Manual Work Eliminated" },
  { value: "3,000+", label: "Retail Systems Automated" },
  { value: "90%", label: "Downtime Reduction" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export const Hero = () => {
  return (
    <>
      <section className="relative h-[100dvh] flex items-center justify-center pt-20 pb-8 overflow-hidden">
        {/* ── Animated Background Glows ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Central glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[140px]"
          />
          {/* Left accent */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="hidden md:block absolute top-1/2 left-[15%] -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px]"
          />
          {/* Right accent */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="hidden md:block absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]"
          />
          {/* Floating shapes for depth */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute top-[20%] left-[20%] w-32 h-32 bg-blue-500/5 rounded-full blur-[40px]"
          />
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="hidden md:block absolute bottom-[30%] right-[25%] w-24 h-24 bg-violet-500/8 rounded-full blur-[30px]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* ── Top Badge ── */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-sm text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              AI-Powered Automation Engineer · 10+ Years
            </div>
          </motion.div>

          {/* ── Main Heading ── */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[0.9]"
          >
            <span className="block text-white">Arulvelu</span>
            <span className="block hero-gradient-text mt-2">Gunasekaran</span>
          </motion.h1>

          {/* ── Subheading ── */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl mx-auto mb-8"
          >
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-2">
              I build AI-powered automation systems that eliminate manual work
              and enable self-driving enterprise operations.
            </p>
            <p className="text-base md:text-lg text-slate-400/80">
              Using LLMs, APIs, and cloud technologies to reduce manual effort by up to 95%.
            </p>
          </motion.div>

          {/* ── CTA Buttons ── */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center h-13 px-8 text-base font-semibold bg-blue-600 text-white rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:bg-blue-500 cursor-pointer"
              >
                <Sparkles className="w-4.5 h-4.5 mr-2" />
                View AI Projects
              </motion.div>
            </Link>
            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.04, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center h-13 px-8 text-base font-semibold border border-slate-600 text-slate-300 hover:text-white rounded-xl transition-all cursor-pointer"
              >
                <User className="w-4.5 h-4.5 mr-2" />
                About Me
              </motion.div>
            </Link>
          </motion.div>

          {/* ── Stats Cards ── */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(59, 130, 246, 0.1)" }}
                transition={{ duration: 0.25 }}
                className="stat-card p-4 rounded-2xl text-center cursor-default"
              >
                <div className="text-2xl md:text-3xl font-extrabold hero-gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

