
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import MagneticCursor from '../components/MagneticCursor';
import { FileDown } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "IoT & Robotics", proficiency: 90 },
    { name: "Business Strategy", proficiency: 85 },
    { name: "Market Research", proficiency: 80 },
    { name: "Public Speaking", proficiency: 85 },
    { name: "Technical Knowledge", proficiency: 75 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MagneticCursor />
      <Navigation />
      <section className="pt-32 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-white/80">
                  Hello! I'm Saksham Sharma, a first-year B.Tech student in Electronics and Communication Engineering (ECE) with a deep passion for technology, entrepreneurship, and problem-solving. My journey revolves around building real-world solutions through hardware innovations, business strategies, and cutting-edge research.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">What I Do?</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>🔹 Tech & Innovation: Passionate about IoT, robotics, and embedded systems</li>
                    <li>🔹 Entrepreneurship: Founder of Annadata, empowering Indian farmers</li>
                    <li>🔹 Market Research & Business Strategy: Skilled in business planning</li>
                    <li>🔹 Public Speaking & Leadership: Strong advocate for knowledge sharing</li>
                    <li>🔹 Technical Knowledge: Basic understanding of C, C++, Java, HTML, and Python</li>
                  </ul>
                </div>
                <a 
                  href="/lovable-uploads/fc029004-592c-49ca-b3a6-732171a3f146.png"
                  download="Saksham_Sharma_Resume.png"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
                >
                  <FileDown size={20} />
                  Download Resume
                </a>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/6e89617d-5491-4ede-b890-5b302e343b24.png"
                  alt="Achievement"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">My Vision</h2>
            <p className="text-lg text-white/80">
              I believe in creating technology that serves a purpose—whether it's bridging the gap between innovation and accessibility, empowering communities, or solving real-world challenges. My journey is fueled by curiosity, collaboration, and the drive to make an impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Skills & Expertise</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <motion.div 
                    className="h-2 bg-white/10 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
