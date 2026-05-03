import { motion } from 'framer-motion';
import { Trophy, Award, ExternalLink } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "National Level Hackathon SATWA 2026",
      subtitle: "Saintgits College of Engineering",
      icon: <Trophy size={32} className="text-yellow-400" />,
      description: "Participated in a grueling 36-hour national-level hackathon under the theme 'Engineering Resilience: Designing for Uncertainty'. Innovated and developed a resilient technological solution under significant time constraints, pitching the final working prototype to an expert panel.",
      link: "https://drive.google.com/file/d/1OPtjFfNKH8v5GI-wlLRTcPRz0C2LQ5TF/view?usp=sharing",
      linkText: "Certificate Link"
    },
    {
      title: "Mindscape-AJCE Mastermind 2025",
      subtitle: "Amal Jyothi College of Engineering",
      icon: <Award size={32} className="text-accentPurple" />,
      description: "Successfully competed and won the distinguished award for the 'Best Title Project'. Demonstrated profound problem-solving skills and creative direction spanning the entire software development lifecycle.",
      link: "https://drive.google.com/file/d/1Zc3yTqIS62-Tca36jr3-KxjbHGHZr7B3/view?usp=sharing",
      linkText: "Certificate Link"
    }
  ];

  return (
    <section id="achievements" className="py-24 px-6 relative bg-white/[0.01] pt-32">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-12 h-[2px] bg-yellow-400"></span>
          Achievements
        </motion.h2>

        <div className="flex flex-col gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:border-yellow-400/30 transition-colors duration-500 relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-white/10 p-4 rounded-2xl flex-shrink-0">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <h4 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">{item.subtitle}</h4>
                  <p className="text-gray-300 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      {item.linkText}
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
