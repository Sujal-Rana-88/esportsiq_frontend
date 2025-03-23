import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GamePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the game data based on the ID
  const game = {
    id: params.id,
    name: "League of Legends",
    description:
      "League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other's base.",
    image: "/placeholder.svg?height=400&width=800",
    coachCount: 124,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="relative h-64 rounded-lg overflow-hidden mb-6">
          <img src={game.image || "/placeholder.svg"} alt={game.name} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-6">
              <h1 className="text-4xl font-bold">{game.name}</h1>
              <p className="text-gray-300">{game.coachCount} Coaches Available</p>
            </div>
          </div>
        </div>
        <p className="text-gray-300 max-w-3xl">{game.description}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold">Available Coaches</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Select defaultValue="rating">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Filter</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {coaches.map((coach) => (
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
                  <p className="text-primary">{coach.username}</p>
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

      <div className="flex justify-center">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  )
}

const coaches = [
  {
    id: 1,
    name: "Alex Thompson",
    username: "@alexthompson",
    tagline: "Former Pro Player, 7+ years coaching experience",
    rating: 4.9,
    reviewCount: 128,
    hourlyRate: 45,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sarah Chen",
    username: "@sarahchen",
    tagline: "Radiant Rank, Specializing in aim training",
    rating: 4.8,
    reviewCount: 94,
    hourlyRate: 40,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    username: "@marcusjohnson",
    tagline: "Tournament winner, Building & editing expert",
    rating: 4.7,
    reviewCount: 76,
    hourlyRate: 35,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Jessica Kim",
    username: "@jessicakim",
    tagline: "Challenger rank, Lane control specialist",
    rating: 4.9,
    reviewCount: 112,
    hourlyRate: 50,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "David Park",
    username: "@davidpark",
    tagline: "5 years coaching experience, Team strategy expert",
    rating: 4.6,
    reviewCount: 68,
    hourlyRate: 38,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Emma Wilson",
    username: "@emmawilson",
    tagline: "Support main, Vision control & map awareness",
    rating: 4.8,
    reviewCount: 85,
    hourlyRate: 42,
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

