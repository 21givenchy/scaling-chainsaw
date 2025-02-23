"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"

export default function PodcastPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(30)

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-gray-800 p-6 rounded-lg pixelated-border">
      <h2 className="font-pixel text-xl mb-4">FrontForumFocus Podcast</h2>

      <div className="space-y-4">
        <div className="bg-gray-900 p-4 rounded">
          <h3 className="font-pixel text-sm mb-2">Now Playing</h3>
          <p className="font-mono text-green-400">Sustainable Tech: Building for Impact</p>
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
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-4 bg-green-500 rounded-full hover:bg-green-400"
          >
            {isPlaying ? <Pause className="w-6 h-6 text-black" /> : <Play className="w-6 h-6 text-black" />}
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

