"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeBlock } from "@/components/CodeBlock";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const [tab, setTab] = useState("preview");
  const [hideCode, sethideCode] = useState(false);

  const iframeUrl = "https://dismh.github.io/code-spotlight-pages/five/schoollife2.html";
  const code = `<html>
<head>
<title>About Everyone's School Life </title>
<style>
image: {
align: center
}
</style>
<body bgcolor=lightblue>
<h1>School life </h1>
<p><h3>School is the center of education and discipline, and everyone comes school to either study or play. But my school life is special with my friends. We study together, and I am a topper in almost all exams. Samridh plays Football, me(Siddid) and  Sanidhya play Cricket, and Soham plays Basketball. I am a novice batsman and Sanidhya is a amateur bowler. Soham is a newcomer in Basketballer and Samridh a good defender in Football.</h3></p>
<center> <h1> Football </h1> </center>
<center> <img src= "football.jpg"> </center>
<center> <h1> Cricket </h1> </center>
<center> <img src= "India-T20-World-Cup.jpeg"> </center>
<h1>The period before sports are most intense just because sports is the heartbeat of every child and no wants that the period is cancelled, even toppers like me and some girls.</p>
<p><h2>The teachers here are articulate, and some teachers are very unyielding, that they even take our sports period and break.</h2>
<marquee><h1> I hope everyone has read our school life. I hope the readers always express their will freely.</h1></marquee>
<h1> Link to our second blog about Ayush is below!</h1>
<a href= "Ayush.html">Click here </a>
</center>
</body>
</html>`;

  return (
    <>
      
      {/* <Navbar /> */}
      <main className="min-h-screen bg-black text-white px-4 py-5 flex flex-col items-center mt-20">
        <h1 className="text-4xl font-extrabold mt-5 mb-3 tracking-tight">
          Ayush's Project
        </h1>
        <p className="text-gray-400 mb-8 text-lg">
          An innovation of the I.T  club.
        </p>

        <div className="w-full max-w-6xl border border-gray-800 rounded-xl overflow-hidden relative bg-[#0e0e0e] shadow-lg">
          {/* Tabs */}
          <div className="flex border-b border-gray-800 bg-[#121212]">
            {["preview", "code"].map((id) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`w-1/2 py-3 text-sm font-medium transition-colors ${
                  tab === id
                    ? "text-white border-b-2 border-sky-500 bg-[#1a1a1a]"
                    : "text-gray-400 hover:text-white hover:bg-[#1a1a1a]"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Animated content */}
          <div className="aspect-video bg-black flex flex-col relative overflow-hidden">
            <AnimatePresence mode="wait">
              {tab === "preview" && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full h-full" // Ensure motion.div takes full height
                >
                  <iframe
                    src={iframeUrl}
                    className="w-full h-full"
                    loading="lazy"
                    title="Student Website"
                  />
                </motion.div>
              )}

              {tab === "code" && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="relative h-full"
                >
                  {hideCode ? (
                    <>
                      <div className="absolute inset-0 pointer-events-none select-none blur-[2px]">
                        <CodeBlock
                          language="jsx"
                          filename="DummyComponent.jsx"
                          highlightLines={[9, 13, 14, 18]}
                          code={code}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="rounded-lg border border-gray-700 bg-[#121212]/80 px-5 py-4 text-center shadow-xl">
                          <div className="mx-auto mb-2 h-8 w-8 rounded-full border border-gray-600 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5 text-gray-300"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 1.5a4.5 4.5 0 00-4.5 4.5v3h-.75A1.75 1.75 0 005 10.75v8.5C5 20.664 5.336 21 5.75 21h12.5c.414 0 .75-.336.75-.75v-8.5A1.75 1.75 0 0017.25 9H16.5V6A4.5 4.5 0 0012 1.5zm-3 7.5V6a3 3 0 116 0v3H9z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm font-semibold">
                            Code access restricted
                          </p>
                          <p className="text-xs text-gray-400">
                            This code is view-only. Interactions are disabled.
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <CodeBlock code={code} language="jsx" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="p-4 flex justify-between items-center bg-[#121212] border-t border-gray-800">
            <span className="text-sm text-gray-400">
              by <strong className="text-white">Ayush</strong>
            </span>
            <a
              href={iframeUrl}
              target="_blank"
              className="bg-sky-600 text-white px-4 py-1 rounded hover:bg-sky-500 text-sm font-medium transition"
            >
              Visit Site
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
