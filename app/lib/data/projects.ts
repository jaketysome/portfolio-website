const projects: Project[] = [
    {
        title: "EDMToolbox",
        description: "Modern, SEO Optimised Ecommerce website with Notion API integration, Google Analytics 4 and consent management.",
        image: "/images/edmtoolbox-cover.png",
        technologies: ["Next.js", "Typescript", "TailwindCSS"],
        liveLink: "https://edmtoolbox.com",
        category: "professional"
    },
    {
        title: "WareHouseCityRecords",
        description: "Dynamic and Responsive website for an Electronic Music Record Label with a focus on engaging UI and SEO Optimisation. Utilising Next.js features such as SSR, ISR.",
        image: "/images/warehousecityrecords-cover.png",
        technologies: ["Next.js", "Typescript", "TailwindCSS"],
        liveLink: "https://warehousecityrecords.com",
        category: "professional"
    },
    {
        title: "MixMapper",
        description: "Next.js utility app for converting DJ mix metadata into formatted track lists with automatic Beatport.com buylink searching.",
        image: "/images/mixmapper-cover.png",
        technologies: ["Next.js", "Node.js", "Typescript", "TailwindCSS"],
        liveLink: "https://mixmapper.co.uk",
        category: "professional"
    },
    {
        title: "Portfolio Website",
        description: "My portfolio website built using Next.js, Typescript and TailwindCSS. Original vanilla HTML, CSS & JS generated in Claude 3.7 Sonnet and converted by me to Next.js which in of itself was a learning experience.",
        image: "/images/portfolio-website-cover.png",
        technologies: ["Next.js", "Node.js", "Typescript", "TailwindCSS"],
        liveLink: "https://example.co.uk",
        githubLink: "https://github.com/yourusername/project",
        category: "portfolio"
    },
    {
        title: "News API",
        description: "The intention of this News API is to mimic the building of a real world backend service (such as reddit) which should provide this information to the front end architecture.",
        image: "/images/news-api-cover.png",
        technologies: ["Node.js", "Express", "SQL", "PostgreSQL"],
        liveLink: "https://nc-news-api-service.onrender.com/api",
        githubLink: "https://github.com/jaketysome/portfolio-project-news-api",
        category: "portfolio"
    },
    {
        title: "NC News",
        description: "This is the frontend website for the NC News API built during my time at the Northcoders bootcamp. The purpose of this project was to emulate a news-based web service with similar functionality to a service such as Reddit, allowing users to browse articles as well as comment and vote.",
        image: "/images/nc-news-website-cover.png",
        technologies: ["React", "Javascript"],
        liveLink: "https://nc-news-portfolio-site.netlify.app",
        githubLink: "https://github.com/jaketysome/nc-news",
        category: "portfolio"
    }
]

export const projectCategories: ProjectCategory[] = ["all projects", "professional", "portfolio"]

export default projects;