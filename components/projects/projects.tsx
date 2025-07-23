import ProjectCard from "./components/project-card";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import DataItems from '../../data.json';


export default function Projects() {
  return (
    <div className="relative w-full min-h-screen px-6 pt-24 pb-16 md:px-20 bg-gradient-to-br from-zinc-100 via-purple-50 to-pink-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 overflow-hidden">
      {/* 🌈 Animated Blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-500 opacity-30 blur-3xl rounded-full z-0"
        animate={{ x: [0, 25, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[350px] h-[350px] bg-pink-500 opacity-20 blur-3xl rounded-full z-0"
        animate={{ x: [0, -20, 0], y: [0, -25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔙 Back + Title */}
   <motion.div initial={{opacity: 0, y: 20}} animate={{y: 0, opacity: 1}} transition={{duration: 1}} className="relative z-10 pt-10 flex justify-between items-center mb-12">
    <Link to="/">
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-pink-500/40 rounded-xl">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
    </motion.div>
  </Link>
   <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_1px_6px_rgba(236,72,153,0.5)]">
    My Projects
  </h1>
  </motion.div>

      {/* 📦 Project Grid */}
      <motion.div animate={{scale: 1.05, opacity: 1}} initial={{opacity: 0, scale: 1}} transition={{duration: 0.6}} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {DataItems.projectpage.projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </motion.div>
    </div>
  );
}