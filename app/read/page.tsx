'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Rss, MessageCircle } from 'lucide-react'
import ArticleReader from '@/components/ArticleReader'

const TRILOGY_ARTICLES = [
  {
    id: 'trust-premium',
    title: 'The Rise of Impact Investment: What Does Trust Really Mean?',
    subtitle: 'Edition 1 of 3: Why trust is the new premium, and how "proof" has become a product feature',
    author: 'George Karani & Rosa Schmidt',
    date: 'Aug 02, 2025',
    edition: 'Edition 1 of 3',
    excerpt:
      'From promises to proof. How impact investing is shifting from mission statements to measurable, verifiable outcomes. Featuring insights from impact leaders and case studies of founders who changed their deck.',
    tags: ['Impact', 'Trust', 'Fundraising', 'Verification'],
    content: `<h2>The Rise of Impact Investment: What Does Trust Really Mean?</h2>
<p>Welcome to the new era of Impact. We've opened the door and guess what? Proof's inside.</p>
<p><strong>Edition 1 of 3, The Trust Series</strong></p>
<p>Authors George Karani & Rosa Schmidt</p>

<h3>Welcome</h3>
<p>This is the first edition of our limited 3-part series exploring the changing role of trust in the impact economy.</p>
<p>This series is crafted for founders, funders, and ecosystem builders actively shaping the next generation of climate and deep-tech ventures. The central premise is that a mere statement of purpose is no longer sufficient to drive results; instead, verifiability has emerged as the definitive differentiator.</p>
<p>Trust has transcended its traditional role as a mere sentiment, becoming a crucial signal that investors, customers, and partners are diligently seeking.</p>

<h3>Here's what's ahead in the series:</h3>
<ul>
<li><strong>Edition 1 (this one):</strong> Why trust is the new premium, and how "proof" has become a product feature (case study: investor, family office)</li>
<li><strong>Edition 2:</strong> Why marketing is being redefined as a channel for transparency, not just storytelling (case study: impact agency)</li>
<li><strong>Edition 3:</strong> Why the companies that scale trust are the ones who align teams, not just messaging (case study: startup)</li>
</ul>

<h3>From Promises to Proof</h3>
<p>For years, impact was communicated through mission. Purpose was the story. Promises stood in for progress.</p>
<p>But in today's market, that model is collapsing under the weight of overuse and under-delivery. Investors, particularly those in family offices and values-driven vehicles, are no longer responding to vision alone. They're asking harder questions:</p>
<ul>
<li>What are you measuring?</li>
<li>How is it verified?</li>
<li>How traceable is the impact you're claiming?</li>
</ul>

<p>This shift does not stem from cynicism but represents a rational response to a system that has become saturated with good intentions but remains notably short on concrete evidence. As Danielle Patterson, CEO of Family Office Access, remarked recently:</p>
<blockquote>"It's not that people don't care about impact. It's that they no longer know who to believe."</blockquote>

<h3>The New Currency: Trust Through Verification</h3>
<p>Payel Farasat, an impact investor, champions trust as the true currency for resilience, especially in climate-impacted and capital-starved markets. She challenges the traditional investor focus on "traction," suggesting that trust—built through "proximity, pattern, and integrity"—is the most honest due diligence.</p>

<p>Ismail Tekin, founder of The World Impacteurs, envisions building global trust through community, focusing on "convergence, co-creation and purpose." His mission is to unite like-minded individuals to "move en masse," demonstrating that the most impactful movements are built on shared purpose and mutual belief.</p>

<p>Hannah Phang from The Now Work highlights how a trust-based economy translates into tangible outcomes through "green jobs." These roles represent the vital human capital building a sustainable and resilient future, serving as concrete evidence that the shift towards a regenerative economy is creating real economic inclusion and social resilience.</p>

<h3>From Storytelling to Story-Proving</h3>
<p>The most investable companies are not the ones making the loudest claims, but those quietly building credibility into their infrastructure. Patagonia, for example, didn't just market sustainability—they rebuilt their supply chains from soil to shelf through regenerative agriculture and traceable materials, letting the integrity of their operations speak louder than any campaign.</p>

<p>These are the companies who embed impact into the product and supply chain itself, publish data without being asked, and turn measurement into an ongoing dialogue with their stakeholders.</p>

<p>They don't promise change, they show evidence of it.</p>

<h3>When Proof Closes the Gap: The Numbers</h3>
<ul>
<li>98% of investors now assess ESG performance, and 72% conduct structured ESG reviews, up from just 32% two years ago. (EY)</li>
<li>60% of global investors say ESG investing leads to higher performance yields, and 78% are willing to pay more for ESG-aligned funds. (ESG news)</li>
<li>Transparency expectations are growing: 70% of supply chain leaders expect investors and regulators to demand more clarity and data disclosure. (Digital Defynd)</li>
</ul>

<p><strong>The takeaway is clear: ambition captures attention, but proof closes the deal.</strong></p>

<h3>A Regenerative Materials Startup's Turning Point</h3>
<p>After speaking with Danielle Patterson, CEO of Family Office Access, we saw this shift illustrated clearly. A regenerative materials startup in her network pitched a European family office focused on climate resilience. The team was strong, and the market aligned, but the deck was built entirely on narrative.</p>

<blockquote>"I wanted to believe it, but there was nothing I could test."</blockquote>

<p>Three months later, the startup returned: same product, but with a tighter, clearer pitch. This time, it included:</p>
<ul>
<li>A lifecycle assessment published on their website</li>
<li>Audited recovery data from two pilot sites</li>
<li>An open impact dashboard with KPIs tied to real use cases</li>
</ul>

<p>They didn't change the product. They just changed what they made visible. And that made all the difference. This time, the family office came back in, not just as a participant, but as lead investor.</p>

<h3>Designing for Credibility</h3>
<p>Trust, when visible and well-structured, reduces friction. It makes investment decisions faster. It builds confidence over time. And it creates a resilience that branding alone can't deliver.</p>

<p>That evolution is happening across the capital stack. Where there was once greenwashing risk, there is now a trustworthiness premium, a recognition that transparent, traceable, third-party-verified impact not only protects reputation but drives value.</p>

<p><strong>For impact-aligned investors, trust is no longer a soft sentiment. It's a structural signal.</strong></p>

<h3>The End of Association, the Rise of Design</h3>
<p>For decades, companies built trust by association with charismatic founders, prominent backers, compelling visions. That era is ending.</p>

<p>Today, trust is built by design, through systems that surface integrity in every layer of the business. Data embedded in product. Verification structured into delivery. Measurement co-created with stakeholders.</p>

<p>The most credible brands are not the ones telling the best story. They're the ones who've made their story provable.</p>

<h3>What This Means for You</h3>
<p>If you're building or funding the next generation of impact companies, this is the moment to reframe trust, not as a communications task, but as an operational advantage.</p>
<p>Design for scrutiny, not just praise. Make measurement visible, across methods, metrics, and materials. And for every claim, ask: what could we show instead?</p>

<h3>Up Next</h3>
<p>In Edition 2, we'll explore how this shift is changing marketing itself - from creative campaigns to systems of radical transparency. Because in this new landscape, communications isn't about shaping perception, it's about making evidence clear.</p>`,
  },
  {
    id: 'trust-architecture',
    title: 'Where Will Trust Actually Be Built in 2030',
    subtitle: 'Edition 2 of 3: From transparency to meaning—why communities are the new moat',
    author: 'Rosa Schmidt & George Karani',
    date: 'November 19, 2025',
    edition: 'Edition 2 of 3',
    excerpt:
      'Community is no longer a backdrop to marketing—it\'s becoming the architecture of trust itself. How online spaces, physical gatherings, and peer validation are reshaping how we measure impact and build belief.',
    tags: ['Community', 'Trust', 'Marketing', 'Digital'],
    content: `<h2>Where Will Trust Actually Be Built in 2030</h2>
<p><strong>Edition 2 of 3, The Trust Series</strong></p>
<p>Authors: Rosa Schmidt & George Karani</p>

<h3>Welcome back to Edition 2</h3>
<p>We used to think of brand-building as a straight path: tell the story, sell the promise, collect the growth. That line is bending.</p>
<p>In a world where new products appear hourly and distribution is almost infinite, the scarce resource isn't attention anymore, it's belief and trust. Both are no longer granted by default to institutions or ad budgets; they are earned, iteratively, inside communities that can see the work, test the claims, and talk to each other while they do it.</p>

<h3>Where Belonging Happens Now</h3>
<blockquote>"People don't want to be sold to, they want to belong."</blockquote>

<p>If community used to be a backdrop to marketing, today it's becoming the very architecture of trust. The café, the library, the local park—Ray Oldenburg's third places still matter, but digital platforms are the new heart. They're legible, searchable, sometimes chaotic, but always alive.</p>

<p>Noor ul Huda put it beautifully: <em>"People want content they can grow with, and they want to see the story from the inside, not the billboard outside. Community is people you decide to grow with."</em></p>

<p>In real life (IRL) moments now anchor ongoing digital collaborations. The magic is not lost, it's just reframed.</p>

<h3>From Transparency to Meaning</h3>
<p>Edition 1 argues that proof is a product feature. This edition extends that logic: transparency supplies the facts; storytelling supplies the meaning. In an attention-saturated world, storytelling is less about performance and more about sense-making.</p>

<blockquote>"The most credible brands are those where you can trace decisions, see the bugs, and understand the why. Process IS the product." — Kyle, founder of Autrion</blockquote>

<p>What emerges is a living proof of process, a story people can verify, a qualitative process rather than a quantitative end result.</p>

<h3>Measuring What Matters</h3>
<p>Trust doesn't show up in page views. It grows quietly—in replies, in return visits, in the pauses between reactions. For years, success was measured by transactions. But those numbers only show exposure, not connection.</p>

<p>George has been building a dashboard to measure how trust and collaboration evolve over time. His work tracks not just the volume of participation, but its quality: conversation depth, returning contributors, sentiment shifts, and the number of discussions that turn into real-world outcomes.</p>

<p>Instead of counting impressions, this approach measures interaction. Instead of celebrating spikes in reach, it looks for patterns of return: the people who reappear, reply, challenge, and refine. These are the signals that reveal when a community moves beyond attention and begins to build belief.</p>

<h3>The Cycle of Trust in Modern Communities</h3>
<p>Looking ahead, the healthiest communities of 2030 are envisioned as hybrid, participatory, and legible: ecosystems where everyone knows how to contribute, can see the impact of their work, and trusts the system supporting them.</p>

<h3>Working Thesis for 2030</h3>
<ul>
<li><strong>Belonging will be designed around participation rights:</strong> clear paths to contribute and be recognized, rather than passive content.</li>
<li><strong>Conversion will evolve from funnels to on-ramps:</strong> small, meaningful acts that build toward stewardship.</li>
<li><strong>The moat will no longer be audience size</strong> but member outcomes and peer bonds that cannot be replicated.</li>
</ul>

<p>If Edition 1 proved that trust is the new premium, Edition 2 shows where that trust is forged: in communities that can see the work, speak back, and see themselves in the result. Trust becomes durable when brands stop trying to be magnetic and start trying to be legible.</p>

<h3>What's Coming in Edition 3</h3>
<p>In our final edition (coming 2026), we'll explore why the companies that scale trust are the ones who align teams, not just messaging. This will be a deep dive into how internal culture becomes external credibility, and why authentic scaling starts from the inside.</p>

<p>Interested in collaborating and/or working together? DM us!</p>`,
  },
]

