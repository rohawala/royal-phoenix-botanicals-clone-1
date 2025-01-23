import { scale, Tech_Mahindra, Infomatics, ait} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Scale AI",
        icon: scale, // Replace with your actual icon import
        iconBg: "#accbe1",
        date: "December 2024 - Present",
        points: [
            "Designed and implemented full-stack solutions to enhance Outlier.ai's automated business analysis platform, leveraging Java 8, React.js, Node.js, and Python.",
            "Optimized database architecture (PostgreSQL, MongoDB), improving data processing speed by 25%.",
            "Developed scalable APIs to integrate third-party services and facilitate seamless client onboarding.",
            "Spearheaded prompt engineering for machine learning models, driving improvements in user-relevant insights.",
            "Conducted AI model testing and updates, aligning solutions with business needs and boosting platform efficiency.",
            "Collaborated cross-functionally to deploy features that elevated user engagement and drove a 20% growth in product adoption."
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Infomatics Corp",
        icon: Infomatics, // Replace with your actual icon import
        iconBg: "#fbc3bc",
        date: "January 2022 - November 2024",
        points: [
            "Led a team of seven developers on dual projects, implementing a CRM application with Spring MVC, AngularJS, Java 8 (migrated to Java 11), and MySQL, and a MERN stack solution.",
            "Migrated Jenkins from a local server with Intel i7 to Azure Jenkins for better performance and reliability, automating testing and production deployments.",
            "Implemented CI/CD pipelines and containerized applications using Docker and Kubernetes, reducing deployment times.",
            "Organized team meetings, assigned tasks, and managed bi-weekly sprints to ensure efficient progress.",
            "Utilized DevOps practices with tools such as GIT, npm, Jira, Jenkins, and Azure DevOps."
        ],
    },
    {
        title: "Web Assistant Developer",
        company_name: "George Mason University",
        icon: scale, // Replace with your actual icon import
        iconBg: "#b7e4c7",
        date: "June 2021 - September 2021",
        points: [
            "Crafted a portfolio website for my professor, including web as well as mobile development.",
            "Intermediate knowledge and experience with MVC JavaScript frameworks and technology, including Angular, TypeScript, React, Redux."
        ],
    },
    {
        title: "Senior Technical Associate",
        company_name: "Tech Mahindra Limited",
        icon: Tech_Mahindra, // Replace with your actual icon import
        iconBg: "#a2d2ff",
        date: "October 2019 - October 2020",
        points: [
            "Deployed software-defined networking (SDN) solutions leveraging Cisco ACI and VMware NSX, automating network provisioning and management tasks to reduce deployment times and minimize errors.",
            "Led the deployment of a real-time analytics platform on Azure, leveraging Azure Stream Analytics and Power BI, reducing data processing time by 50%.",
            "Migrated a traditional data center to an Azure-based infrastructure, improving scalability and reducing operational costs by 30%."
        ],
    },
    {
        title: "Software Developer",
        company_name: "AIT Global Inc",
        icon: ait, // Replace with your actual icon import
        iconBg: "#d4a5a5",
        date: "January 2017 - March 2019",
        points: [
            "Developed DocuBuilder, a robust application designed to process and transform input files (XML, DOCX, XLS, XLSX, CSV, DOC) into visually valuable information such as tables, pie charts, and variables.",
            "Implemented a client-specific logging mechanism to streamline debugging, increasing efficiency and reducing debugging time by approximately 60%."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/rohawala?tab=repositories',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/hussain-rohawala-ab84a1ba/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Web Assistant Developer',
        description: 'Crafted a portfolio website for my professor, including web as well as mobile development. Developed intermediate-level skills with MVC JavaScript frameworks, including Angular, TypeScript, React, and Redux.',
        link: 'https://mason.gmu.edu/~hrohawal/',
    },    
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Corona Live Tracker',
        description: 'Created a COVID-19 Tracker/Stats Application using React, Charts.js, Material UI, and APIs with Async/Await syntax. Enhanced skills in React workflow, including data fetching, hooks, and folder structure.',
        link: 'https://github.com/rohawala/Live_Corona_Tracker',
    }
];