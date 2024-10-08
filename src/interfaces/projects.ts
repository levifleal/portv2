export interface Project {
    title: string;
    slug: string;
    description: string;
    fullDescription: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    highlight?: boolean;
    cardImage: string
}