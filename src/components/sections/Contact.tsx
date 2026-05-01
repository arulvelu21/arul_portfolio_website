"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Mail, Send, MapPin, CheckCircle, XCircle, Loader2 } from "lucide-react";

const LinkedinIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Portfolio Website",
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Webhook error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="Let's Build Something Intelligent" 
          subtitle="Looking for an automation & AI engineer? Let's discuss how intelligent workflows can transform your operations."
          className="items-center text-center mb-16"
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-50 mb-6">Get in Touch</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Whether you need enterprise automation, AI-powered workflows, or intelligent process optimization — I'm open to consulting and full-time opportunities.
            </p>

            <div className="space-y-5">
              <a href="mailto:arulvelu.gunasekaran@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="p-3 glass rounded-lg group-hover:bg-blue-600/20 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <div className="font-medium break-all">arulvelu.gunasekaran@gmail.com</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/arulvelu-gunasekaran-6b938978/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="p-3 glass rounded-lg group-hover:bg-blue-600/20 transition-colors">
                  <LinkedinIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">LinkedIn</div>
                  <div className="font-medium">Connect professionally</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="p-3 glass rounded-lg group-hover:bg-blue-600/20 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Location</div>
                  <div className="font-medium">Bangalore, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-2xl"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-50 placeholder-slate-500 transition-shadow disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-50 placeholder-slate-500 transition-shadow disabled:opacity-50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1">Phone <span className="text-slate-600 font-normal">(Optional)</span></label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-50 placeholder-slate-500 transition-shadow disabled:opacity-50"
                  placeholder="+91 8007496960"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-50 placeholder-slate-500 transition-shadow resize-none disabled:opacity-50"
                  placeholder="Tell me about your automation needs..."
                ></textarea>
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 p-3 rounded-lg text-sm font-medium">
                  <CheckCircle className="w-5 h-5" />
                  Message sent successfully! I'll be in touch soon.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-rose-400 bg-rose-500/10 p-3 rounded-lg text-sm font-medium">
                  <XCircle className="w-5 h-5" />
                  Failed to send message. Is your n8n workflow active?
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2" 
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
