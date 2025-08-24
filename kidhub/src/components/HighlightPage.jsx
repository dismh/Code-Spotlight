"use client";

import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/HeroHighlight.jsx";
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
  IconBrandFacebook
} from "@tabler/icons-react";

export default function HeroHighlightWithSocials() {
  const socialLinks = [
    {
      title: "Twitter",
      icon: (
        <IconBrandTwitter className="h-6 w-6 text-neutral-200 group-hover:text-sky-400 transition-colors" />
      ),
      href: "https://x.com/dismohali",
    },
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutubeFilled className="h-6 w-6 text-neutral-200 group-hover:text-sky-400 transition-colors" />
      ),
      href: "https://www.youtube.com/channel/UCZWJ9b0gNN4DcAtNxJVbz5A/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-6 w-6 text-neutral-200 group-hover:text-sky-400 transition-colors" />
      ),
      href: "https://github.com/dismh",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-6 w-6 text-neutral-200 group-hover:text-sky-400 transition-colors" />
      ),
      href: "https://facebook.com/dismohali",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-6 w-6 text-neutral-200 group-hover:text-sky-400 transition-colors" />
      ),
      href: "https://www.instagram.com/dismohali/",
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