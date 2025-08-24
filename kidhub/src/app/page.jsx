"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar.jsx";
import HighlightPage from "@/components/HighlightPage.jsx";
import Loader from "@/components/Loader.jsx";
import { AnimatedPinCard } from "@/components/3dPin";
import { ColourfulText } from "@/components/ColourfulText.jsx";
import { DraggableCardDemo } from "@/components/DraggableCards";
import { ThreeDMarqueeDemoSecond } from "@/components/3dmarquee.jsx";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 500); // delay for fade-in if needed
      return () => clearTimeout(contentTimer);
    }, 2000); // 2 second loader

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
          <Loader />
        </div>
      ) : (
        showContent && (
          <>
            <ThreeDMarqueeDemoSecond />
            <Navbar />
            <div id="Websites" className="min-h-screen px-4 py-5 bg-black text-white">
              <h1 className="text-5xl font-bold mb-8 text-center">
                <a href="#Websites">Our Projects</a>
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 justify-items-center">
                <AnimatedPinCard
                  title="DeCram AI"
                  description="An AI-powered platform tailored for students to upskill their academics."
                  link="\decram"
                  img="/assets/Decram.jpg"
                  linkName="View"
                />
                <AnimatedPinCard
                  title="DeCram AI"
                  description="DeCram AI is an AI-powered student platform"
                  link="https://www.decram.me"
                  img="/assets/Decram.jpg"
                />
                <AnimatedPinCard
                  title="DeCram AI"
                  description="DeCram AI is an AI-powered student platform"
                  link="https://www.decram.me"
                  img="/assets/Decram.jpg"
                />
              </div>
            </div>
            <div id="Contributors" className="w-full flex items-start justify-center pt-2 pb-10 relative overflow-hidden bg-black">
              <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
                Our resourceful
                <ColourfulText text=" Contributors" /> <br />
              </h1>
            </div>
            <DraggableCardDemo />
            <HighlightPage />
            <footer id="Footer" className="bg-black text-white py-8 text-center">
              <p>Developed with ❤️ by Dexibility Productions</p>
            </footer>
          </>
        )
      )}
    </div>
  );
}
