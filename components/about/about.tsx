import { motion } from "framer-motion";
import { Badge } from "../../components/ui/badge";
import { imageBounceVariants, neonGlowVariants } from "../../constant/variants";
import DataItems from '../../data.json';

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-black overflow-hidden pt-32 px-4 md:px-12">
      {/* Animated Blob */}
      <AnimatedBlob />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-10">
        {/* Image Left */}
        <motion.div
          variants={imageBounceVariants as any}
          initial={"intial"}
          animate="animate"
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
           <motion.div
            variants={neonGlowVariants as any} // Apply neon glow animation to this inner motion.div
            animate="animate"
            className="relative  group flex items-center justify-center rounded-xl"
            style={{
                // Initial boxShadow to make sure it's present from the start before animation takes over
                boxShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
            }}
          >
          <img src={DataItems.aboutPage.image.src} className="w-full h-full object-cover rounded-xl border-2 border-transparent" alt={DataItems.aboutPage.image.alt} />
          <div className="absolute inset-0 rounded-xl ring-4 ring-inset ring-purple-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>
        </motion.div>

        {/* Text Box Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="backdrop-blur-lg bg-white/70 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-xl px-6 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              {DataItems.aboutPage.title}
            </h1>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
             {DataItems.aboutPage.paragraphs[0]}
            </p>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
             {DataItems.aboutPage.paragraphs[1]}
            </p>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-base">
              {DataItems.aboutPage.paragraphs[2]}
            </p>
          </div>

          {/* Badges */}
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {
              DataItems.aboutPage.tags.map((val) => {
                return <Badge variant="outline" className="backdrop-blur bg-zinc-200/60 dark:bg-zinc-700/60">
              {val}
            </Badge>
              })
            }
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Animated Blob
function AnimatedBlob() {
  return (
    <motion.div
      className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-[120px] dark:opacity-40"
      animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}