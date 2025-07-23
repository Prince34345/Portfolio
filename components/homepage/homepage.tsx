// src/pages/Home.tsx

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Paperclip, Rocket } from "lucide-react";
import { Link } from "react-router";
import DataItems from "../../data.json";

// Reusable blob
function GradientBlob({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute w-72 h-72 rounded-full filter blur-3xl opacity-30 ${className}`}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Stack badge
function StackBadge({ label }: { label: string }) {
  return (
    <div className="px-3 py-1 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 backdrop-blur text-sm font-medium">
      {label}
    </div>
  );
}

export default function Home() {
  function handleDownloadCV() {
    const link = document.createElement("a");
    link.href = "/images/resume.pdf";
    link.setAttribute("download", "My_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black overflow-hidden">
      {/* Floating background blobs */}
      <GradientBlob className="top-20 left-10 bg-pink-500" />
      <GradientBlob className="bottom-10 right-20 bg-indigo-500" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4 max-w-2xl"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            damping: 20,
            stiffness: 100,
          }}
        >
          {DataItems.homepage.hero.headline}
        </motion.h1>

        <p className="mt-4 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-medium">
          {DataItems.homepage.hero.description}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to={DataItems.homepage.hero.buttons[0].href}>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl">
              <Rocket className="mr-2 h-4 w-4" />
              {DataItems.homepage.hero.buttons[0].text}
            </Button>
          </Link>
          <Button
            variant="outline"
            className="dark:border-zinc-700"
            onClick={handleDownloadCV}
          >
            <Paperclip className="mr-2 h-4 w-4" />
            {DataItems.homepage.hero.buttons[1].text}
          </Button>
        </div>

        {/* Tech Stack Flex */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-zinc-400 dark:text-zinc-500 text-sm">
          {DataItems.homepage.hero.tags.map((val) => {
            return <StackBadge label={val} />;
          })}
        </div>
      </motion.div>
    </section>
  );
}
