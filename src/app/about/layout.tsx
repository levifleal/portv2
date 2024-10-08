import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: "About Levi Leal | Full Stack Developer & Tech Enthusiast",
    description: "Explore Levi Leal's journey as a Full Stack Developer, delving into his expertise in web development, problem-solving, and innovative solutions.",
    openGraph: {
        title: "About Levi Leal | Full Stack Developer & Tech Enthusiast",
        description: "Dive into Levi Leal's story, skills, and passion for web development, software engineering, and cutting-edge technologies.",
        type: "profile",
        images: [
            {
                url: "https://2.gravatar.com/avatar/0aa54c5449234e127cd1662e9b8b50ebdc00638602048ea2932f6d1eda7507db?size=512",
                width: 1200,
                height: 630,
                alt: "Levi Leal - Full Stack Developer & Tech Enthusiast"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "About Levi Leal | Full Stack Developer & Tech Enthusiast",
        description: "Uncover Levi Leal's path in tech, his skills, and what motivates him as a developer and tech enthusiast.",
        creator: "@levileal",
    },
    keywords: [
        "Levi Leal",
        "Full Stack Developer",
        "Web Development",
        "Software Engineer",
        "React Developer",
        "Next.js Developer",
        "TypeScript",
        "JavaScript",
        "Tech Enthusiast",
        "Innovative Solutions"
    ],
}

export default function layout({ children }: PropsWithChildren) {
    return children
}