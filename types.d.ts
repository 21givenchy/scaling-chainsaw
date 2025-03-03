// Override Next.js PageProps to work with App Router
import 'next'

declare module 'next' {
  export interface PageProps {
    params?: Record<string, string>
    searchParams?: Record<string, string | string[]>
  }
} 