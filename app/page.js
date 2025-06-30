"use client";
import { Button } from "@/components/ui/Button";


import { FaWhatsapp } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  ExternalLink,
  Star,
  Calendar,
  GraduationCap,
  Briefcase,
  Download,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  // Dummy data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      image: "/Screenshot (15).png",
      technologies: ["HTML", "CSS", "JavaScript", "React", "GSAP"],
      liveUrl: "https://ecommerce-beta-coral.vercel.app/",
      codeUrl: "https://github.com/Mahnoor225/Ecommerce",
    },
    {
      id: 2,
      title: "Premium Car Rental",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/Screenshot (14).png",
      technologies: ["React", "javascript", "Tailwind CSS", "GSAP"],
      liveUrl: "https://motorx-car-rental.vercel.app/",
      codeUrl: "https://github.com/Mahnoor225/motorx-car-rental",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts and interactive charts.",
      image: "/Screenshot (13).png",
      technologies: ["HTML", "CSS","JavaScript", "Chart.js",  "GSAP", "OpenWeather API"],
      liveUrl: "https://weather-app-gray-seven-89.vercel.app/",
      codeUrl: "https://github.com/Mahnoor225/Weather-app",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      image: "/Screenshot (10).png",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const skills = {
    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "SASS",
    ],
    Backend: ["Node.js", "Express.js", "springBoot"],
    Database: ["MongoDB", "MySQL", "Firebase"],
    "Tools & Others": ["Git", "Figma", "REST APIs", "chatGtp", "V0.dev"],
  };

  // const education = [
  //   {
  //     degree: "interMediate",
  //     institution: "college",
  //     year: "2020 - 2024",
  //     description: "Specialized in Software Engineering and Web Development",
  //   },
  //   {
  //     degree: "Full Stack Web Development Deploama",
  //     institution: "Tech Academy",
  //     year: "2023",
  //     description: "Intensive 6-month program covering modern web technologies",
  //   },
  // ];
  const education = [
    {
      degree: "Intermediate",
      institution: "Board of Intermediate Education",
      // year: "2020 - 2022",
      description: "Completed intermediate education from a recognized board.",
    },
    {
      degree: "Full Stack Web Development Diploma",
      institution: "PNY Trainings",
      year: "2025",
      description:
        "6-month intensive training program at PNY Trainings covering modern web technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    },
  ];

  // const experience = [
  //   {
  //     position: "Senior Frontend Developer",
  //     company: "Tech Solutions Inc.",
  //     period: "2023 - Present",
  //     description:
  //       "Lead frontend development for multiple client projects, mentoring junior developers, and implementing modern web technologies.",
  //   },
  //   {
  //     position: "Frontend Developer",
  //     company: "Digital Agency",
  //     period: "2022 - 2023",
  //     description:
  //       "Developed responsive websites and web applications using React, Vue.js, and modern CSS frameworks.",
  //   },
  //   {
  //     position: "Junior Web Developer",
  //     company: "StartUp Hub",
  //     period: "2021 - 2022",
  //     description:
  //       "Built and maintained company websites, collaborated with design team to implement UI/UX designs.",
  //   },
  // ];
  const experience = [
    {
      title: "Web Developer (Portfolio Project)",
      company: "Independent Project",
      period: "2024 - Present",
      description:
        "Built a portfolio website to demonstrate web development skills. Implemented key frontend technologies and practiced real-world project structure and design principles.",
    },
    {
      title: "Full Stack Developer (Training Projects)",
      company: "PNY Trainings",
      period: "2024 - Present",
      description:
        "Worked on multiple hands-on projects during a 1-year Full Stack Web Development Diploma. Built CRUD applications using MERN stack and learned practical implementation of authentication, routing, and state management.",
    },
    {
      title: "Version Control & Deployment",
      company: "Personal Projects",
      period: "2024 - Present",
      description:
        "Used Git & GitHub for code versioning and collaboration. Deployed projects on Vercel and Netlify, managing domains, hosting, and build optimization.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Project Manager at Tech Corp",
      content:
        "Working with John was an absolute pleasure. His attention to detail and technical expertise helped us deliver our project ahead of schedule.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Mike Chen",
      position: "CEO at StartUp Inc",
      content:
        "John's frontend development skills are exceptional. He transformed our vision into a beautiful, functional website that exceeded our expectations.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Davis",
      position: "Marketing Director",
      content:
        "Professional, reliable, and incredibly talented. John delivered a stunning website that perfectly represents our brand.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Mahnoor225/Mahnoor225",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mahnoor-mehboob-18120b2b2/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://github.com/Mahnoor225/Mahnoor225",
    },
    {
    name: "Download CV",
     icon: Download,
    url: "/Cv.pdf", // ✅ Make sure this file exists in your /public folder
  },
  ];

 const handleWhatsAppClick = () => {
  window.open(
    "https://wa.me/923704915368?text=Hello!%20I'm%20Mahnoor.%20I'm%20interested%20in%20working%20with%20you.",
    "_blank"
  );
};


  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:john@example.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-purple-100 shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mahnoor Mehboob
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 hover:text-purple-600 transition-colors font-medium cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("about");
                }}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("projects");
                }}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-slate-600 hover:text-green-600 transition-colors font-medium cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("skills");
                }}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-slate-600 hover:text-orange-600 transition-colors font-medium cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("experience");
                }}
              >
                Experience
              </a>
              {/* <a
                href="#testimonials"
                className="text-slate-600 hover:text-pink-600 transition-colors font-medium cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("testimonials");
                }}
              >
                Testimonials
              </a> */}
              <a
                href="#contact"
                className="text-slate-600 hover:text-cyan-600 transition-colors font-medium cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("contact");
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    👋 Welcome to my portfolio
                  </span>
                </div>
                <h1 className="text-5xl lg:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Mahnoor Mehboob
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Frontend Developer
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    {/* {" "}
                    UI/UX Designer */}
                  </span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  I create beautiful, functional, and user-friendly web
                  experiences using modern technologies. Passionate about
                  turning ideas into reality through clean code and stunning
                  designs.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-sm text-slate-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    1+
                  </div>
                  <div className="text-sm text-slate-500">Years Exp</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    30+
                  </div>
                  <div className="text-sm text-slate-500">Happy Clients</div>
                </div> */}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const gradientClass =
                    social.name === "GitHub"
                      ? "bg-gradient-to-r from-gray-800 to-gray-600 text-white"
                      : social.name === "LinkedIn"
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                      : social.name === "Twitter"
                      ? "bg-gradient-to-r from-sky-500 to-sky-400 text-white"
                      : social.name === "Instagram"
                      ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white"
                      : social.name === "Download CV"
                      ? "bg-gradient-to-r from-green-500 to-emerald-400 text-white"
                      : "";

                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={
                        social.name === "Download CV" ? true : undefined
                      } // ✅ Only for CV
                      className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${gradientClass}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleScrollToSection("contact")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 bg-transparent"
                  onClick={() => handleScrollToSection("projects")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View My Work
                </Button>
              </div>
            </div>

            {/* Right Side - Profile Image with Modern Design */}
            <div className="relative flex justify-center px-3 lg:justify-end">
              <div className="relative">
                {/* Animated Background Circles */}
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>

                {/* Profile Image Container */}
                <div className="relative z-10">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-white">
                      <Image
                        src="/WhatsApp Image 2024-01-18 at 21.12.09_ebf451f4 - Copy.jpg"
                        alt="John Doe Profile"
                        width={300}
                        height={300}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-full shadow-lg animate-bounce animation-delay-1000">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg animate-bounce animation-delay-2000">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Passionate developer with a love for creating amazing digital
            experiences
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a passionate Frontend Developer with over 1 years of
                experience creating engaging and responsive web applications. I
                love turning complex problems into simple, beautiful, and
                intuitive solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through blog posts and tutorials.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-600">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span>Shahabad colony ferozepur road lahore</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>mahnoormehboob225@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-purple-100">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">1+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              {/* <div className="text-center p-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-green-100">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-orange-100">Client Satisfaction</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            creativity
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const cardClass =
                index === 0
                  ? "bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500"
                  : index === 1
                  ? "bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500"
                  : index === 2
                  ? "bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500"
                  : "bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-orange-500";

              const dotClass =
                index === 0
                  ? "bg-purple-500"
                  : index === 1
                  ? "bg-blue-500"
                  : index === 2
                  ? "bg-green-500"
                  : "bg-orange-500";

              const buttonClass =
                index === 0
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  : index === 1
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  : index === 2
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600";

              return (
                <Card
                  key={project.id}
                  className={`overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 ${cardClass}`}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      // src={project.image || "/placeholder.svg"}
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div
                      className={`absolute top-4 right-4 w-3 h-3 rounded-full ${dotClass} animate-pulse`}
                    ></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <span
                        className={`w-2 h-2 rounded-full mr-3 ${dotClass}`}
                      ></span>
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => {
                        const badgeClass =
                          techIndex % 4 === 0
                            ? "bg-purple-800 text-white hover:bg-purple-700"
                            : techIndex % 4 === 1
                            ? "bg-blue-800 text-white hover:bg-blue-700"
                            : techIndex % 4 === 2
                            ? "bg-green-800 text-white hover:bg-green-700"
                            : "bg-orange-800 text-white hover:bg-orange-700";

                        return (
                          <Badge
                            key={tech}
                            className={`${badgeClass} border-0`}
                          >
                            {tech}
                          </Badge>
                        );
                      })}
                    </div>

                    <div className="flex space-x-4">
                      {/* <Button
                        size="sm"
                        className={`${buttonClass} text-white border-0`}
                      >
                        <ExternalLink href={project.liveUrl} className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button> */}
                       <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className={`${buttonClass} text-white border-0`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                     <a href={project.codeUrl}>
                       <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-300 hover:bg-slate-50 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                     </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Education
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col">
            {education.map((edu, index) => (
              <Card key={index} className="mb-6">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Work Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <Card key={index} className="mb-6">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <Briefcase className="w-5 h-5 mr-2" />
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mx-auto mb-4"
                  />
                  <div className="flex justify-center mb-2">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-slate-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.position}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-slate-600 mb-8">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center p-6 w-full max-w-md mx-auto">
                <Mail className="w-8 h-8 mx-auto mb-4 text-slate-600" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-slate-600 text-sm break-words">
                  mahnoormehboob225@gmail.com
                </p>
              </Card>

              <Card className="text-center p-6">
                <Phone className="w-8 h-8 mx-auto mb-4 text-slate-600" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-slate-600">+92 0370 4915368</p>
              </Card>
              <Card className="text-center p-6">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-slate-600" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-slate-600">shahabad colony</p>
              </Card>
            </div>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-slate-800 hover:bg-slate-700"
                onClick={handleEmailClick}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp />
                <span className="pl-2">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 Mahnoor. Thanks for visiting!</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="p-2 hover:bg-slate-700 rounded-full transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          onClick={handleWhatsAppClick}
        >
          {/* <MessageCircle className="w-6 h-6" /> */}
          <FaWhatsapp />
        </Button>
      </div>
    </div>
  );
}
