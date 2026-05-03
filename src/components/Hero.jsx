import { Canvas } from '@react-three/fiber'
import { OrbitControls, TorusKnot, Float, Stars, Sparkles } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, MonitorSmartphone, Server, Code2, Wrench } from 'lucide-react'

function ComplexGeometry() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <TorusKnot args={[1.6, 0.4, 200, 30]} scale={1.2}>
        <meshStandardMaterial color="#8b5cf6" wireframe />
      </TorusKnot>
    </Float>
  )
}

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullName = "Nourin Fathima";

  useEffect(() => {
    let timer;
    const startDelay = setTimeout(() => {
      if (typedText.length < fullName.length) {
        timer = setTimeout(() => {
          setTypedText(fullName.slice(0, typedText.length + 1));
        }, 100);
      }
    }, typedText.length === 0 ? 600 : 0);

    return () => {
      clearTimeout(timer);
      clearTimeout(startDelay);
    };
  }, [typedText]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Sparkles count={150} scale={12} size={2} speed={0.4} opacity={0.5} color="#3b82f6" />
          <ComplexGeometry />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto backdrop-blur-[2px] p-8 rounded-3xl mt-12 w-full">
        <motion.h2 
          className="text-accentPurple font-semibold tracking-widest mb-4 uppercase text-sm"
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "0.1em" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to my universe
        </motion.h2>
        
        <div className="h-[60px] md:h-[90px] mb-6 flex justify-center items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-accent">
            {typedText}
            <span className="inline-block w-[4px] h-[0.9em] bg-accent animate-pulse ml-2 align-baseline rounded-full"></span>
          </h1>
        </div>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 font-light mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Computer Science Student | Aspiring Software Developer | Creative Coder & Problem Solver
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#projects"
              className="inline-block bg-accentPurple text-white px-8 py-4 rounded-full font-semibold shadow-[0_0_20px_rgba(139,92,246,0.4)] text-center"
              whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="https://drive.google.com/file/d/1Qw4-TjqFtlQrBndwG1VOOGeP-3I2k3qr/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-transparent border-2 border-accentPurple text-white px-8 py-4 rounded-full font-semibold shadow-[0_0_20px_rgba(139,92,246,0.2)] text-center"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(139,92,246,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Resume
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <motion.a 
              href="https://in.linkedin.com/in/nourin-fathima-ab111a327" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: '#3b82f6' }}
              className="text-gray-400 transition-colors p-2"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a 
              href="https://github.com/Nourin333" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: '#3b82f6' }}
              className="text-gray-400 transition-colors p-2"
            >
              <Github size={28} />
            </motion.a>
          </div>

          {/* Tech Stack Icons Mini */}
          <div className="mt-8 pt-6 border-t border-white/10 flex gap-6 text-gray-500 items-center justify-center w-full max-w-[200px]">
            <motion.div whileHover={{ scale: 1.2, color: '#3b82f6' }} title="Frontend" className="cursor-pointer">
              <MonitorSmartphone size={22} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, color: '#8b5cf6' }} title="Backend" className="cursor-pointer">
              <Server size={22} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, color: '#60a5fa' }} title="Languages" className="cursor-pointer">
              <Code2 size={22} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, color: '#d1d5db' }} title="Tools" className="cursor-pointer">
              <Wrench size={22} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
