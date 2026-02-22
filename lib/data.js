import {
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiGit,
    SiGithub,
    SiDocker,
    SiPostman,
    SiFirebase,
    SiGitlab,
    SiRedux,
    SiJavascript,
    SiPython,
    SiFastapi,
    SiPostgresql,
    SiOracle,
    SiAngular,
    SiVuedotjs,
    SiGooglePlay,
    SiAppStore
} from "react-icons/si";

import { FiGithub, FiLinkedin, FiBookOpen } from "react-icons/fi";

export const navbarContent = {
    brand: "Dhaval Joshi",
    navLinks: [
        { label: "About", href: "/about" },
        { label: "Skills", href: "/skills" },
        { label: "Projects", href: "/projects" },
        { label: "Awards", href: "/awards" },
        { label: "Contact", href: "/contact" }
    ],
    socialLinks: [
        { icon: FiGithub, href: "https://www.github.com/dhavaljoshi316" },
        { icon: FiLinkedin, href: "https://www.linkedin.com/in/dhaval-joshi-290528252/" }
    ]
}

export const heroContent = {
    title: "Fullstack & React Native Developer",
    description:
        "I build scalable Web and cross-platform Mobile Applications using modern technologies with performance and clean architecture in mind.",
    primaryButton: {
        label: "Download CV",
        href: "/DhavalJoshi.pdf"
    },
    secondaryButton: {
        label: "Contact Me",
        href: "/contact"
    }
};

export const heroStats = [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Projects Delivered", value: 10, suffix: "+" },
    { label: "Awards", value: 4, suffix: "+" }
];

export const educationContent = {
    heading: "Education",
    description: "My academic journey that shaped my technical foundation.",
    items: [
        {
            icon: FiBookOpen,
            duration: "2023 – 2025",
            degree: "Master of Computer Applications (M.C.A)",
            university: "Atmiya University",
            cgpa: "8.70 / 10"
        },
        {
            icon: FiBookOpen,
            duration: "2020 – 2023",
            degree: "Bachelor of Computer Applications (B.C.A)",
            university: "Atmiya University",
            cgpa: "8.99 / 10"
        }
    ]
}

export const aboutContent = {
    id: "about",
    title: "About Me",
    description: [
        "I am a Full Stack and React Native Engineer with over 3 years of experience building scalable web and cross-platform mobile applications.",
        "My approach emphasizes performance, clean architecture, and maintainable systems that solve real-world business problems.",
        "I am passionate about building production-ready solutions and contributing to high-impact, globally focused projects."
    ]
}

export const awardsContent = {
    heading: "Awards & Achievements",
    description: "Recognition and milestones in my professional and academic journey.",
    items: [
        {
            title: "Shining Silver Star in Technology",
            year: "2025",
            issuer: "Infinity Infoway Ltd."
        },
        // {
        //     title: "MCA Degree Completion",
        //     year: "2025",
        //     issuer: "Atmiya University",
        //     // put image too
        // },
        {
            title: "Future is Bright award",
            year: "2024",
            issuer: "Infinity Infoway Ltd."
        },
        {
            title: "Bright Beginner of the Year",
            year: "2023",
            issuer: "Infinity Infoway Ltd."
        },
        // {
        //     title: "BCA Degree Completion",
        //     year: "2023",
        //     issuer: "Atmiya University"
        // },
        {
            title: "Shining Star in Public Speaking",
            year: "2020",
            issuer: "SGS School"
        }
    ]
}

export const certificationsContent = {
    heading: "Certifications",
    description: "Professional certifications validating technical expertise.",
    items: [
        {
            title: "Fundamentals to Docker and Kubernetes",
            issuer: "Scaler",
            year: "2025",
            image: null,
            credentialLink: null
        },
        {
            title: "Fundamentals to Python",
            issuer: "Atmiya University",
            year: "2022",
            image: null,
            credentialLink: null
        }
    ]
}

export const contactContent = {
    heading: "Let’s Work Together",
    description: "Have a project idea or just want to connect? Drop a message below.",
    email: "dhavaljoshi0316@gmail.com",
    responseNote: "Let’s build something impactful.",
    button: {
        label: "Send Message",
        variant: "primary"
    }
}

export const formFields = [
    { type: "text", name: "name", placeholder: "Your Name" },
    { type: "email", name: "email", placeholder: "Your Email" },
    {
        type: "textarea",
        name: "message",
        placeholder: "Your Message",
        rows: 5
    }
]

export const socialLinks = [
    { icon: FiGithub, href: "https://www.github.com/dhavaljoshi316" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/dhaval-joshi-290528252/" }
];

export const projectsContent = {
    title: "Projects",
    subtitle: "Selected work showcasing my development experience.",
    projects: [
        {
            name: "iGPS",
            image: null,
            company: 'Infinity Infoway Ltd.',
            category: "Corporate",
            type: "Mobile Application",
            description: "Developed Android and iOS Application for real time bus tracking with speed, status and availibilities for Infinity Infoway Ltd.",
            technologies: ["React Native", "Redux Toolkit", "Firebase", "RestAPI", "ReactNative Reanimated", "ReactNative Maps"],
            androidLink: null,
            iOSLink: null,
            github: null
        }
    ]
}

export const skillsContent = {
    heading: "Tech Stack & Skills",
    description: "Technologies I use to build scalable applications.",
    categories: [
        {
            title: "Frontend",
            items: [
                { name: "JavaScript", icon: SiJavascript },
                { name: "TypeScript", icon: SiTypescript },
                { name: "React Native", icon: SiReact },
                { name: "React.js", icon: SiReact },
                { name: "Next.js", icon: SiNextdotjs },
                { name: "AngularJS (1.x)", icon: SiAngular },
                { name: "Vue.js", icon: SiVuedotjs },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "Redux Toolkit", icon: SiRedux },
            ]
        },
        {
            title: "Backend",
            items: [
                { name: "Node.js", icon: SiNodedotjs },
                { name: "Express.js", icon: SiExpress },
                { name: "Python", icon: SiPython },
                { name: "FastAPI", icon: SiFastapi },
            ]
        },
        {
            title: "Database",
            items: [
                { name: "MongoDB", icon: SiMongodb },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "MS SQL Server" },
                { name: "Oracle", icon: SiOracle },
            ]
        },
        {
            title: "Version Control",
            items: [
                { name: "Git", icon: SiGit },
                { name: "GitHub", icon: SiGithub },
                { name: "GitLab", icon: SiGitlab }
            ]
        },
        {
            title: "Tools & DevOps",
            items: [
                { name: "Docker", icon: SiDocker },
                { name: "Postman", icon: SiPostman },
                { name: "Firebase", icon: SiFirebase },
                { name: "VS Code" }
            ]
        },
        {
            title: "Soft Skills",
            items: [
                { name: "Problem Solving" },
                { name: "Public Speaking" },
                { name: "Adaptability" },
                { name: "Team Collaboration" },
                { name: "Leadership" },
                { name: "Interns Training" },
            ]
        }
    ]
}

export const footerContent = {
    name: "Dhaval Joshi",
    tagline: "Fullstack & React Native Developer"
};