import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tight text-foreground"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello World
        </motion.h1>
        <motion.div 
          className="mt-4 h-1 bg-primary mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Index;
