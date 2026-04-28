import Link from "next/link";
import Image from "next/image";
import { posts } from "@/app/data/posts";

// Transform regular posts for blog listing
const blogPosts = [
  // The Nairobi Omi Builder Sprint post
  {
    id: "nairobi-omi-builder-sprint",
    title: "Omi Builder Sprint Nairobi: Showcasing the Future of AI Innovation",
    subtitle:
      "Witness the creativity of Nairobi's developers as they showcase AI-driven solutions for business, safety, and culture at the Omi Builder Sprint.",
    author: "George Karani & Team",
    date: "2026-04-28",
    readTime: "6 min",
    tags: ["Blog", "Nairobi Tech", "AI Innovation", "Wearable Technology"],
    excerpt:
      "Witness the creativity of Nairobi's developers as they showcase AI-driven solutions for business, safety, and culture at the Omi Builder Sprint.",
    thumbnailUrl:
      "https://img.youtube.com/vi_webp/PoHW57y2Jqk/hqdefault.webp",
  },
  ...posts.map((post) => ({
    ...post,
    subtitle:
      post.content.length > 150
        ? post.content.slice(0, 150) + "..."
        : post.content,
    tags: [post.category],
    date: new Date().toISOString().slice(0, 10),
    readTime: "3 min",
    thumbnailUrl: "https://img.youtube.com/vi_webp/PoHW57y2Jqk/hqdefault.webp",
  })),
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/post/${post.id}`}>
              <article className="block p-6 rounded-xl border border-border hover:border-foreground/30 hover:bg-secondary/20 transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-light text-foreground mb-2 font-display">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 rounded text-xs bg-secondary/20 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground/70">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  {post.thumbnailUrl && (
                    <Image
                      src={post.thumbnailUrl}
                      alt={post.title}
                      width={200}
                      height={105}
                      className="w-48 h-25 object-cover rounded-lg flex-shrink-0"
                    />
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}