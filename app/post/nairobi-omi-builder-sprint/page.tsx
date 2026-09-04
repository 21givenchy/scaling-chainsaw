
import CommentSection from "../../components/CommentSection"
import SocialShare from "../../components/SocialShare"
import Image from "next/image"

const POST = {
  id: "nairobi-omi-builder-sprint",
  title: "Omi Builder Sprint Nairobi: Showcasing the Future of AI Innovation",
  subtitle: "Witness the creativity of Nairobi's developers as they showcase AI-driven solutions for business, safety, and culture at the Omi Builder Sprint.",
  author: "George Karani & Team",
  date: "2026-04-28",
  durationSeconds: 1403,
  thumbnailUrl: "/omi-hack.jpeg",
  tags: [
    "Omi Builder Sprint",
    "Nairobi Tech",
    "AI Innovation",
    "Wearable Technology",
    "Swarms World",
    "Developer Community",
    "Legal Tech",
    "Health Tech",
  ],
  sections: [
    {
      heading: "Innovation at the Omi Builder Sprint Nairobi",
      body: "The Omi Builder Sprint in Nairobi brought together a vibrant community of developers and innovators to showcase projects built on the Omi platform. The event emphasized the launch of new mobile tools and the integration of AI agents to enhance productivity and user experience. Participants demonstrated how wearable technology can be leveraged to create solutions ranging from business analytics to personal security.",
      keyPoints: [
        "Launch of the platform's mobile app to facilitate easier learning and access.",
        "Focus on AI-driven agency and technical prowess within the developer community.",
        "Emphasis on collaboration and the future of the tech ecosystem in Nairobi.",
      ],
    },
    {
      heading: "Diverse AI Solutions: From Business to Safety",
      body: "Several standout projects were presented during the sprint, highlighting the versatility of the Omi device. 'Explain Business' acts as a co-founder assistant by summarizing conversations and data into plain English. 'Echo Safety' serves as a personal security companion, listening for distress signals or specific danger words to alert emergency contacts. In the healthcare sector, 'Clinic Wellness' transcribes and summarizes doctor-patient consultations to ensure accurate medical records and follow-ups.",
      keyPoints: [
        "Explain Business: An AI tool that summarizes complex business data and conversations into plain English.",
        "Echo Safety: A wearable security app that detects danger through sound and body language analysis.",
        "Clinic Wellness: A digital health assistant that automates medical transcription and summary notes.",
      ],
    },
    {
      heading: "Legal Tech and Cultural Immersion",
      body: "The legal and cultural sectors also saw significant innovation. 'Hack Stripes' (and its sister feature 'Hackite') was introduced as a tool for lawyers to draft contracts and create legal briefs from recorded conversations, integrated with the Kenya law system. Another project, 'Cultural Immersion,' uses Omi to help users learn local languages and etiquette through daily dialogue analysis, acting as a virtual cultural ambassador.",
      keyPoints: [
        "Hack Stripes: A legal platform for drafting contracts and generating courtroom briefs.",
        "Cultural Immersion: An AI tool for learning local languages and social norms in real-time.",
        "Omi Aura: A social AI dashboard that tracks 'social battery' and networking traits during events.",
      ],
    },
    {
      heading: "Celebrating Success and Future Opportunities",
      body: "The sprint concluded with the announcement of 'Hackers' as the winner, recognized for its strong project execution and creativity. Judges highlighted the impressive ability of projects to capture local languages and provide usable, real-world applications. The event organizers encouraged builders to move toward market publication, noting the significant opportunities for monetization in the young and growing AI market.",
      keyPoints: [
        "Hackers named the winner of the Nairobi Builder Sprint.",
        "Recognition of creativity in capturing local languages and niche use cases.",
        "Encouragement for developers to utilize go-to-market strategies and monetize their innovations.",
      ],
    },
  ],
  segments: [
    { start_time: 0, description: "Opening Remarks and Update Announcement" },
    { start_time: 122, description: "Explain Business Demo" },
    { start_time: 270, description: "Safety Smart App Demo" },
    { start_time: 360, description: "Clinic Wellness Health Platform" },
    { start_time: 562, description: "Hack Stripes Legal Platform" },
    { start_time: 724, description: "OMI Sidekick Reminder Extension" },
    { start_time: 847, description: "Cultural Immersion Assistant" },
    { start_time: 939, description: "Mate Cultural App Overview" },
    { start_time: 1100, description: "OMI Aura Demo, Winner Announcement & Closing" },
  ],
  conclusion:
    "The Omi Builder Sprint in Nairobi showcased the immense potential of AI-driven wearable technology to solve real-world problems across diverse sectors. From legal and healthcare efficiencies to personal safety and cultural immersion, these projects represent a significant step forward for the local tech ecosystem, driven by a spirit of collaboration and a vision for a more connected future.",
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <article>
          <h1 className="font-pixel text-4xl sm:text-5xl font-bold mb-4">{POST.title}</h1>
          <span className="inline-block px-3 py-1 bg-green-600 text-black text-sm font-mono rounded mb-6">
            Blog
          </span>

          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {POST.subtitle}
            </p>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {POST.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 rounded text-xs bg-secondary/20 text-muted-foreground hover:bg-secondary/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground/70">
                <span>{POST.date}</span>
                <span className="hidden sm:inline">•</span>
                <span>{Math.round(POST.durationSeconds / 60)} min read</span>
                <span className="hidden sm:inline">•</span>
                <span>by {POST.author}</span>
              </div>
            </div>

            <Image
              src={POST.thumbnailUrl}
              alt={POST.title}
              width={800}
              height={420}
              className="w-full h-auto object-cover rounded-lg mb-10"
              priority
            />

            {POST.sections.map((section, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b border-border pb-3">
                  {section.heading}
                </h2>
                <p className="mb-5 text-base sm:text-lg leading-relaxed text-foreground/90">
                  {section.body}
                </p>
                {section.keyPoints && (
                  <div className="bg-secondary/10 border-l-4 border-green-600 pl-6 py-4 my-6 rounded-r">
                    <ul className="space-y-3">
                      {section.keyPoints.map((point, pointIdx) => (
                        <li key={pointIdx} className="text-base leading-relaxed flex gap-3">
                          <span className="text-green-600 font-bold flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            <div className="border-t border-border pt-10 mt-12">
              <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
                {POST.conclusion}
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <SocialShare
                url={`https://yourdomain.com/post/${POST.id}`}
                title={POST.title}
              />
            </div>

            <div className="mt-12">
              <CommentSection />
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}