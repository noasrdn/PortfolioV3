"use client"

import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Job étudiant",
    company: "Granger Frères",
    period: "2024",
    description:
      "1 mois en intérimaire chez Granger Frère, une usine de Plasturgie .",
  },
  {
    title: "Job étudiant",
    company: "salaisons du Ligno.",
    period: "2023",
    description:
      "1 mois aux salaisons du Lignon en Juillet-Août, puis 2 autres semaines n Décembre + 1 semaine de chantier Jeune à Bellecombe, Yssingeaux (Construction d’un mur en pierre).",
  },
  {
    title: "DigiWeek",
    company: "ESD | Lyon",
    period: "2023",
    description:
      "Participation à une semaine à Lyon en immersion dans une école supérieur du digital (ESD-Lyon) . Création d'une application Mobile et d’un prototype sur Figma",
  },
  {
    title: "Formation en Ligne",
    company: "OpenClassroom",
    period: "2019",
    description: "Suivi d' une formation en ligne sur le développement Web. (HTML5, CSS3 & PHP)",
  },
  {
    title: "Stage en Vente",
    company: "WoodStreet",
    period: "2019",
    description: "Stage dans un magasin de vêtements (WoodStreet) à Monistrol-sur-Loire .Accueil et accompagnement clients. Découverte des différentes techniques de ventes, de marketing et logistique magasin .",
  }
]
export function Timeline() {
  const isMobile = useIsMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-brand-rose/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/10 to-brand-rose/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-rose z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
