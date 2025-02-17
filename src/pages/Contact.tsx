
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import MagneticCursor from '../components/MagneticCursor';
import { Github, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic will be added later
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MagneticCursor />
      <Navigation />
      <section className="pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
                >
                  Send Message
                </button>
              </motion.form>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Connect With Me</h2>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/sakshamsharma16" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a 
                      href="mailto:sharmasaksham1605@gmail.com" 
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Mail size={24} />
                    </a>
                    <a 
                      href="https://www.instagram.com/_granthmusic/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
