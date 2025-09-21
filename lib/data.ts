import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const categorizedSkills = [
  {
    category: "Languages",
    skills: ["C#","Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "CosmosDB", "MongoDB", "Redis", "Microsoft SQL Server", "Entity Framework"],
  },
  {
    category: "Backend",
    skills: [
      ".NET Core",
      "ASP.NET",
      "MVC",
      "Node.js",
      "Flask",
      "Django",
      "Microservices",
      "System Design"
    ],
  },
  {
    category: "Testing and Security",
    skills: [
      "Postman",
      "Swagger",
      "PyTest",
      "OpenAPI",
      "NUnit",
      "TDD",
      "JWT",
      "OAuth2",
      "RBAC",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Angular",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Bootstrap",
      "jQuery",
      "Webpack",
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Vercel",
      "VS Code",
      "Figma",
      "Jira",
      "Agile",
      "Scrum",
      "SDLC",
      "Data Structures Algorithms (DSA)"
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Azure (Blob Storage, Functions)",
      "AWS (EC2, S3, Lambda)",
      "GCP",
      "CI/CD pipelines",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    category: "AI/ML",
    skills: ["TensorFlow", "Keras", "NLP", "LLM", "RAG", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
  }
];


export const experiencesData = [
  {
    title: "Software Engineer",
    location: "IT Pulse, San Francisco, CA",
    description:[
      "Developed Flask REST APIs for a fraud detection platform, handling data processing, user requests, and real-time confidence scoring for flagged emails.",
      "Built a Dynamic React Dashboard to display email alerts and usage analytics, boosting user engagement by 40% and enabling real-time monitoring for 10,000+ users.",
      "Delivered Scalable Full-Stack Solutions, refactored backend services to reduce latency by 40%, containerized apps with Docker, and deployed via GitHub Actions to AWS EC2."
      ],
    icon: React.createElement(BsFillBriefcaseFill),
    date: "2024 - 2024",
  },
  {
    title: "Software Engineer",
    location: "Chubb Business Services, Hyderabad, India",
    description:[
      // "Developed scalable REST APIs using C# and .NET in a microservices architecture, optimizing backend performance with async/await and reducing API response times by 30%.",
      // "Built dynamic, high-performance UI components in Angular and TypeScript with real-time form validation and API integration, enhancing frontend responsiveness and user experience.",
      "Developed and enhanced high-performance RESTful APIs in C#/.NET, Python, and Node.js within a microservices architecture, improving scalability and reducing API response times by 30%.",
      "Built dashboards using React, TypeScript and JavaScript for tracking policy status, reducing underwriting decision time by 25%.",
      "Improved data handling by revamping Entity Framework, LINQ, and Cosmos DB queries, cutting execution time by 40% and improving system responsiveness under high load.",
      "Conducted code reviews, mentored junior developers, and maintained 90% API test coverage via unit/integration tests (Swagger, Postman) using Test-Driven Development (TDD).",
      "Secured and scaled the platform with JWT/OAuth2 authentication, Azure Blob Storage, Azure Functions, Kubernetes, and CDN integration—boosting delivery speed and cutting data costs by 25%."
    ],
    icon: React.createElement(BsFillBriefcaseFill),
    date: "2021-2023",
  },
  {
    title: "Associate Software Engineer",
    location: "Chubb Business Services, Hyderabad, India",
    description:[
      "Design full-stack applications, through optimized backend APIs (C#/.NET) and responsive frontend UI (Angular), while maintaining seamless user experiences.",
      // "Work with cross-functional teams during Agile sprints to plan features, implement tasks, and participate in code reviews, ensuring timely and high-quality delivery of enterprise solutions.",
      "Built and Optimized RESTful APIs for core services, improving front-end responsiveness and enhancing overall user experience through seamless integration.",
      "Resolved 50+ Critical Issues by performing in-depth debugging, Postman API testing, and performance tuning, resulting in a 15% boost in application speed and stability.",
      "Authored Clear API and Technical Documentation, reducing integration errors by 10% and accelerating onboarding for new developers."
    ],
    icon: React.createElement(BsFillBriefcaseFill),
    date: "2020 - 2021",
  }
] as const;

export const projectsData = [
  {
    title: "OllivveCart",
    description:
      "Designed a mobile-first online grocery platform with reusable components, real-time cart updates, secure authentication, filtering/sorting, and PostgreSQL-backed inventory management with seamless multi-device shopping experiences.",
    tags: ["React", "Typescript", "Vite", "Supabase"],
    imageUrl: "",
  },
  {
    title: "E-Commerce Website",
    description:
      "Architected a full-stack e-commerce platform featuring real-time inventory tracking, dynamic checkout logic, CRUD-based product management, responsive Angular UI, and optimized APIs for scalable, seamless shopping experiences.",
    tags: ["C#", "ASP.NET", "Angular", "SQL"],
    imageUrl: "",
  },
  {
    title: "Full-Stack AI-Powered Chatbot",
    description:
      "Built an intelligent chatbot providing California DMV information through NLP, intent classification, document processing, web scraping, confidence scoring, and an interactive user interface with clickable links reducing the average user search time by 40%.",
    tags: ["React", "Typescript", "Vite", "Firecrawl"],
    imageUrl: "",
  },
  {
    title: "Digit Recognizer (ML Integration)",
    description:
      "Built and deployed a digit classification app using a TensorFlow ANN, Flask backend, and interactive UI, achieving 95%+ accuracy on real-time MNIST predictions.",
    tags: ["Python", "TensorFlow", "Flask", "JavaScript"],
    imageUrl: "",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A simple, responsive two-player Tic-Tac-Toe game, playable live on any device. Check out the GitHub and try the game for some fun!",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "",
  },
] as const;

export const projectDetails = {
  "OllivveCart": {
    details: [
      "Users can browse products by category, search items, and manage a real-time shopping cart with quantity updates.",
      "The app supports secure login, persistent sessions, and smooth navigation with dark/light mode and responsive design.",
      "It’s built to scale with modular architecture, real-time data syncing, easy deployment, and future plans for payments and order tracking."
    ],
    github: "https://github.com/Gunda-Abhinav/Ollivve-Cart"
  },
  "E-Commerce Website": {
    details: [
      "Created a real-time product catalog using Angular and ASP.NET to manage 100+ products with live pricing and stock updates.",
      "Built a smart checkout system that handles tax, discounts, and generates receipts.",
      "Used Entity Framework for database operations and improved backend speed with async C# and indexing."
    ],
    github: "https://github.com/Gunda-Abhinav/BakePoint-Online-Bakery-Platform"
  },
  "Full-Stack AI-Powered Chatbot": {
    details: [
      "An interactive chatbot that answers DMV questions accurately using AI and real-time document search, providing confidence scores and source links.",
      "Supports secure user login, protected access, and live data updates through real-time web scraping for the latest information.",
      "Features a responsive, accessible chat interface with typing indicators and theme toggling, plus performance optimizations and thorough testing for accuracy."
    ],
    github: "https://github.com/Gunda-Abhinav/DMV-Chat-Bot"
  },
  "Digit Recognizer (ML Integration)": {
    details: [
      "Used TensorFlow to train a neural network that can recognize handwritten digits.",
      "Improved accuracy and reliability by applying data normalization and augmentation.",
      "Deployed the model in a custom user interface for real-time digit prediction, showing full-stack machine learning integration."
    ],
    github: "https://github.com/Gunda-Abhinav"
  },
  "Tic Tac Toe Game": {
    details: [
      "Check out the GitHub and try the game for some fun!",
    ],
    github: "https://gunda-abhinav.github.io/Tic-Tac-Toe/"
  },
};

export const certificatesData = [
  {
    title: "Artificial Intelligence",
    issuer: "IIT Hyderabad",  
    imageUrl: "/ai.png",
  },
  {
    title: "Cyber Security",
    issuer: "Cisco Networking Academy",
    imageUrl: "/cyberSecurity.png",
  },
  {
    title: "Database Design and Programming with SQL",
    issuer: "Oracle",
    imageUrl: "/sql.png",
  },
  {
    title: "C: Programming",
    issuer: "Coursera | University of California",
    imageUrl: "/c.png",
  },
  {
    title: "Object Oriented Programming with Java",
    issuer: "Coursera",
    imageUrl: "/java.png",
  },
  {
    title: "Python",
    issuer: "Coursera | University of Michigan",
    imageUrl: "/python.png",
  },
  {
    title: "HTML",
    issuer: "Coursera",
    imageUrl: "/html.png",
  },
] as const;