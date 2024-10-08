import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: "Projetos | Levi Leal - Desenvolvedor Full Stack",
    description: "Explore minha coleção de projetos de desenvolvimento web, incluindo aplicações React, Next.js e experimentos criativos. Descubra como posso ajudar a tornar seu próximo projeto realidade.",
    openGraph: {
        title: "Portfólio de Projetos | Levi Leal",
        description: "Conheça os projetos desenvolvidos por Levi Leal, desde aplicações web até experimentos criativos em desenvolvimento de software.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projetos de Desenvolvimento Web | Levi Leal",
        description: "Explore meus projetos de desenvolvimento e veja como posso contribuir para sua próxima ideia.",
        creator: "@levileal", 
    },
    keywords: [
        "Projetos de Desenvolvimento Web",
        "Portfólio de Desenvolvedor",
        "Levi Leal",
        "React Projects",
        "Next.js Developer",
        "Desenvolvimento Full Stack",
        "Projetos de Programação",
        "Web Developer Portfolio"
    ],
    alternates: {
        canonical: "https://levileal.com/projects"
    }
}


export default function layout({ children }: PropsWithChildren) {
    return children
}