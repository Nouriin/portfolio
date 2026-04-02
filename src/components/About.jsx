import { motion } from 'framer-motion'
import { MonitorSmartphone, Server, Code2, PenTool, BrainCircuit } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { Float, Sphere, Box, Cone } from '@react-three/drei'

function FloatingBackgroundShapes() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      {/* 3D Elements floating slowly in the background */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={3} position={[-5, 3, -4]}>
        <Sphere args={[0.8, 16, 16]}>
          <meshStandardMaterial color="#3b82f6" wireframe opacity={0.3} transparent />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2} position={[5, -2, -5]}>
        <Box args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial color="#8b5cf6" wireframe opacity={0.2} transparent />
        </Box>
      </Float>
      
      <Float speed={2.5} rotationIntensity={2} floatIntensity={3} position={[-6, -5, -6]}>
        <Cone args={[1, 2, 16]}>
          <meshStandardMaterial color="#ec4899" wireframe opacity={0.3} transparent />
        </Cone>
      </Float>
      
      <Float speed={1.8} rotationIntensity={3} floatIntensity={2} position={[6, 6, -8]}>
        <Sphere args={[2, 32, 32]}>
          <meshStandardMaterial color="#22c55e" wireframe opacity={0.15} transparent />
        </Sphere>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5} position={[0, 0, -10]}>
        <Box args={[3, 3, 3]}>
          <meshStandardMaterial color="#eab308" wireframe opacity={0.1} transparent />
        </Box>
      </Float>
    </>
  )
}

export default function About() {
  const techStack = [
    {
      title: "Frontend",
      icon: <MonitorSmartphone size={28} className="text-blue-400" />,
      colorClass: "from-blue-500/20 to-transparent border-blue-500/30 hover:border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]",
      description: "Building interactive, dynamic, and responsive user interfaces using component-based architecture and modern styling."
    },
    {
      title: "Backend (Node.js, Flask, React)",
      icon: <Server size={28} className="text-purple-400" />,
      colorClass: "from-purple-500/20 to-transparent border-purple-500/30 hover:border-purple-500/60 shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]",
      description: "Developing robust, scalable server-side applications, processing data efficiently, and creating secure APIs."
    },
    {
      title: "Languages (Python, C, C++, Dart)",
      icon: <Code2 size={28} className="text-yellow-400" />,
      colorClass: "from-yellow-500/20 to-transparent border-yellow-500/30 hover:border-yellow-500/60 shadow-[0_0_15px_rgba(234,179,8,0.15)] hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]",
      description: "Strong foundation in algorithms, data structures, and logic-driven creative problem solving."
    },
    {
      title: "UI / UX Design",
      icon: <PenTool size={28} className="text-pink-400" />,
      colorClass: "from-pink-500/20 to-transparent border-pink-500/30 hover:border-pink-500/60 shadow-[0_0_15px_rgba(236,72,153,0.15)] hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]",
      description: "Prototyping intuitive and aesthetically pleasing user experiences driven by user-centric design principles."
    },
    {
      title: "Machine Learning",
      icon: <BrainCircuit size={28} className="text-green-400" />,
      colorClass: "from-green-500/20 to-transparent border-green-500/30 hover:border-green-500/60 shadow-[0_0_15px_rgba(34,197,94,0.15)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]",
      description: "Implementing predictive models, data analysis pipelines, and algorithms to extract insights from complex datasets."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative pt-32 overflow-hidden">
      
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <FloatingBackgroundShapes />
        </Canvas>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-12 h-[2px] bg-accentPurple"></span>
          About Me
        </motion.h2>

        <div className="flex flex-col gap-16">
          {/* Expanded About Content */}
          <motion.div 
            className="bg-black/40 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl hover:border-accent/30 transition-colors duration-500 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white tracking-wide">Who I Am</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg">
              <p>
                I am a dedicated Computer Science Engineering student profoundly passionate about transforming complex problems into elegant software solutions. My journey into technology started with a deep curiosity for how things work under the hood, which quickly grew into a love for coding.
              </p>
              <p>
                I thrive on continuously learning modern frameworks and pushing the boundaries of what I can build. Whether it's architecting a scalable backend codebase or crafting visually stunning frontends, I believe in writing clean, efficient, and maintainable code.
              </p>
              <p>
                Beyond academics, I enjoy participating in technical projects, experimenting with new technologies, and aiming to build software that positively impacts people's lives. I am constantly driven by challenges and excited to kickstart my professional career as a software developer!
              </p>
            </div>
          </motion.div>

          {/* Tech Stack Details Box by Box */}
          <motion.div 
            className="flex flex-col gap-8 mt-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-wide px-2">Core Competencies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techStack.map((tech, index) => (
                <motion.div 
                  key={index}
                  className={`bg-gradient-to-br ${tech.colorClass} border border-b-0 border-r-0 p-8 rounded-3xl flex flex-col items-start gap-4 hover:-translate-y-2 transition-all duration-500 backdrop-blur-md`}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                >
                  <div className="bg-black/60 p-4 rounded-2xl shadow-inner mb-2 border border-white/5">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 tracking-wide">{tech.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
