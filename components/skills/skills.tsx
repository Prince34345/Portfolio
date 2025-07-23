import { motion } from "framer-motion";
import { Badge } from "../../components/ui/badge";

import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import DataItems from '../../data.json';
// List of skills with icon and custom glow color

export default function Skills() {
  return (
    <section className="relative w-full min-h-screen px-6 pt-28 pb-20 bg-white dark:bg-black overflow-hidden text-zinc-900 dark:text-white">
      {/* Animated Blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-pink-400 rounded-full blur-[160px] opacity-50 top-[-100px] left-[-150px] z-0"
        animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-400 rounded-full blur-[140px] opacity-50 top-[30%] right-[10%] z-0"
        animate={{ scale: [1, 1.05, 1], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-blue-300 rounded-full blur-[120px] opacity-20 bottom-[-80px] right-[25%] z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Title */}
      <TypeAnimation
        sequence={[
          500,
          DataItems.skillpage.animatedTitles[0],
          2000,
          DataItems.skillpage.animatedTitles[1],
          2000,
          DataItems.skillpage.animatedTitles[2],
          2000,
          DataItems.skillpage.animatedTitles[3],
          2000,
        ]}
        wrapper="h2"
        className="text-3xl md:text-5xl font-extrabold text-center mt-10 mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 drop-shadow-md"
        speed={50}
        repeat={Infinity}
      />

      {/* Skills Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {DataItems.skillpage.skills.map((skill, index) => {
          // @ts-ignore
          const SiIcon = SiIcons[skill.icon];
          // @ts-ignore
          const FaIcon = FaIcons[skill.icon];
          return (
            <motion.div
              key={index}
              className="group flex flex-col items-center justify-center rounded-2xl p-6 bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:shadow-purple-400 transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {SiIcon && <SiIcon
                className={`text-5xl mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300 ${skill.color}`}
              />}
              {
               FaIcon && <FaIcon
                className={`text-5xl mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300 ${skill.color}`}
               />
              }
              <p className="text-md font-medium">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
