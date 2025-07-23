import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import DataItems from '../../data.json';
import { Loader } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoader, setLoader] = useState(false);

  const sendform = (e: React.FormEvent) => {
    setLoader(true);
    if (!form.current) {
      return;
    }
    e.preventDefault();
    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((res) => {
         console.log(res);
         form.current?.reset();
         toast.success("Successfully Contacted, Check your Gmail", {style: {color: "lightgreen"}});
      }, (error) => {
         console.log(error);
         toast.error("Unsuccessfully, Error Occured", {style:{color: "red"}})
      }).finally(() => {
          setLoader(false);
      });
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-black overflow-hidden">
      <AnimatedBlobs />

      <div className="relative z-10 px-5 py-5 mt-32 pt-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-[2.75rem] md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-500 dark:from-fuchsia-400 dark:via-pink-400 dark:to-red-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {DataItems.contactpage.title}
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-zinc-700 dark:text-zinc-300 mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
         {DataItems.contactpage.description}
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={sendform}
          className="bg-zinc-100/20 dark:bg-zinc-900/30 backdrop-blur-xl border border-pink-500/30 dark:border-pink-400/20 rounded-2xl p-8 space-y-6 shadow-[0_0_30px_#f472b6] hover:shadow-[0_0_50px_#ec4899]/60 transition-all duration-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Input
                type={DataItems.contactpage.form.fields[0].type}
                name={DataItems.contactpage.form.fields[0].name}
                placeholder={DataItems.contactpage.form.fields[0].placeholder}
                required={DataItems.contactpage.form.fields[0].required}
                className="text-base bg-zinc-50/10 dark:bg-zinc-800/30 border border-zinc-300 dark:border-zinc-700 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-pink-500/60"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Input
                type={DataItems.contactpage.form.fields[1].type}
                name={DataItems.contactpage.form.fields[1].name}
                placeholder={DataItems.contactpage.form.fields[1].placeholder}
                required={DataItems.contactpage.form.fields[1].required}
                className="text-base bg-zinc-50/10 dark:bg-zinc-800/30 border border-zinc-300 dark:border-zinc-700 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-pink-500/60"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Textarea
             name={DataItems.contactpage.form.fields[2].name}
             placeholder={DataItems.contactpage.form.fields[2].placeholder}
             required={DataItems.contactpage.form.fields[2].required}
             className="text-base min-h-[120px] bg-zinc-50/10 dark:bg-zinc-800/30 border border-zinc-300 dark:border-zinc-700 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-pink-500/60"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button
              type="submit"
              className="w-full py-6 text-lg font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-md hover:shadow-pink-500/50 transition-all duration-500"
            >
              {isLoader ? <Loader className=" animate-spin" size={40}/> : DataItems.contactpage.form.buttonText}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}

function AnimatedBlobs() {
  return (
    <>
      <motion.div
        className="absolute -top-32 -left-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pink-400 to-fuchsia-500 opacity-30 blur-[140px] dark:opacity-20"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-30 blur-[120px] dark:opacity-20"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-30 blur-[100px] dark:opacity-20"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 60, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
