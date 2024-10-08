import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { Background } from "@/components/background"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/seo/JsonLd"
import { ThemeProvider } from "@/components/ui/themeProvider"
import { Toaster } from "@/components/ui/toaster"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Levi Leal | Portfólio",
    template: "%s | Levi Leal"
  },
  icons: [
    {
      url: '/favicon.png',
      href: '/favicon.png',
    }
  ],
  description: "Seja bem-vindo ao portfólio de Levi Leal - Explore meus projetos, habilidades e experiência",
  metadataBase: new URL("https://levileal.com"), // Substitua com seu domínio real
  openGraph: {
    title: "Levi Leal - Portfólio de Desenvolvedor",
    description: "Explore meu trabalho, habilidades e experiência em desenvolvimento de software",
    images: [
      {
        url: "https://2.gravatar.com/avatar/0aa54c5449234e127cd1662e9b8b50ebdc00638602048ea2932f6d1eda7507db?size=512", // Adicione sua imagem real do Open Graph
        width: 512,
        height: 512,
        alt: "Portfólio Levi Leal"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Leal - Portfólio de Desenvolvedor",
    description: "Confira meus últimos projetos e habilidades",
    creator: "@levileal" // Substitua com seu handle do Twitter se aplicável
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Levi Leal",
    url: "https://levileal.com",
    jobTitle: "Full Stack Developer",
    knowsAbout: ["Web Development", "React", "Next.js", "TypeScript", "Node.js"],
    sameAs: [
      "https://github.com/yourhandle",
      "https://linkedin.com/in/yourprofile",
      "https://twitter.com/yourhandle"
    ],
    image: "https://levileal.com/images/profile.jpg", // Replace with actual URL
    description: "Full Stack Developer especializado em React e Next.js"
  }

  return (
    <html lang="pt-br" className="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <JsonLd data={jsonLd} />
        <link rel="alternate" href="https://levileal.com" hrefLang="pt-BR" />
        <link rel="canonical" href="https://levileal.com" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background>
            <Header />
            <div>
              {children}
              <Toaster />
            </div>
            <Footer />
          </Background>
        </ThemeProvider>
      </body>
    </html>
  )
}