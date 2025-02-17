
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-white/20"
        >
          <img 
            src="/lovable-uploads/b420c394-6cd5-4667-8f38-b56bf0a5acac.png"
            alt="Saksham Sharma"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80"
        >
          🚀 Innovator | Tech Enthusiast | Entrepreneur
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
        >
          Saksham Sharma
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            First-year B.Tech ECE student passionate about IoT innovations, 
            entrepreneurship, and creating impactful solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">IoT & Robotics</span>
            <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">Business Strategy</span>
            <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">Market Research</span>
            <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">Public Speaking</span>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-white/60 text-sm">Scroll to explore my journey</p>
      </motion.div>
    </section>
  );
};

export default Hero;
