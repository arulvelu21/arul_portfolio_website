import React from "react";

export const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 mt-auto">
      <p>© {new Date().getFullYear()} Arulvelu Gunasekaran. Engineered with Next.js and Framer Motion.</p>
    </footer>
  );
};
