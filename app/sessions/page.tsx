import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Calendar, Clock, Star, ChevronDown, Gamepad2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SessionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sessions</h1>
          <p className="text-gray-400">Get coaching, play co-op, or just hang out with your favorite players</p>
        </div>
        <div className="w-full md:w-auto flex gap-2">
          <div className="relative flex-1 md:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input type="search" placeholder="Search sessions..." className="pl-10 bg-gray-900 border-gray-700" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="available">
        <TabsList className="mb-6">
          <TabsTrigger value="available">Available Sessions</TabsTrigger>
          <TabsTrigger value="upcoming">My Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="available">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-64 space-y-4 md:sticky md:top-24 md:self-start">
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-medium mb-3">Game</h3>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select game" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Games</SelectItem>
                    <SelectItem value="lol">League of Legends</SelectItem>
                    <SelectItem value="valorant">Valorant</SelectItem>
                    <SelectItem value="fortnite">Fortnite</SelectItem>
                    <SelectItem value="apex">Apex Legends</SelectItem>
                    <SelectItem value="cod">Call of Duty</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-medium mb-3">Session Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="coaching" className="mr-2" defaultChecked />
                    <label htmlFor="coaching">1-on-1 Coaching</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="group" className="mr-2" defaultChecked />
                    <label htmlFor="group">Group Sessions</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="coop" className="mr-2" defaultChecked />
                    <label htmlFor="coop">Co-op Play</label>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="Min" className="w-full" defaultValue={0} />
                  <span>-</span>
                  <Input type="number" placeholder="Max" className="w-full" defaultValue={100} />
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-medium mb-3">Coach Rating</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="rating5" className="mr-2" defaultChecked />
                    <label htmlFor="rating5" className="flex items-center">
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <span className="ml-1">5.0</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="rating4" className="mr-2" defaultChecked />
                    <label htmlFor="rating4" className="flex items-center">
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 text-gray-500" />
                      </div>
                      <span className="ml-1">4.0+</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="rating3" className="mr-2" defaultChecked />
                    <label htmlFor="rating3" className="flex items-center">
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 text-gray-500" />
                        <Star className="h-4 w-4 text-gray-500" />
                      </div>
                      <span className="ml-1">3.0+</span>
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Available Sessions</h2>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {availableSessions.map((session) => (
                  <SessionCard key={session.id} session={session} />
                ))}
              </div>

              <div className="flex justify-center mt-6">
                <Button variant="outline">Load More</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <img
                        src={session.coach.avatar || "/placeholder.svg"}
                        alt={session.coach.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{session.coach.name}</h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <Gamepad2 className="h-4 w-4 mr-1" />
                          <span>{session.game}</span>
                          <span className="mx-2">•</span>
                          <span>{session.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <div className="flex items-center text-sm text-gray-300 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{session.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-lg mr-2">${session.price}</span>
                        <span className="text-sm text-gray-400">{session.duration} min</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex flex-wrap gap-2">
                      <Button>Join Session</Button>
                      <Button variant="outline">Message Coach</Button>
                      <Button variant="outline">Reschedule</Button>
                      <Button variant="outline" className="text-red-500 hover:text-red-400">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-800 rounded-lg">
              <Calendar className="h-12 w-12 mx-auto text-gray-500 mb-4" />
              <h2 className="text-xl font-medium mb-2">No upcoming sessions</h2>
              <p className="text-gray-400 mb-6">You don't have any scheduled sessions</p>
              <Button>Find a Coach</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past">
          {pastSessions.length > 0 ? (
            <div className="space-y-4">
              {pastSessions.map((session) => (
                <div key={session.id} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <img
                        src={session.coach.avatar || "/placeholder.svg"}
                        alt={session.coach.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{session.coach.name}</h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <Gamepad2 className="h-4 w-4 mr-1" />
                          <span>{session.game}</span>
                          <span className="mx-2">•</span>
                          <span>{session.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <div className="flex items-center text-sm text-gray-300 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-lg mr-2">${session.price}</span>
                        <span className="text-sm text-gray-400">{session.duration} min</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    {session.hasReviewed ? (
                      <div className="flex items-center text-sm text-gray-400">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < session.rating ? "fill-current" : "text-gray-600"}`}
                            />
                          ))}
                        </div>
                        <span>You rated this session</span>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        <Button>Leave a Review</Button>
                        <Button variant="outline">Book Again</Button>
                        <Button variant="outline">View Recording</Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-800 rounded-lg">
              <Clock className="h-12 w-12 mx-auto text-gray-500 mb-4" />
              <h2 className="text-xl font-medium mb-2">No past sessions</h2>
              <p className="text-gray-400 mb-6">You haven't completed any sessions yet</p>
              <Button>Find a Coach</Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function SessionCard({ session }: { session: any }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-start">
          <img
            src={session.coach.avatar || "/placeholder.svg"}
            alt={session.coach.name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">{session.coach.name}</h3>
                <div className="flex items-center text-sm">
                  <div className="flex text-yellow-400 mr-1">
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <span>{session.coach.rating}</span>
                  <span className="text-gray-400 ml-1">({session.coach.reviewCount})</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">${session.price}</p>
                <p className="text-sm text-gray-400">{session.duration} min</p>
              </div>
            </div>
            <p className="text-gray-300 mb-3">{session.title}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs">{session.game}</span>
              <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs">{session.type}</span>
              {session.tags.map((tag: string, index: number) => (
                <span key={index} className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Available {session.availableDays}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{session.availableHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 p-4 flex justify-between items-center">
        <Button variant="link" className="p-0 h-auto text-primary">
          View Details
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
        <Button>Book Session</Button>
      </div>
    </div>
  )
}

const availableSessions = [
  {
    id: 1,
    title: "Advanced Lane Control & Wave Management",
    game: "League of Legends",
    type: "1-on-1 Coaching",
    tags: ["Mid Lane", "Wave Control", "Macro"],
    price: 45,
    duration: 60,
    availableDays: "Mon, Wed, Fri",
    availableHours: "2PM - 8PM EST",
    coach: {
      name: "Alex Thompson",
      rating: 4.9,
      reviewCount: 128,
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 2,
    title: "Aim Training & Positioning Workshop",
    game: "Valorant",
    type: "Group Session",
    tags: ["Aim", "Positioning", "Utility Usage"],
    price: 25,
    duration: 90,
    availableDays: "Tue, Thu, Sat",
    availableHours: "4PM - 10PM EST",
    coach: {
      name: "Sarah Chen",
      rating: 4.8,
      reviewCount: 94,
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 3,
    title: "Building & Editing Masterclass",
    game: "Fortnite",
    type: "1-on-1 Coaching",
    tags: ["Building", "Editing", "Box Fighting"],
    price: 35,
    duration: 60,
    availableDays: "Mon-Sat",
    availableHours: "12PM - 6PM EST",
    coach: {
      name: "Marcus Johnson",
      rating: 4.7,
      reviewCount: 76,
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 4,
    title: "Support Role Mastery",
    game: "League of Legends",
    type: "1-on-1 Coaching",
    tags: ["Support", "Vision Control", "Roaming"],
    price: 40,
    duration: 60,
    availableDays: "Wed, Fri, Sun",
    availableHours: "5PM - 11PM EST",
    coach: {
      name: "Emma Wilson",
      rating: 4.8,
      reviewCount: 85,
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
]

const upcomingSessions = [
  {
    id: 1,
    game: "League of Legends",
    type: "1-on-1 Coaching",
    date: "Tomorrow",
    time: "3:00 PM EST",
    duration: 60,
    price: 45,
    coach: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 2,
    game: "Valorant",
    type: "Group Session",
    date: "Friday, Mar 8",
    time: "5:30 PM EST",
    duration: 90,
    price: 25,
    coach: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
]

const pastSessions = [
  {
    id: 1,
    game: "League of Legends",
    type: "1-on-1 Coaching",
    date: "Feb 28, 2025",
    duration: 60,
    price: 45,
    hasReviewed: true,
    rating: 5,
    coach: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 2,
    game: "Fortnite",
    type: "1-on-1 Coaching",
    date: "Feb 20, 2025",
    duration: 60,
    price: 35,
    hasReviewed: false,
    coach: {
      name: "Marcus Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
]

