import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative bg-white/[0.02] pt-32">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-12 h-[2px] bg-accentPurple"></span>
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4 mb-8">
              <motion.a whileHover={{ x: 10 }} href="mailto:nourinf18@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors">
                <div className="bg-white/5 p-3 rounded-full border border-white/10"><Mail size={20} /></div>
                nourinf18@gmail.com
              </motion.a>
              <motion.a whileHover={{ x: 10 }} href="https://github.com/Nourin333" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors">
                <div className="bg-white/5 p-3 rounded-full border border-white/10"><Github size={20} /></div>
                github.com/Nourin333
              </motion.a>
              <motion.a whileHover={{ x: 10 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors">
                <div className="bg-white/5 p-3 rounded-full border border-white/10"><Linkedin size={20} /></div>
                LinkedIn Profile
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            className="flex flex-col gap-4 text-sm" 
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-400 ml-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-400 ml-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-400 ml-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                placeholder="How can I help you?"
                required
              ></textarea>
            </div>

            <motion.button 
              type="submit" 
              className="mt-4 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
