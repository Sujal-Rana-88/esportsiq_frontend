import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, Clock, Users, Filter } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Events</h1>
          <p className="text-gray-400">Learn, discover, and gather with your internet friends in a live group format</p>
        </div>
        <div className="w-full md:w-auto flex gap-2">
          <div className="relative flex-1 md:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input type="search" placeholder="Search events..." className="pl-10 bg-gray-900 border-gray-700" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="registered">My Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="registered">
          {registeredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {registeredEvents.map((event) => (
                <EventCard key={event.id} event={event} isRegistered />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-800 rounded-lg">
              <Calendar className="h-12 w-12 mx-auto text-gray-500 mb-4" />
              <h2 className="text-xl font-medium mb-2">No registered events</h2>
              <p className="text-gray-400 mb-6">You haven't registered for any upcoming events</p>
              <Button>Browse Events</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredEvents.map((event) => (
            <div key={event.id} className="bg-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-48 md:h-auto relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center text-sm text-primary mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{event.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{event.time}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{event.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{event.attendees} attendees</span>
                  </div>
                  <Button>Register Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function EventCard({
  event,
  isRegistered = false,
  isPast = false,
}: {
  event: any
  isRegistered?: boolean
  isPast?: boolean
}) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-full">
      <div className="h-48 relative">
        <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
        {isRegistered && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">Registered</div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-primary mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{event.date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{event.time}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{event.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag: string, index: number) => (
            <span key={index} className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-400">
            <Users className="h-4 w-4 mr-1" />
            <span>{event.attendees} attendees</span>
          </div>
          {isPast ? (
            <Button variant="outline">View Recording</Button>
          ) : isRegistered ? (
            <Button>Join Event</Button>
          ) : (
            <Button>Register</Button>
          )}
        </div>
      </div>
    </div>
  )
}

const upcomingEvents = [
  {
    id: 1,
    title: "League of Legends Pro Analysis Workshop",
    description:
      "Join our panel of coaches as they break down pro matches and explain the strategies and decision-making behind them.",
    date: "Mar 10, 2025",
    time: "7:00 PM EST",
    attendees: 156,
    tags: ["League of Legends", "Pro Analysis", "Strategy"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Valorant Agent Mastery Series: Jett",
    description:
      "Learn advanced techniques, lineups, and strategies for mastering Jett from top-ranked Valorant coaches.",
    date: "Mar 12, 2025",
    time: "6:00 PM EST",
    attendees: 124,
    tags: ["Valorant", "Agent Guide", "Jett"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Fortnite Building Tournament",
    description:
      "Test your building and editing skills against other players in this tournament hosted by our top Fortnite coaches.",
    date: "Mar 15, 2025",
    time: "3:00 PM EST",
    attendees: 98,
    tags: ["Fortnite", "Tournament", "Building"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Apex Legends Movement Masterclass",
    description:
      "Learn advanced movement techniques, tap strafing, wall bouncing, and more from professional Apex Legends players.",
    date: "Mar 18, 2025",
    time: "8:00 PM EST",
    attendees: 87,
    tags: ["Apex Legends", "Movement", "Advanced"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Call of Duty: Warzone Strategy Summit",
    description:
      "Join top Warzone players as they discuss meta loadouts, drop strategies, and team coordination for winning more matches.",
    date: "Mar 20, 2025",
    time: "7:30 PM EST",
    attendees: 112,
    tags: ["Call of Duty", "Warzone", "Strategy"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "Fighting Games Fundamentals",
    description:
      "Learn the core mechanics and mindset needed to improve at any fighting game, with examples from Street Fighter, Tekken, and more.",
    date: "Mar 22, 2025",
    time: "5:00 PM EST",
    attendees: 76,
    tags: ["Fighting Games", "Fundamentals", "Multiple Games"],
    image: "/placeholder.svg?height=300&width=500",
  },
]

const registeredEvents = [
  {
    id: 1,
    title: "League of Legends Pro Analysis Workshop",
    description:
      "Join our panel of coaches as they break down pro matches and explain the strategies and decision-making behind them.",
    date: "Mar 10, 2025",
    time: "7:00 PM EST",
    attendees: 156,
    tags: ["League of Legends", "Pro Analysis", "Strategy"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Fortnite Building Tournament",
    description:
      "Test your building and editing skills against other players in this tournament hosted by our top Fortnite coaches.",
    date: "Mar 15, 2025",
    time: "3:00 PM EST",
    attendees: 98,
    tags: ["Fortnite", "Tournament", "Building"],
    image: "/placeholder.svg?height=300&width=500",
  },
]

const pastEvents = [
  {
    id: 101,
    title: "Valorant Map Strategies: Ascent",
    description: "A deep dive into attack and defense strategies for Ascent map with top Valorant coaches.",
    date: "Feb 25, 2025",
    time: "6:00 PM EST",
    attendees: 143,
    tags: ["Valorant", "Map Strategy", "Ascent"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 102,
    title: "League of Legends Jungle Pathing Workshop",
    description: "Learn optimal jungle routes, ganking patterns, and objective control from Challenger junglers.",
    date: "Feb 20, 2025",
    time: "7:00 PM EST",
    attendees: 132,
    tags: ["League of Legends", "Jungle", "Pathing"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 103,
    title: "Apex Legends Aim Training Bootcamp",
    description: "Intensive aim training workshop with drills and exercises to improve your accuracy in Apex Legends.",
    date: "Feb 15, 2025",
    time: "4:00 PM EST",
    attendees: 98,
    tags: ["Apex Legends", "Aim Training", "Bootcamp"],
    image: "/placeholder.svg?height=300&width=500",
  },
]

const featuredEvents = [
  {
    id: 201,
    title: "GameCoach Summit 2025",
    description:
      "Our annual virtual summit featuring top coaches, pro players, and content creators. Two days of workshops, panels, and networking opportunities for gamers of all skill levels.",
    date: "Apr 5-6, 2025",
    time: "10:00 AM - 6:00 PM EST",
    attendees: 1250,
    tags: ["Multiple Games", "Summit", "Workshops", "Networking"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 202,
    title: "Esports Career Fair",
    description:
      "Connect with esports organizations, teams, and companies looking for talent in the gaming industry. Learn about career paths in esports from industry professionals.",
    date: "Mar 28, 2025",
    time: "12:00 PM - 5:00 PM EST",
    attendees: 875,
    tags: ["Esports", "Career", "Networking", "Industry"],
    image: "/placeholder.svg?height=400&width=600",
  },
]

