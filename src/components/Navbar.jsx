"use client";

import React, { useEffect } from "react";
import { FloatingDock } from "@/components/Floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  // Adjustable top offset in pixels
  const topOffset = 50;

  useEffect(() => {
    const handleClick = (e) => {
      const href = e.target.closest("a")?.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Attach click listener to all links in the FloatingDock
    document.querySelectorAll(".floating-dock a").forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    // Cleanup event listeners on unmount
    return () => {
      document.querySelectorAll(".floating-dock a").forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Websites",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Websites",
    },
    {
      title: "Random Website!",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Contributors",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Contributors",
    },
    {
      title: "Credits",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Footer",
    },
  ];

  return (
    <div
      className="flex items-center justify-center w-full fixed z-[10000]"
      style={{ top: `${topOffset}px` }}
    >
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}