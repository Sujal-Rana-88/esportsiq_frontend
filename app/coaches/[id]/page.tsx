import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Star, MessageCircle, DollarSign, Users } from "lucide-react"

export default function CoachProfile({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the coach data based on the ID
  const coach = {
    id: params.id,
    name: "Alex Thompson",
    username: "alexthompson",
    tagline: "Former Pro Player, 7+ years coaching experience",
    bio: "I've been playing League of Legends since Season 1 and competed professionally for 3 years. I specialize in mid and jungle roles, with a focus on macro play and team coordination. My coaching style is direct but supportive - I'll help you identify your weaknesses and develop a plan to improve.",
    games: ["League of Legends", "Valorant", "Teamfight Tactics"],
    rating: 4.9,
    reviewCount: 128,
    sessionCount: 342,
    hourlyRate: 45,
    avatar: "/placeholder.svg?height=200&width=200",
    availability: [
      { day: "Monday", slots: ["10:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"] },
      { day: "Tuesday", slots: ["10:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"] },
      { day: "Wednesday", slots: ["10:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"] },
      { day: "Thursday", slots: ["10:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"] },
      { day: "Friday", slots: ["10:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"] },
      { day: "Saturday", slots: ["12:00 PM - 8:00 PM"] },
      { day: "Sunday", slots: ["12:00 PM - 8:00 PM"] },
    ],
    tutorials: [
      { id: 1, title: "Advanced Jungle Pathing", duration: "45 min", price: 15 },
      { id: 2, title: "Mid Lane Wave Management", duration: "60 min", price: 20 },
      { id: 3, title: "Team Fight Positioning", duration: "50 min", price: 18 },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Coach Info */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                <img
                  src={coach.avatar || "/placeholder.svg"}
                  alt={coach.name}
                  className="w-24 h-24 rounded-full mr-6 mb-4 sm:mb-0 object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold">{coach.name}</h1>
                  <p className="text-primary mb-2">@{coach.username}</p>
                  <p className="text-gray-300">{coach.tagline}</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span>{coach.rating}</span>
                    <span className="text-gray-400 ml-1">({coach.reviewCount} reviews)</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span>{coach.sessionCount} sessions</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">About Me</h2>
                <p className="text-gray-300">{coach.bio}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Games</h2>
                <div className="flex flex-wrap gap-2">
                  {coach.games.map((game) => (
                    <span key={game} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">
                      {game}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="reviews">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
            </TabsList>

            <TabsContent value="reviews" className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Student Reviews</h2>
              {reviews.map((review) => (
                <div key={review.id} className="mb-6 pb-6 border-b border-gray-700 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex items-start mb-3">
                    <img
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{review.name}</h3>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-600"}`}
                              fill={i < review.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                Load More Reviews
              </Button>
            </TabsContent>

            <TabsContent value="tutorials" className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Pre-recorded Tutorials</h2>
              <div className="space-y-4">
                {coach.tutorials.map((tutorial) => (
                  <div key={tutorial.id} className="bg-gray-700 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{tutorial.title}</h3>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{tutorial.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold mr-3">${tutorial.price}</span>
                      <Button size="sm">Purchase</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="availability" className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Weekly Availability</h2>
              <div className="space-y-4">
                {coach.availability.map((day) => (
                  <div key={day.day} className="border-b border-gray-700 pb-3 last:border-0">
                    <h3 className="font-medium mb-2">{day.day}</h3>
                    <div className="flex flex-wrap gap-2">
                      {day.slots.map((slot, index) => (
                        <span key={index} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - Booking */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Book a Session</h2>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Pricing</h3>
              <div className="flex items-center text-2xl font-bold">
                <DollarSign className="h-5 w-5 mr-1" />
                <span>{coach.hourlyRate}</span>
                <span className="text-gray-400 text-base font-normal ml-1">/hour</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Session Type</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start">
                  <Gamepad2 className="h-4 w-4 mr-2" />
                  1-on-1 Coaching
                </Button>
                <Button variant="outline" className="justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Group Session
                </Button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Select Date & Time</h3>
              <Button variant="outline" className="w-full justify-start mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                Choose Date
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="h-4 w-4 mr-2" />
                Choose Time
              </Button>
            </div>

            <Button className="w-full mb-3">Book Now</Button>
            <Button variant="outline" className="w-full">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message Coach
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const reviews = [
  {
    id: 1,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Alex is an amazing coach! He helped me improve my map awareness and decision-making. After just 3 sessions, I climbed from Gold to Platinum. Highly recommend!",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "1 month ago",
    comment:
      "Very knowledgeable and patient. Alex took the time to review my gameplay and provided specific, actionable feedback. Great experience overall.",
  },
  {
    id: 3,
    name: "Jordan Taylor",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    date: "2 months ago",
    comment: "Good coach with solid advice. Helped me understand jungle pathing much better. Would book again.",
  },
]

import { Gamepad2 } from "lucide-react"

