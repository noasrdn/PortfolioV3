"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Contrast, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { PageLoader } from "@/components/page-loader";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectDetailsProps {
  params: {
    id: string;
  };
}

const projectsData: { [key: string]: any } = {
  "1": {
    title: "Arcane Fan Webpage",
    description: "Page Web de présentation de la série animé Arcane.",
    fullDescription:
      "Arcane Fan Page est mon tout premier projet scolaire mené durant ma 1ère année de BUT MMI. Ce projet consistait à concevoir un site web sur un sujet libre, tout en intégrant des contraintes de production spécifiques que vous retrouverez ci-dessous.",
    tags: ["JavaScript", "HTML", "CSS", "Figma", "API"],
    image: "/Arcane.png?height=600&width=1200",
    galleryImages: [
      "/arcane_1.png?height=300&width=600",
      "/arcane_2.png?height=300&width=600",
    ],
    demoUrl: "",
    repoUrl: "",
    features: [
      "Maquettage des pages web sur Figma",
      "Préparation des images et contenus",
      "Création de la structure des pages",
      "Stylisation des pages en CSS",
      "Ajout d'animations en JavaScript",
      "Intégration d'éléments via API",
    ],
    challenge:
      "En tant que perfectionniste, le principal défi était de créer un site visuellement agréable, moderne et dynamique, tout en respectant scrupuleusement les contraintes imposées.",
    solution: [
      "Intégration d'un carrousel automatique",
      "Utilisation de la sémantique HTML (Main, Article, Section...)",
      "Connexion à une API externe",
    ],
  },
  "2": {
    title: "DivinByDivin Refont",
    description:
      "Refont d'un site xeb déja existant pour une marque de vêtements Indépendante",
    fullDescription:
      "DivinByDivin Refont est un projet scolaire de 1ère année de BUT MMI. L'objectif était d'analyser la stratégie marketing d'une marque existante pour l'améliorer. J'ai pris l'initiative de recoder entièrement la maquette au-delà de l'exercice demandé, afin d'obtenir un résultat plus abouti.",
    tags: ["Figma", "HTML", "CSS", "Javascript"],
    image: "/DivinByDivin.png?height=600&width=1200",
    // galleryImages: ["/placeholder.svg?height=300&width=600", "/placeholder.svg?height=300&width=600"],
    demoUrl: "",
    repoUrl: "",
    features: [
      "Analyse de la Direction Artistique et du public cible",
      "Maquettage de la refonte sur Figma",
      "Préparation des images et contenus",
      "Structuration des pages",
      "Stylisation CSS moderne",
      "Dynamisation de l'interface en JavaScript",
    ],
    challenge:
      "Le défi majeur était de concevoir une interface moderne et dynamique qui réponde aux attentes d'un public déjà existant, tout en surpassant le design original.",
    solution: [
      "Adaptation au public cible",
      "Modernisation du design original",
    ],
  },
  "3": {
    title: "GorpCore",
    description:
      "Création d'un site pour une marque de vêtements nommé GORPCORE. Ce projet m'as notament permis de travaillé les positions des éléments.",
    fullDescription:
      "GorpCore est un projet personnel réalisé en autodidacte avant mes études supérieures. Je me suis lancé ce défi dans le but précis de comprendre et maîtriser les propriétés CSS 'position: absolute' et 'z-index'.",
    tags: ["Figma", "HTML", "CSS"],
    image: "/GorpCore.png?height=600&width=1200",
    // galleryImages: ["/placeholder.svg?height=300&width=600", "/placeholder.svg?height=300&width=600"],
    demoUrl: "",
    repoUrl: "",
    features: [
      "Maquettage de la page sur Figma",
      "Préparation des assets graphiques",
      "Structure HTML des pages",
      "Stylisation CSS avancée",
      "Positionnement complexe (absolute & z-index)",
    ],
    challenge:
      "La principale difficulté consistait à comprendre le fonctionnement de ces propriétés CSS tout en reproduisant fidèlement la maquette Figma.",
    solution: [
      "Respect strict de la maquette",
      "Maîtrise du positionnement absolu et des calques (z-index)",
    ],
  },
  "4": {
    title: "Shadow Energy Drink",
    description:
      "Création d'une publicité pour une boisson qui rendrait 'IMMORTELLE' !",
    fullDescription:
      "Shadow Energy Drink est un projet réalisé lors d'un TP de Création Numérique. La consigne était de choisir un sujet parmi une liste et de concevoir toute son identité publicitaire : logo, nom de marque, direction artistique et mise en situation du produit.",
    tags: ["PhotoShop", "Illustrator"],
    image: "/Shadow.png?height=600&width=1200",
    galleryImages: ["/Shadow_1.png?height=300&width=600", 
      "/Logo_Shadow.png?height=300&width=600"],
    demoUrl: "",
    repoUrl: "",
    features: [
      "Création du logotype",
      "Design du packaging",
      "Conception de l'affiche publicitaire",
      "Mise en situation réaliste (Mock-Up)",
    ],
    challenge:
      "Le défi était de créer une identité de marque crédible pour un produit imaginaire aux propriétés irréelles, tout en produisant des visuels marketing convaincants.",
    solution: [
      "Création d'une identité visuelle forte",
      "Utilisation imposée de la suite Adobe (Photoshop | Illustrator)",
    ],
  },
  "5": {
    title: "Profuse",
    description:
      "Mon tout premier SiteWeb ! Site de documentation d'un F1 sponsorisé par Nike pour le Jeu Vidéo Trackmania.",
    fullDescription:
      "Profuse est mon tout premier véritable site web 'OnePage'. J'ai réalisé ce projet comme exercice pratique durant ma formation de développement web sur OpenClassrooms. Il met en avant un véhicule de type F1 issu du jeu Trackmania, sponsorisé par Nike.",
    tags: ["HTML5", "CSS3", "Figma"],
    image: "/profuse_1.png?height=600&width=1200",
    // galleryImages: ["/placeholder.svg?height=300&width=600", "/placeholder.svg?height=300&width=600"],
    demoUrl: "",
    repoUrl: "",
    features: [
      "Maquettage de la OnePage sur Figma",
      "Préparation des médias",
      "Structure HTML sémantique",
      "Intégration et stylisation CSS",
    ],
    challenge:
      "L'objectif principal était de mettre en application mes premiers apprentissages sur un projet concret.",
    solution: [
      "Importation de polices d'écriture externes",
      "Intégration fidèle à la maquette",
    ],
  },
  "6": {
    title: "KAMA",
    description:
      "Création d'une affiche publicitaire pour le Groupe de Musique KAMA;",
    fullDescription:
      "Cette affiche a été réalisée lors d'un TP de 1ère année pour promouvoir le concert du groupe KAMA.",
    tags: ["Photoshop", "Illustrator"],
    image: "/kama.png?height=600&width=1200",
    galleryImages: ["/mockup_kama.png?height=300&width=600"],
    demoUrl: "",
    repoUrl: "",
    features: [
      "Conception graphique de l'affiche",
      "Mise en situation (Mock-up)",
    ],
    challenge:
      "Le défi était de produire une affiche accrocheuse, lisible de loin, et contenant toutes les informations essentielles de l'événement.",
    solution: [
      "Contrainte : Impression encre noire sur support vert",
      "Optimisation de la lisibilité à distance",
      "Hiérarchisation des informations clés",
    ],
  },
  "7": {
    title: "AIRIS",
    description:
      "Création de Lunette Révolutionnaire avec IA intégrée pour permettre aux personnes aveugle d'écouter le monde qui l'es entourent !",
    fullDescription:
      "AIRIS est une révolution. Ces lunettes permettent aux personnes malvoyantes de 'voir' le monde par l'ouïe. L'IA intégrée analyse le champ de vision et décrit auditivement les obstacles face à l'utilisateur, favorisant ainsi son autonomie malgré le handicap.",
    tags: ["Figma", "Powerpoint", "Illustrator", "Photoshop"],
    image: "/Airis.png?height=600&width=1200",
    galleryImages: ["/Airis_1.png?height=600&width=1200","/Airis_2.png?height=600&width=1200"],
    demoUrl: "",
    repoUrl: "",
    features: [
      "Création d'un Produit Révolutionnaire.",
      "Storytelling du Produits.",
      "Maquettage de la MarketPlace."
    ],
    challenge:
      "Le défi consistait à inventer un produit innovant inexistant et à réaliser l'intégralité de sa campagne commerciale.",
    solution: [
      "Concept de produit révolutionnaire",
      "Création complète de la campagne",
      "Maquettage du site web commercial",
    ],
  },
  "8": {
    title: "Spiderman",
    description: "Site Promotionel du Film The Amazing Spiderman 2.",
    fullDescription:
      "Ce projet vise à promouvoir le film en intégrant une API de cartographie. Elle offre un accès ergonomique aux utilisateurs pour localiser les cinémas les plus proches ou identifier les plateformes de streaming disponibles.",
    tags: [
      "Figma",
      "HTML",
      "CSS",
      "Photoshop",
      "Illustrator",
      "TypeScript",
    ],
    image: "/Spiderman.png?height=600&width=1200",
    galleryImages: ["/spiderman_1.png?height=300&width=600", "/spiderman_2.png?height=300&width=600"],
    demoUrl: "",
    repoUrl: "",
    features: [
      "Maquettage complet sur Figma",
      "Préparation des assets",
      "Structure HTML optimisée",
      "Stylisation CSS",
      "Animations interactives en JavaScript",
      "Intégration d'API externe",
    ],
    challenge:
      "L'enjeu principal était de créer un site immersif, moderne et fidèle à l'univers du film, tout en respectant les contraintes techniques.",
    solution: [
      "Promotion d'un film existant",
      "Intégration d'une API de cartographie (Maps)",
      "Intégration de la bande-annonce et dynamisation de l'aperçu",
    ],
  },
};

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const project = projectsData[params.id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-zinc-400 mb-8">
            Sorry, we couldn't find the project you're looking for.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-brand-blue to-brand-rose hover:from-brand-rose hover:to-brand-blue border-0"
          >
            <Link href="/#projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden pt-24">
        <div className="container py-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                {project.title}
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag: string, index: number) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gradient-to-r from-brand-blue/20 to-brand-rose/20 border-brand-blue/30 text-zinc-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-blue to-brand-rose hover:from-brand-rose hover:to-brand-blue border-0"
                  asChild
                >
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Demo
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                  asChild
                >
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                    <Github className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative rounded-xl overflow-hidden border border-zinc-700/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-brand-rose/20 blur opacity-50"></div>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="relative w-full h-auto object-cover rounded-lg"
              />
            </div>

            {project.galleryImages && project.galleryImages.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.galleryImages.map((image: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative rounded-lg overflow-hidden border border-zinc-700/50"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/10 to-brand-rose/10 blur opacity-25"></div>
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} gallery ${index + 1}`}
                        className="relative w-full h-auto object-cover rounded-lg"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Features and Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Features */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-rose mt-2 flex-shrink-0"></div>
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Challenge & Contraints */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Challenge & Constraint
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-brand-blue mb-2">
                        The Challenge
                      </h3>
                      <p className="text-zinc-400">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-rose mb-2">
                        The Constraint
                      </h3>
                      <ul className="space-y-3">
                        {project.solution.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-rose mt-2 flex-shrink-0"></div>
                            <span className="text-zinc-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-blue/10 to-brand-rose/10 backdrop-blur-sm border border-zinc-700/50 p-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-brand-rose/20 blur opacity-25"></div>
              <div className="relative text-center space-y-4">
                <h2 className="text-3xl font-bold">
                  Interested in working together?
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Get in touch to discuss how I can help bring your next project
                  to life.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-blue to-brand-rose hover:from-brand-rose hover:to-brand-blue border-0"
                  asChild
                >
                  <Link href="/#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Suspense>
  );
}
