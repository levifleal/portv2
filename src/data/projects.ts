import { Project } from "@/interfaces/projects";

export const Projects: Project[] = [
    {
        title: "Meteora Project",
        liveUrl: "https://meteoraproject.levileal.com/",
        githubUrl: "https://github.com/levifleal/AluraChallange-07",
        technologies: ['React', "HTML5", "Css3", "TypeScript", "Git"],
        description: "E-commerce frontend desenvolvido para a Alura Challenge 07.",
        fullDescription: "O Meteora Project é um projeto de e-commerce frontend desenvolvido para o Alura Challenge 07. A aplicação oferece uma interface intuitiva para navegação e compra de produtos, com foco em uma experiência de usuário agradável. O projeto foi construído com React, HTML5, CSS3, TypeScript e Git, e está disponível para acesso público.",
        image: "/projects/meteora.png",
        cardImage: "/projects/meteora-card.png",
        highlight: true,
        slug: "meteora-project"
    },
    {
        title: 'Decodificador',
        liveUrl: "https://decodificador.levileal.com/",
        githubUrl: 'https://github.com/levifleal/OneChallenge',
        technologies: ["HTML5", "Css3", "JavaScript", "Git"],
        description: "Decodificador, desenvolvido para o One Challenge.",
        fullDescription: "O Decodificador é uma aplicação web simples que permite a criptografia do texto e vice-versa. O projeto foi desenvolvido para o One Challenge, utilizando HTML5, CSS3 e JavaScript.",
        image: "/projects/decodificador.png",
        cardImage: "/projects/decodificador-card.png",
        highlight: false,
        slug: "decodificador"
    }
]