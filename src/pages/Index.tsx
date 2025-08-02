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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hello, I'm <span className="text-blue-500">Piyush Singh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            A self-starter and passionate computer science major with an interest in machine learning and problem-solving
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-6">
            <p>
              
              I'm a junior Computer Science student at the University of Texas at Arlington, passionate about building meaningful tech products that solve real-world problems. With hands-on experience in full-stack development, AI/ML integration, and team-based project execution, I bring both technical skill and a product-minded perspective to the table.
            </p>
            <p>
              I've led and contributed to several projects—from emotional wellness apps to custom operating systems—where I focused not just on building, but on understanding users and creating intuitive, impactful experiences. I'm currently sharpening my skills in system design, cloud deployment, and product strategy, with the goal of growing into a product management or software engineering role.
            </p>
            <p>
              When I'm not coding or collaborating with teammates, I'm probably exploring new tech trends, watching Arsenal matches, or mapping out my next travel adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
          
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium">University of Texas at Arlington | Arlington, TX</h4>
                <p className="text-gray-600">Bachelor of Science in Computer Science | Aug. 2024 – May 2026</p>
              </div>
              <div>
                <h4 className="text-xl font-medium">Dallas College | Dallas, TX</h4>
                <p className="text-gray-600">Associates of Science in Computer Science | Aug. 2022 – July 2024</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium">Undergraduate Researcher</h4>
                <p className="text-gray-600 font-medium">OURCS@DFW | Feb. 2025</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Researched the robustness of text summarization models by applying adversarial attacks and analyzing their impact using Hugging Face and ROUGE scores.</li>
                  <li>Explored AI security vulnerabilities and model evaluation techniques to assess reliability and performance.</li>
                  <li>Recommended improvements to prompt templates after observing a 10-15% drop in ROUGE recall on adversarial samples.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-medium">Data Analytics Intern</h4>
                <p className="text-gray-600 font-medium">City of Irving | Sep. 2023 – Dec. 2023</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Contributed to a smart redevelopment plan for Irving Mall aimed at revitalizing a 1M+ sq. ft. retail space using technology-driven improvements.</li>
                  <li>Proposed 4 key solutions including smart parking sensors, interactive kiosks and footfall analytics using IoT to enhance visitor experience.</li>
                  <li>Collaborated with a 4-member team; used Trello and agile methods to reduce restroom downtime by 15-20% based on benchmarks from similar city installations using occupancy sensors and Power BI.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Projects</h3>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-medium mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-medium mb-2">Languages:</h4>
                <p className="text-gray-600">Java, C/C++, Python, HTML/CSS, JavaScript, SQL</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Frameworks:</h4>
                <p className="text-gray-600">React.js, Node.js, Flask, Junit, WordPress, Material-UI, FastAPI, Streamlit</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Developer Tools:</h4>
                <p className="text-gray-600">Git, Docker, TravisCI, Google Cloud Platform, PyCharm, Amazon Web Services, Power BI</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Libraries:</h4>
                <p className="text-gray-600">NumPy, Matplotlib, pandas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/piyushgirisingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/piyushsingh469/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:piyushgirisingh@gmail.com"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
