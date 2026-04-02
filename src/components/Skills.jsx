import { motion } from 'framer-motion'

const expertiseData = [
  { category: "UI / UX Design", percentage: 98, color: "bg-pink-400" },
  { category: "Tools", percentage: 92, color: "bg-gray-400" },
  { category: "Frontend", percentage: 90, color: "bg-accent" },
  { category: "Backend", percentage: 85, color: "bg-accentPurple" },
  { category: "Languages", percentage: 80, color: "bg-blue-400" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-white/[0.02] pt-32">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-12 h-[2px] bg-accentPurple"></span>
          Skill Metrics
        </motion.h2>
        
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-xl">
          <div className="flex flex-col gap-8 md:gap-10">
            {expertiseData.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-3">
                  <span className="text-white font-semibold tracking-wide uppercase text-sm md:text-base">
                    {skill.category}
                  </span>
                  <span className="text-gray-400 font-mono">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-dark/60 rounded-full h-4 md:h-5 border border-white/5 overflow-hidden shadow-inner">
                  <motion.div 
                    className={`h-full rounded-full ${skill.color} relative overflow-hidden`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), type: "spring", stiffness: 30 }}
                  >
                    {/* Add a subtle highlight to make the bar look rounded and premium */}
                    <div className="absolute inset-0 bg-white/20 w-full h-1"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
