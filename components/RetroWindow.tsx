import type React from "react"
import { cn } from "@/lib/utils"

interface RetroWindowProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function RetroWindow({ title, children, className }: RetroWindowProps) {
  return (
    <div className={cn("border-2 border-black rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#E2E2E2]", className)}>
      <div className="bg-gradient-to-r from-[#999999] to-[#CCCCCC] border-b-2 border-black p-1 flex items-center">
        <div className="flex gap-1.5 mr-4">
          <button className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#CE2F29]" />
          <button className="w-3 h-3 rounded-full bg-[#FFBC2E] border border-[#CC9A24]" />
          <button className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1FA032]" />
        </div>
        <div className="flex-1 text-center font-chicago text-sm">{title}</div>
      </div>
      {children}
    </div>
  )
}

