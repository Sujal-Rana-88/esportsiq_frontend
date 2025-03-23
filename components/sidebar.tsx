import type React from "react"
import Link from "next/link"
import { Home, Users, Gamepad2, Calendar, BookOpen, Crown } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 bg-black border-r border-gray-800 h-screen overflow-y-auto fixed md:sticky top-0">
      {/* Sidebar Logo */}
      <div className="p-4">
        <Link href="/" className="flex items-center">
          <Crown className="h-8 w-8 text-primary" />
        </Link>
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-6 px-2">
        <SidebarItem icon={<Home className="h-5 w-5" />} href="/" title="Home">
          Start your GameCoach journey.
        </SidebarItem>
        <SidebarItem icon={<Users className="h-5 w-5" />} href="/communities" title="Communities">
          Support your favorite players and creators, share tips with your peers, and maybe even find your next playgroup.
        </SidebarItem>
        <SidebarItem icon={<Gamepad2 className="h-5 w-5" />} href="/sessions" title="Sessions">
          Get coaching, play co-op, or just hang out in a live format with your favorite players.
        </SidebarItem>
        <SidebarItem icon={<Calendar className="h-5 w-5" />} href="/events" title="Events">
          Learn, discover, and gather 'round with your internet friends in a live group format.
        </SidebarItem>
        <SidebarItem icon={<BookOpen className="h-5 w-5" />} href="/guides" title="Guides">
          Text or video-based deep dives you can delve into at your own pace.
        </SidebarItem>
      </nav>
    </div>
  )
}

function SidebarItem({
  icon,
  href,
  title,
  children,
}: {
  icon: React.ReactNode
  href: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="block mb-6">
      <div className="flex items-center text-gray-300 hover:text-primary transition-colors px-4 py-2">
        <div className="mr-3">{icon}</div>
        <span className="font-medium">{title}</span>
      </div>
      <p className="text-sm text-gray-500 mt-1 px-4 pl-12">{children}</p>
    </Link>
  )
}
