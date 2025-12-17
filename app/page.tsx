"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";

export default function Portfolio() {
  const handleViewProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactMe = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div
            className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
            style={{ backgroundColor: "rgb(12 7 110)" }}
          ></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-brand-rose rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">
                  Futur Full-Stack Web Developper{" "}
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-rose/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue/90 to-brand-rose">
                NOA SERODON
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I craft digital experiences with code, creativity, and a passion
              for innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={handleViewProjects}
                className="relative overflow-hidden group bg-gradient-to-r from-brand-blue to-brand-rose border-0"
              >
                <span className="relative z-10 flex items-center">
                  View Projects{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-rose to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                onClick={handleContactMe}
                variant="outline"
                className="border-zinc-700 text-brand-rose hover:text-brand-blue hover:border-zinc-500 bg-transparent"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/noasrdn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/noa-serodon-77a836203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:noa.serodon@iut-dijon.u-bourgogne.fr">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-brand-rose rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My Story" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-brand-blue/20 to-brand-rose/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/photo_profil.png?height=600&width=600"
                  alt="Noa Serodon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  Hello ! Moi c'est Noa, je suis un étudiant de 19 ans en 2ème
                  année de BUT MMI (métiers du multimédia et de l'Internet) et
                  voici mon histoire : J’ai commencé à coder à l’âge de 14 ans,
                  en créant de petites applications en C, Batch et VBScript
                  durant mon temps libre, directement depuis le Bloc-notes de
                  mon ordinateur. Haha :) Par la suite, je me suis intéressé à
                  la cybersécurité dans l’objectif de devenir expert dans ce
                  domaine.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  En me renseignant, j’ai découvert qu’il fallait d’abord passer
                  par le développement web. Mon esprit déterminé m’a alors
                  permis de développer mon tout premier site grâce à une vidéo
                  en ligne. Cette première expérience m’a beaucoup plu, si bien
                  que j’ai décidé d’aller plus loin en suivant une formation en
                  ligne sur OpenClassrooms, pour approfondir mes compétences.
                  Cette formation m’a permis d’acquérir des bases solides en
                  HTML, CSS et PHP assez tôt, ce qui m’a donné l’opportunité de
                  m’exercer sur divers projets personnels.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Avec le temps, le développement web m’a tellement passionné
                  que j’ai décidé d’abandonner la cybersécurité pour me
                  concentrer pleinement sur ce métier. En 2022, j’ai ainsi pu
                  participer à la DigiWeek : un stage d’immersion d’une semaine
                  dans une école supérieure du digital (ESD), située à Lyon.
                  Aujourd’hui, j’aimerais faire de ces compétences mon métier.
                  Je suis convaincu que cette passion précoce m’a offert un
                  léger avantage dans ce domaine, ainsi qu’une richesse
                  d’expériences à travers les différents projets que j’ai pu
                  réaliser.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Noa Serodon</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">
                      noa.serodon@iut-dijon.u-bourgogne.fr
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Dijon</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">
                      Open to opportunities
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/SERODON_Noa_CV.pdf"
                    target="_blank"
                  >
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                      Download CV
                    </Button>
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="My Skills"
            subtitle="Technologies I work with"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="JavaScript" level={75} />
            <SkillBadge name="Sassy CSS" level={90} />
            <SkillBadge name="Python" level={80} />
            <SkillBadge name="TypeScript" level={25} />
            <SkillBadge name="PHP" level={85} />
            <SkillBadge name="HTML/CSS" level={95} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="UNIX" level={80} />
            <SkillBadge name="Node.js" level={30} />
            <SkillBadge name="SQL" level={80} />
            <SkillBadge name="React" level={25} />
            <SkillBadge name="Git" level={95} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-brand-rose rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my favorite work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              id="1"
              title="Arcane Fan Webpage"
              description="Page Web de présentation de la série animé Arcane."
              tags={["Javascript", "HTML", "CSS", "Figma", "API"]}
              image="/Arcane.png?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              id="2"
              title="DivinByDivin Refont"
              description="Refont d'un site Web déja existant pour une marque de vêtements Indépendante"
              tags={["Figma", "Html", "CSS", "Javascript"]}
              image="/DivinByDivin.png?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              id="3"
              title="GorpCore"
              description="Création d'un site pour une marque de vêtements nommé GORPCORE. Ce projet m'as notament permis de travaillé les positions des éléments"
              tags={["Html", "CSS", "Figma"]}
              image="/GorpCore.png?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              id="4"
              title="Shadow Energy Drink"
              description="Création d'une publicité pour une boisson qui rendrait 'IMMORTELLE' ! "
              tags={["Illustrator", "Photoshop"]}
              image="/Shadow.png?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              id="5"
              title="Profuse"
              description="Mon tout premier SiteWeb ! Site de documentation d'un F1 sponsorisé par Nike pour le Jeu Vidéo Trackmania"
              tags={["HTML", "CSS", "FIgma", "Illustrator"]}
              image="/Profuse.png?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              id="6"
              title="KAMA"
              description="Création d'une affiche publicitaire pour le Groupe de Musique KAMA (Exercice avec contraintes : Couleurs | Contenu )"
              tags={["Illustrator", "Photoshop"]}
              image="/kama.png?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />

            <ProjectCard
              id="7"
              title="AIRIS"
              description="Création de Lunette Révolutionnaire avec IA intégrée pour permettre aux personnes aveugle d'écouter le monde qui les entourent !"
              tags={["Figma", "Photoshop", "Illustrator"]}
              image="/Airis.png?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />

            <ProjectCard
              id="8"
              title="Spiderman"
              description="Site Promotionel du Film The Amazing Spiderman 2"
              tags={[
                "Figma",
                "Photoshop",
                "Illustrator",
                "API",
                "HTML/CSS",
                "JavaScript",
              ]}
              image="/Spiderman.png?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-rose rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Interressé(e) par mon profil ?"
            subtitle="Let's work together"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* EMAIL - Cliquable avec mailto: */}
                <a
                  href="mailto:noa.serodon@iut-dijon.u-bourgogne.fr"
                  className="flex items-center gap-4 group transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <Mail className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium group-hover:text-brand-blue transition-colors break-all">
                      noa.serodon@iut-dijon.u-bourgogne.fr
                    </div>
                  </div>
                </a>

                {/* LINKEDIN - Ouvre un nouvel onglet */}
                <a
                  href="https://www.linkedin.com/in/noa-serodon-77a836203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <Linkedin className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium group-hover:text-brand-blue transition-colors">
                      Profil LinkedIn
                    </div>
                  </div>
                </a>

                {/* GITHUB - Ouvre un nouvel onglet */}
                <a
                  href="https://github.com/noasrdn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <Github className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium group-hover:text-brand-blue transition-colors">
                      @noasrdn
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm text-zinc-300">
                    Disponible pour une alternance ou un stage !
                  </span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue/90 to-brand-rose">
                Nozz
              </span>
              <span className="text-white">DEV</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Noa Serodon. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/noasrdn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/noa-serodon-77a836203"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:noa.serodon@iut-dijon.u-bourgogne.fr">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