const OTHER_ARTICLES = [
  {
    title: 'Building for Impact in Emerging Markets',
    excerpt:
      'Exploring the intersection of technology and social impact across African markets. How mission-driven organizations can leverage product thinking to drive sustainable change at scale.',
    date: 'Jan 2025',
    readTime: '6 min',
    link: '#',
    tags: ['Impact', 'Product'],
    upcoming: true,
  },
  {
    title: 'The Case for Community-Led Growth in Africa',
    excerpt:
      'Why the most successful startups on the continent are building communities first and products second. Lessons from Startup Grind Kabarak and CMX Nairobi.',
    date: 'Dec 2024',
    readTime: '5 min',
    link: '#',
    tags: ['Community', 'Growth'],
    upcoming: true,
  },
  {
    title: 'Lessons from Hosting 7+ Tech Events in Kenya',
    excerpt:
      'What I learned about bringing builders together, creating meaningful connections, and the operational side of running community events across three cities.',
    date: 'Nov 2024',
    readTime: '4 min',
    link: '#',
    tags: ['Events', 'Community'],
    upcoming: true,
  },
  {
    title: 'Winning the Polygon Akindo Grand: Bringing Commodities Onchain',
    excerpt:
      'How AfriFutures won the Polygon Akindo grand prize by building infrastructure to bring African commodity markets onchain—and what it means for the future of trade on the continent.',
    date: 'Coming Soon',
    readTime: '5 min',
    link: '#',
    tags: ['Web3', 'Commodities', 'Polygon'],
    upcoming: true,
  },
  {
    title: 'Joining Omi Wearable as a ChatGPT Partner',
    excerpt:
      'What it means to be selected as an Omi wearable ChatGPT partner—building at the intersection of ambient AI, personal productivity, and Africa\'s builder ecosystem.',
    date: 'Coming Soon',
    readTime: '4 min',
    link: '#',
    tags: ['AI', 'Wearable', 'Omi'],
    upcoming: true,
  },
]

