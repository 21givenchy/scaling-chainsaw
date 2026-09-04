import type { MetadataRoute } from "next"

const siteUrl = "https://georgekarani.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/projects", "/events", "/read", "/podcast", "/community", "/cv"]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }))
}
