"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"

// Fix 1: Define proper type for IFrameAPI
interface SpotifyIframeAPI {
  createController: (
    element: HTMLElement,
    options: { uri: string; width: string; height: string },
    callback: (controller: SpotifyController) => void
  ) => void
}

declare global {
  interface Window {
    onSpotifyIframeApiReady: (IFrameAPI: SpotifyIframeAPI) => void
  }
}

// Fix 2: Add addListener method to SpotifyController interface
interface SpotifyController {
  togglePlay: () => Promise<void>
  destroy: () => void
  addListener: (
    event: string,
    callback: (e: { data: { isPaused: boolean } }) => void
  ) => void
}

export default function PodcastPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, ] = useState(30)
  const [controller, setController] = useState<SpotifyController | null>(null)
  const iframeRef = useRef<HTMLDivElement>(null)
  const EPISODE_ID = "1S5RsW74i7H4QrqCgVrojK"

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://open.spotify.com/embed/iframe-api/v1"
    script.async = true
    
    script.onload = () => {
      window.onSpotifyIframeApiReady = (IFrameAPI) => {
        const element = iframeRef.current!
        const options = {
          uri: `spotify:episode:${EPISODE_ID}`,
          width: '100%',
          height: '152',
        }
        
        const callback = (controller: SpotifyController) => {
          setController(controller)
          controller.addListener(
            'playback_update',
            // Fix 3: Properly type the event parameter
            (e: { data: { isPaused: boolean } }) => setIsPlaying(e.data.isPaused)
          )
        }
        
        IFrameAPI.createController(element, options, callback)
      }
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      controller?.destroy()
    }
  // Fix 4: Add controller to dependency array
  }, [controller])

  const handlePlayPause = () => {
    controller?.togglePlay()
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-800 p-6 rounded-lg pixelated-border relative">
      <h2 className="font-pixel text-xl mb-4">frontforumfocus Podcast</h2>

      {/* Hidden Spotify Iframe */}
      <div 
        ref={iframeRef} 
        className="absolute opacity-0 -z-10"
        aria-hidden="true"
      />

      <div className="space-y-4">
        <div className="bg-gray-900 p-4 rounded">
          <h3 className="font-pixel text-sm mb-2">Now Playing</h3>
          <p className="font-mono text-green-400"></p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-gray-900 rounded hover:bg-gray-700"
          >
            <SkipBack className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlayPause}
            className="p-4 bg-green-500 rounded-full hover:bg-green-400"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-black" />
            ) : (
              <Play className="w-6 h-6 text-black" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-gray-900 rounded hover:bg-gray-700"
          >
            <SkipForward className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4" />
          <div className="flex-1 h-2 bg-gray-900 rounded-full">
            <motion.div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${progress}%` }}
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
