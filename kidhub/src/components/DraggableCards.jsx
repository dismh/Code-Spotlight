"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "motion/react";

export const DraggableCardBody = ({ className, children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);
  const controls = useAnimationControls();
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  // physics biatch
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig
  );

  useEffect(() => {
    // Update constraints when component mounts or window resizes
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        setConstraints({
          top: -window.innerHeight / 2,
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2,
        });
      }
    };

    updateConstraints();

    // Add resize listener
    window.addEventListener("resize", updateConstraints);

    // Clean up
    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";

        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            ...springConfig,
          },
        });
        const currentVelocityX = velocityX.get();
        const currentVelocityY = velocityY.get();

        const velocityMagnitude = Math.sqrt(
          currentVelocityX * currentVelocityX +
            currentVelocityY * currentVelocityY
        );
        const bounce = Math.min(0.8, velocityMagnitude / 1000);

        animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });

        animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });
      }}
      style={{
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
      }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900",
        className
      )}
    >
      {children}
      <motion.div
        style={{
          opacity: glareOpacity,
        }}
        className="pointer-events-none absolute inset-0 bg-white select-none"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({ className, children }) => {
  return (
    <div className={cn("[perspective:3000px]", className)}>{children}</div>
  );
};

export function DraggableCardDemo() {
  const items = [
    {
      title: "Abhay",
      image: "/bacche/abue.jpg",
      className: "absolute top-10 left-[15%] rotate-[-5deg]",
    },
    {
      title: "Shaurya",
      image: "/bacche/shawarma.jpg",
      className: "absolute top-32 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Amaan",
      image: "/bacche/anaam.jpg",
      className: "absolute top-16 left-[40%] rotate-[8deg]",
    },
    {
      title: "Gurshan",
      image: "/bacche/gurshan.jpg",
      className: "absolute top-40 left-[55%] rotate-[10deg]",
    },
    {
      title: "Maninder",
      image: "/bacche/maninder.jpg",
      className: "absolute top-24 left-[70%] rotate-[2deg]",
    },
    {
      title: "Devkrit",
      image: "/bacche/devkrit.jpg",
      className: "absolute top-10 left-[5%] rotate-[-3deg]",
    },
    {
      title: "Arihant",
      image: "/bacche/arihant.jpg",
      className: "absolute top-48 left-[20%] rotate-[6deg]",
    },
    {
      title: "Person1",
      image: "/bacche/her.jpg",
      className: "absolute top-28 left-[35%] rotate-[-4deg]",
    },
    {
      title: "Person2",
      image: "/bacche/him.jpg",
      className: "absolute top-52 left-[50%] rotate-[3deg]",
    },
    {
      title: "Person 3",
      image: "/bacche/karam1.jpg",
      className: "absolute top-20 left-[65%] rotate-[-6deg]",
    },
    {
      title: "Person 4",
      image: "/bacche/karam2.jpg",
      className: "absolute top-44 left-[75%] rotate-[5deg]",
    },
    {
      title: "Person 5",
      image: "/bacche/them.jpg",
      className: "absolute top-60 left-[10%] rotate-[7deg]",
    },
    {
      title: "Person 6",
      image: "/bacche/they.jpg",
      className: "absolute top-72 left-[30%] rotate-[-2deg]",
    },
    {
      title: "Person 7",
      image: "/bacche/yes.jpg",
      className: "absolute top-64 left-[55%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Special thanks to our contributors for making this project possible!
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
