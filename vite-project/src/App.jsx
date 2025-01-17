import React, { useState } from 'react';
import { Brain, Database, LineChart, Github, Linkedin, Mail, ExternalLink, Code2, Server, Cloud, Globe, Box } from 'lucide-react';
const MediumIcon = () => (
  <svg 
    className="w-6 h-6" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const App = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Meteorite Landings Analysis",
      description: "Comprehensive EDA of meteorite landings data from the Meteoritical Society, analyzing geographical distributions and temporal patterns of meteorite falls.",
      tools: ["Python", "Data Analysis","EDA", "Geographic Visualization", "Statistical Analysis"],
      icon: <LineChart className="w-6 h-6 text-red-600" />,
      kaggle: "https://www.kaggle.com/code/ankushreddymerugu/meteorite-eda-with-some-hypothesis",
      detailedDescription: "Conducted in-depth analysis of meteorite landings, investigating the relationship between observed falls and geographical locations. Explored hypotheses about population density impacts and temporal changes in meteorite classifications.",
    },
    {
      title: "Decoding Asteroids",
      description: "Machine Learning approaches to predict asteroid hazards and properties. Developed predictive models to analyze asteroid characteristics and potential risks.",
      tools: ["Python","EDA", "Machine Learning","Data Visualization", "Data Analysis", "Scikit-learn"],
      icon: <LineChart className="w-6 h-6 text-blue-600" />,
      kaggle: "https://www.kaggle.com/code/ankushreddymerugu/decoding-assteroid",
      detailedDescription: "Implemented advanced machine learning algorithms to analyze and predict asteroid properties and potential hazards. The project focuses on processing astronomical data to derive meaningful insights about asteroid characteristics.",
    },
    {
      title: "Synthetic Data Generator",
      description: "Built a comprehensive synthetic data generation tool with multiple methods including GAN, Rule Based, Agent Based and statistical approaches.",
      tools: ["Python", "Pytorch", "AWS", "Deep Learning","Flask","react.js","Statistical Analysis","S3","Lambda","API Gateway"],
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/ankushbittu/Synthetic_data_generator",
      medium: "https://medium.com/@ankushreddy281/building-a-synthetic-data-generator-a-multi-method-approach-with-aws-deployment-9d265c54ce94",
      detailedDescription: "Developed a robust synthetic data generation system supporting various methods like GAN and VAE. Implemented AWS deployment for scalability and accessibility."
    },
    {
      title: "PlaylistAI",
      description: "Innovative multimodal system combining Computer Vision and Machine Learning to create emotion-aware music recommendations. Leverages real-time facial emotion detection and Random Forest classification to curate personalized playlists.",
      tools: ["Python", "Machine Learning", "Computer vision","OpenFace", "LLM", "Flask", "React.js"],
      icon: <Brain className="w-6 h-6" />,
      github: "https://github.com/ankushbittu/playlistai",
      medium: "https://medium.com/@ankushreddy281/playlistai-bridging-your-emotions-and-music-with-ai-1bc4e8b87fa7",
      detailedDescription: "Developed a cutting-edge application that bridges computer vision and machine learning, using facial emotion detection models and Random Forest classifiers to analyze user emotions in real-time. The system translates emotional states into contextually relevant music recommendations, creating a unique intersection between human sentiment and AI-driven music curation.",
    },
    {
      title: "GenAI Applications Suite",
      description: "Developed a comprehensive suite of GenAI applications leveraging LangChain and Google Gemini AI. Built intelligent document processors including Chat with PDFs, ATS Resume Scorer, and Multilingual Invoice Extractor.",
      tools: ["LangChain", "Google Gemini AI", "Streamlit", "Python"],
      icon: <Brain className="w-6 h-6 text-red-600" />,
      detailedDescription: "Created a versatile collection of GenAI applications showcasing practical AI implementations: an interactive PDF chat system, an AI-powered ATS resume scoring system, and a multilingual invoice data extraction tool. Utilized LangChain's framework capabilities with Google Gemini AI's advanced language models, wrapped in user-friendly Streamlit interfaces for accessibility.",
      github: "https://github.com/ankushbittu/gen-ai",  // Add your GitHub link here
    }
  ];

  const skills = {
    technical: [
      { name: 'Python', level: 90, icon: <Code2 className="w-5 h-5 text-blue-600" /> },
      { name: 'Machine Learning', level: 85, icon: <Brain className="w-5 h-5 text-blue-600" /> },
      { name: 'Deep Learning', level: 85, icon: <Brain className="w-5 h-5 text-purple-600" /> },
      { name: 'SQL', level: 88, icon: <Database className="w-5 h-5 text-blue-600" /> },
      { name: 'Data Analysis', level: 92, icon: <LineChart className="w-5 h-5 text-blue-600" /> },
      { name: 'Data Engineering', level: 85, icon: <Database className="w-5 h-5 text-purple-600" /> },
    ],
    frameworks: [
      { 
        category: 'Deep Learning',
        items: [
          { name: 'TensorFlow', icon: <Brain className="w-5 h-5 text-orange-500" /> },
          { name: 'PyTorch', icon: <Brain className="w-5 h-5 text-red-500" /> }
        ]
      },
      {
        category: 'Data Processing',
        items: [
          { name: 'Pandas', icon: <Database className="w-5 h-5 text-blue-400" /> },
          { name: 'NumPy', icon: <Box className="w-5 h-5 text-blue-500" /> }
        ]
      },
      {
        category: 'Web Development',
        items: [
          { name: 'Flask', icon: <Server className="w-5 h-5 text-green-500" /> },
          { name: 'React.js', icon: <Globe className="w-5 h-5 text-blue-400" /> }
        ]
      },
      {
        category: 'Cloud Services',
        items: [
          { name: 'AWS S3', icon: <Cloud className="w-5 h-5 text-yellow-500" /> },
          { name: 'AWS Lambda', icon: <Server className="w-5 h-5 text-orange-500" /> },
          { name: 'AWS EC2', icon: <Server className="w-5 h-5 text-red-500" /> },
          { name: 'API Gateway', icon: <Globe className="w-5 h-5 text-green-500" /> }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Ankush Reddy Merugu</h1>
            <div className="flex space-x-6">
              <a href="#projects" className="text-gray-700 hover:text-gray-900 hover:underline">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900 hover:underline">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 hover:underline">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Introduction */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <img
              src="/profile.jpg"
              alt="Ankush Reddy Merugu"
              className="w-40 h-39 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">"Data Science Enthusiast | Bridging Data and AI for Impact"</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            "Recent Data Science graduate with a strong foundation in machine learning, statistical analysis, and data visualization, and a deep passion for AI tools, analytics, and problem-solving. I thrive at the intersection of data science and artificial intelligence, transforming complex data into actionable insights and innovative solutions. Eager to leverage my skills to create meaningful, data-driven impact and contribute to cutting-edge advancements in the field."
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold ml-3">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {activeProject === index ? project.detailedDescription : project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm sm:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.medium && (
                    <a 
                      href={project.medium}
                      className="inline-flex items-center text-green-600 hover:text-green-800 text-sm sm:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read More
                    </a>
                  )}
                  {project.kaggle && (
                    <a 
                      href={project.kaggle}
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-800 text-sm sm:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Kaggle
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.technical.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {skill.icon}
                          <span className="text-gray-700 ml-2">{skill.name}</span>
                        </div>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Tools & Frameworks</h3>
                <div className="space-y-6">
                  {skills.frameworks.map((category, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-medium mb-3 text-gray-800">{category.category}</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {category.items.map((item, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-3 flex items-center space-x-2 hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <span className="text-gray-700">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <div className="flex flex-col space-y-6">
              <a 
                href="https://github.com/ankushbittu" 
                className="flex items-center text-gray-700 hover:text-gray-900 group"
              >
                <Github className="w-6 h-6 mr-4" />
                <span className="group-hover:underline">Check my Github</span>
              </a>
              <a 
                href="https://linkedin.com/in/ankush-reddy-merugu-34b8bb1ba/" 
                className="flex items-center text-gray-700 hover:text-gray-900 group"
              >
                <Linkedin className="w-6 h-6 mr-4" />
                <span className="group-hover:underline">Catch me on Linkedin</span>
              </a>
              <a 
                href="mailto:ankushreddy281@gmail.com" 
                className="flex items-center text-gray-700 hover:text-gray-900 group"
              >
                <Mail className="w-6 h-6 mr-4" />
                <span className="group-hover:underline">Contact me here</span>
              </a>
              <a 
                href="https://medium.com/@ankushreddy281" 
                className="flex items-center text-gray-700 hover:text-gray-900 group"
              >
                <MediumIcon />
                <span className="group-hover:underline ml-4">check my stories on medium</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} My Portfolio. Ankush Reddy Merugu.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;