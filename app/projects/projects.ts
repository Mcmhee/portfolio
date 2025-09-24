export const projects = [
  {
    title: "Xpad | Fintech App",
    slug: "xpad",
    tagline:
      "A seamless fintech application enabling users to transact and manage finances securely.",
    overview:
      "Xpad is a production-grade fintech platform designed to simplify financial transactions. I built the mobile application with Flutter, implementing banking features and secure fintech API integrations for payments and transfers.",
    features: [
      "Cross-platform iOS & Android app built with Flutter",
      "Integration with fintech APIs for secure transactions",
      "Real-time notifications for payments and transfers",
      "Scalable backend services for thousands of transactions",
    ],
    techStack: ["Flutter", "Dart", "NestJS", "PostgreSQL", "AWS"],
    challenges: [
      "Ensuring PCI-compliant financial transactions",
      "Implementing robust authentication and authorization flows",
      "Scaling backend services to handle high traffic",
    ],
    learnings: [
      "Deeper expertise in fintech integrations",
      "Mastered secure Flutter app development practices",
      "Learned balancing UX with security requirements",
    ],
    feedback: true,
    links: {
      live: "",
      github: "",
    },
  },
  {
    title: "ResqX Customer | Emergency Services App",
    slug: "resqx-customer",
    tagline:
      "On-demand emergency services for car owners, from towing to fuel delivery.",
    overview:
      "ResqX Customer is a mobile application designed for users to request emergency services such as towing, fuel delivery, jump-starts, and other vehicle-related assistance.",
    features: [
      "User-friendly mobile interface for quick emergency requests",
      "Geolocation to connect users with nearest responders",
      "Secure in-app payments for services",
      "Order tracking and history management",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Node.js", "AWS"],
    challenges: [
      "Integrating live tracking for requests and responders",
      "Ensuring reliable notifications in critical scenarios",
    ],
    learnings: [
      "Enhanced skills in real-time communication systems",
      "Experience in designing user-first emergency apps",
    ],
    feedback: true,
    links: {
      live: "https://play.google.com/store/apps/details?id=com.resqx.customer&hl=en",
      github: "",
    },
  },
  {
    title: "ResqX Pro | Responder App",
    slug: "resqx-pro",
    tagline:
      "A mobile app for responders to accept and manage emergency service requests.",
    overview:
      "ResqX Pro enables service responders (towing, fuel delivery, etc.) to receive, manage, and complete emergency requests from customers in real time.",
    features: [
      "Responder dashboard for request management",
      "GPS integration to navigate to customer location",
      "Secure in-app payment handling",
      "Performance and service history tracking",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "AWS"],
    challenges: [
      "Building real-time two-way communication between users and responders",
      "Ensuring reliability under high-demand scenarios",
    ],
    learnings: [
      "Deeper experience with Flutter for multi-role apps",
      "Learned how to optimize app workflows for field agents",
    ],
    feedback: true,
    links: {
      live: "https://play.google.com/store/apps/details?id=com.resqx.driver&hl=en",
      github: "",
    },
  },
  {
    title: "ResqX Web | Emergency Services Platform",
    slug: "resqx-web",
    tagline:
      "A web platform for managing ResqX services, customers, and responders.",
    overview:
      "The ResqX Web app provides the admin interface to manage customers, responders, and service requests. It integrates customer data, responder onboarding, and real-time request monitoring.",
    features: [
      "Admin dashboard for managing users and requests",
      "Real-time status updates of emergency jobs",
      "Analytics and reporting for service performance",
      "Integration with mobile apps for synchronization",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "AWS"],
    challenges: [
      "Synchronizing web and mobile apps in real time",
      "Designing dashboards that simplify complex workflows",
    ],
    learnings: [
      "Improved at building admin tools with Next.js",
      "Deepened experience in real-time data handling",
    ],
    feedback: false,
    links: {
      live: "https://www.resqx.ng/",
      github: "",
    },
  },
  {
    title: "Treegar | Investment & Carbon Offset App",
    slug: "treegar",
    tagline:
      "A green investment platform helping users invest while offsetting carbon footprints.",
    overview:
      "Treegar is an investment app with 10k+ daily users. I developed core mobile features in Flutter, enabling users to invest and track green projects, while ensuring performance and scalability.",
    features: [
      "Portfolio management and real-time tracking",
      "Integration with secure payment gateways",
      "Analytics for carbon offset projects",
    ],
    techStack: ["Flutter", "Firebase", "AWS", "Node.js"],
    challenges: [
      "Handling large-scale real-time investment data",
      "Maintaining app stability for 10k+ daily users",
    ],
    learnings: [
      "Improved mobile-first design practices",
      "Enhanced understanding of Firebase for real-time data",
    ],
    feedback: true,
    links: {
      live: "",
      github: "",
    },
  },
  {
    title: "Errand360 | Logistics & Delivery Platform",
    slug: "errand360",
    tagline:
      "A last-mile logistics platform connecting riders, vendors, and users in real time.",
    overview:
      "Errand360 connects vendors and riders with customers for logistics and delivery services. I worked on both mobile and backend, ensuring scalability and reliability for daily operations.",
    features: [
      "Vendor & rider mobile apps in Flutter",
      "Real-time location tracking",
      "Payment integration with fintech APIs",
      "Order management and notifications",
    ],
    techStack: ["Flutter", "Laravel", "AWS", "MySQL"],
    challenges: [
      "Building reliable geolocation systems",
      "Managing multi-role app design",
    ],
    learnings: [
      "Enhanced Flutter + Laravel integration",
      "Deepened AWS cloud implementation knowledge",
    ],
    feedback: false,
    links: {
      live: "",
      github: "",
    },
  },
  {
    title: "Xpad Website",
    slug: "xpad-website",
    tagline:
      "Landing website for Xpad, a fintech platform for digital investments and transactions.",
    overview:
      "The Xpad website provides a modern and professional landing page for the fintech platform, highlighting its features, benefits, and user onboarding.",
    features: [
      "Responsive landing page with dynamic content",
      "Modern animations and transitions",
      "Optimized for SEO and performance",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    challenges: [
      "Balancing performance with animations",
      "Creating a brand-focused experience",
    ],
    learnings: [
      "Learned to optimize Next.js websites for SEO",
      "Improved storytelling through design",
    ],
    feedback: false,
    links: {
      live: "https://gigxpad.com/",
      github: "",
    },
  },
  {
    title: "ARM One Website",
    slug: "arm-one",
    tagline:
      "Corporate landing page for ARM, a financial services company in Nigeria.",
    overview:
      "Developed a sleek and professional landing page for ARM to highlight its financial products and customer offerings.",
    features: [
      "Responsive and modern corporate design",
      "Integration with Elementor for easy content management",
      "Optimized load speed and accessibility",
    ],
    techStack: ["WordPress", "Elementor", "JavaScript", "CSS"],
    challenges: [
      "Balancing customization with Elementor constraints",
      "Ensuring fast load times on corporate-grade hosting",
    ],
    learnings: [
      "Improved at optimizing WordPress sites for performance",
      "Learned to balance flexibility with brand design guidelines",
    ],
    feedback: false,
    links: {
      live: "https://www.arm.com.ng/elementor-landing-page-177275/",
      github: "",
    },
  },
  {
    title: "Portfolio | Noel Owolabi",
    slug: "portfolio",
    tagline:
      "My personal developer portfolio showcasing projects, skills, and career journey.",
    overview:
      "Built with Next.js and TailwindCSS, my portfolio integrates advanced features like dynamic project listings, server actions, and Resend-powered contact forms.",
    features: [
      "Dynamic project listing with slug-based routing",
      "Custom contact form with validation and mailing",
      "Dark/light theme toggle with shadcn/ui",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Resend"],
    challenges: [
      "Implementing server actions cleanly",
      "Integrating Resend for modern mailing",
    ],
    learnings: [
      "Enhanced knowledge of Next.js 13+ App Router",
      "Improved UI consistency with shadcn/ui",
    ],
    feedback: true,
    links: {
      live: "https://your-portfolio-link.com",
      github: "https://github.com/mcmhee",
    },
  },
];
