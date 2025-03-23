import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Clock, BookOpen, Video, FileText, Star } from "lucide-react"

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Guides</h1>
          <p className="text-gray-400">Text or video-based deep dives you can delve into at your own pace</p>
        </div>
        <div className="w-full md:w-auto flex gap-2">
          <div className="relative flex-1 md:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input type="search" placeholder="Search guides..." className="pl-10 bg-gray-900 border-gray-700" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Guides</TabsTrigger>
          <TabsTrigger value="video">Video Guides</TabsTrigger>
          <TabsTrigger value="text">Text Guides</TabsTrigger>
          <TabsTrigger value="purchased">My Guides</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="video">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGuides
              .filter((guide) => guide.type === "video")
              .map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="text">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGuides
              .filter((guide) => guide.type === "text")
              .map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="purchased">
          {purchasedGuides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {purchasedGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} isPurchased />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-800 rounded-lg">
              <BookOpen className="h-12 w-12 mx-auto text-gray-500 mb-4" />
              <h2 className="text-xl font-medium mb-2">No purchased guides</h2>
              <p className="text-gray-400 mb-6">You haven't purchased any guides yet</p>
              <Button>Browse Guides</Button>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Popular Game Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularGames.map((game) => (
            <Link
              key={game.id}
              href={`/guides/games/${game.id}`}
              className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"
            >
              <div className="h-40 relative">
                <img src={game.image || "/placeholder.svg"} alt={game.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{game.name}</h3>
                    <p className="text-sm text-gray-300">{game.guideCount} guides</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

function GuideCard({
  guide,
  isPurchased = false,
}: {
  guide: any
  isPurchased?: boolean
}) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-full">
      <div className="h-48 relative">
        <img src={guide.image || "/placeholder.svg"} alt={guide.title} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-gray-900/80 text-white text-xs px-2 py-1 rounded-full flex items-center">
          {guide.type === "video" ? (
            <>
              <Video className="h-3 w-3 mr-1" />
              <span>Video</span>
            </>
          ) : (
            <>
              <FileText className="h-3 w-3 mr-1" />
              <span>Text</span>
            </>
          )}
        </div>
        {isPurchased && (
          <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full">Purchased</div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-gray-400 mb-2">
          <span>{guide.game}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{guide.duration}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{guide.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {guide.tags.map((tag: string, index: number) => (
            <span key={index} className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={guide.author.avatar || "/placeholder.svg"}
              alt={guide.author.name}
              className="w-6 h-6 rounded-full mr-2 object-cover"
            />
            <span className="text-sm">{guide.author.name}</span>
          </div>
          {isPurchased ? (
            <Button>View Guide</Button>
          ) : (
            <div className="flex items-center">
              <div className="flex items-center mr-3 text-sm">
                <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                <span>{guide.rating}</span>
              </div>
              <span className="font-bold">${guide.price}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const allGuides = [
  {
    id: 1,
    title: "Advanced Jungle Pathing",
    description: "Learn optimal jungle routes, ganking patterns, and objective control for Season 14.",
    game: "League of Legends",
    type: "video",
    duration: "45 min",
    price: 15,
    rating: 4.8,
    tags: ["Jungle", "Pathing", "Objectives"],
    author: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Mid Lane Wave Management",
    description: "Master wave control techniques to gain advantages in lane and create map pressure.",
    game: "League of Legends",
    type: "text",
    duration: "20 min read",
    price: 10,
    rating: 4.9,
    tags: ["Mid Lane", "Wave Control", "Laning"],
    author: {
      name: "Jessica Kim",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Valorant Aim Training Routine",
    description: "A comprehensive aim training routine to improve your accuracy, flicking, and tracking in Valorant.",
    game: "Valorant",
    type: "video",
    duration: "35 min",
    price: 12,
    rating: 4.7,
    tags: ["Aim Training", "Mechanics", "Practice"],
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Fortnite Building Techniques",
    description: "Learn advanced building and editing techniques to outplay opponents in build fights.",
    game: "Fortnite",
    type: "video",
    duration: "50 min",
    price: 18,
    rating: 4.8,
    tags: ["Building", "Editing", "Mechanics"],
    author: {
      name: "Marcus Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Support Role Mastery",
    description:
      "A comprehensive guide to mastering the support role, including vision control, roaming, and teamfight positioning.",
    game: "League of Legends",
    type: "text",
    duration: "30 min read",
    price: 12,
    rating: 4.6,
    tags: ["Support", "Vision", "Roaming"],
    author: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "Apex Legends Movement Guide",
    description: "Master advanced movement techniques like tap strafing, wall bouncing, and supergliding.",
    game: "Apex Legends",
    type: "video",
    duration: "40 min",
    price: 15,
    rating: 4.9,
    tags: ["Movement", "Mechanics", "Advanced"],
    author: {
      name: "David Park",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    image: "/placeholder.svg?height=300&width=500",
  },
]

const purchasedGuides = [
  {
    id: 1,
    title: "Advanced Jungle Pathing",
    description: "Learn optimal jungle routes, ganking patterns, and objective control for Season 14.",
    game: "League of Legends",
    type: "video",
    duration: "45 min",
    price: 15,
    rating: 4.8,
    tags: ["Jungle", "Pathing", "Objectives"],
    author: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Fortnite Building Techniques",
    description: "Learn advanced building and editing techniques to outplay opponents in build fights.",
    game: "Fortnite",
    type: "video",
    duration: "50 min",
    price: 18,
    rating: 4.8,
    tags: ["Building", "Editing", "Mechanics"],
    author: {
      name: "Marcus Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    image: "/placeholder.svg?height=300&width=500",
  },
]

const popularGames = [
  {
    id: 1,
    name: "League of Legends",
    guideCount: 45,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    name: "Valorant",
    guideCount: 38,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    name: "Fortnite",
    guideCount: 32,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    name: "Apex Legends",
    guideCount: 27,
    image: "/placeholder.svg?height=200&width=400",
  },
]

