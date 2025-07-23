import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import * as Icons from "lucide-react";
import DataItems from '../../data.json';
export default function Services() {
 

  return (
    <section className="relative min-h-screen w-full px-6 py-20 mt-16 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-black overflow-hidden">
      {/* Background Blobs */}
      <AnimatedBlob variant="pink" />
      <AnimatedBlob variant="blue" />
      <AnimatedBlob variant="green" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mb-16 drop-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {DataItems.servicepage.title}
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {DataItems.servicepage.services.map((service, index) => {
            const CurrentIcon = Icons[service.icon];
          return <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full"
            >
              <Card
                className={`h-full flex flex-col justify-between bg-white/60 dark:bg-zinc-800/40 backdrop-blur-md shadow-lg border-2 border-${service.color} transition-colors`}
              >
                <CardHeader className="flex flex-col items-start space-y-4">
                  <div className="p-3 bg-white/40 dark:bg-zinc-700 rounded-full shadow-md">
                  <CurrentIcon className={`w-10 h-10 text-${service.color}`}/>
                  </div>
                  <CardTitle className="text-lg font-semibold text-zinc-800 dark:text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Neon Blobs
function AnimatedBlob({ variant }: { variant: "pink" | "blue" | "green" }) {
  const styles = {
    pink: "from-pink-500 to-purple-500 top-[-120px] left-1/2 -translate-x-1/2",
    blue: "from-blue-500 to-cyan-500 bottom-[-100px] left-[-100px]",
    green: "from-green-500 to-teal-400 bottom-[-80px] right-[-80px]",
  };

  return (
    <motion.div
      className={`absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-40 dark:opacity-30 bg-gradient-to-r ${styles[variant]}`}
      animate={{ scale: [1, 1.05, 1], rotate: [0, 360, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
