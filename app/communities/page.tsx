import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, MessageCircle, Heart } from "lucide-react"

export default function CommunitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Communities</h1>
          <p className="text-gray-400">Connect with players and creators, share tips, and find your next playgroup</p>
        </div>
        <div className="w-full md:w-auto flex gap-2">
          <div className="relative flex-1 md:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input type="search" placeholder="Search communities..." className="pl-10 bg-gray-900 border-gray-700" />
          </div>
          <Button>Create Community</Button>
        </div>
      </div>

      <Tabs defaultValue="popular">
        <TabsList className="mb-6">
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="my">My Communities</TabsTrigger>
        </TabsList>

        <TabsContent value="popular" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCommunities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCommunities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my" className="space-y-6">
          <div className="text-center py-12">
            <Users className="h-12 w-12 mx-auto text-gray-500 mb-4" />
            <h2 className="text-xl font-medium mb-2">You haven't joined any communities yet</h2>
            <p className="text-gray-400 mb-6">Join communities to connect with other players and coaches</p>
            <Button>Explore Communities</Button>
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Discussions</h2>
        <div className="space-y-4">
          {featuredDiscussions.map((discussion) => (
            <Link
              key={discussion.id}
              href={`/communities/${discussion.communityId}/discussions/${discussion.id}`}
              className="block bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <img
                  src={discussion.author.avatar || "/placeholder.svg"}
                  alt={discussion.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-primary">{discussion.community}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-sm text-gray-400">Posted by {discussion.author.name}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{discussion.timeAgo}</span>
                  </div>
                  <h3 className="font-medium mb-2">{discussion.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 mb-3">{discussion.content}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{discussion.commentCount} comments</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{discussion.likeCount} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Button variant="outline">View More Discussions</Button>
        </div>
      </section>
    </div>
  )
}

function CommunityCard({ community }: { community: any }) {
  return (
    <Link
      href={`/communities/${community.id}`}
      className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"
    >
      <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
        {community.banner && (
          <img
            src={community.banner || "/placeholder.svg"}
            alt={community.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={community.icon || "/placeholder.svg"}
            alt={community.name}
            className="w-12 h-12 rounded-full mr-3 object-cover bg-gray-700"
          />
          <div>
            <h3 className="font-bold text-lg">{community.name}</h3>
            <p className="text-sm text-gray-400">{community.memberCount} members</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{community.description}</p>
        <div className="flex items-center text-sm text-gray-400">
          <Users className="h-4 w-4 mr-1" />
          <span>
            {community.games.length > 1
              ? `${community.games[0]} and ${community.games.length - 1} more`
              : community.games[0]}
          </span>
        </div>
      </div>
    </Link>
  )
}

const popularCommunities = [
  {
    id: 1,
    name: "League Legends",
    description:
      "The largest community for League of Legends players. Strategy discussions, patch notes analysis, and team finding.",
    memberCount: 12450,
    games: ["League of Legends"],
    icon: "/placeholder.svg?height=100&width=100",
    banner: "/placeholder.svg?height=200&width=600",
  },
  {
    id: 2,
    name: "Valorant Tactics",
    description:
      "Share strategies, lineups, and find teammates for Valorant. From Iron to Radiant, all skill levels welcome.",
    memberCount: 8320,
    games: ["Valorant"],
    icon: "/placeholder.svg?height=100&width=100",
    banner: "/placeholder.svg?height=200&width=600",
  },
  {
    id: 3,
    name: "Fortnite Builders",
    description: "Master building techniques, share creative maps, and discuss meta changes in Fortnite.",
    memberCount: 7150,
    games: ["Fortnite"],
    icon: "/placeholder.svg?height=100&width=100",
    banner: "/placeholder.svg?height=200&width=600",
  },
  {
    id: 4,
    name: "FPS Masters",
    description:
      "Community for FPS enthusiasts across multiple games. Aim training, positioning, and game sense discussions.",
    memberCount: 5280,
    games: ["Valorant", "CS:GO", "Apex Legends", "Call of Duty"],
    icon: "/placeholder.svg?height=100&width=100",
    banner: "/placeholder.svg?height=200&width=600",
  },
  {
    id: 5,
    name: "MOBA Strategies",
    description: "Strategic discussions for MOBA players. Lane control, map awareness, and team coordination.",
    memberCount: 4920,
    games: ["League of Legends", "Dota 2", "Heroes of the Storm"],
    icon: "/placeholder.svg?height=100&width=100",
    banner: "/placeholder.svg?height=200&width=600",
  },
  {
    id: 6,
    name: "Battle Royale Hub",
    description: "Tips, tricks, and team finding for all Battle Royale games. From drop locations to final circles.",
    memberCount: 3840,
    games: ["Fortnite", "Apex Legends", "PUBG", "Warzone"],
    icon: "/placeholder.svg?height=100&width=100",
    banner: "/placeholder.svg?height=200&width=600",
  },
]

const recentCommunities = [
  {
    id: 7,
    name: "Speedrunners",
    description:
      "Community for gaming speedrunners. Share routes, glitches, and strategies to beat games as fast as possible.",
    memberCount: 1250,
    games: ["Various"],
    icon: "/placeholder.svg?height=100&width=100",
    banner: "/placeholder.svg?height=200&width=600",
  },
  {
    id: 8,
    name: "Fighting Game Pros",
    description: "Frame data, combo guides, and matchup discussions for fighting game enthusiasts.",
    memberCount: 2340,
    games: ["Street Fighter", "Tekken", "Mortal Kombat", "Smash Bros"],
    icon: "/placeholder.svg?height=100&width=100",
    banner: "/placeholder.svg?height=200&width=600",
  },
  {
    id: 9,
    name: "Indie Game Explorers",
    description: "Discover and discuss indie games. Share hidden gems and support indie developers.",
    memberCount: 1820,
    games: ["Various"],
    icon: "/placeholder.svg?height=100&width=100",
    banner: "/placeholder.svg?height=200&width=600",
  },
]

const featuredDiscussions = [
  {
    id: 1,
    communityId: 1,
    community: "League Legends",
    title: "How to counter the new meta after patch 14.5?",
    content:
      "With the recent changes to jungle items and dragon buffs, I'm struggling to adapt my playstyle. Has anyone found effective counter strategies to the current tank-heavy meta?",
    author: {
      name: "JungleMain42",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    timeAgo: "2 hours ago",
    commentCount: 28,
    likeCount: 45,
  },
  {
    id: 2,
    communityId: 2,
    community: "Valorant Tactics",
    title: "Best agent compositions for Sunset map",
    content:
      "I've been experimenting with different agent compositions on Sunset and wanted to share my findings. So far, I've had the most success with Viper, Killjoy, Sova, Jett, and Skye. What compositions have worked well for you?",
    author: {
      name: "TacticalAimer",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    timeAgo: "5 hours ago",
    commentCount: 19,
    likeCount: 32,
  },
  {
    id: 3,
    communityId: 4,
    community: "FPS Masters",
    title: "Advanced aim training routine (with results)",
    content:
      "I've developed a comprehensive aim training routine that has helped me improve my accuracy by 24% over the last month. It includes tracking, flicking, and micro-adjustment exercises. Here's my full routine and the data I've collected...",
    author: {
      name: "HeadshotHero",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    timeAgo: "1 day ago",
    commentCount: 42,
    likeCount: 87,
  },
]

