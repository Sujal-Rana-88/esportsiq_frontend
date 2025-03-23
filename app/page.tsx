import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FeatureCard } from "@/components/feature-card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text">
          We&apos;re changing how gaming
          <br />
          communities are built.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Connect with top gaming coaches, level up your skills, and join a community of passionate gamers.
        </p>
      </section>
      
      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <FeatureCard
          title="Communities"
          subtitle="There's safety in numbers"
          description="Support your favorite players and creators, share tips with your peers, and maybe even find your next playgroup."
          color="from-yellow-500 to-orange-600"
        />
        <FeatureCard
          title="Sessions"
          subtitle="Face-time with the best in the game"
          description="Get coaching, play co-op, or just hang out in a live format with your favorite players"
          color="from-cyan-500 to-blue-600"
        />
        <FeatureCard
          title="Events"
          subtitle="Gaming Coachella without the $30 margaritas"
          description="Learn, discover, and gather 'round with your internet friends in a live group format."
          color="from-indigo-500 to-purple-600"
        />
        <FeatureCard
          title="Guides"
          subtitle="Greatness leaves clues"
          description="We're building the modern-day Library of Alexandria for gaming and making it fireproof."
          color="from-amber-500 to-yellow-600"
        />
      </section>

      {/* Game Search Section */}
      <section className="text-center py-10 mb-16">
        <h2 className="text-3xl font-bold mb-8">Pick your poison</h2>
        <div className="max-w-md mx-auto relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input type="search" placeholder="Search for a game..." className="pl-10 py-6 bg-gray-900 border-gray-700" />
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Popular Games</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularGames.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className="bg-gray-800 rounded-lg overflow-au hover:ring-2 hover:ring-primary transition-all"
            >
              <div className="aspect-square relative">
                <img src={game.image || "/placeholder.svg"} alt={game.name} className="object-cover w-full h-full" />
              </div>
              <div className="p-3">
                <h3 className="font-medium">{game.name}</h3>
                <p className="text-sm text-gray-400">{game.coachCount} Coaches</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Coaches Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Top Coaches</h2>
          <Link href="/coaches">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCoaches.map((coach) => (
            <Link
              key={coach.id}
              href={`/coaches/${coach.id}`}
              className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={coach.avatar || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{coach.name}</h3>
                    <p className="text-primary">{coach.game}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{coach.tagline}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{coach.rating}</span>
                    <span className="text-gray-400 ml-1">({coach.reviewCount})</span>
                  </div>
                  <p className="font-bold">${coach.hourlyRate}/hr</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

const popularGames = [
  { id: 1, name: "League of Legends", coachCount: 124, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Valorant", coachCount: 98, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Fortnite", coachCount: 87, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Call of Duty", coachCount: 76, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Apex Legends", coachCount: 65, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Dota 2", coachCount: 54, image: "/placeholder.svg?height=200&width=200" },
]

const topCoaches = [
  {
    id: 1,
    name: "Alex Thompson",
    username: "alexthompson",
    game: "League of Legends",
    tagline: "Former Pro Player, 7+ years coaching experience",
    rating: 4.9,
    reviewCount: 128,
    hourlyRate: 45,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sarah Chen",
    username: "sarahchen",
    game: "Valorant",
    tagline: "Radiant Rank, Specializing in aim training",
    rating: 4.8,
    reviewCount: 94,
    hourlyRate: 40,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    username: "marcusjohnson",
    game: "Fortnite",
    tagline: "Tournament winner, Building & editing expert",
    rating: 4.7,
    reviewCount: 76,
    hourlyRate: 35,
    avatar: "/placeholder.svg?height=100&width=100",
  },
]