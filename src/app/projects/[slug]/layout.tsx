import { Projects } from "@/data/projects"
import { Metadata } from "next"
import { PropsWithChildren } from "react"


type ProjectLayoutProps = {
    params: {
        slug: string
    }
}


export async function generateMetadata({ params }: ProjectLayoutProps): Promise<Metadata> {
    const project = Projects.find((proj) => proj.slug === params.slug)

    if (!project) {
        return {
            title: 'Project Not Found',
            description: 'The requested project could not be found.'
        }
    }

    return {
        title: `${project.title} | Levi Leal's Portfolio`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [
                {
                    url: project.image,
                    alt: project.title
                }
            ],
            type: 'article',
        }
    }
}

export default function layout({ children }: PropsWithChildren) {
    return children
}