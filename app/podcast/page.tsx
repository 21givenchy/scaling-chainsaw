'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import VideoCarousel from '@/components/VideoCarousel';
import VideoModal from '@/components/VideoModal';

// --- Fundraising & Startup Series ---
const FUNDRAISING_VIDEOS = [
  {
    id: 'PZoz8zfmhq0',
    title: 'From Founder to Fundraiser',
    thumbnail: 'https://img.youtube.com/vi/PZoz8zfmhq0/maxresdefault.jpg',
    category: 'Fundraising',
  },
  {
    id: 'CexI7yTq4gE',
    title: "Fundraising in Africa's Digital Age",
    thumbnail: 'https://img.youtube.com/vi/CexI7yTq4gE/maxresdefault.jpg',
    category: 'Fundraising',
  },
  {
    id: 'NUiwRU_OEKA',
    title: 'Tech for Startups: Webinar with Zoho',
    thumbnail: 'https://img.youtube.com/vi/NUiwRU_OEKA/maxresdefault.jpg',
    category: 'Tech',
  },
  {
    id: 'tKwVieXn-BI',
    title: 'All Star Pitch Battle',
    thumbnail: 'https://img.youtube.com/vi/tKwVieXn-BI/maxresdefault.jpg',
    category: 'Events',
  },
];

// --- frontforumfocus Podcast Episodes ---
const PODCAST_VIDEOS = [
  {
    id: 'USR50RCZXXM',
    title: 'frontforumfocus Podcast Ep. 1',
    thumbnail: 'https://img.youtube.com/vi/USR50RCZXXM/maxresdefault.jpg',
    category: 'Podcast',
  },
  {
    id: 'uuwZycpdkfQ',
    title: 'frontforumfocus Podcast Ep. 2',
    thumbnail: 'https://img.youtube.com/vi/uuwZycpdkfQ/maxresdefault.jpg',
    category: 'Podcast',
  },
  {
    id: '-BCzAIEDlUc',
    title: 'frontforumfocus Podcast Ep. 3',
    thumbnail: 'https://img.youtube.com/vi/-BCzAIEDlUc/maxresdefault.jpg',
    category: 'Podcast',
  },
  {
    id: 'ZLiS7VrG3S8',
    title: 'Podcast with OiEdu',
    thumbnail: 'https://img.youtube.com/vi/ZLiS7VrG3S8/maxresdefault.jpg',
    category: 'Podcast',
  },
  {
    id: 'zexxrV4c9wY',
    title: 'Awari Collective: Impact Conversation',
    thumbnail: 'https://img.youtube.com/vi/zexxrV4c9wY/maxresdefault.jpg',
    category: 'Impact',
  },
  {
    id: 'CDdree8PcIE',
    title: 'Future of Energy & Sustainability',
    thumbnail: 'https://img.youtube.com/vi/CDdree8PcIE/maxresdefault.jpg',
    category: 'Sustainability',
  },
];

const ALL_VIDEOS = [...FUNDRAISING_VIDEOS, ...PODCAST_VIDEOS];

