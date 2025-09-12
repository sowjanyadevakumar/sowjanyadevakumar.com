import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink,
  User,
  Briefcase,
  Code,
  MessageSquare,
  Award,
  Calendar,
  CheckCircle,
  Brain,
  Zap,
  Target,
  Users,
  BarChart3,
  Lightbulb,
  Cog,
  Palette,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Building2,
  Rocket,
  TrendingUp,
  Heart
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Portfolio data
  const portfolioData = {
    name: "Sowjanya Devakumar",
    email: "sowjanyadevakumar@gmail.com",
    phone: "+91-9880929814",
    location: "Bengaluru, India",
    linkedin: "https://linkedin.com/in/sowjanya-devakumar",
    title: "Product Manager & Operations Specialist",
    subtitle: "Currently open to new opportunities in the product domain",
    bio: "Resourceful professional with over 3 years of experience in network test engineering, operations, and content strategy. Known for creating streamlined workflows, improving team collaboration, and delivering user-focused solutions. With a background in both technical and creative roles, I bring a unique perspective to problem-solving and project execution.",
    
    experience: [
      {
        company: "Mindorigin Technologies Private Limited",
        role: "Product Management Intern",
        period: "02/2025",
        location: "Bengaluru, India",
        description: "Led research on KYC onboarding, defining feature priorities, and shaping roadmap decisions. Collaborated with engineers to implement solutions.",
        achievements: [
          "Led research on KYC onboarding, defining feature priorities, and shaping roadmap decisions",
          "Conducted research about implementing LLM for stockbroker platforms, including APIs, integration, and AI-driven SaaS",
          "Researched stockbroking applications and SEBI regulations, identifying key differentiators and compliance requirements",
          "Assisted in outlining product roadmaps with data-driven insights",
          "Engaged with various departments to enhance research comprehensiveness"
        ],
        technologies: ["LLMs", "Product Roadmapping", "KYC Research", "SEBI Compliance", "Cross-functional Collaboration"]
      },
      {
        company: "Previous Experience",
        role: "Network Test Engineer",
        period: "2020 - 2022",
        description: "Specialized in network testing and quality assurance with focus on technical problem-solving.",
        achievements: [
          "Conducted comprehensive network testing and validation",
          "Developed testing protocols and quality assurance processes",
          "Collaborated with engineering teams to optimize network performance",
          "Documented technical specifications and testing procedures"
        ],
        technologies: ["Network Testing", "QA", "Technical Documentation", "Process Optimization"]
      }
    ],

    projects: [
      {
        title: "Travel & Sustainability",
        subtitle: "Ventura Travel - Indiaventura Project",
        period: "10/2024",
        description: "Designed a 15-day sustainable travel itinerary blending eco-tourism with cultural immersion.",
        achievements: [
          "Conducted market research and user analysis",
          "Created experiences that resonate",
          "Learnt that sustainability and unforgettable travel can go hand-in-hand"
        ],
        icon: Globe
      },
      {
        title: "Product Strategy",
        subtitle: "Zepto: Increasing Average Order Value (AOV)",
        period: "04/2024",
        description: "Developed conceptual strategies like gamification and loyalty programs to enhance user engagement.",
        achievements: [
          "Analyzed user behavior and designed wireframes",
          "Explored user engagement strategies",
          "Conceptualized solutions to improve retention and AOV"
        ],
        icon: TrendingUp
      },
      {
        title: "Product Development",
        subtitle: "PawPal: Comprehensive Pet Care Platform",
        period: "05/2024",
        description: "Created a conceptual MVP for a pet care platform offering grooming services and meal subscriptions.",
        achievements: [
          "Conducted user research",
          "Identified critical pain points",
          "Developed a roadmap that would appeal to pet owners"
        ],
        icon: Heart
      },
      {
        title: "Engineering",
        subtitle: "ISIE Hybrid Vehicle Challenge",
        period: "01/2018",
        description: "Contributed to designing and fabricating the hybrid vehicle's suspension system as part of a student team.",
        achievements: [
          "Optimized performance through analysis",
          "Testing of design specifications",
          "Collaborative engineering project"
        ],
        icon: Cog
      }
    ],

    skills: {
      "Product Management": [
        "Roadmapping",
        "User research",
        "Data-driven decision-making",
        "Feature prioritization",
        "Product strategy"
      ],
      "Operations": [
        "Workflow optimization",
        "Stakeholder engagement",
        "Agile methodologies",
        "Cross-functional collaboration",
        "Process improvement"
      ],
      "Technical Skills": [
        "LLM proficiency",
        "APIs understanding",
        "JIRA",
        "Confluence",
        "Google Workspace",
        "Excel",
        "SQL",
        "Python (Pandas basics)",
        "Wireframing",
        "Data cleaning and validation"
      ],
      "Leadership & Soft Skills": [
        "Adaptability",
        "Creative problem-solving",
        "Empathy",
        "Team leadership",
        "Collaboration",
        "Communication",
        "Strategic thinking"
      ]
    }
  }

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        })
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setFormStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav-container">
        <a href="#about" className="nav-tab" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
          About
        </a>
        <a href="#experience" className="nav-tab" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
          Experience
        </a>
        <a href="#skills" className="nav-tab" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
          Skills
        </a>
        <a href="#projects" className="nav-tab" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
          Projects
        </a>
        <a href="#contact" className="nav-tab" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
          Contact
        </a>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        {/* Floating shapes */}
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-avatar">
              <div className="hero-avatar-text">SD</div>
            </div>
            
            <h1 className="hero-title">
              {portfolioData.name}
            </h1>
            
            <p className="hero-subtitle">
              {portfolioData.title}
            </p>
            
            <p className="hero-status">
              {portfolioData.subtitle}
            </p>
            
            <p className="hero-description">
              {portfolioData.bio}
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('experience')}
              >
                View My Experience
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about turning ideas into reality through careful planning and collaboration, I'm currently exploring opportunities to apply my skills in product management roles, with a focus on delivering impactful results.
        </p>
        
        <div className="card-grid-2">
          <div className="card about-card">
            <h3>Professional Journey</h3>
            <p>
              With over 3 years of experience spanning network test engineering, operations, and content strategy, I've developed a unique perspective that bridges technical expertise with creative problem-solving.
            </p>
            <br />
            <p>
              My background in both technical and creative roles has equipped me with the ability to streamline workflows, improve team collaboration, and deliver user-focused solutions that make a real impact.
            </p>
          </div>
          
          <div className="card about-card">
            <h3>Current Status</h3>
            <p>
              Currently open to new opportunities in the product domain, I'm excited to bring my unique blend of technical expertise and creative problem-solving to help organizations build products that truly matter.
            </p>
            <br />
            <p>
              I believe in the power of empathy-driven design and data-informed decisions to create products that not only meet business objectives but also delight users.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          A track record of driving results through strategic thinking, technical expertise, and collaborative leadership
        </p>
        
        <div className="experience-timeline">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experience-header">
                <div>
                  <div className="experience-company">
                    <Building2 className="inline-block w-5 h-5 mr-2" />
                    {exp.company}
                  </div>
                  <div className="experience-role">{exp.role}</div>
                </div>
                <div className="experience-period">
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  {exp.period}
                </div>
              </div>
              
              <p className="experience-description">{exp.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technologies & Skills</h4>
                <div className="tech-tags">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          A comprehensive toolkit spanning product management, operations, technical skills, and leadership
        </p>
        
        <div className="skills-grid">
          {Object.entries(portfolioData.skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon">
                {index === 0 && <Target />}
                {index === 1 && <Cog />}
                {index === 2 && <Code />}
                {index === 3 && <Users />}
              </div>
              <h3 className="skill-title">{category}</h3>
              <ul className="skill-list">
                {skills.map((skill, i) => (
                  <li key={i} className="skill-item">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my work in product management, user research, and strategic planning
        </p>
        
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-header">
                <div className="project-icon">
                  <project.icon />
                </div>
                <div className="project-meta">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-period">{project.period}</p>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-2">{project.subtitle}</h4>
              <p className="project-description">{project.description}</p>
              
              <ul className="project-achievements">
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-links">
                <a href={`mailto:${portfolioData.email}`} className="contact-link">
                  <Mail className="w-5 h-5" />
                  {portfolioData.email}
                </a>
                <a href={`tel:${portfolioData.phone}`} className="contact-link">
                  <Phone className="w-5 h-5" />
                  {portfolioData.phone}
                </a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Linkedin className="w-5 h-5" />
                  Connect with me
                </a>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send a Message</h3>
              <p className="text-center text-gray-600 mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
              
              {formStatus.message && (
                <div className={`status-message ${formStatus.type === 'success' ? 'status-success' : 'status-error'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="John"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Project collaboration"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="form-button"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section text-center">
        <p className="text-gray-600">
          © 2024 {portfolioData.name}. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Built with React, Tailwind CSS, and Framer Motion
        </p>
      </footer>
    </div>
  )
}

export default App

