import PixelHero from "@/components/PixelHero"
import ProjectCards from "@/components/ProjectCards"
import AboutSection from "@/components/AboutSection"
import PodcastPlayer from "@/components/PodcastPlayer"
import SocialLinks from "@/components/SocialLinks"
import FloatingPixels from "@/components/FloatingPixels"
import SoundEffects from "@/components/SoundEffects"
import ImpactCounter from "@/components/ImpactCounter"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/magicui/blur-fade"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400">
      <FloatingPixels />
      <SoundEffects />

      <main className="max-w-4xl mx-auto px-4 py-4">
          
        <PixelHero />

        <section className="mt-16">
          <h2 className="text-2xl font-pixel mb-8 flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-green-400" />
            Impact Projects
          </h2>
          <ProjectCards />
        </section>

        <section className="mt-16">
          <ImpactCounter />
        </section>

        <section className="mt-16">
          <AboutSection />
        </section>

           <section id="skills">
        <div className="flex flex-col gap-y-3">
          <BlurFade>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1 relative">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'Python',
              'Go',
              'Supabase',
              'Docker',
              'Kubernetes',
              'React Native',
              'C++'
            ].map((skill, id) => (
              <BlurFade key={skill} delay={id * 0.1}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

        <section className="mt-16 grid md:grid-cols-2 gap-8">
          <PodcastPlayer />
          <SocialLinks />
        </section>
      </main>
    </div>
  )
}

