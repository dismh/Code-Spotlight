"use client";

import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/HeroHighlight.jsx";
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function HeroHighlightWithSocials() {
  const socialLinks = [
    {
      title: "Twitter",
      icon: (
        <IconBrandTwitter className="h-6 w-6 text-neutral-200 group-hover:text-sky-400 transition-colors" />
      ),
      href: "https://twitter.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-6 w-6 text-neutral-200 group-hover:text-sky-400 transition-colors" />
      ),
      href: "https://github.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-6 w-6 text-neutral-200 group-hover:text-sky-400 transition-colors" />
      ),
      href: "https://linkedin.com",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-6 w-6 text-neutral-200 group-hover:text-sky-400 transition-colors" />
      ),
      href: "https://instagram.com",
    },
  ];

  return (
    <HeroHighlight>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="flex justify-center gap-4"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={link.title}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </HeroHighlight>
  );
}