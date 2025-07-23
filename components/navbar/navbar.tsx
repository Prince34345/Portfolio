import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router";
import DataItems from '../../data.json';
;

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  // Sync dark mode with class
  useEffect(() => {
    const html = document.documentElement;
    const isDarkMode = html.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDark = () => {
    const html = document.documentElement;
    const newMode = !isDark;
    html.classList.toggle("dark", newMode);
    setIsDark(newMode);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setShowMobileMenu(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-md border border-white/30 dark:border-white/10"
    >
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-lg font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            {DataItems.homepage.siteName}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {DataItems.navbar.navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
            >
              <Button
                variant="ghost"
                className={`text-zinc-800  dark:text-zinc-100 hover:text-purple-500 dark:hover:text-purple-400 transition`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Right Section: Dark Mode + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* 🌙 Dark Mode Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleDark}>
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-zinc-800 dark:text-zinc-100" />
            )}
          </Button>

          {/* 📱 Mobile Menu */}
          <DropdownMenu open={showMobileMenu} onOpenChange={setShowMobileMenu}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
                <Menu className="h-5 w-5 text-zinc-800 dark:text-zinc-100" />
              </Button>
            </DropdownMenuTrigger>

            <AnimatePresence>
              {showMobileMenu && (
                <DropdownMenuContent
                  align="end"
                  sideOffset={10}
                  className="w-40 rounded-xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-700"
                  forceMount
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {DataItems.navbar.navLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                      >
                        <DropdownMenuItem className="cursor-pointer text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                          {item.label}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </motion.div>
                </DropdownMenuContent>
              )}
            </AnimatePresence>
          </DropdownMenu>
        </div>
      </div>
    </motion.nav>
  );
}