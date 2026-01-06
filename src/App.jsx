import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowDown, Github, Linkedin, Mail, Menu, X, Database, Brain, BarChart3, ExternalLink, Sun, Moon } from 'lucide-react';
import { section } from 'framer-motion/client';

const scrollToSection = (e, id) => {
  e.preventDefault(); // Mencegah loncat langsung
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const projects = [
  {
    id: 1,
    title: "Sentiment Analysis of Hospital Services in X Based On Google Maps Reviews Using LSTM Model ",
    category: "Natural Language Processing",
    description: "Proyek ini membangun model LSTM untuk mengklasifikasikan sentimen ulasan Google Maps rumah sakit secara otomatis. Sistem memproses ribuan ulasan untuk memberikan insight kualitas layanan secara cepat dan akurat. Hasilnya membantu rumah sakit memantau kepuasan pasien secara real-time.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    color: "bg-blue-500",
    problem: "Rumah sakit di Kota X menerima ribuan ulasan dari Google Maps setiap bulan. Evaluasi kualitas layanan masih dilakukan secara manual, memakan waktu, tidak konsisten, dan sering terlambat dalam mengidentifikasi masalah pelayanan.",
    solution: "Membangun model sentiment analysis berbasis LSTM untuk mengklasifikasikan ulasan menjadi sentimen positif dan negatif. Model dilatih menggunakan dataset ulasan rumah sakit yang telah dibersihkan dan diproses secara NLP (tokenization, stopword removal, embedding).",
    impact: "Akurasi model mencapai 82% dalam pengujian. Mengurangi waktu analisis dari berhari-hari menjadi real-time otomatis. Rumah sakit dapat mengidentifikasi isu layanan utama (kecepatan pelayanan, keramahan staf, fasilitas) dengan lebih cepat untuk pengambilan keputusan.",
    techStack: ["Python", "TensorFlow", "Pandas"],
    githubLink: "https://colab.research.google.com/drive/1KtRZa4kPpsaec97QhWFL66VvXIkdbm8a?usp=sharing",
    demoLink: "https://sa-hospitalpwt.netlify.app"
  },
  {
    id: 2,
    title: "Emotion Classification of Sundanese Text Using LSTM and BERT Models",
    category: "Machine Learning",
    description: "Proyek ini mengembangkan model LSTM dan BERT untuk mengklasifikasikan emosi dalam teks berbahasa Sunda. Dataset disusun dari komentar media sosial dan dilabeli ke berbagai kategori emosi. Hasil penelitian memberikan baseline NLP penting bagi bahasa daerah Indonesia.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
    color: "bg-purple-500",
    problem: "Mengembangkan sistem klasifikasi emosi Bahasa Sunda menggunakan dua pendekatan LSTM dengan word embedding khusus dan BERT-based multilingual model untuk menangkap konteks antar-kata secara lebih dalam. Dataset disusun dari komentar media sosial berbahasa Sunda yang telah dilabeli ke dalam beberapa kategori emosi.",
    solution: "Membangun model klasifikasi multi-kelas menggunakan LSTM dan Word2Vec untuk mendeteksi 6 emosi dasar manusia.",
    impact: "Model BERT meningkatkan akurasi hingga 10%, lebih tinggi dibandingkan LSTM. Memberikan baseline pertama untuk analisis emosi dalam Bahasa Sunda. Mendukung pengembangan aplikasi edukasi, moderasi konten, dan riset linguistik lokal berbasis AI.",
    techStack: ["Python", "PyTorch", "BERT (Hugging Face)", "Pandas"],
    githubLink: "https://colab.research.google.com/drive/1t-LKfw3OQnL4_JcxyWpzUJ-UU0diwjZh?usp=sharing",
    demoLink: "https://ec-sundanese.netlify.app"
  },
  {
    id: 3,
    title: "Scrum Task Assignments Optimization: A Multi-Objective Goal Programming Approach",
    category: "Operations Research",
    description: "Proyek ini merancang model optimasi multi-objective goal programming untuk mengotomatisasi pembagian tugas pada tim Scrum. Sistem mempertimbangkan kapasitas tim dan kompleksitas task agar distribusi kerja lebih seimbang. Hasilnya membantu meningkatkan efisiensi perencanaan sprint.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    color: "bg-indigo-500",
    problem: "Terjaidnya overload pada beberapa anggota, tidak meratanya beban kerja, dan keterlambatan penyelesaian sprint.",
    solution: "Membangun model optimasi multi-objective goal programming untuk mengalokasikan tugas secara otomatis dengan mempertimbangkan: kapasitas dan keahlian anggota tim, tingkat kompleksitas tugas (story points), penyelesaian sprint tepat waktu. Model menghasilkan rekomendasi assignment yang optimal untuk setiap sprint.",
    impact: "Mengurangi workload imbalance. Meningkatkan penyelesaian sprint tepat waktu. Memberikan sistem rekomendasi berbasis data yang membantu Scrum Master melakukan perencanaan sprint yang lebih objektif dan efisien.",
    techStack: ["Python", "Pandas", "OR-Tools", "Gurobi"],
    githubLink: "https://github.com/TK-Bunga-Matahari/shinchan/blob/main/project1_task-management/solution/solution.ipynb",
    demoLink: null
  },
  { 
    id: 4,
    title: "AUTOAGRA: Drone Pertanian Minimalis",
    category: "Website Development",
    description: "AUTOAGRA adalah aplikasi web untuk memonitor penggunaan drone pertanian, termasuk waktu terbang, pengisian tangki pestisida, tanggal operasional, serta kondisi cuaca. Sistem ini membantu petani atau operator drone mencatat aktivitas secara terstruktur dan real-time. Platform dibangun agar memudahkan pengawasan efisiensi operasi drone dalam kegiatan pertanian modern.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    color: "bg-indigo-500",
    problem: "Pencatatan penggunaan Drone mulai dari waktu terbang, pengisian tangki pestisida. Pencatatan yang tidak terstruktur dapat membuat evaluasi efisiensi operasional menjadi lambat dan tidak akurat.",
    solution: "Membangun aplikasi web AUTOAGRA yang memungkinkan admin mencatat waktu terbang drone, jumlah pengisian tangki, tanggal operasional. Sistem dirancang dengan antarmuka sederhana agar mudah digunakan di lapangan.",
    impact: "Meningkatkan akurasi pencatatan operasional hingga real-time. Mempermudah analisis efisiensi penggunaan drone untuk kegiatan pertanian. Mengurangi kesalahan pencatatan manual dan mempercepat proses pengambilan keputusan berbasis data.",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    githubLink: "#",
    demoLink: null
  }
];

const services = [
  {
    title: "Text Mining & NLP",
    desc: "Mengolah data teks tidak terstruktur menjadi wawasan berharga.",
    icon: <Brain size={32} />
  },
  {
    title: "Predictive Analytics",
    desc: "Membangun model untuk memprediksi tren masa depan berbasis data.",
    icon: <BarChart3 size={32} />
  },
  {
    title: "System Optimization",
    desc: "Efisiensi proses bisnis menggunakan algoritma matematika canggih.",
    icon: <Database size={32} />
  }
];


const Navbar = ({ isDark, toggleTheme, onMenuClick, activeView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (view) => {
    onMenuClick(view);
    setIsOpen(false);
  }
  
  // Handler untuk link navbar agar smooth scroll juga
  const handleLinkClick = (e, id) => {
    scrollToSection(e, id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md transition-all border-b border-gray-100 dark:border-neutral-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <a href="#" onClick={() => handleNavClick('home')} className="text-2xl font-bold tracking-tight text-indigo-900 dark:text-white flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
            FAUZI IRFAN S.
          </a>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-neutral-400 ml-8">
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Expertise</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
           <button 
             onClick={toggleTheme}
             className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
             aria-label="Toggle Theme"
           >
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
           </button>

           <div className="hidden md:flex gap-4">
              <a href="https://www.linkedin.com/in/fauziirfans" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
              <a href="https://github.com/fauzirfann" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"><Github size={20} /></a>
           </div>
           {activeView === 'home' && (
             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white hover:text-indigo-600 transition-colors md:hidden">
               {isOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
           )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && activeView === 'home' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white dark:bg-neutral-900 border-t dark:border-neutral-800 mt-4 overflow-hidden shadow-lg md:hidden absolute top-full left-0 right-0"
          >
            <div className="p-6 flex flex-col gap-4 text-center">
               <a href="#projects" onClick={() => handleLinkClick(e, 'projects')} className="text-lg font-medium text-gray-700 dark:text-gray-300">Projects</a>
               <a href="#services" onClick={() => handleLinkClick(e, 'services')} className="text-lg font-medium text-gray-700 dark:text-gray-300">Expertise</a>
               <a href="#contact" onClick={() => handleLinkClick(e, 'contact')} className="text-lg font-medium text-indigo-600 dark:text-indigo-400">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-[#FDFBF9] dark:bg-neutral-950 relative overflow-hidden flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="w-12 h-1 bg-indigo-600 mb-8"></div>
          <h2 className="text-indigo-900/60 dark:text-indigo-200/60 font-medium mb-4 uppercase tracking-wider text-sm">Portfolio</h2>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-8">
            Hello, I'm <br/>
            <span className="text-indigo-600 dark:text-indigo-400">Fauzi.</span><br/>
            Data Scientist &<br/>
            AI Engineer.
          </h1>
          
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-md mb-10 leading-relaxed">
            Mengubah data kompleks menjadi solusi cerdas melalui Machine Learning dan Analisis Prediktif.
          </p>
          
          <motion.a 
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
          >
            My Project <ArrowDown size={18} />
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative h-[500px] w-full flex items-center justify-center"
        >
           <div className="relative w-full h-full max-w-lg mx-auto perspective-1000">
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              
              <div className="relative z-10 w-full h-full bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-neutral-800 overflow-hidden p-6 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-500">
                 <img 
                   src="https://avatars.githubusercontent.com/u/583231?v=4" 
                   alt="Fauzi Irfan Syaputra" 
                   className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-60"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/80 to-transparent"></div>
                 <div className="relative z-20 text-white p-6">
                    {/* <div className="text-4xl font-bold mb-2">98%</div> */}
                    {/* <div className="text-sm opacity-80">Model Accuracy</div> */}
                    {/* <div className="h-2 w-32 bg-white/20 rounded-full mt-4 overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                        //  animate={{ width: '98%' }}
                         transition={{ delay: 1, duration: 1.5 }}
                         className="h-full bg-green-400"
                       />
                    </div> */}
                 </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-5 -left-5 bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-xl z-20 border border-gray-50 dark:border-neutral-700"
              >
                 <Brain className="text-indigo-600 dark:text-indigo-400" size={32} />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute bottom-10 -right-5 bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-xl z-20 border border-gray-50 dark:border-neutral-700"
              >
                 <Database className="text-blue-500 dark:text-blue-400" size={32} />
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

const CaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-white dark:bg-neutral-900 w-full max-w-5xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden relative z-10 flex flex-col"
      >
        <div className="h-48 md:h-64 relative shrink-0">
           <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
           <button 
             onClick={onClose}
             className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
           >
             <X size={20} />
           </button>
           <div className="absolute bottom-6 left-6 md:left-10">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold tracking-wider uppercase mb-2">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
           </div>
        </div>

        <div className="overflow-y-auto p-6 md:p-10">
           <div className="grid md:grid-cols-3 gap-10 md:gap-16">
              <div className="md:col-span-2 space-y-10 text-gray-600 dark:text-gray-300">
                 <div>
                    <h3 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                       <div className="w-2 h-2 bg-red-500 rounded-full"></div> The Problem
                    </h3>
                    <p className="text-lg leading-relaxed">{project.problem}</p>
                 </div>
                 
                 <div>
                    <h3 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                       <div className="w-2 h-2 bg-yellow-500 rounded-full"></div> The Solution
                    </h3>
                    <p className="text-lg leading-relaxed">{project.solution}</p>
                 </div>

                 <div>
                    <h3 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div> Key Result & Impact
                    </h3>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/50">
                       <p className="text-indigo-900 dark:text-indigo-200 font-medium text-lg leading-relaxed">"{project.impact}"</p>
                    </div>
                 </div>
              </div>

              <div className="space-y-8">
                 <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-2xl border border-gray-100 dark:border-neutral-700">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4">Project Resources</h4>
                    <div className="space-y-3">
                       <a 
                         href={project.githubLink} 
                         className="flex items-center justify-between w-full px-4 py-3 bg-white dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 rounded-xl text-gray-700 dark:text-gray-200 hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all group"
                       >
                          <span className="flex items-center gap-2 font-medium"><Github size={18}/> Repository</span>
                          <ExternalLink size={16} className="opacity-50 group-hover:opacity-100" />
                       </a>
                       
                       {project.demoLink ? (
                         <a 
                           href={project.demoLink} 
                           className="flex items-center justify-between w-full px-4 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
                         >
                            <span className="flex items-center gap-2 font-medium"><ArrowRight size={18}/> Live Demo</span>
                         </a>
                       ) : (
                         <div className="px-4 py-3 bg-gray-100 dark:bg-neutral-700 rounded-xl text-gray-400 text-sm text-center italic">
                           Demo Private / Unavailable
                         </div>
                       )}
                    </div>
                 </div>

                 <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                       {project.techStack && project.techStack.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-white dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                            {tech}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="w-8 h-1 bg-indigo-600 mb-6"></div>
          <h3 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-widest mb-2">Selected Works</h3>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Data Science <br/>
            <span className="text-indigo-600 dark:text-indigo-400">Projects.</span>
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
               <div 
                 className="w-full lg:w-1/2 relative group cursor-pointer"
                 onClick={() => setSelectedProject(project)}
               >
                  <div className={`absolute inset-0 ${project.color} rounded-[2rem] transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 opacity-80`}></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white dark:bg-neutral-800 aspect-[4/3] border border-transparent dark:border-neutral-700">
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                           <ArrowRight size={24} />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="w-full lg:w-1/2">
                  <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wider uppercase mb-6">
                    {project.category}
                  </span>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{project.title}</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:gap-4 transition-all group"
                  >
                    Lihat Case Study <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ExpertiseSection = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-[#FDFBF9] dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Keahlian Teknis</h2>
           <p className="text-gray-500 dark:text-gray-400 text-lg">
             {/* Mengkombinasikan pemahaman matematika yang kuat dengan teknologi modern untuk memecahkan masalah nyata. */}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-neutral-900 p-10 rounded-3xl shadow-lg shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-neutral-800 hover:border-indigo-100 dark:hover:border-indigo-900 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section id="contact">
      <footer className="py-20 px-6 md:px-12 bg-white dark:bg-neutral-900 border-t border-gray-100 dark:border-neutral-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Tertarik berkolaborasi?
          </h2>
          <a href="mailto:fauzirfann1@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-indigo-600 dark:hover:bg-gray-200 transition-colors mb-12">
            <Mail size={20} /> Hubungi Fauzi
          </a>
          
          <div className="w-full border-t border-gray-100 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="text-xl font-bold text-indigo-900 dark:text-white">FAUZI.</span>
              <p className="text-gray-400 dark:text-gray-500 text-sm">© 2025 Portfolio Fauzi.</p>
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/fauziirfans" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
                <a href="https://github.com/fauzirfann" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"><Github size={20} /></a>
              </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [view, setView] = useState('home');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="bg-[#FDFBF9] dark:bg-neutral-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <ProjectSection />
      <ExpertiseSection />
      <Footer />
    </div>
  );
};

export default App;