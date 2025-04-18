import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project and its key features.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "#",
    },
    {
      title: "Project Two",
      description: "Description of your second project highlighting its unique aspects.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "#",
    },
    {
      title: "Project Three",
      description: "Overview of your third project showcasing your skills.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#",
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
          <div className="max-w-3xl mx-auto text-lg text-gray-600">
            <p className="mb-6">
              Computer Science student at the University of Texas at Arlington, looking forward to learning & applying tech skills with leadership experiences to automate daily tasks and contribute to the community.
            </p>
            <p>
              Currently seeking internship positions for Summer 2025.
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
                <p className="text-gray-600">Bachelors of Science in Computer Science | Expected: 05/2026</p>
                <p className="text-gray-600 mt-2">Relevant Coursework: Data Structure and Algorithms, Database Systems, Object-Oriented Programming, Artificial Intelligence, Computer Vision, Operating Systems</p>
                <p className="text-gray-600">Student Organizations: ACM-UTA, Nepalese Student Association at UTA, CSEC-UTA</p>
              </div>
              <div>
                <h4 className="text-xl font-medium">Dallas College | Dallas, TX</h4>
                <p className="text-gray-600">Computer Science | 07/2024</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Chancellor's Honors Roll</li>
                  <li>STEM League</li>
                  <li>International Club</li>
                  <li>Phi Theta Kappa (ΦΘK)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium">OURCS@DFW | Arlington, TX</h4>
                <p className="text-gray-600">Researcher | 02/2025</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Researched the robustness of text summarization models by applying adversarial attacks and analyzing their impact using Hugging Face and ROUGE scores.</li>
                  <li>Explored AI security vulnerabilities and model evaluation techniques to assess reliability and performance.</li>
                  <li>Developed insights on optimizing model performance by identifying weaknesses in summarization algorithms.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-medium">City of Irving | Irving, TX</h4>
                <p className="text-gray-600">Project Intern | 09/2023 - 12/2023</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Encouraged new economic development and businesses while also providing an enhanced quality of life for residents and visitors.</li>
                  <li>Demonstrated the ability to work independently as well as part of a team environment.</li>
                  <li>Learned techniques for effective project management including budgeting, scheduling and resource allocation.</li>
                  <li>Utilized problem-solving skills to identify potential risks and develop mitigation strategies.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills & Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <p className="text-gray-600">Java, C/C++, Python, HTML/CSS, JavaScript, SQL, Git, AWS, React.js, Node.js</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Languages</h3>
              <p className="text-gray-600">English, Hindi, Nepali, Urdu</p>
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
