import codeImage from '../img/code_img1.jpg';
import recipeAppImage from '../img/RecipeAppImage.png';
import libraryImage from '../img/LibraryImage.png';
import bakeryImage from '../img/BakeryImage.png';
import reactTaskImage from '../img/ReactTaskImage.png';

export const projectsData = [
    {
        id: 1,
        image: recipeAppImage,
        tags: ["Mobile", "Full-Stack", "React Native"],
        title: "Recipe Management System",
        shortTitle: "Recipe Manager App",
        description: "An architecturally mature, full-stack mobile solution engineered to bridge a high-performance .NET 9.0 Web API with a responsive React Native frontend. Designed with an offline-first philosophy, the system ensures seamless data integrity and accessibility across varying network conditions using advanced synchronization patterns.",
        shortDescription: "A high-performance offline-first mobile app built with React Native and .NET 9.0 interfaces.",
        techStack: ["React Native", "C# .NET 9.0", "Redux Toolkit", "React Query", "Redux Persist"],
        techStackShort: ["RN", "C#", "RT", "RQ", "RP"],
        category: "Mobile Apps",
        badge: "Mobile App",
        link: "https://github.com/Kozak8909/RecipeOrganizerApp"
    },
    {
        id: 2,
        image: libraryImage,
        tags: ["Web", "Backend", "Node.js"],
        title: "Enterprise Backend Architecture for Digital Libraries",
        shortTitle: "Digital Library API",
        description: "A high-integrity backend ecosystem engineered with Node.js, TypeScript, and PostgreSQL to manage complex digital library operations. This API goes beyond standard CRUD by implementing a dual-token authentication strategy, granular Role-Based Access Control (RBAC), and atomic database transactions to ensure absolute data consistency and security.",
        shortDescription: "A secure, scalable Node.js & TypeScript REST API with advanced RBAC and atomic transactions.",
        techStack: ["Node.js", "Express.js", "TypeScript", "PostgreSQL"],
        techStackShort: ["NJS", "EJS", "TS", "SQL"],
        category: "Web Dev",
        badge: "Backend",
        link: "https://github.com/Kozak8909/js-practise"
    },
    {
        id: 3,
        image: reactTaskImage,
        tags: ["Web", "Frontend", "React"],
        title: "Full-Cycle React Productivity Platform",
        shortTitle: "React Task Platform",
        description: "An architecturally-sound task management ecosystem designed with a focus on separation of concerns and defensive programming. This platform moves beyond basic CRUD functionality by implementing a decoupled API layer, a persistent state-management engine, and a modular design system built for long-term maintainability.",
        shortDescription: "A sophisticated React task management platform with persistent state and a decoupled API.",
        techStack: ["React", "React Router DOM", "React Query", "Redux Toolkit"],
        techStackShort: ["R", "RQ", "RRD", "RT"],
        category: "Web Dev",
        badge: "Frontend",
        link: "https://github.com/Kozak8909/React-To-Do-List"
    },
    {
        id: 4,
        image: bakeryImage,
        tags: ["Web", "Frontend", "HTML/SCSS"],
        title: "Modern Web Landing Page",
        shortTitle: "Culinary Landing Page",
        description: "A highly polished, performance-oriented landing page for a boutique culinary brand, emphasizing semantic HTML5 precision, modular SCSS architecture, and adaptive interactive systems. This project showcases the ability to transform complex design requirements into a scalable, accessible, and responsive user interface.",
        shortDescription: "A visually stunning, performance-optimized SCSS/HTML5 landing page for a boutique brand.",
        techStack: ["HTML", "SCSS"],
        techStackShort: ["HTML", "SCSS"],
        category: "Web Dev",
        badge: "UI/UX",
        link: "https://github.com/Kozak8909/HTML-CSS-course"
    },
    {
        id: 5,
        image: codeImage,
        tags: ["Web", "Frontend", "JS"],
        title: "Algorithmic Logic & Performance Patterns",
        shortTitle: "JS Logic Patterns",
        description: "A specialized repository focused on the implementation of core JavaScript algorithms and functional programming patterns. This 'Logic-First' suite demonstrates a deep understanding of computational complexity, optimized DOM manipulation, and the ability to solve complex data-transformation challenges without relying on external libraries.",
        shortDescription: "A comprehensive core JavaScript suite focusing on complex algorithms and optimized functional logic.",
        techStack: ["JavaScript"],
        techStackShort: ["JS"],
        category: "Web Dev",
        badge: "Algorithms",
        link: "https://github.com/Kozak8909/js-practise"
    }
];