import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, DollarSign, Users, MessageCircle } from "lucide-react"

export default function Dashboard() {
  // This would be determined by authentication in a real app
  const userType = "trainee" // or "coach"

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {userType === "trainee" ? <TraineeDashboard /> : <CoachDashboard />}
    </div>
  )
}

function TraineeDashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DashboardCard
          title="Upcoming Sessions"
          value="2"
          description="Sessions scheduled this week"
          icon={<Calendar className="h-8 w-8 text-primary" />}
          linkText="View Schedule"
          linkHref="/dashboard/schedule"
        />
        <DashboardCard
          title="Total Sessions"
          value="12"
          description="Coaching sessions completed"
          icon={<Users className="h-8 w-8 text-primary" />}
          linkText="Session History"
          linkHref="/dashboard/history"
        />
        <DashboardCard
          title="Messages"
          value="3"
          description="Unread messages from coaches"
          icon={<MessageCircle className="h-8 w-8 text-primary" />}
          linkText="Open Messages"
          linkHref="/dashboard/messages"
        />
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="grid grid-cols-3 mb-6 w-full md:w-auto">
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="recommended">Recommended Coaches</TabsTrigger>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Your Upcoming Sessions</h2>
          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center mb-3 md:mb-0">
                      <img
                        src={session.coach.avatar || "/placeholder.svg"}
                        alt={session.coach.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{session.coach.name}</h3>
                        <p className="text-sm text-gray-400">{session.game}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{session.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{session.time}</span>
                      <span className="mx-2">•</span>
                      <span>{session.duration} min</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Join Session</Button>
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                    <Button size="sm" variant="outline">
                      Cancel
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400 mb-4">You don't have any upcoming sessions</p>
              <Link href="/games">
                <Button>Find a Coach</Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="recommended" className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Recommended Coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendedCoaches.map((coach) => (
              <Link
                key={coach.id}
                href={`/coaches/${coach.id}`}
                className="bg-gray-700 rounded-lg p-4 hover:ring-2 hover:ring-primary transition-all"
              >
                <div className="flex items-center mb-3">
                  <img
                    src={coach.avatar || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{coach.name}</h3>
                    <p className="text-sm text-gray-400">{coach.game}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-3">{coach.tagline}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{coach.rating}</span>
                    <span className="text-gray-400 ml-1">({coach.reviewCount})</span>
                  </div>
                  <p className="font-bold">${coach.hourlyRate}/hr</p>
                </div>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start p-3 border-b border-gray-700 last:border-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${activity.iconBg}`}>
                  {activity.icon}
                </div>
                <div>
                  <p className="text-gray-300">{activity.description}</p>
                  <p className="text-sm text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CoachDashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Upcoming Sessions"
          value="5"
          description="Sessions scheduled this week"
          icon={<Calendar className="h-8 w-8 text-primary" />}
          linkText="View Schedule"
          linkHref="/dashboard/schedule"
        />
        <DashboardCard
          title="Total Earnings"
          value="$1,245"
          description="Earnings this month"
          icon={<DollarSign className="h-8 w-8 text-primary" />}
          linkText="View Earnings"
          linkHref="/dashboard/earnings"
        />
        <DashboardCard
          title="Total Students"
          value="28"
          description="Students coached"
          icon={<Users className="h-8 w-8 text-primary" />}
          linkText="View Students"
          linkHref="/dashboard/students"
        />
        <DashboardCard
          title="Messages"
          value="7"
          description="Unread messages from students"
          icon={<MessageCircle className="h-8 w-8 text-primary" />}
          linkText="Open Messages"
          linkHref="/dashboard/messages"
        />
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="grid grid-cols-3 mb-6 w-full md:w-auto">
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="students">Recent Students</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Your Upcoming Sessions</h2>
          <div className="space-y-4">
            {coachUpcomingSessions.map((session) => (
              <div key={session.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div className="flex items-center mb-3 md:mb-0">
                    <img
                      src={session.student.avatar || "/placeholder.svg"}
                      alt={session.student.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{session.student.name}</h3>
                      <p className="text-sm text-gray-400">{session.game}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{session.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{session.time}</span>
                    <span className="mx-2">•</span>
                    <span>{session.duration} min</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Start Session</Button>
                  <Button size="sm" variant="outline">
                    Message Student
                  </Button>
                  <Button size="sm" variant="outline">
                    Reschedule
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="students" className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Recent Students</h2>
          <div className="space-y-4">
            {recentStudents.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-3 border-b border-gray-700 last:border-0"
              >
                <div className="flex items-center">
                  <img
                    src={student.avatar || "/placeholder.svg"}
                    alt={student.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{student.name}</h3>
                    <p className="text-sm text-gray-400">
                      {student.sessions} sessions • Last session: {student.lastSession}
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Message
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="earnings" className="bg-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Earnings Overview</h2>
            <Select defaultValue="month">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Total Earnings</h3>
              <p className="text-2xl font-bold">$1,245.00</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Sessions Completed</h3>
              <p className="text-2xl font-bold">32</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Average Per Session</h3>
              <p className="text-2xl font-bold">$38.91</p>
            </div>
          </div>

          <h3 className="font-medium mb-3">Recent Transactions</h3>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-400">{transaction.date}</p>
                </div>
                <p className="font-bold">${transaction.amount}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function DashboardCard({
  title,
  value,
  description,
  icon,
  linkText,
  linkHref,
}: {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  linkText: string
  linkHref: string
}) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-gray-400 text-sm">{title}</h2>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        {icon}
      </div>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <Link href={linkHref}>
        <Button variant="link" className="p-0 h-auto text-primary">
          {linkText}
        </Button>
      </Link>
    </div>
  )
}

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const upcomingSessions = [
  {
    id: 1,
    coach: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    game: "League of Legends",
    date: "Tomorrow",
    time: "3:00 PM",
    duration: 60,
  },
  {
    id: 2,
    coach: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    game: "Valorant",
    date: "Friday, Mar 8",
    time: "5:30 PM",
    duration: 45,
  },
]

const recommendedCoaches = [
  {
    id: 1,
    name: "Alex Thompson",
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
    game: "Fortnite",
    tagline: "Tournament winner, Building & editing expert",
    rating: 4.7,
    reviewCount: 76,
    hourlyRate: 35,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Jessica Kim",
    game: "League of Legends",
    tagline: "Challenger rank, Lane control specialist",
    rating: 4.9,
    reviewCount: 112,
    hourlyRate: 50,
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

const recentActivity = [
  {
    id: 1,
    description: "Completed coaching session with Alex Thompson",
    time: "Yesterday at 3:45 PM",
    icon: <Check className="h-4 w-4 text-white" />,
    iconBg: "bg-green-600",
  },
  {
    id: 2,
    description: "Booked a new session with Sarah Chen",
    time: "2 days ago at 11:30 AM",
    icon: <Calendar className="h-4 w-4 text-white" />,
    iconBg: "bg-blue-600",
  },
  {
    id: 3,
    description: "Left a review for Marcus Johnson",
    time: "3 days ago at 5:15 PM",
    icon: <Star className="h-4 w-4 text-white" />,
    iconBg: "bg-yellow-600",
  },
  {
    id: 4,
    description: "Purchased tutorial: 'Advanced Jungle Pathing'",
    time: "1 week ago at 2:20 PM",
    icon: <BookOpen className="h-4 w-4 text-white" />,
    iconBg: "bg-purple-600",
  },
]

const coachUpcomingSessions = [
  {
    id: 1,
    student: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    game: "League of Legends",
    date: "Today",
    time: "4:00 PM",
    duration: 60,
  },
  {
    id: 2,
    student: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    game: "League of Legends",
    date: "Tomorrow",
    time: "2:30 PM",
    duration: 45,
  },
  {
    id: 3,
    student: {
      name: "Jordan Taylor",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    game: "Valorant",
    date: "Tomorrow",
    time: "6:00 PM",
    duration: 60,
  },
]

const recentStudents = [
  {
    id: 1,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    sessions: 5,
    lastSession: "Yesterday",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=100&width=100",
    sessions: 3,
    lastSession: "3 days ago",
  },
  {
    id: 3,
    name: "Jordan Taylor",
    avatar: "/placeholder.svg?height=100&width=100",
    sessions: 2,
    lastSession: "1 week ago",
  },
  {
    id: 4,
    name: "Sophia Williams",
    avatar: "/placeholder.svg?height=100&width=100",
    sessions: 1,
    lastSession: "2 weeks ago",
  },
]

const recentTransactions = [
  {
    id: 1,
    description: "Coaching Session - Michael Chen",
    date: "Mar 5, 2025",
    amount: 45.0,
  },
  {
    id: 2,
    description: "Coaching Session - Emily Rodriguez",
    date: "Mar 3, 2025",
    amount: 45.0,
  },
  {
    id: 3,
    description: "Tutorial Purchase - Advanced Jungle Pathing",
    date: "Mar 1, 2025",
    amount: 15.0,
  },
  {
    id: 4,
    description: "Coaching Session - Jordan Taylor",
    date: "Feb 28, 2025",
    amount: 45.0,
  },
]

import { Check, Star, BookOpen } from "lucide-react"

