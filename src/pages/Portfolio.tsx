
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import MagneticCursor from '../components/MagneticCursor';
import { Github, Globe, Award, Rocket } from 'lucide-react';

const Portfolio = () => {
  const mainProject = {
    title: "Annadata",
    subtitle: "Transforming Agriculture with AI, IoT & Market Intelligence",
    description: "Annadata is a groundbreaking agri-commerce platform designed to revolutionize the agricultural supply chain by directly connecting farmers, vendors, and consumers. By leveraging AI-driven market intelligence, IoT-based soil monitoring, and a seamless Vendor Cart System, Annadata eliminates middlemen, ensures fair pricing, and optimizes logistics for efficient farm-to-market transactions.",
    image: "https://ibb.co/Gfg2Y53b",
    tech: ["AI", "IoT", "Market Intelligence", "Supply Chain"],
    date: "August 2024 – Present",
    liveUrl: "#",
    githubUrl: "#"
  };

  const achievements = [
    {
      title: "AIU Anveshan 2024",
      description: "North Zone 2nd Runner-Up",
      date: "Nov 2024"
    },
    {
      title: "Smart India Hackathon (SIH) 2024",
      description: "Internal Round Qualifier",
      date: "Sep 2024"
    },
    {
      title: "Toycathon 2021",
      description: "2nd Round Finalist",
      date: "Oct 2021"
    },
    {
      title: "International Math Olympiad",
      description: "Runner-Up",
      date: "Aug 2018"
    }
  ];

  const upcomingProjects = [
    {
      title: "Drone-Based Smart Farming",
      description: "Develop a drone system integrated with AI to analyze soil health, detect pests, and automate crop spraying for precision farming.",
      tech: ["AI", "Drones", "Agriculture"]
    },
    {
      title: "Autonomous Harvesting Robot",
      description: "Create a robotic system that uses computer vision to identify and harvest ripe crops, reducing labor dependency.",
      tech: ["Robotics", "Computer Vision", "AI"]
    },
    {
      title: "IoT-Based Smart Warehouse",
      description: "Build an automated warehouse system using IoT sensors and AI for real-time inventory tracking, quality monitoring, and predictive maintenance.",
      tech: ["IoT", "AI", "Automation"]
    },
    {
      title: "AI-Powered Soil Health Monitoring",
      description: "Use embedded systems and IoT sensors to collect soil nutrient levels, providing real-time recommendations for farmers via a mobile app.",
      tech: ["IoT", "AI", "Mobile App"]
    },
    {
      title: "Automated Irrigation System with Drones",
      description: "Design a drone-integrated irrigation system that detects moisture levels in the field and waters crops accordingly.",
      tech: ["Drones", "IoT", "Automation"]
    },
    {
      title: "Solar-Powered AgriBot",
      description: "Develop a small autonomous robot that uses solar energy to assist in weeding, planting, and monitoring crops.",
      tech: ["Robotics", "Solar", "IoT"]
    },
    {
      title: "Smart Cold Storage",
      description: "Implement an IoT-controlled storage system to maintain optimal temperature and humidity levels for stored crops.",
      tech: ["IoT", "Temperature Control"]
    },
    {
      title: "AI-Based Cattle Monitoring System",
      description: "Use drones and IoT wearables to track livestock health, location, and behavior in real time.",
      tech: ["AI", "IoT", "Drones"]
    },
    {
      title: "Automated Vendor Cart",
      description: "Build a self-driving vending cart that navigates through city streets, delivering farm-fresh produce directly to customers.",
      tech: ["Automation", "IoT", "AI"]
    },
    {
      title: "Blockchain-Based Agri-Supply Chain",
      description: "Develop a blockchain-integrated system to ensure transparency in pricing, logistics, and farmer-to-consumer transactions.",
      tech: ["Blockchain", "Supply Chain"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MagneticCursor />
      <Navigation />
      <section className="pt-32 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Featured Project</h1>
            <div className="glass-card p-8 space-y-6">
              <div className="aspect-video bg-white/5 rounded-lg overflow-hidden">
                <img
                  src={mainProject.image}
                  alt={mainProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{mainProject.title}</h2>
                <p className="text-xl text-white/80">{mainProject.subtitle}</p>
                <p className="text-white/80">{mainProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {mainProject.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 text-sm bg-white/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={mainProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                  >
                    <Globe size={20} />
                    Live Demo
                  </a>
                  <a
                    href={mainProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                  >
                    <Github size={20} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-6 space-y-4"
                >
                  <Award className="w-8 h-8 text-white/80" />
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                  <p className="text-white/80">{achievement.description}</p>
                  <p className="text-sm text-white/60">{achievement.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">Upcoming Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 space-y-4 group hover:scale-105 transition-transform"
                >
                  <Rocket className="w-8 h-8 text-white/80" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-white/80">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 text-sm bg-white/10 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
