import RetroWindow from "./RetroWindow"
import { Github, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function DesktopIcons() {
  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/georgekarani",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/georgekarani",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/georgekarani",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:george@frontforumfocus.com",
    },
    {
      icon: MessageCircle,
      label: "Discord",
      href: "https://discord.gg/PH4jtued4b",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://chat.whatsapp.com/IPyovK0eXwoKFdfUlpCMOA",
    },
  ]

  return (
    <RetroWindow title="Connect">
      <div className="p-6 grid grid-cols-2 gap-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="p-4 border-2 border-black bg-white group-hover:bg-[#CCCCCC]">
              <social.icon className="w-8 h-8" />
            </div>
            <span className="font-chicago text-sm">{social.label}</span>
          </a>
        ))}
      </div>
    </RetroWindow>
  )
}

