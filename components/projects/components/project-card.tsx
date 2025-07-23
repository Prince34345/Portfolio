import { Button } from "../../../components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 140 }}
      className="rounded-3xl bg-white/90 dark:bg-zinc-900/80 shadow-xl border border-zinc-200 dark:border-zinc-700 backdrop-blur-md overflow-hidden"
    >
      <div className="border">
      <img src={image} alt={title} className="w-full h-48 object-cover px-5 py-5" />
      </div>
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 px-2 py-1 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <a href={live} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full">
              <ExternalLink className="w-4 h-4 mr-2" /> Live
            </Button>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="ghost" className="w-full">
              <Github className="w-4 h-4 mr-2" /> Code
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}