export default function ReadPage() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null)

  const activeArticle = selectedArticle
    ? TRILOGY_ARTICLES.find((a) => a.id === selectedArticle)
    : null

  if (activeArticle) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mt-8 mb-8 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            ← Back to all articles
          </button>
        </div>
        <ArticleReader {...activeArticle} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-light"
        >
          Ahead of the Curve
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6 text-balance font-display"
        >
          Read.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-8"
        >
          A limited 3-part series exploring trust, community, and the future of impact investing. Plus essays on product, building, and Africa&apos;s startup ecosystem.
        </motion.p>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://21givenchy.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity duration-200"
          >
            <Rss className="w-4 h-4" />
            Subscribe on Substack
          </a>
          <a
            href="https://chat.whatsapp.com/IPyovK0eXwoKFdfUlpCMOA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            Join WhatsApp Community
          </a>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="border-t border-border" />
      </div>

      {/* Trilogy Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-light"
        >
          The Trust Series
        </motion.h2>

        <div className="space-y-8">
          {TRILOGY_ARTICLES.map((article) => (
            <motion.button
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedArticle(article.id)}
              className="w-full text-left p-6 rounded-xl border border-border hover:border-foreground/30 hover:bg-secondary/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-secondary text-xs uppercase tracking-wider font-medium text-foreground/70">
                      {article.edition}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-2 font-display group-hover:text-foreground/80 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 rounded text-xs bg-secondary/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="border-t border-border" />
      </div>

      {/* Other Articles */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-light"
        >
          Latest Essays
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OTHER_ARTICLES.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-secondary/10 group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-xs text-muted-foreground font-light">{article.date}</span>
                <span className="inline-block px-2 py-0.5 rounded-full bg-secondary text-xs text-muted-foreground font-medium tracking-wide">
                  Upcoming
                </span>
              </div>
              <h3 className="text-lg font-light text-foreground mb-3 leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="inline-block px-1.5 py-0.5 rounded text-xs bg-secondary/30 text-muted-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{article.readTime}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community CTA */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-secondary/30 p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4 font-display">
            Join the community
          </h3>
          <p className="text-muted-foreground font-light max-w-md mx-auto mb-8 leading-relaxed">
            Connect with founders, investors, and builders shaping the future of impact in Africa.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://chat.whatsapp.com/IPyovK0eXwoKFdfUlpCMOA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Community
            </a>
            <a
              href="https://discord.gg/PH4jtued4b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
            >
              Discord
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
