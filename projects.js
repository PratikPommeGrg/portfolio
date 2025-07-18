// Project Data for Modals
export const projectsData = [
  {
    id: "enirman-client", // Use a unique ID for each project
    name: "eNirman (Client App)",
    type: "Construction Management App",
    year: "2024",
    brief:
      "The eNirman client application redefines the home building experience by establishing a transparent and collaborative platform between clients and construction professionals. It empowers homeowners with real-time insights into their project's progress.",
    description:
      "The eNirman client application redefines the home building experience by establishing a transparent and collaborative platform between clients and construction professionals. It empowers homeowners with real-time insights into their project's progress, from architectural milestones and financial transactions to material deliveries and daily site activities. This comprehensive oversight ensures full transparency and control over the construction journey from inception to completion.",
    splashImage: "/assets/images/project_images/enirman/enirman_logo.png",
    images: [
      "/assets/project_images/enirman_client/screenshot1.webp",
      "/assets/project_images/enirman_client/screenshot2.webp",
      "/assets/project_images/enirman_client/screenshot3.webp",
      "/assets/project_images/enirman_client/screenshot4.webp",
    ],
    role: [
      "Led end-to-end development of core modules, including real-time project tracking, financial dashboard, and communication features.",
      "Implemented robust state management using the BLoC pattern for a scalable and maintainable architecture.",
      "Integrated secure Firebase Firestore for real-time data synchronization and user authentication.",
      "Collaborated closely with UX/UI designers to translate wireframes into pixel-perfect, responsive Flutter UIs.",
      "Optimized app performance for smooth animations and efficient data handling across various devices.",
    ],
    techStack: ["Flutter", "Dart", "BLoC", "Firebase", "Firestore", "REST APIs", "Provider"],
    features: [
      "Real-time Project Tracking: Smart updates on architectural milestones, financial transactions, material deliveries, and daily site activities.",
      "Interactive Communication: Facilitates seamless feedback and direct communication between clients, architects, and builders.",
      "Comprehensive Oversight: Ensures full transparency and control over the construction journey from inception to completion.",
      "Document Sharing: Secure sharing and management of project documents and contracts.",
      "Payment Tracking: Detailed financial ledger and payment status updates.",
    ],
    challenges:
      "Managing complex, real-time data synchronization across multiple user roles (client, engineer, vendor) while maintaining data integrity and ensuring a seamless user experience. Another challenge was to design a flexible architecture to accommodate evolving business requirements quickly.",
    solutions:
      "Implemented a robust BLoC architecture to separate concerns and ensure predictable state management. Utilized Firebase Firestore's real-time capabilities with careful data modeling and security rules. Developed a modular UI structure that allowed for easy integration of new features and iterative improvements based on user feedback. Employed comprehensive error handling and logging to quickly identify and resolve data discrepancies.",
    links: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9.5 8.5 5 3.5-5 3.5V8.5Z"/></svg>',
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.enirman",
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-4 3.67 0 1.59-1.14 3.25-1.72 4.13-.57.87-1.42 2.4-2.84 2.4-.95 0-1.5-.42-1.77-1.01C9.17 13.9 8 2 3 2c-1.09 0-2 1.5-2 3.5 0 2.13 2.67 4.14 4 6.5C6.7 14.53 8 16 8 17.5c0 1.5-.93 3.05-2.8 3.05-1.12 0-1.7-.62-2.27-1.42A2 2 0 0 0 2 19.5c0 .64.92 1.43 1.94 1.43 1.25 0 2.37-.77 3.12-1.53.85-.8 1.48-2.58 1.48-3.7 0-.74-.42-1.66-1.07-2.77C8.1 10.61 10 2 12 2Z"/></svg>',
        label: "App Store",
        url: "https://apps.apple.com/us/app/enirman/id6474643032",
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c2.8-3.1 2.8-6.6 0-7.7v-.8c.5-.4 1.1-1 1-2.4 0-.5 0-1.1-.3-1.6a9.5 9.5 0 0 0 0-3.2c-1.3-.8-2.4-1.3-3.7-1.3A9.5 9.5 0 0 0 10 2a9.5 9.5 0 0 0-3.7 1.3c-.3.5-.3 1.1-.3 1.6 0 1.4.5 2 1 2.4v.8c-2.8 1.1-2.8 4.6 0 7.7a4.8 4.8 0 0 0-1 3.2v4c-2.4-1.3-4-3.8-4-6.5C2 10 6.5 6 12 6c5.5 0 10 4 10 9.5 0 2.7-1.6 5.2-4 6.5ZM12 20c-1.1 0-2.2-.2-3.3-.6a8.5 8.5 0 0 1-5.7-5.7C2.2 12.2 2 11.1 2 10c0-4.5 3.5-8 8-8s8 3.5 8 8c0 1.1-.2 2.2-.6 3.3a8.5 8.5 0 0 1-5.7 5.7C14.2 19.8 13.1 20 12 20Z"/></svg>',
        label: "GitHub Repo",
        url: "#", // Replace with actual GitHub link if public
      },
    ],
  },
  {
    id: "enirman-vendor",
    name: "eNirman - Vendor",
    type: "Construction Supply Chain",
    year: "2024",
    brief:
      "eNirman - Vendor is an essential tool designed to streamline material order management for suppliers within the eNirman construction ecosystem. It optimizes the procurement and delivery process, enhancing efficiency for vendors.",
    description:
      "eNirman - Vendor is an essential tool designed to streamline material order management for suppliers within the eNirman construction ecosystem. It optimizes the procurement and delivery process, enhancing efficiency for vendors by providing features like efficient order management, financial tracking, profile management, and real-time push notifications.",
    splashImage: "/assets/images/project_images/vendor/vendor_logo.png",
    images: [
      "/assets/project_images/enirman_vendor/screenshot1.webp",
      "/assets/project_images/enirman_vendor/screenshot2.webp",
      "/assets/project_images/enirman_vendor/screenshot3.webp",
    ],
    role: [
      "Developed the entire module for order viewing, status updates, and historical tracking.",
      "Implemented API integrations with the core eNirman backend (FastAPI) for real-time data exchange.",
      "Designed and built the user interface using Flutter, focusing on clarity and ease of use for vendors.",
      "Ensured data security and integrity for sensitive transaction information.",
    ],
    techStack: ["Flutter", "Dart", "Provider", "FastAPI (Integration)", "PostgreSQL (Integration)"],
    features: [
      "Efficient Order Management: View, edit, and search material orders with a clear calendar view for scheduled deliveries.",
      "Financial Tracking: Detailed transaction history, including debits, credits, and current balances.",
      "Profile Management: Easily manage account information and security settings.",
      "Push Notifications: Receive real-time alerts for new orders or status changes.",
    ],
    challenges:
      "Handling complex financial data reconciliation for vendors and integrating with an existing backend system with specific API requirements. Ensuring smooth data flow and error handling during order updates was critical.",
    solutions:
      "Implemented a robust data synchronization mechanism with retry logic for API calls. Developed a clean, modular code structure that simplified API interaction and error handling. Collaborated closely with backend developers to optimize API endpoints for mobile consumption, reducing payload size and improving response times.",
    links: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9.5 8.5 5 3.5-5 3.5V8.5Z"/></svg>',
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.enirman.vendor",
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c2.8-3.1 2.8-6.6 0-7.7v-.8c.5-.4 1.1-1 1-2.4 0-.5 0-1.1-.3-1.6a9.5 9.5 0 0 0 0-3.2c-1.3-.8-2.4-1.3-3.7-1.3A9.5 9.5 0 0 0 10 2a9.5 9.5 0 0 0-3.7 1.3c-.3.5-.3 1.1-.3 1.6 0 1.4.5 2 1 2.4v.8c-2.8 1.1-2.8 4.6 0 7.7a4.8 4.8 0 0 0-1 3.2v4c-2.4-1.3-4-3.8-4-6.5C2 10 6.5 6 12 6c5.5 0 10 4 10 9.5 0 2.7-1.6 5.2-4 6.5ZM12 20c-1.1 0-2.2-.2-3.3-.6a8.5 8.5 0 0 1-5.7-5.7C2.2 12.2 2 11.1 2 10c0-4.5 3.5-8 8-8s8 3.5 8 8c0 1.1-.2 2.2-.6 3.3a8.5 8.5 0 0 1-5.7 5.7C14.2 19.8 13.1 20 12 20Z"/></svg>',
        label: "GitHub Repo",
        url: "#",
      },
    ],
  },
  {
    id: "enirman-engineer",
    name: "eNirman - Engineer",
    type: "On-site Project Management",
    year: "2024",
    brief:
      "eNirman - Engineer serves as the ultimate on-site project management companion for construction engineers and project managers. It consolidates critical project aspects into a single, intuitive platform to boost field efficiency.",
    description:
      "eNirman - Engineer serves as the ultimate on-site project management companion for construction engineers and project managers. It consolidates critical project aspects into a single, intuitive platform to boost field efficiency, offering integrated project management, on-site resource management, collaborative communication, and robust offline sync capabilities.",
    splashImage: "/assets/images/project_images/engineer/engineer_logo.png",
    images: [
      "/assets/images/project_images/engineer/engineer_preview1.png",
      "/assets/project_images/enirman_engineer/screenshot2.webp",
      "/assets/project_images/enirman_engineer/screenshot3.webp",
      "/assets/project_images/enirman_engineer/screenshot4.webp",
    ],
    role: [
      "Developed key features including daily reporting, team attendance tracking, and petty cash management modules.",
      "Integrated real-time chat functionality using Firebase for seamless communication between site engineers and office staff.",
      "Implemented robust offline capabilities to ensure data capture even in remote areas with limited connectivity.",
      "Collaborated with backend teams to define and consume RESTful APIs for all on-site operations.",
    ],
    techStack: ["Flutter", "Dart", "BLoC", "Firebase", "SQLite (Offline)", "REST APIs"],
    features: [
      "Integrated Project Management: View and update milestones, tasks, and create comprehensive daily reports.",
      "On-site Resource Management: Manage team attendance, track petty cash expenses, and oversee material orders.",
      "Collaborative Communication: Real-time chat with office departments and seamless access to architectural plans (PDF/images).",
      "Offline Sync: Ensures data integrity and continuity even without internet access, syncing when reconnected.",
    ],
    challenges:
      "Ensuring reliable offline data storage and synchronization, especially for complex daily reports and attendance, was a significant challenge. Handling large architectural PDF/image files efficiently on mobile devices also required careful optimization.",
    solutions:
      "Implemented a local SQLite database for offline data persistence and a robust synchronization mechanism with the Firebase backend. Utilized efficient image loading and PDF rendering libraries. Applied data compression techniques and background syncing to minimize data usage and improve performance in low-connectivity environments.",
    links: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9.5 8.5 5 3.5-5 3.5V8.5Z"/></svg>',
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.enirman.engineer",
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c2.8-3.1 2.8-6.6 0-7.7v-.8c.5-.4 1.1-1 1-2.4 0-.5 0-1.1-.3-1.6a9.5 9.5 0 0 0 0-3.2c-1.3-.8-2.4-1.3-3.7-1.3A9.5 9.5 0 0 0 10 2a9.5 9.5 0 0 0-3.7 1.3c-.3.5-.3 1.1-.3 1.6 0 1.4.5 2 1 2.4v.8c-2.8 1.1-2.8 4.6 0 7.7a4.8 4.8 0 0 0-1 3.2v4c-2.4-1.3-4-3.8-4-6.5C2 10 6.5 6 12 6c5.5 0 10 4 10 9.5 0 2.7-1.6 5.2-4 6.5ZM12 20c-1.1 0-2.2-.2-3.3-.6a8.5 8.5 0 0 1-5.7-5.7C2.2 12.2 2 11.1 2 10c0-4.5 3.5-8 8-8s8 3.5 8 8c0 1.1-.2 2.2-.6 3.3a8.5 8.5 0 0 1-5.7 5.7C14.2 19.8 13.1 20 12 20Z"/></svg>',
        label: "GitHub Repo",
        url: "#",
      },
    ],
  },
  {
    id: "nepaledu",
    name: "NepalEdu",
    type: "E-learning Platform",
    year: "2023",
    brief:
      "NepalEdu is a comprehensive e-learning platform designed to make quality education accessible to students across Nepal. It offers a wide range of courses, interactive lessons, and progress tracking features to enhance the learning experience.",
    description:
      "NepalEdu is a comprehensive e-learning platform designed to make quality education accessible to students across Nepal. It offers a wide range of courses, interactive lessons, and progress tracking features to enhance the learning experience, including a diverse course catalog, interactive learning modules, progress tracking, and secure payment gateways.",
    splashImage: "/assets/images/project_images/nepaledu/nepaledu_logo.png",
    images: [
      "/assets/project_images/nepaledu/screenshot1.webp",
      "/assets/project_images/nepaledu/screenshot2.webp",
      "/assets/project_images/nepaledu/screenshot3.webp",
    ],
    role: [
      "Developed the user authentication system, including secure login, registration, and password recovery.",
      "Implemented course Browse and enrollment functionalities with intuitive UI/UX.",
      "Designed and integrated a robust quiz module with real-time feedback and result tracking.",
      "Collaborated with content creators to ensure seamless integration of educational materials.",
      "Optimized performance for smooth video streaming and interactive content delivery.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Firestore",
      "GetX/Provider",
      "REST APIs",
      "Stripe (for payments, if applicable)",
    ],
    features: [
      "Diverse Course Catalog: Access to courses across various subjects and levels.",
      "Interactive Learning: Quizzes, assignments, and discussion forums for engaging education.",
      "Progress Tracking: Monitor learning progress, completed lessons, and quiz scores.",
      "Offline Access: Downloadable content for learning on the go (if implemented).",
      "Secure Payment Gateway: Seamless enrollment in paid courses (if applicable).",
    ],
    challenges:
      "Ensuring content security and efficient streaming of educational videos, especially in areas with unstable internet connectivity. Another challenge was to create a flexible course structure that could support various content types (text, video, quizzes).",
    solutions:
      "Implemented adaptive streaming for video content and efficient caching mechanisms. Designed a modular content delivery system allowing for easy integration of different learning materials. Used Firebase security rules to protect content access and robust error handling for network issues.",
    links: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9.5 8.5 5 3.5-5 3.5V8.5Z"/></svg>',
        label: "Google Play",
        url: "#", // IMPORTANT: Replace with actual Google Play Store link
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c2.8-3.1 2.8-6.6 0-7.7v-.8c.5-.4 1.1-1 1-2.4 0-.5 0-1.1-.3-1.6a9.5 9.5 0 0 0 0-3.2c-1.3-.8-2.4-1.3-3.7-1.3A9.5 9.5 0 0 0 10 2a9.5 9.5 0 0 0-3.7 1.3c-.3.5-.3 1.1-.3 1.6 0 1.4.5 2 1 2.4v.8c-2.8 1.1-2.8 4.6 0 7.7a4.8 4.8 0 0 0-1 3.2v4c-2.4-1.3-4-3.8-4-6.5C2 10 6.5 6 12 6c5.5 0 10 4 10 9.5 0 2.7-1.6 5.2-4 6.5ZM12 20c-1.1 0-2.2-.2-3.3-.6a8.5 8.5 0 0 1-5.7-5.7C2.2 12.2 2 11.1 2 10c0-4.5 3.5-8 8-8s8 3.5 8 8c0 1.1-.2 2.2-.6 3.3a8.5 8.5 0 0 1-5.7 5.7C14.2 19.8 13.1 20 12 20Z"/></svg>',
        label: "GitHub Repo",
        url: "#", // IMPORTANT: Replace with actual GitHub link if public
      },
    ],
  },
  {
    id: "meropadai",
    name: "MeroPadai",
    type: "Nepali Exam Prep",
    year: "2023",
    brief:
      "MeroPadai (मेरो पढाइ - My Study) is a specialized educational app focused on preparing students for various Nepali competitive exams and academic curricula. It provides practice questions, mock tests, and detailed explanations to help students excel.",
    description:
      "MeroPadai (मेरो पढाइ - My Study) is a specialized educational app focused on preparing students for various Nepali competitive exams and academic curricula. It provides practice questions, mock tests, and detailed explanations to help students excel, featuring an extensive question bank, mock test simulations, detailed solutions, and performance analytics.",
    splashImage: "/assets/images/project_images/meropadai/meropadai_logo.png",
    images: [
      "/assets/project_images/meropadai/screenshot1.webp",
      "/assets/project_images/meropadai/screenshot2.webp",
      "/assets/project_images/meropadai/screenshot3.webp",
    ],
    role: [
      "Developed the core quizzing engine, supporting multiple question types and real-time score calculation.",
      "Implemented a dynamic content loading system for exam questions and solutions.",
      "Designed the user interface to be culturally relevant and intuitive for Nepali students.",
      "Integrated analytics to track student performance and identify areas for improvement.",
      "Ensured efficient data storage and retrieval for a large database of questions.",
    ],
    techStack: ["Flutter", "Dart", "SQLite", "Provider", "JSON Parsing", "Local Notifications"],
    features: [
      "Extensive Question Bank: Thousands of practice questions for various subjects and exams.",
      "Mock Test Simulations: Full-length mock tests simulating actual exam conditions.",
      "Detailed Solutions: Step-by-step explanations for every question.",
      "Performance Analytics: Track progress, identify weak areas, and personalize study plans.",
      "Bookmark Feature: Save difficult questions for later review.",
    ],
    challenges:
      "Managing and efficiently querying a large local database of questions and answers. Ensuring the app performs well on a wide range of Android and iOS devices, including older models common in Nepal, was also a key consideration.",
    solutions:
      "Utilized SQLite for robust local database management and optimized queries for performance. Implemented lazy loading for question sets to reduce memory consumption. Conducted extensive testing on various devices and applied performance profiling to identify and resolve bottlenecks, ensuring a smooth user experience.",
    links: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9.5 8.5 5 3.5-5 3.5V8.5Z"/></svg>',
        label: "Google Play",
        url: "#", // IMPORTANT: Replace with actual Google Play Store link
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c2.8-3.1 2.8-6.6 0-7.7v-.8c.5-.4 1.1-1 1-2.4 0-.5 0-1.1-.3-1.6a9.5 9.5 0 0 0 0-3.2c-1.3-.8-2.4-1.3-3.7-1.3A9.5 9.5 0 0 0 10 2a9.5 9.5 0 0 0-3.7 1.3c-.3.5-.3 1.1-.3 1.6 0 1.4.5 2 1 2.4v.8c-2.8 1.1-2.8 4.6 0 7.7a4.8 4.8 0 0 0-1 3.2v4c-2.4-1.3-4-3.8-4-6.5C2 10 6.5 6 12 6c5.5 0 10 4 10 9.5 0 2.7-1.6 5.2-4 6.5ZM12 20c-1.1 0-2.2-.2-3.3-.6a8.5 8.5 0 0 1-5.7-5.7C2.2 12.2 2 11.1 2 10c0-4.5 3.5-8 8-8s8 3.5 8 8c0 1.1-.2 2.2-.6 3.3a8.5 8.5 0 0 1-5.7 5.7C14.2 19.8 13.1 20 12 20Z"/></svg>',
        label: "GitHub Repo",
        url: "#", // IMPORTANT: Replace with actual GitHub link if public
      },
    ],
  },
]
