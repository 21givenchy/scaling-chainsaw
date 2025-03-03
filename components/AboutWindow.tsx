import RetroWindow from "./RetroWindow"
import { TreeDeciduous, Heart, Code2 } from "lucide-react"
import Image from "next/image"

export default function AboutWindow() {
  return (
    <RetroWindow title="About George">
      <div className="p-6 space-y-6">
        <div className="flex items-start gap-6">
          <Image src="/george.jpeg" alt="George Karani" className="w-32 h-32 border-2 border-black" />
          <div className="space-y-4">
            <h2 className="font-chicago text-xl">Hello, I&apos;m George 👋</h2>
            <p className="font-chicago">
              An indie developer passionate about leveraging technology to drive positive environmental impact. I build
              tools that help organizations and individuals track and improve their sustainability efforts.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border-2 border-black bg-white">
            <TreeDeciduous className="w-8 h-8 mb-2" />
            <h3 className="font-chicago mb-2">Nature Lover</h3>
            <p className="text-sm">Finding inspiration in the natural world for sustainable solutions</p>
          </div>

          <div className="p-4 border-2 border-black bg-white">
            <Heart className="w-8 h-8 mb-2" />
            <h3 className="font-chicago mb-2">Impact Driven</h3>
            <p className="text-sm">Creating technology that makes a positive difference</p>
          </div>

          <div className="p-4 border-2 border-black bg-white">
            <Code2 className="w-8 h-8 mb-2" />
            <h3 className="font-chicago mb-2">Indie Dev</h3>
            <p className="text-sm">Building meaningful products with modern tech</p>
          </div>
        </div>
      </div>
    </RetroWindow>
  )
}

