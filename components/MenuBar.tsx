import { Clock } from "lucide-react"

export default function MenuBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-6 bg-[#999999] border-b-2 border-black flex items-center px-4 z-50">
      <div className="flex items-center gap-4">
        <img src="/apple-logo.png" alt="Apple" className="h-4 w-4" />
        <span className="font-chicago text-sm">File</span>
        <span className="font-chicago text-sm">Edit</span>
        <span className="font-chicago text-sm">View</span>
        <span className="font-chicago text-sm">Special</span>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" />
        <span className="font-chicago text-sm">4:20 PM</span>
      </div>
    </div>
  )
}

