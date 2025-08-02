import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "GeminiAlert",
      description: "Python, Flask, Firebase, Gemini API - Built a prototype emergency alert web app using Gemini API to deliver AI-generated safety guidance during natural disasters and fire drills.",
      technologies: ["Python", "Flask", "Firebase", "Gemini API"],
      features: [
        "Simulated 10 emergency scenarios; average response time measured at ~1.2 seconds via Flask backend",
        "Used role-based mock data to simulate alert routing logic for responders and civilians",
        "Integrated Firebase for authentication and location tracking during alert testing"
      ]
    },
    {
      title: "WhiteCoatAI",
      description: "Python, Streamlit, MongoDB, Gemini API - Collaborated with 3 teammates on a tool to simplify and summarize medical documents (PDF/TXT) using Gemini.",
      technologies: ["Python", "Streamlit", "MongoDB", "Gemini API"],
      features: [
        "Tested with 25+ documents; summaries compared against 5 expert-written samples and reviewed for readability, medical accuracy and key term preservation",
        "Achieved estimated average ROUGE-L score of 0.72 on internal test set",
        "Integrated MongoDB for searchable history and Q&A session logging"
      ]
    },
    {
      title: "HealthCost AI Predictor",
      description: "Python, Streamlit, scikit-learn - Built a healthcare cost prediction app using a public CMS dataset (~1,300 records).",
      technologies: ["Python", "Streamlit", "scikit-learn"],
      features: [
        "Trained a Random Forest model with an R² score of 0.81 and average prediction error of ±$2,500",
        "Designed a Streamlit UI that highlights cost breakdowns based on user input (e.g., age, BMI, smoking)",
        "App tested with 10 users and updated based on feedback, resulting in a 20% faster input flow after reducing clicks and simplifying layout"
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-24 px-4 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Hello, I'm <span className="text-gradient animate-glow">Piyush Singh</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A self-starter and passionate computer science major with an interest in machine learning and problem-solving
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-muted/30 via-background to-muted/30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 section-divider pt-8">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">About Me</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 card-hover">
              <div className="text-lg text-card-foreground space-y-6 leading-relaxed">
                <p className="animate-slide-in-left">
                  I'm a junior Computer Science student at the University of Texas at Arlington, passionate about building meaningful tech products that solve real-world problems. With hands-on experience in full-stack development, AI/ML integration, and team-based project execution, I bring both technical skill and a product-minded perspective to the table.
                </p>
                <p className="animate-slide-in-right" style={{animationDelay: '0.2s'}}>
                  I've led and contributed to several projects—from emotional wellness apps to custom operating systems—where I focused not just on building, but on understanding users and creating intuitive, impactful experiences. I'm currently sharpening my skills in system design, cloud deployment, and product strategy, with the goal of growing into a product management or software engineering role.
                </p>
                <p className="animate-slide-in-left" style={{animationDelay: '0.4s'}}>
                  When I'm not coding or collaborating with teammates, I'm probably exploring new tech trends, watching Arsenal matches, or mapping out my next travel adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 section-divider pt-8">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Resume</h2>
          </div>
          
          {/* Education */}
          <div className="mb-16 animate-slide-in-left">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-semibold mb-8 text-gradient">Education</h3>
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6 hover:border-primary-hover transition-colors duration-300">
                  <h4 className="text-xl font-medium text-card-foreground">University of Texas at Arlington | Arlington, TX</h4>
                  <p className="text-muted-foreground">Bachelor of Science in Computer Science | Aug. 2024 – May 2026</p>
                </div>
                <div className="border-l-4 border-secondary pl-6 hover:border-primary transition-colors duration-300">
                  <h4 className="text-xl font-medium text-card-foreground">Dallas College | Dallas, TX</h4>
                  <p className="text-muted-foreground">Associates of Science in Computer Science | Aug. 2022 – July 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-16 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-semibold mb-8 text-gradient">Experience</h3>
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6 hover:border-primary-hover transition-colors duration-300">
                  <h4 className="text-xl font-medium text-card-foreground">Undergraduate Researcher</h4>
                  <p className="text-primary font-medium">OURCS@DFW | Feb. 2025</p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                    <li>Researched the robustness of text summarization models by applying adversarial attacks and analyzing their impact using Hugging Face and ROUGE scores.</li>
                    <li>Explored AI security vulnerabilities and model evaluation techniques to assess reliability and performance.</li>
                    <li>Recommended improvements to prompt templates after observing a 10-15% drop in ROUGE recall on adversarial samples.</li>
                  </ul>
                </div>
                <div className="border-l-4 border-secondary pl-6 hover:border-primary transition-colors duration-300">
                  <h4 className="text-xl font-medium text-card-foreground">Data Analytics Intern</h4>
                  <p className="text-primary font-medium">City of Irving | Sep. 2023 – Dec. 2023</p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                    <li>Contributed to a smart redevelopment plan for Irving Mall aimed at revitalizing a 1M+ sq. ft. retail space using technology-driven improvements.</li>
                    <li>Proposed 4 key solutions including smart parking sensors, interactive kiosks and footfall analytics using IoT to enhance visitor experience.</li>
                    <li>Collaborated with a 4-member team; used Trello and agile methods to reduce restroom downtime by 15-20% based on benchmarks from similar city installations using occupancy sensors and Power BI.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-16 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-semibold mb-8 text-gradient">Projects</h3>
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6 hover:border-primary-hover transition-all duration-300 hover:pl-8">
                    <h4 className="text-xl font-medium mb-3 text-card-foreground">{project.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="hover:text-foreground transition-colors duration-200">{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8 animate-scale-in" style={{animationDelay: '0.6s'}}>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-semibold mb-8 text-gradient">Technical Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group hover:scale-105 transition-transform duration-300">
                  <h4 className="font-medium mb-3 text-primary group-hover:text-primary-hover transition-colors">Languages:</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">Java, C/C++, Python, HTML/CSS, JavaScript, SQL</p>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <h4 className="font-medium mb-3 text-primary group-hover:text-primary-hover transition-colors">Frameworks:</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">React.js, Node.js, Flask, Junit, WordPress, Material-UI, FastAPI, Streamlit</p>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <h4 className="font-medium mb-3 text-primary group-hover:text-primary-hover transition-colors">Developer Tools:</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">Git, Docker, TravisCI, Google Cloud Platform, PyCharm, Amazon Web Services, Power BI</p>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <h4 className="font-medium mb-3 text-primary group-hover:text-primary-hover transition-colors">Libraries:</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">NumPy, Matplotlib, pandas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-12 card-hover animate-fade-in">
            <div className="section-divider pt-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            </div>
            <div className="flex justify-center space-x-12">
              <a
                href="https://github.com/piyushgirisingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground icon-hover group"
              >
                <Github size={32} className="group-hover:drop-shadow-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/piyushsingh469/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground icon-hover group"
              >
                <Linkedin size={32} className="group-hover:drop-shadow-lg" />
              </a>
              <a
                href="mailto:piyushgirisingh@gmail.com"
                className="text-muted-foreground icon-hover group"
              >
                <Mail size={32} className="group-hover:drop-shadow-lg" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
