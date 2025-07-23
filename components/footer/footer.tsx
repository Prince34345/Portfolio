// src/components/Footer.tsx

import { motion } from "framer-motion";
import * as FaIcons from 'react-icons/fa';
import DataItems from '../../data.json';

export default function Footer() {
  return (
    <footer className="px-6 py-10 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-300 dark:border-zinc-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            © {new Date().getFullYear()}, {DataItems.footer.copyright}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {DataItems.footer.message}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {
            DataItems.footer.socials.map((item) => {
              //@ts-ignore
              const CurrentIcon = FaIcons[item.icon]
              return  <SocialIcon
                href={item.url}
                icon={<CurrentIcon/>}
                label={item.platform}
          />
            })
          }
         
        </div>
      </motion.div>
    </footer>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full bg-white dark:bg-zinc-800 shadow hover:shadow-md transition-colors text-zinc-800 dark:text-zinc-200"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}