import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Project() {
  return (
    <section id="projects" className="py-24 px-6 relative pt-32">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-12 h-[2px] bg-accentPurple"></span>
          Featured Project
        </motion.h2>
        
        <motion.div 
          className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-accent/50 transition-colors duration-500 flex flex-col md:flex-row"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="p-8 md:p-12 flex flex-col justify-center flex-1">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors">Eco Tracker</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              A web app designed to track environmental impact and promote sustainable habits. Helps users calculate their carbon footprint and find actionable ways to reduce it while exploring a simple interface.
            </p>
            <div>
              <a 
                href="https://github.com/Nourin333/Eco-tracker" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-colors border border-white/10"
              >
                <Github size={18} />
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