export default function PodcastPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const spotifyRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof ALL_VIDEOS[0] | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (heroRef.current) {
      tl.fromTo(heroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 });
    }
    if (carouselRef.current) {
      tl.fromTo(carouselRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');
    }
    if (linksRef.current) {
      tl.fromTo(linksRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');
    }
    if (spotifyRef.current) {
      tl.fromTo(spotifyRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2');
    }
    if (gridRef.current) {
      tl.fromTo(gridRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <div ref={heroRef} className="px-6 md:px-8 pt-16 md:pt-24 pb-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground font-sans font-light">
            Watch / Listen / Stream
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.9] text-foreground">
            frontforum
            <br />
            <span className="italic font-light">focus</span>
          </h1>
          <p className="max-w-lg text-base md:text-lg text-muted-foreground font-sans font-light leading-relaxed">
            Conversations with builders, founders, and community leaders shaping
            the future of technology and impact across Africa and beyond.
          </p>
        </div>
      </div>

      {/* Platform Links */}
      <div ref={linksRef} className="px-6 md:px-8 pb-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.youtube.com/@frontforumfocus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background hover:bg-secondary transition-colors duration-200 text-sm font-sans"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
              <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white" />
            </svg>
            YouTube
          </a>
          <a
            href="https://www.twitch.tv/21givenchy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background hover:bg-secondary transition-colors duration-200 text-sm font-sans"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
            </svg>
            Twitch
          </a>
          <a
            href="https://open.spotify.com/show/YOUR_SHOW_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background hover:bg-secondary transition-colors duration-200 text-sm font-sans"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Spotify
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="border-t border-border" />
      </div>

      {/* Podcast Episodes Carousel */}
      <div ref={carouselRef} className="py-12 md:py-16">
        <div className="px-6 md:px-8 max-w-7xl mx-auto mb-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans mb-2">Podcast</p>
              <h2 className="font-display text-2xl md:text-3xl text-foreground">frontforumfocus episodes</h2>
            </div>
            <a
              href="https://www.youtube.com/@frontforumfocus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans hidden md:block"
            >
              View all on YouTube
            </a>
          </div>
        </div>
        <div className="pl-6 md:pl-8">
          <VideoCarousel videos={PODCAST_VIDEOS} onSelect={setSelectedVideo} />
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="border-t border-border" />
      </div>

      {/* Fundraising & Startup Series Carousel */}
      <div ref={spotifyRef} className="py-12 md:py-16">
        <div className="px-6 md:px-8 max-w-7xl mx-auto mb-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans mb-2">Series</p>
              <h2 className="font-display text-2xl md:text-3xl text-foreground">Fundraising & startup battles</h2>
            </div>
          </div>
        </div>
        <div className="pl-6 md:pl-8">
          <VideoCarousel videos={FUNDRAISING_VIDEOS} onSelect={setSelectedVideo} />
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="border-t border-border" />
      </div>

      {/* All Episodes Grid */}
      <div ref={gridRef} className="px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans mb-2">Browse</p>
          <h2 className="font-display text-2xl md:text-3xl text-foreground">All episodes</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {ALL_VIDEOS.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group relative aspect-video rounded-xl overflow-hidden bg-secondary focus:outline-none focus:ring-2 focus:ring-foreground/20 text-left"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                crossOrigin="anonymous"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <svg className="w-6 h-6 text-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <span className="inline-block px-2 py-0.5 rounded-full bg-background/20 backdrop-blur-sm text-[10px] uppercase tracking-wider text-white/80 font-sans mb-1.5">
                  {video.category}
                </span>
                <p className="text-white text-sm font-sans font-medium leading-snug line-clamp-2">
                  {video.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="border-t border-border" />
      </div>

      {/* Twitch / Live Stream section */}
      <div className="px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans mb-2">Live</p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">Catch the stream</h2>
            <p className="text-muted-foreground font-sans font-light text-sm md:text-base max-w-md leading-relaxed">
              Live building sessions, community conversations, and late-night
              coding streams. Follow on Twitch to get notified.
            </p>
          </div>
          <a
            href="https://www.twitch.tv/21givenchy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-sans font-medium text-sm hover:opacity-90 transition-opacity self-start"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
            </svg>
            Follow on Twitch
          </a>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto text-center">
        <p className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-tight">
          Stay in the loop.
        </p>
        <p className="text-muted-foreground font-sans font-light mb-8 max-w-md mx-auto">
          Subscribe to the channel and never miss a conversation with the builders shaping the future.
        </p>
        <a
          href="https://www.youtube.com/@frontforumfocus?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-sans font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Subscribe on YouTube
        </a>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          videoId={selectedVideo.id}
          title={selectedVideo.title}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}
