"use client"

import { useEffect, useState } from "react"
import { Badge } from "../ui/badge"
import { Input } from "../ui/input"
import { Building2, MapPin, Search, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "../ui/Card"
import { Skeleton } from "../ui/skeleton"
import { Button } from "../ui/Button"

const projects = [
  {
    id: 1,
    name: "Skyline Towers",
    location: "Downtown Manhattan, NY",
    type: "Luxury Residential",
    status: "Coming Soon",
    image: "/img.jpg?height=300&width=400",
    description: "Premium luxury apartments with stunning city views and world-class amenities.",
    completionYear: "2025",
  },
  {
    id: 2,
    name: "Green Valley Mall",
    location: "Westfield, CA",
    type: "Shopping Complex",
    status: "Under Construction",
    image: "/bedroom.jpg?height=300&width=400",
    description: "Modern shopping destination with entertainment and dining experiences.",
    completionYear: "2025",
  },
  {
    id: 3,
    name: "Riverside Office Hub",
    location: "Austin, TX",
    type: "Commercial",
    status: "Planning Phase",
    image: "/bedroom.jpg?height=300&width=400",
    description: "State-of-the-art office spaces designed for the future of work.",
    completionYear: "2026",
  },
  {
    id: 4,
    name: "Sunset Gardens",
    location: "Phoenix, AZ",
    type: "Family Homes",
    status: "Nearly Complete",
    image: "/bedroom.jpg?height=300&width=400",
    description: "Beautiful family homes in a peaceful residential community.",
    completionYear: "2024",
  },
  {
    id: 5,
    name: "Metro Health Center",
    location: "Chicago, IL",
    type: "Healthcare",
    status: "Under Construction",
    image: "/placeholder.svg?height=300&width=400",
    description: "Advanced medical facility with cutting-edge healthcare technology.",
    completionYear: "2025",
  },
  {
    id: 6,
    name: "Innovation Campus",
    location: "Seattle, WA",
    type: "Tech Campus",
    status: "Coming Soon",
    image: "/placeholder.svg?height=300&width=400",
    description: "Revolutionary workspace designed for innovation and collaboration.",
    completionYear: "2026",
  },
]


export default function OngoingProject() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Simulate 2s loading
    return () => clearTimeout(timer)
  }, [])

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-950 dark:to-neutral-900 max-w-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-neutral-100 mb-6">
            Building Tomorrow&apos;s <span className="text-blue-600 block">Landmarks</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our ongoing construction projects that are shaping the future of modern living and working spaces.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg border-2 border-gray-200 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(isLoading ? Array.from({ length: 6 }) : filteredProjects).map((_, index) => {
              const project = isLoading ? null : filteredProjects[index]
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border-0 shadow-lg overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    {isLoading ? (
                      <Skeleton className="w-full h-64" />
                    ) : (
                      <>
                        <Image
                          src={project?.image || "/placeholder.svg"}
                          alt={project?.name || ""}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-gray-800 dark:bg-gray-100 dark:text-gray-900 shadow-lg">
                            {project?.type}
                          </Badge>
                        </div>
                      </>
                    )}
                  </div>

                  <CardContent className="p-6 space-y-3">
                    {isLoading ? (
                      <>
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/5" />
                        <Skeleton className="h-8 w-24" />
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition-colors">
                          {project?.name}
                        </h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <MapPin className="h-4 w-4 mr-2 text-blue-500 dark:text-yellow-300" />
                          <span className="text-sm">{project?.location}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                          {project?.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            Expected: <span className="font-medium text-gray-700 dark:text-gray-100">{project?.completionYear}</span>
                          </div>
                          <Link href={`project/${project?.id}`} className="inline-flex items-center">
                            <Button
                              size="sm"
                              className="group/btn bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white"
                            >
                              View Details
                              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {!isLoading && filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try searching with different keywords</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
