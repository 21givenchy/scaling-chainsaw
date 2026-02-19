'use client'

import { motion } from 'framer-motion'
import EventCard from '@/components/EventCard'
import AnimatedCounter from '@/components/AnimatedCounter'
import CommunityBadge from '@/components/CommunityBadge'

const pastEvents = [
  {
    title: 'Omi Builder Sprint Nairobi',
    date: '2024',
    location: 'Nairobi, Kenya',
    description:
      'An intensive builder sprint bringing together developers and creators to prototype and ship products using Omi tools and infrastructure.',
    link: 'https://luma.com/1y2axewo',
    type: 'past' as const,
  },
  {
    title: 'Cowork with ETHGlobal in Nairobi',
    date: '2024',
    location: 'Nairobi, Kenya',
    description:
      'A collaborative coworking session in partnership with ETHGlobal, connecting Ethereum builders and web3 enthusiasts in the Nairobi ecosystem.',
    link: 'https://luma.com/ethglobal-cowork-nairobi',
    cohost: 'ETHGlobal',
    type: 'past' as const,
  },
  {
    title: 'AI & Tech Startup Battle Kenya',
    date: '2024',
    location: 'Kenya',
    description:
      'A competitive startup pitch event focused on AI and technology ventures, hosted in partnership with NextUnicorn Fund to discover the next wave of Kenyan tech startups.',
    link: '#',
    cohost: 'NextUnicorn.fund',
    type: 'past' as const,
  },
  {
    title: 'All Star Pitch Battle Kabarak',
    date: '2024',
    location: 'Kabarak University, Kenya',
    description:
      'The flagship pitch competition hosted with Startup Grind Kabarak, showcasing the best student and early-stage founders in the region.',
    link: 'https://www.startupgrind.com/events/details/startup-grind-kabarak-presents-all-star-pitch-battle-kabarak/',
    cohost: 'Startup Grind Kabarak',
    type: 'past' as const,
  },
  {
    title: 'Boost Your Customer Management with Zoho CRM Plus',
    date: '2024',
    location: 'Kabarak University, Kenya',
    description:
      'A hands-on workshop teaching early-stage founders and students how to leverage Zoho CRM Plus for efficient customer relationship management.',
    link: 'https://www.startupgrind.com/events/details/startup-grind-kabarak-university-presents-boost-your-customer-management-with-zoho-crm-plus/cohost-kabarak/',
    cohost: 'Zoho',
    type: 'past' as const,
  },
  {
    title: 'Stories from Early Stage Builders',
    date: '2024',
    location: 'Nairobi, Kenya',
    description:
      'An intimate storytelling event with Waiter Call and virtual story alumni and pitchers from the All Star Pitch event. Co-hosted between CMX Nairobi and Startup Grind Kabarak.',
    link: 'https://events.cmxhub.com/events/details/cmx-nairobi-presents-stories-from-early-stage-builders-cmx-nairobi-x-sg-kabarak/cohost-nairobi/',
    cohost: 'CMX Nairobi x SG Kabarak',
    type: 'past' as const,
  },
]

const communities = [
  { name: 'Startup Grind Kabarak', link: 'https://www.startupgrind.com/kabarak/' },
  { name: 'CMX Nairobi', link: 'https://events.cmxhub.com/nairobi/' },
  { name: 'Front Forum Focus', link: 'https://frontforumfocus.com' },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/events-hero.jpg"
            alt="Community events"
            className="w-full h-full object-cover opacity-30 dark:opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-light"
          >
            Community & Events
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6 text-balance font-display"
          >
            Bringing builders
            <br />
            together.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed"
          >
            Hosting and curating events across Kenya that connect early-stage
            founders, developers, and community builders to learn, pitch, and
            grow together.
          </motion.p>
        </div>
      </section>

      {/* Animated Metrics */}
      <section className="border-y border-border bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <AnimatedCounter end={7} suffix="+" label="Events Hosted" />
            <AnimatedCounter end={3} label="Cities" />
            <AnimatedCounter end={500} suffix="+" label="Community Reach" />
            <AnimatedCounter end={3} label="Communities" />
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-light"
        >
          My Communities
        </motion.h2>
        <div className="flex flex-wrap gap-3">
          {communities.map((c, i) => (
            <CommunityBadge key={c.name} name={c.name} link={c.link} index={i} />
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-light"
        >
          Events Hosted
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map((event, i) => (
            <EventCard key={event.title} {...event} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
