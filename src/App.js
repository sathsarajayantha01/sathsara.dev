import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Palette, Globe, MapPin, Phone, Calendar, Star, User, Award, Figma, Layout, Layers, MonitorSmartphone, CheckCircle, FileCode, Monitor, Zap, Briefcase, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load heavy components
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const AnimatedBackground = lazy(() => import('./components/AnimatedBackground'));

// The one and only modern unique loader
import ModernUniqueLoader from './components/ModernUniqueLoader';

// Regular imports for critical components
import ScrollToTopButton from './components/ScrollToTopButton';
import SectionHeader from './components/SectionHeader';
import ProjectCard from './components/ProjectCard';
import AdvancedProjectCard from './components/AdvancedProjectCard';
import SkillBadge from './components/SkillBadge';
import SkillCard3D from './components/SkillCard3D';
import TypewriterText from './components/TypewriterText';
import AnimatedSection from './components/AnimatedSection';
import AppleGlassShowcase from './components/AppleGlassShowcase';
import LiquidEffect from './components/LiquidEffect';
import LazySection from './components/LazySection';
import { Tilt } from 'react-tilt';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Debug effect for menu state (only in development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Mobile menu state changed:', isMenuOpen);
    }
  }, [isMenuOpen]);

  // Memoize expensive data structures to prevent re-computation
  const services = useMemo(() => [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and attractive user interfaces with seamless user experiences for web and mobile applications.",
      icon: <Figma className="w-8 h-8" />,
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      title: "Web Design & Development",
      description: "Building responsive and performant websites with modern frameworks and clean code that works across all devices.",
      icon: <Globe className="w-8 h-8" />,
      features: ["Responsive Design", "Modern Frameworks", "Clean Code", "SEO Optimization"]
    },
    {
      title: "Graphic Design",
      description: "Crafting eye-catching visuals for brands including logos, marketing materials, and social media content that resonates with audiences.",
      icon: <Palette className="w-8 h-8" />,
      features: ["Brand Identity", "Print Design", "Digital Graphics", "Social Media Content"]
    },
    {
      title: "Mobile App Design",
      description: "Designing intuitive mobile app interfaces with focus on usability, visual appeal, and seamless user journeys across platforms.",
      icon: <MonitorSmartphone className="w-8 h-8" />,
      features: ["iOS & Android UI", "App Flow Design", "Interactive Prototypes", "Design Systems"]
    }
  ], []);

  // Your portfolio projects from GitHub site
  const projects = [
    {
      title: "Travelling Mobile App UI Design",
      description: "E-commerce application interface with user-centered approach",
      image: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/UI01.png",
      category: "UI/UX",
      previewLink: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/UI01.png",
      detailsLink: "#"
    },
    {
      title: "Brand Launching Graphic Design",
      description: "Complete visual identity designs for brand launch campaigns",
      image: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/Post01.png",
      category: "GRAPHIC",
      previewLink: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/Post01.png",
      detailsLink: "#"
    },
    {
      title: "Clothing Website",
      description: "Responsive design with online cloth ordering system",
      image: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/web1.png", 
      category: "WEB",
      previewLink: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/web1.png",
      detailsLink: "#"
    },
    {
      title: "Online Market Store App UI",
      description: "Data visualization UI with interactive charts and analytics",
      image: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/UI04.png",
      category: "UI/UX",
      previewLink: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/UI04.png",
      detailsLink: "#"
    },
    {
      title: "Marketing Materials",
      description: "Print and digital campaign with cohesive visual elements",
      image: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/Post02.jpg",
      category: "GRAPHIC",
      previewLink: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/Post02.jpg",
      detailsLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal branding site with dynamic content loading",
      image: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/web2.png",
      category: "WEB",
      previewLink: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/web2.png",
      detailsLink: "#"
    },
    {
      title: "Music Mobile App UI Design",
      description: "Modern interface for music streaming application",
      image: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/UI02.png",
      category: "UI/UX",
      previewLink: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/UI02.png",
      detailsLink: "#"
    },
    {
      title: "Different Like Graphic Design",
      description: "Creative visual identity designs with unique aesthetics",
      image: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/Post03.jpg",
      category: "GRAPHIC",
      previewLink: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/Post03.jpg",
      detailsLink: "#"
    },
    {
      title: "Restaurant Mobile App UI",
      description: "User interface for food ordering and delivery service",
      image: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/UI03.png",
      category: "UI/UX",
      previewLink: "https://sathsarajayantha01.github.io/SathsaraJayantha/img/UI03.png",
      detailsLink: "#"
    }
  ];

  // Your skills with actual percentages
  const skills = [
    { name: "UI/UX Design", icon: <Layout className="w-5 h-5" />, level: 95 },
    { name: "Figma Advanced", icon: <Figma className="w-5 h-5" />, level: 95 },
    { name: "Responsive Design", icon: <MonitorSmartphone className="w-5 h-5" />, level: 90 },
    { name: "UX Research", icon: <User className="w-5 h-5" />, level: 90 },
    { name: "Web Development", icon: <Code className="w-5 h-5" />, level: 90 },
    { name: "React & Next.js", icon: <Globe className="w-5 h-5" />, level: 85 },
    { name: "Adobe Photoshop", icon: <Palette className="w-5 h-5" />, level: 85 },
    { name: "Brand Strategy", icon: <Palette className="w-5 h-5" />, level: 85 },
  ];

  const experience = [
    {
      year: "2025-Present",
      title: "Senior UI/UX Designer",
      description: "Leading the design of user interfaces and experiences for web and mobile applications with focus on usability and visual appeal.",
      company: "Freelance"
    },
    {
      year: "2023 - 2025",
      title: "Web Designer",
      description: "Creating responsive websites with modern design trends and optimized for cross-platform compatibility.",
      company: "Design Studio"
    },
    {
      year: "2021 - 2023",
      title: "Graphic Designer",
      description: "Developing brand identities, marketing materials and visual assets for print and digital media.",
      company: "Creative Agency"
    },
    {
      year: "2019 - 2021",
      title: "UI Design Intern",
      description: "Supporting senior designers in creating user interfaces for websites and mobile applications.",
      company: "Tech Solutions"
    }
  ];

  // Static testimonials data
  const initialTestimonials = [
    {
      id: 1,
      name: "Amal Madhusanka",
      role: "Marketing Director",
      message: "Sathsara's designs have transformed our brand's visual identity. The attention to detail and creative thinking is exactly what we needed!",
      rating: 5,
      date: "2024-12-15"
    },
    {
      id: 2,
      name: "Lakshitha Silva",
      role: "Startup Founder",
      message: "Working with Sathsara was a pleasure. He understood our vision perfectly and delivered a website that exceeded our expectations in both design and functionality.",
      rating: 5,
      date: "2024-12-20"
    },
    {
      id: 3,
      name: "Nimal Gunawardena",
      role: "Business Owner",
      message: "The UI/UX design for our mobile app was exceptional. Our users love how intuitive and beautiful the interface is. Highly recommended!",
      rating: 5,
      date: "2024-12-25"
    }
  ];

  // State for managing testimonials
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    message: '',
    rating: 5
  });

  // Memoize stats to prevent re-computation
  const stats = useMemo(() => [
    { number: "5+", label: "Projects Completed" },
    { number: "5+", label: "Satisfied Clients" },
    { number: "1+", label: "Years Experience" },
  ], []);

  useEffect(() => {
    // The ModernLoader component now handles its own timing and will call setIsLoading(false)
    // when it's ready via the onComplete callback
    
    // Optimized scroll handler with better throttling
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Detect current section with improved accuracy
          const sections = ['home', 'about', 'services', 'experience', 'projects', 'contact'];
          const scrollPosition = window.scrollY + 100;
          
          // Find the section that's currently in view
          let current = null;
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const height = element.offsetHeight;
              
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                current = section;
                break;
              }
            }
          }
          
          // If no section is found but we're at the bottom, use the last section
          if (!current && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            current = 'contact';
          }
          
          if (current && current !== activeSection) {
            setActiveSection(current);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]); // Add activeSection as dependency to prevent unnecessary updates

  const scrollToSection = (sectionId) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Scrolling to section:', sectionId);
    }
    
    const element = document.getElementById(sectionId);
    if (!element) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Element not found:', sectionId);
      }
      return;
    }
    
    const offset = 80; // Header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Update active section manually for immediate feedback
    setActiveSection(sectionId);
    
    // Close mobile menu
    setIsMenuOpen(false);
    if (process.env.NODE_ENV === 'development') {
      console.log('Mobile menu closed');
    }
  };

  const githubProjects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built with React and TailwindCSS",
      image: "https://repository-images.githubusercontent.com/773478297/25d94345-32bd-47d7-a965-9682f09b43c9",
      category: "GITHUB",
      githubLink: "https://github.com/SathsaraJayantha01/SathsaraJayantha",
      detailsLink: "https://sathsarajayantha01.github.io/SathsaraJayantha"
    },
    {
      title: "Modern Portfolio",
      description: "A modernized portfolio with glassmorphism and animations",
      image: "https://repository-images.githubusercontent.com/737376028/c0c8eb0b-23f5-4e37-bf93-18f4ef532101",
      category: "GITHUB",
      githubLink: "https://github.com/SathsaraJayantha01/my-portfolio",
      detailsLink: "#"
    },
    {
      title: "Sri Lanka Tourism",
      description: "A tourism website showcasing Sri Lanka's attractions",
      image: "https://repository-images.githubusercontent.com/497635507/ecebd053-ed2c-47ad-a2f3-59e5702008c7",
      category: "GITHUB",
      githubLink: "https://github.com/SathsaraJayantha/SL-Tourism-Website",
      detailsLink: "#"
    }
  ];
  
  // Enhanced project filtering with proper categorization
  const filteredProjects = useMemo(() => {
    if (filterCategory === 'all') {
      return [...projects, ...githubProjects];
    } else if (filterCategory === 'GITHUB') {
      return githubProjects;
    } else {
      // Filter from both project arrays
      const filteredMainProjects = projects.filter(project => project.category === filterCategory);
      const filteredGitProjects = githubProjects.filter(project => project.category === filterCategory);
      return [...filteredMainProjects, ...filteredGitProjects];
    }
  }, [filterCategory, projects, githubProjects]);

  // Handle adding new testimonial
  const handleAddTestimonial = (e) => {
    e.preventDefault();
    
    if (!newTestimonial.name.trim() || !newTestimonial.message.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    const testimonial = {
      id: Date.now(),
      ...newTestimonial,
      date: new Date().toISOString().split('T')[0]
    };

    setTestimonials(prev => [testimonial, ...prev]);
    setNewTestimonial({
      name: '',
      role: '',
      message: '',
      rating: 5
    });
    setShowTestimonialForm(false);
    
    // Show success message
    alert('Thank you! Your testimonial has been added successfully.');
  };

  const handleInputChange = (field, value) => {
    setNewTestimonial(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-black dark:via-gray-900 dark:to-blue-900 bg-mesh-pattern bg-mesh-gradient bg-fixed text-gray-800 dark:text-white relative overflow-hidden font-outfit transition-colors duration-500">
      {/* Add LiquidEffect component to enable interactive glass effects */}
      <LiquidEffect />
      
      {/* Enhanced Animated Background */}
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>
      
      {isLoading ? (
        <ModernUniqueLoader onComplete={() => setIsLoading(false)} />
      ) : null}
      
      {/* Lazy-loaded Particle Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />}>
        <ParticleBackground />
      </Suspense>
      <ScrollToTopButton />
      {/* Modern Navigation */}
      <motion.nav 
        className="main-navigation fixed top-0 w-full z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background with blur and glass effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/85 to-black/80 backdrop-blur-lg shadow-lg border-b border-blue-500/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center py-4">
            {/* Logo with enhanced animation */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative group cursor-pointer" onClick={() => scrollToSection('home')}>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                  Sathsara Jayantha
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </div>
            </motion.div>
            
            {/* Desktop Menu - Modern & Beautiful */}
            <div className="hidden md:flex desktop-menu">
              <div className="bg-blue-950/30 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-blue-500/20">
                <div className="flex space-x-1">
                  {['home', 'about', 'services', 'experience', 'projects', 'contact'].map((item, index) => (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                        activeSection === item 
                          ? 'bg-gradient-to-r from-blue-600/80 to-blue-500/80 text-white shadow-lg shadow-blue-500/20' 
                          : 'text-blue-100 hover:bg-blue-800/30'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="capitalize font-medium">{item}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button with improved animation */}
            <motion.button
              className="md:hidden mobile-menu-button relative z-20 w-11 h-11 flex items-center justify-center rounded-full bg-blue-900/30 backdrop-blur-sm border border-blue-500/20"
              onClick={() => {
                if (process.env.NODE_ENV === 'development') {
                  console.log('Mobile menu clicked:', !isMenuOpen);
                }
                setIsMenuOpen(!isMenuOpen);
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(30, 64, 175, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              style={{ touchAction: 'manipulation' }}
            >
              {isMenuOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-blue-300" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                >
                  <Menu className="w-5 h-5 text-blue-300" />
                </motion.div>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu - Enhanced with animations and glass effect */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Mobile menu overlay */}
                <motion.div 
                  className="mobile-menu-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Mobile menu container */}
                <motion.div 
                  className="mobile-menu-container md:hidden fixed top-20 left-0 right-0 z-50 backdrop-blur-xl bg-black/85 border-b border-blue-500/30 overflow-hidden shadow-xl"
                  initial={{ height: 0, opacity: 0, y: -20 }}
                  animate={{ height: 'auto', opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="py-4 px-2 space-y-1">
                    {['home', 'about', 'services', 'experience', 'projects', 'contact'].map((item, index) => (
                      <motion.button
                        key={item}
                        onClick={() => {
                          if (process.env.NODE_ENV === 'development') {
                            console.log('Menu item clicked:', item);
                          }
                          scrollToSection(item);
                        }}
                        className={`mobile-menu-item block w-full text-left py-3 px-4 rounded-lg capitalize transition-all duration-300 ${
                          activeSection === item 
                            ? 'bg-gradient-to-r from-blue-600/60 to-blue-500/50 text-white active' 
                            : 'text-gray-300 hover:bg-blue-900/30 hover:text-white'
                        }`}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.05 * index, duration: 0.3 }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></div>
                          <span className="font-medium">{item}</span>
                        </div>
                      </motion.button>
                    ))}
                    
                    {/* Mobile menu decorative elements */}
                    <motion.div 
                      className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.2, 0.3] 
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section - Modern Redesign */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="fluid-blob w-[500px] h-[500px] -left-40 top-20 opacity-20 animate-blob-slow"></div>
          <div className="fluid-blob w-[400px] h-[400px] right-0 bottom-0 opacity-20 animate-blob-slow-reverse"></div>
          <div className="absolute top-1/4 left-1/4 w-full h-full bg-grid-pattern opacity-5 transform rotate-12"></div>
        </div>
        
        <div className="absolute top-20 md:top-32 left-0 w-full">
          <div className="container mx-auto px-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
          </div>
        </div>
        
        <motion.div 
          className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side - Text Content */}
          <motion.div 
            className="text-left order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-blue-400 mb-2 text-xl font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="gradient-text">
                Sathsara Jayantha
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-200 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="relative inline-block">
                I'm a <TypewriterText words={["UI/UX Designer", "Web Developer", "Graphic Designer"]} />
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                ></motion.span>
              </span>
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Crafting digital experiences that blend creativity with functionality.
              I specialize in creating stunning user interfaces and intuitive user experiences
              for web and mobile applications with a focus on modern design principles.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex gap-6 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <motion.a 
                href="https://github.com/SathsaraJayantha01" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-blue-400/30 bg-blue-900/20 text-blue-300 hover:bg-blue-800/40 hover:text-blue-200 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/sathsarajayantha01/" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-blue-400/30 bg-blue-900/20 text-blue-300 hover:bg-blue-800/40 hover:text-blue-200 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href="mailto:sathsarajayantha8@gmail.com" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-blue-400/30 bg-blue-900/20 text-blue-300 hover:bg-blue-800/40 hover:text-blue-200 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <Mail size={18} />
              </motion.a>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <motion.a
                href="https://sathsarajayantha01.github.io/SathsaraJayantha/pdf/Sathsara_Jayantha_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume <ExternalLink size={16} />
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 rounded-full font-medium border-2 border-blue-400/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Profile Image */}
          <motion.div 
            className="relative order-1 md:order-2 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Large Circular Frame */}
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-xl animate-pulse-slow opacity-70"></div>
              
              {/* Rotating Outer Rings */}
              <motion.div 
                className="absolute -inset-4 rounded-full border-2 border-blue-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
              </motion.div>
              
              <motion.div 
                className="absolute -inset-8 rounded-full border-2 border-blue-400/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 -left-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-cyan-500 rounded-full"></div>
              </motion.div>
              
              {/* Image Container */}
              <div className="w-full h-full rounded-full mx-auto relative z-10 overflow-hidden p-2 bg-gradient-to-tr from-blue-800/50 to-cyan-600/50 shadow-2xl">
                <img
                  src="https://sathsarajayantha01.github.io/SathsaraJayantha/img/Untitled-145-modified.png"
                  alt="Sathsara Jayantha"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Floating Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div 
              className="w-6 h-10 rounded-full border-2 border-blue-400/50 flex justify-center p-1.5"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                animate={{ y: [0, 14, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black/30 via-blue-950/10 to-blue-900/5 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated blob */}
          <motion.div 
            className="absolute top-20 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3] 
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Glowing orb */}
          <motion.div 
            className="absolute bottom-20 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          
          {/* Radial gradient */}
          <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section header with modern styling */}
          <motion.div 
            className="relative mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "7rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            
            <SectionHeader 
              title="About Me" 
              subtitle="Turning creative visions into digital reality" 
            />
            
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "12rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
            
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>
          
          {/* Main content with modern layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Profile & Bio - 5 columns wide */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Glass profile card */}
              <div className="relative mb-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-black/30 rounded-2xl blur-md transform -rotate-1 scale-[1.03]"></div>
                <motion.div 
                  className="relative p-5 border border-blue-500/20 rounded-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-blue-900/40 to-black/40 shadow-xl"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Profile image with glowing effect */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full">
                      {/* Pulsing glow effect */}
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-xl"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.7, 0.5]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      
                      {/* Profile image container */}
                      <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-cyan-400">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/30">
                          <img 
                            src="https://sathsarajayantha01.github.io/SathsaraJayantha/img/Untitled-145-modified.png"
                            alt="Sathsara Jayantha"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience badge - Restyled */}
                  <motion.div 
                    className="absolute -top-1 -right-1 bg-gradient-to-br from-blue-500 to-blue-700 text-white px-4 py-2 rounded-bl-lg rounded-tr-lg shadow-lg border border-blue-400/50 overflow-hidden flex items-center gap-2 text-sm"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <motion.span
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <div className="text-2xl font-bold text-white inline-block">1+</div>
                    </motion.span>
                    <div>Years<br/>Experience</div>
                  </motion.div>
                  
                  {/* Bio header */}
                  <motion.h3 
                    className="text-2xl font-bold text-blue-300 mb-4 relative inline-block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Sathsara Jayantha
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 w-full" 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                    />
                  </motion.h3>
                  
                  {/* Dynamic role display */}
                  <motion.p 
                    className="text-blue-200 mb-4 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    UI/UX Designer & Web Developer
                  </motion.p>
                  
                  {/* Bio paragraph with animated reveal */}
                  <motion.p 
                    className="text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    I specialize in creating visually stunning and highly usable digital products. 
                    Bringing together creativity and technical expertise to deliver solutions that not only look beautiful but 
                    also perform flawlessly and create meaningful user experiences.
                  </motion.p>
                  
                  {/* Social links with hover effects */}
                  <motion.div 
                    className="flex space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {[
                      { icon: <Github className="w-5 h-5" />, link: "https://github.com/sathsarajayantha01", color: "from-gray-700 to-gray-900" },
                      { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/sathsarajayantha01/", color: "from-blue-600 to-blue-800" },
                      { icon: <Mail className="w-5 h-5" />, link: "mailto:sathsarajayantha8@gmail.com", color: "from-blue-400 to-cyan-600" }
                    ].map((item, index) => (
                      <motion.a 
                        key={index}
                        href={item.link}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300`}
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {item.icon}
                        <motion.span
                          className="absolute inset-0 rounded-full bg-blue-400/20"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 0.8 }}
                        />
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Key features */}
              <div className="space-y-4 mt-8">
                {[
                  { icon: <CheckCircle className="w-6 h-6" />, text: "Pixel-perfect UI design with attention to every detail", gradient: "from-blue-600 to-blue-900" },
                  { icon: <User className="w-6 h-6" />, text: "User-centered approach focusing on intuitive experiences", gradient: "from-blue-700 to-black" },
                  { icon: <Layers className="w-6 h-6" />, text: "Clean, modern code following best practices", gradient: "from-black to-blue-800" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/30 to-black/40 backdrop-blur-sm shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    {/* Icon wrapper with gradient */}
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.gradient} text-white shadow-md`}>
                      {item.icon}
                    </div>
                    
                    {/* Text content */}
                    <div>
                      <h4 className="font-medium text-white mb-1">{item.text.split(' ').slice(0,2).join(' ')}</h4>
                      <p className="text-blue-200 text-sm">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Skills section - 7 columns wide */}
            <motion.div 
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Skills header */}
              <motion.h3 
                className="text-2xl font-bold text-blue-300 mb-6 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Skills & Expertise
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-transparent w-full" 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.h3>
              
              {/* Skills mastery visualization */}
              <motion.p
                className="text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Specialized in modern UI/UX design tools and web development technologies.
              </motion.p>
              
              {/* Featured skills with modern card design - no percentages */}
              <div className="grid md:grid-cols-3 gap-5 mb-8">
                {skills.slice(0, 6).map((skill, index) => (
                  <Tilt key={index} className="parallax-effect w-full h-full" options={{ max: 15, scale: 1.05, speed: 500 }}>
                    <motion.div
                      className="h-full relative rounded-xl shadow-xl overflow-hidden backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -8, 
                        boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 0 15px rgba(59, 130, 246, 0.3)"
                      }}
                    >
                      {/* Glowing backgrounds */}
                      <div className="absolute w-full h-full">
                        <motion.div 
                          className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-30 ${
                            index % 3 === 0 ? 'bg-blue-500' :
                            index % 3 === 1 ? 'bg-blue-700' :
                            'bg-blue-900'
                          }`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.2, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                        <motion.div 
                          className={`absolute -bottom-10 -left-10 w-24 h-24 rounded-full blur-2xl opacity-20 ${
                            index % 3 === 0 ? 'bg-blue-800' :
                            index % 3 === 1 ? 'bg-blue-600' :
                            'bg-blue-400'
                          }`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.3, 0.2],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.5
                          }}
                        />
                      </div>
                      
                      {/* Border glow */}
                      <div className="absolute inset-0 border border-blue-500/20"></div>
                      
                      {/* Background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        index % 3 === 0 ? 'from-blue-600/20 via-blue-900/30 to-black/40' :
                        index % 3 === 1 ? 'from-black/40 via-blue-900/30 to-blue-800/20' :
                        'from-blue-800/20 via-black/30 to-blue-600/20'
                      }`}></div>
                      
                      {/* Subtle pattern */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                      
                      {/* Content wrapper */}
                      <div className="relative p-6 flex flex-col items-center justify-center h-full text-center z-10">
                        {/* Skill icon with animated container */}
                        <motion.div 
                          className={`p-4 rounded-xl mb-4 bg-gradient-to-br ${
                            index % 3 === 0 ? 'from-blue-500 to-blue-700' :
                            index % 3 === 1 ? 'from-blue-700 to-black' :
                            'from-black to-blue-700'
                          } text-white shadow-lg`}
                          whileHover={{ 
                            rotate: [0, -5, 5, -5, 0],
                            scale: 1.1,
                            transition: { duration: 0.6 }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {React.cloneElement(skill.icon, { className: "w-8 h-8" })}
                        </motion.div>
                        
                        {/* Skill name with gradient text */}
                        <h4 className="text-lg font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-1">
                          {skill.name}
                        </h4>
                        
                        {/* Skill tag */}
                        <motion.div 
                          className="mt-1 px-3 py-1 rounded-full bg-blue-800/30 border border-blue-500/20 text-xs text-blue-300"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                          viewport={{ once: true }}
                        >
                          {index % 3 === 0 ? 'Expert' : index % 3 === 1 ? 'Advanced' : 'Proficient'}
                        </motion.div>
                      </div>
                      
                      {/* Decorative bottom line */}
                      <motion.div 
                        className={`absolute bottom-0 left-0 h-1 ${
                          index % 3 === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-400' :
                          index % 3 === 1 ? 'bg-gradient-to-r from-black to-blue-700' :
                          'bg-gradient-to-r from-blue-900 to-black'
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </Tilt>
                ))}
              </div>
              
              {/* Additional skills with chip design */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {skills.slice(6).map((skill, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-sm border border-blue-500/20 
                    bg-gradient-to-br from-black/60 to-blue-900/40 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * (index + 6) }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)",
                      scale: 1.05
                    }}
                  >
                    {/* Skill icon with glow */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20"></div>
                      <div className="relative p-2 rounded-full bg-gradient-to-br from-blue-700 to-black text-blue-300">
                        {React.cloneElement(skill.icon, { className: "w-5 h-5" })}
                      </div>
                    </div>
                    
                    {/* Skill name */}
                    <div className="font-medium text-blue-100">{skill.name}</div>
                    
                    {/* Decorative dot */}
                    <div className="ml-1 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  </motion.div>
                ))}
              </div>
              
              {/* Resume download button */}
              <motion.div 
                className="mt-8 flex justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="https://sathsarajayantha01.github.io/SathsaraJayantha/pdf/Sathsara_Jayantha_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download My Resume
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  
                  <motion.span
                    className="absolute inset-0 rounded-full bg-blue-400/20"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Beautiful Design */}
      <section id="services" className="py-24 px-4 relative overflow-hidden">
        {/* Sophisticated background with minimal distraction */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-950/20 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03)_0%,transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            title="Professional Services" 
            subtitle="Comprehensive digital solutions crafted with precision and innovation" 
          />
          
          {/* Modern grid layout with enhanced visual hierarchy */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.1 * index,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group"
              >
                <Tilt options={{ max: 8, scale: 1.02, speed: 400 }}>
                  <div className="relative h-full">
                    {/* Modern card container with sophisticated glass effect */}
                    <div className="relative h-full bg-gradient-to-br from-slate-800/40 via-slate-800/60 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                      
                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-500/20 to-purple-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                      
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                      
                      {/* Icon container with modern styling */}
                      <div className="relative mb-8">
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 group-hover:border-blue-400/40 group-hover:scale-110 transition-all duration-300">
                          <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                            {service.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content with improved typography */}
                      <div className="relative space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-3 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                            {service.title}
                          </h3>
                          <p className="text-slate-300 leading-relaxed text-lg">
                            {service.description}
                          </p>
                        </div>
                        
                        {/* Features list with modern styling */}
                        <div className="space-y-4">
                          <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                          <div className="grid gap-3">
                            {service.features.map((feature, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: 0.4 + (0.1 * i),
                                  ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                              >
                                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-4 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-shadow duration-300"></div>
                                <span className="text-slate-300 font-medium">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom accent */}
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-600/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced call-to-action section */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 p-8 bg-gradient-to-r from-slate-800/30 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl">
              {/* WhatsApp Business Button */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <a 
                  href="https://wa.me/message/ZWCJZ76JDVM6I1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative inline-flex items-center w-full sm:w-auto px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg transition-all duration-300 hover:shadow-green-500/30"
                >
                  <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="absolute right-0 flex h-full w-10 translate-x-full items-center justify-start duration-500 ease-out group-hover:-translate-x-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-1.889-1.889-5.091-1.889-6.98 0l-.707.707 1.414 1.414.707-.707z"></path>
                      <path d="M10 17.414l-1.707-1.707-1.414 1.414L10 20.242l6.014-6.014-1.414-1.414z"></path>
                    </svg>
                  </span>
                  <span className="relative flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs opacity-80">WhatsApp Business</span>
                      <span className="font-medium">Hire Me</span>
                    </div>
                  </span>
                </a>
              </motion.div>
              
              {/* Email Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <a 
                  href="mailto:sathsarajayantha8@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative inline-flex items-center w-full sm:w-auto px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/30"
                >
                  <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="absolute right-0 flex h-full w-10 translate-x-full items-center justify-start duration-500 ease-out group-hover:-translate-x-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-1.889-1.889-5.091-1.889-6.98 0l-.707.707 1.414 1.414.707-.707z"></path>
                      <path d="M10 17.414l-1.707-1.707-1.414 1.414L10 20.242l6.014-6.014-1.414-1.414z"></path>
                    </svg>
                  </span>
                  <span className="relative flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs opacity-80">Email Me</span>
                      <span className="font-medium">Get a Quote</span>
                    </div>
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-24 px-4 bg-gradient-to-b from-blue-950/20 via-black/30 to-blue-950/10 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQjcwQTYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PGNpcmNsZSBjeD0iMS41IiBjeT0iMS41IiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        {/* Animated background orbs */}
        <motion.div 
          className="absolute top-20 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            translateY: [0, 50, 0],
            opacity: [0.15, 0.1, 0.15] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ 
            translateY: [0, -30, 0],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main section header */}
          <div className="text-center mb-16">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeader 
                title="Experience & Education"
                subtitle="My professional journey and academic background" 
              />
              
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "16rem", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
          
          {/* Two-column layout for Experience & Education */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* EXPERIENCE COLUMN */}
            <div>
              <motion.div
                className="mb-10 flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Professional Experience</h3>
              </motion.div>
              
              <div className="relative pl-8 space-y-8 before:absolute before:left-0 before:ml-3.5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-blue-600/50 before:to-transparent before:z-0">
                {/* First Experience Item */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute -left-12 w-7 h-7 rounded-full border-2 border-blue-500 bg-black flex items-center justify-center shadow-md shadow-blue-500/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    </motion.div>
                    
                    <Tilt options={{ max: 10, scale: 1, speed: 300 }} className="block">
                      <motion.div 
                        className="backdrop-blur-md bg-gradient-to-br from-blue-900/30 via-black/80 to-black/70 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 shadow-xl"
                        whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(59, 130, 246, 0.3)" }}
                      >
                        <div className="absolute -right-2 -top-2 px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold rounded-lg shadow-lg">
                          2025-Present
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">UI/UX Designer</h3>
                        <p className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded-full text-blue-200 text-sm mb-3">
                          Freelance
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Leading the design of user interfaces and experiences for web and mobile applications with focus on usability and visual appeal.
                        </p>
                      </motion.div>
                    </Tilt>
                  </div>
                </motion.div>
                
                {/* Second Experience Item */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute -left-12 w-7 h-7 rounded-full border-2 border-blue-500 bg-black flex items-center justify-center shadow-md shadow-blue-500/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    </motion.div>
                    
                    <Tilt options={{ max: 10, scale: 1, speed: 300 }} className="block">
                      <motion.div 
                        className="backdrop-blur-md bg-gradient-to-br from-blue-900/30 via-black/80 to-black/70 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 shadow-xl"
                        whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(59, 130, 246, 0.3)" }}
                      >
                        <div className="absolute -right-2 -top-2 px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold rounded-lg shadow-lg">
                          2025-Present
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">UI/UX Designer, Web Designer</h3>
                        <p className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded-full text-blue-200 text-sm mb-3">
                          Qlony
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Contributed to a wide range of design and development tasks, including crafting intuitive UI/UX for web platforms, 
                          designing engaging social media content, and developing responsive websites. Collaborated closely with cross-functional 
                          teams to deliver user-centered digital solutions that align with brand goals and modern design trends.
                        </p>
                      </motion.div>
                    </Tilt>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* EDUCATION COLUMN */}
            <div>
              <motion.div
                className="mb-10 flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-black shadow-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Education</h3>
              </motion.div>
              
              <div className="relative pl-8 space-y-8 before:absolute before:left-0 before:ml-3.5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-700 before:via-blue-600/50 before:to-transparent before:z-0">
                {/* Degree 1 */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute -left-12 w-7 h-7 rounded-full border-2 border-blue-600 bg-black flex items-center justify-center shadow-md shadow-blue-600/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    </motion.div>
                    
                    <Tilt options={{ max: 10, scale: 1, speed: 300 }} className="block">
                      <motion.div 
                        className="backdrop-blur-md bg-gradient-to-br from-blue-900/30 via-black/80 to-black/70 p-6 rounded-xl border border-blue-600/20 hover:border-blue-500/40 transition-all duration-300 shadow-xl"
                        whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(59, 130, 246, 0.3)" }}
                      >
                        <div className="absolute -right-2 -top-2 px-4 py-1 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-sm font-semibold rounded-lg shadow-lg">
                          2025-Present
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">BEng (Hons) in Software Engineering (TOP UP)</h3>
                        <p className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded-full text-blue-200 text-sm mb-3">
                          London Metropolitan University, London, UK
                        </p>
                      </motion.div>
                    </Tilt>
                  </div>
                </motion.div>
                
                {/* Degree 2 */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute -left-12 w-7 h-7 rounded-full border-2 border-blue-600 bg-black flex items-center justify-center shadow-md shadow-blue-600/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    </motion.div>
                    
                    <Tilt options={{ max: 10, scale: 1, speed: 300 }} className="block">
                      <motion.div 
                        className="backdrop-blur-md bg-gradient-to-br from-blue-900/30 via-black/80 to-black/70 p-6 rounded-xl border border-blue-600/20 hover:border-blue-500/40 transition-all duration-300 shadow-xl"
                        whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(59, 130, 246, 0.3)" }}
                      >
                        <div className="absolute -right-2 -top-2 px-4 py-1 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-sm font-semibold rounded-lg shadow-lg">
                          2024-2025
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Higher National Diploma in Computing - RQF</h3>
                        <p className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded-full text-blue-200 text-sm mb-3">
                          Pearson College London
                        </p>
                      </motion.div>
                    </Tilt>
                  </div>
                </motion.div>
                
                {/* Degree 3 */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute -left-12 w-7 h-7 rounded-full border-2 border-blue-600 bg-black flex items-center justify-center shadow-md shadow-blue-600/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    </motion.div>
                    
                    <Tilt options={{ max: 10, scale: 1, speed: 300 }} className="block">
                      <motion.div 
                        className="backdrop-blur-md bg-gradient-to-br from-blue-900/30 via-black/80 to-black/70 p-6 rounded-xl border border-blue-600/20 hover:border-blue-500/40 transition-all duration-300 shadow-xl"
                        whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(59, 130, 246, 0.3)" }}
                      >
                        <div className="absolute -right-2 -top-2 px-4 py-1 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-sm font-semibold rounded-lg shadow-lg">
                          2024
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Level 03 Diploma in Information Technology (UK Certification)</h3>
                        <p className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded-full text-blue-200 text-sm mb-3">
                          Esoft Metro Campus Sri Lanka
                        </p>
                      </motion.div>
                    </Tilt>
                  </div>
                </motion.div>
                
                {/* Degree 4 */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute -left-12 w-7 h-7 rounded-full border-2 border-blue-600 bg-black flex items-center justify-center shadow-md shadow-blue-600/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    </motion.div>
                    
                    <Tilt options={{ max: 10, scale: 1, speed: 300 }} className="block">
                      <motion.div 
                        className="backdrop-blur-md bg-gradient-to-br from-blue-900/30 via-black/80 to-black/70 p-6 rounded-xl border border-blue-600/20 hover:border-blue-500/40 transition-all duration-300 shadow-xl"
                        whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(59, 130, 246, 0.3)" }}
                      >
                        <div className="absolute -right-2 -top-2 px-4 py-1 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-sm font-semibold rounded-lg shadow-lg">
                          2010-2023
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">General Certificate of Education Ordinary Level & Advanced Level</h3>
                        <p className="inline-block px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded-full text-blue-200 text-sm mb-3">
                          Mahinda College Galle Sri Lanka
                        </p>
                      </motion.div>
                    </Tilt>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section - Enhanced with Add Testimonial Feature */}
      <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
        {/* Modern background - Black and Blue only */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-950/40 to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08)_0%,transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered Header */}
          <div className="text-center mb-16">
            <SectionHeader 
              title="Client Testimonials" 
              subtitle="What our valued clients say about their experience working with us" 
            />
            
            {/* Add Testimonial Button - Repositioned below header */}
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setShowTestimonialForm(true)}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Your Testimonial
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Testimonials Grid */}
          <motion.div 
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Tilt options={{ max: 8, scale: 1.02, speed: 400 }}>
                  <div className="relative h-full">
                    {/* Modern testimonial card - Black and Blue only */}
                    <div className="h-full bg-gradient-to-br from-black/70 via-blue-950/50 to-black/80 backdrop-blur-xl border border-blue-900/30 rounded-2xl p-8 group-hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                      
                      {/* Subtle glow effect - Blue only */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/0 via-blue-500/15 to-blue-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                      
                      {/* Rating stars */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                              viewport={{ once: true }}
                            >
                              <Star className="w-5 h-5 text-blue-400 fill-current" />
                            </motion.div>
                          ))}
                        </div>
                        {testimonial.date && (
                          <span className="text-xs text-blue-300/70">
                            {new Date(testimonial.date).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      
                      {/* Testimonial content */}
                      <div className="relative mb-8">
                        <div className="absolute -top-2 -left-2 text-4xl text-blue-400/40 font-serif">"</div>
                        <p className="text-gray-200 leading-relaxed text-lg italic relative z-10 pl-4">
                          {testimonial.message}
                        </p>
                        <div className="absolute -bottom-4 -right-2 text-4xl text-blue-400/40 font-serif">"</div>
                      </div>
                      
                      {/* Client info */}
                      <div className="flex items-center pt-6 border-t border-blue-800/30">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-lg font-bold text-white shadow-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="font-semibold text-blue-300 text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-blue-200/70">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats section - Black and Blue only */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 p-8 bg-gradient-to-r from-black/40 to-blue-950/40 backdrop-blur-xl border border-blue-800/40 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{testimonials.length}+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5.0</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>

        {/* Add Testimonial Modal */}
        <AnimatePresence>
          {showTestimonialForm && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTestimonialForm(false)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
              
              {/* Modal - Black and Blue only */}
              <motion.div
                className="relative w-full max-w-md bg-gradient-to-br from-black/90 to-blue-950/80 border border-blue-800/50 rounded-2xl p-8 shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Share Your Experience</h3>
                  <button
                    onClick={() => setShowTestimonialForm(false)}
                    className="text-blue-300 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleAddTestimonial} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={newTestimonial.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-xl text-white placeholder-blue-300/70 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Your Role/Title
                    </label>
                    <input
                      type="text"
                      value={newTestimonial.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-xl text-white placeholder-blue-300/70 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="e.g., CEO, Marketing Director"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Your Testimonial *
                    </label>
                    <textarea
                      value={newTestimonial.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-blue-950/50 border border-blue-700 rounded-xl text-white placeholder-blue-300/70 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      placeholder="Share your experience working with us..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => handleInputChange('rating', rating)}
                          className="p-1 transition-colors"
                        >
                          <Star 
                            className={`w-6 h-6 ${
                              rating <= newTestimonial.rating 
                                ? 'text-blue-400 fill-current' 
                                : 'text-blue-600/50'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowTestimonialForm(false)}
                      className="flex-1 px-6 py-3 bg-blue-900/60 text-white rounded-xl hover:bg-blue-800/60 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="Showcase of my recent design and development work" 
          />
          
          {/* Filter Buttons - Enhanced Design and Animation */}
          <motion.div 
            className="filter-tabs flex justify-center w-auto mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex bg-gradient-to-r from-blue-900/50 to-black/50 p-1.5 rounded-xl shadow-lg border border-blue-500/20 backdrop-blur-md overflow-hidden">
              {['all', 'UI/UX', 'WEB', 'GRAPHIC', 'GITHUB'].map((category, index) => {
                const isActive = filterCategory === category;
                const categoryName = category === 'all' ? 'All Projects' : category;
                
                return (
                  <motion.button
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-blue-900/30'
                    }`}
                    whileHover={!isActive ? { scale: 1.05 } : {}}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      delay: 0.1 * index,
                      duration: 0.3
                    }}
                  >
                    {/* Active indicator bubble with improved animation */}
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterBubble"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-blue-900/70 rounded-lg border border-blue-400/40 shadow-lg -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 28
                        }}
                      />
                    )}
                    
                    {/* Button text with subtle animation */}
                    <motion.span
                      initial={{ y: 0 }}
                      animate={{ y: isActive ? -2 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {categoryName}
                    </motion.span>
                    
                    {/* Counter badge for each category */}
                    {category === 'all' ? (
                      <motion.span 
                        className="absolute -top-1 -right-1 text-xs bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: isActive ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {projects.length + githubProjects.length}
                      </motion.span>
                    ) : (
                      <motion.span 
                        className={`absolute -top-1 -right-1 text-xs bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: isActive ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category === 'GITHUB' ? githubProjects.length : 
                          projects.filter(p => p.category === category).length}
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
          
          {/* Projects Grid - Enhanced Animation and Layout */}
          <motion.div 
            className="relative w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={filterCategory}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                layout
              >
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => {
                    // Add tech stack info to projects based on their category
                    const projectWithTech = {
                      ...project,
                      tech: project.category === "UI/UX" 
                        ? ["Figma", "Adobe XD", "Prototyping"] 
                        : project.category === "WEB" 
                          ? ["HTML/CSS", "JavaScript", "React"] 
                          : project.category === "GITHUB"
                            ? ["GitHub", "Open Source", "Collaboration"]
                            : ["Photoshop", "Illustrator", "Brand Design"]
                    };
                    
                    return (
                      <motion.div
                        key={`${project.title}-${index}`}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.05,
                          layout: { type: "spring", damping: 25, stiffness: 200 }
                        }}
                        className="w-full h-full"
                      >
                        <AdvancedProjectCard project={projectWithTech} />
                      </motion.div>
                    );
                  })
                ) : (
                  // Show empty state when no projects match the filter
                  <motion.div 
                    className="col-span-full flex flex-col items-center justify-center py-20 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-20 h-20 mb-6 rounded-full bg-blue-900/20 flex items-center justify-center border border-blue-500/30">
                      <Code className="w-10 h-10 text-blue-400/70" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">No projects found</h3>
                    <p className="text-gray-400 max-w-md">No projects match the selected filter. Please try selecting a different category.</p>
                  </motion.div>
                )}

                {/* Empty Placeholders for Perfect Grid Layout */}
                {filteredProjects.length > 0 && (
                  <>
                    {/* For 3-column layout on large screens */}
                    {filteredProjects.length % 3 === 2 && (
                      <motion.div 
                        className="hidden lg:block" 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    
                    {/* For 3-column layout with only one item */}
                    {filteredProjects.length % 3 === 1 && (
                      <>
                        <motion.div 
                          className="hidden md:block" 
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0 }}
                          exit={{ opacity: 0 }}
                        />
                        <motion.div 
                          className="hidden lg:block" 
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0 }}
                          exit={{ opacity: 0 }}
                        />
                      </>
                    )}
                    
                    {/* For 2-column layout on medium screens */}
                    {filteredProjects.length % 2 === 1 && (
                      <motion.div 
                        className="hidden md:block lg:hidden" 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black/20 via-blue-900/10 to-black/40 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeader 
            title="Let's Work Together" 
            subtitle="Ready to discuss your next project? Get in touch!" 
          />
          
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="space-y-8">
                {[
                  { 
                    icon: <MapPin className="w-8 h-8 text-blue-400" />,
                    title: "My Location",
                    info: "Yakkalamulla, Galle, Sri Lanka" 
                  },
                  { 
                    icon: <Phone className="w-8 h-8 text-blue-400" />,
                    title: "Call Me",
                    info: "+94 78 950 1781" 
                  },
                  { 
                    icon: <Mail className="w-8 h-8 text-blue-400" />,
                    title: "Email Me",
                    info: "sathsarajayantha8@gmail.com" 
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="glass-card-hover p-6 flex items-center overflow-hidden relative h-full"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="bg-gradient-to-r from-blue-800/60 to-blue-600/40 p-3 rounded-lg mr-4 shadow-lg group-hover:shadow-neon transition-all duration-500 relative z-10">
                      {item.icon}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold mb-1 text-blue-300">{item.title}</h3>
                      <p className="text-gray-300">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="flex justify-start space-x-4 mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {[
                    { icon: <Github className="w-6 h-6" />, link: "https://github.com/sathsarajayantha01" },
                    { icon: <Linkedin className="w-6 h-6" />, link: "https://www.linkedin.com/in/sathsarajayantha01/" },
                    { icon: <Mail className="w-6 h-6" />, link: "mailto:sathsarajayantha8@gmail.com" }
                  ].map((item, index) => (
                    <motion.a 
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="https://sathsarajayantha01.github.io/SathsaraJayantha/pdf/Sathsara_Jayantha_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-300 bg-blue-900/20 hover:bg-blue-800/30 px-6 py-3 rounded-full transition-all duration-300"
                  >
                    <span className="mr-2">Download Resume</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <Suspense fallback={
                <div className="max-w-2xl mx-auto">
                  <div className="glass-card p-8 animate-pulse">
                    <div className="h-8 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-6"></div>
                    <div className="space-y-4">
                      <div className="h-12 bg-gray-300 rounded"></div>
                      <div className="h-12 bg-gray-300 rounded"></div>
                      <div className="h-32 bg-gray-300 rounded"></div>
                      <div className="h-12 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer - Compact Version */}
      <footer className="relative py-8 overflow-hidden border-t border-blue-500/30 bg-gradient-to-b from-black/80 to-blue-950/90 backdrop-blur-lg">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-8 right-8 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        
        <motion.div 
          className="max-w-6xl mx-auto px-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Left side - Logo & Social */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="mb-3 inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Sathsara Jayantha
                </span>
              </motion.div>
              <p className="text-gray-400 text-sm mb-3 max-w-md">
                Creating exceptional digital experiences that blend creativity with functionality.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: <Github className="w-4 h-4" />, link: "https://github.com/sathsarajayantha01" },
                  { icon: <Linkedin className="w-4 h-4" />, link: "https://www.linkedin.com/in/sathsarajayantha01/" },
                  { icon: <Mail className="w-4 h-4" />, link: "mailto:sathsarajayantha8@gmail.com" }
                ].map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center border border-blue-500/30 bg-blue-900/20 text-blue-300 hover:bg-blue-800/40 hover:text-blue-200 transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Middle - Quick Links */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold mb-3 text-blue-300">Quick Links</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {['home', 'about', 'services', 'projects', 'experience', 'contact'].map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center group text-left"
                    whileHover={{ x: 3 }}
                  >
                    <span className="w-0 h-0.5 bg-blue-500 mr-0 group-hover:w-2 group-hover:mr-1 transition-all duration-300"></span>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
            
            {/* Right - Copyright */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-1">&copy; {new Date().getFullYear()} Sathsara Jayantha. All rights reserved.</p>
                <p className="text-xs text-blue-400 font-medium">Creating digital experiences that matter</p>
                <div className="inline-flex items-center mt-2">
                  <span className="text-xs text-gray-500">Made with</span>
                  <span className="ml-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-xs font-medium">React</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Portfolio;