"use client"

import { useState, useEffect, useRef } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Building,
  Users,
  MapPin,
  Calendar,
  Award,
  ArrowRight,
  X,
  Menu,
  Heart,
  Share,
  Bookmark,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/Button"

const projects = [
  {
    id: 1,
    title: "Administration and Meeting Spaces",
    description:
      "Complete build of administration buildings. The space consisted of meeting spaces, gathering space and much more. We travel nationwide for clients who are looking for a high caliber construction professional.",
    image: "/bedroom.jpg?height=600&width=800",
    client: "Corporate",
    industry: "Industrial",
    sector: "Commercial",
    location: "New York, NY",
    year: "2023",
    value: "$2.5M",
    duration: "8 months",
    status: "Completed",
    tags: ["Modern", "Corporate", "Sustainable"],
  },
  {
    id: 2,
    title: "Modern Residential Complex",
    description:
      "Luxury residential development featuring 150 units with state-of-the-art amenities. This project showcases our expertise in sustainable construction and modern architectural design.",
    image: "/placeholder.svg?height=600&width=800",
    client: "Real Estate Group",
    industry: "Residential",
    sector: "Housing",
    location: "Los Angeles, CA",
    year: "2023",
    value: "$15M",
    duration: "18 months",
    status: "Completed",
    tags: ["Luxury", "Residential", "Green"],
  },
  {
    id: 3,
    title: "Healthcare Facility Expansion",
    description:
      "Major expansion of regional medical center including emergency department, surgical suites, and patient care units. Built to the highest healthcare standards with advanced medical infrastructure.",
    image: "/placeholder.svg?height=600&width=800",
    client: "Regional Medical Center",
    industry: "Healthcare",
    sector: "Medical",
    location: "Chicago, IL",
    year: "2024",
    value: "$8.2M",
    duration: "12 months",
    status: "In Progress",
    tags: ["Healthcare", "Emergency", "Advanced"],
  },
  {
    id: 4,
    title: "Educational Campus Development",
    description:
      "New university campus featuring multiple academic buildings, student housing, and recreational facilities. Designed for modern learning with sustainable technologies and flexible spaces.",
    image: "/placeholder.svg?height=600&width=800",
    client: "State University",
    industry: "Education",
    sector: "Academic",
    location: "Austin, TX",
    year: "2024",
    value: "$25M",
    duration: "24 months",
    status: "In Progress",
    tags: ["Education", "Campus", "Innovation"],
  },
  {
    id: 5,
    title: "Industrial Manufacturing Plant",
    description:
      "High-tech manufacturing facility with automated systems and clean room environments. Built to support advanced manufacturing processes with emphasis on efficiency and safety.",
    image: "/placeholder.svg?height=600&width=800",
    client: "Tech Manufacturing Corp",
    industry: "Manufacturing",
    sector: "Industrial",
    location: "Seattle, WA",
    year: "2023",
    value: "$12M",
    duration: "15 months",
    status: "Completed",
    tags: ["Industrial", "Tech", "Automated"],
  },
]

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [liked, setLiked] = useState<number[]>([])
  const [bookmarked, setBookmarked] = useState<number[]>([])
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  const handleProjectChange = (index: number) => {
    if (index === activeProject || isAnimating) return

    setIsAnimating(true)
    setTimeout(() => {
      setActiveProject(index)
      setIsAnimating(false)
    }, 300)
  }

  const scrollToProject = (index: number) => {
    setShowAllProjects(false)
    setActiveProject(index)
    setShowMobileNav(false)
    setTimeout(() => {
      const section = sectionsRef.current[index]
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const nextProject = () => {
    const nextIndex = activeProject === projects.length - 1 ? 0 : activeProject + 1
    scrollToProject(nextIndex)
  }

  const prevProject = () => {
    const prevIndex = activeProject === 0 ? projects.length - 1 : activeProject - 1
    scrollToProject(prevIndex)
  }

  const handleAllWorksClick = () => {
    setShowAllProjects(true)
    setShowMobileNav(false)
  }

  const handleProjectCardClick = (index: number) => {
    scrollToProject(index)
  }

  const toggleLike = (projectId: number) => {
    setLiked((prev) => (prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId]))
  }

  const toggleBookmark = (projectId: number) => {
    setBookmarked((prev) => (prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId]))
  }

  // Scroll-based project detection (only when not showing all projects)
  useEffect(() => {
    if (showAllProjects) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Find which section is currently in view
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect()
          const isInView = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2

          if (isInView && index !== activeProject) {
            setActiveProject(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeProject, showAllProjects])

  if (showAllProjects) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 hide-scrollbar">
        {/* Mobile All Projects View */}
        <div className="md:hidden">
          {/* Header */}
          <div className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">All Projects</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">{projects.length} projects</p>
              </div>
              <Button onClick={() => setShowAllProjects(false)} variant="ghost" size="sm" className="rounded-full">
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Projects List */}
          <div className="px-4 py-6 space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectCardClick(index)}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Project Number */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completed" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
                    }`}
                  >
                    {project.status}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(project.id)
                      }}
                      className={`w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors ${
                        liked.includes(project.id) ? "bg-red-500 text-white" : "bg-white/20 text-white"
                      }`}
                    >
                      <Heart className="w-4 h-4" fill={liked.includes(project.id) ? "currentColor" : "none"} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleBookmark(project.id)
                      }}
                      className={`w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors ${
                        bookmarked.includes(project.id) ? "bg-yellow-500 text-white" : "bg-white/20 text-white"
                      }`}
                    >
                      <Bookmark className="w-4 h-4" fill={bookmarked.includes(project.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 flex-1">
                      {project.title}
                    </h3>
                    <div className="ml-3 text-right">
                      <div className="text-lg font-bold text-emerald-600">{project.value}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{project.year}</div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-500 dark:text-slate-400">Client</div>
                      <div className="font-medium text-slate-900 dark:text-white">{project.client}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 dark:text-slate-400">Location</div>
                      <div className="font-medium text-slate-900 dark:text-white">{project.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Desktop Sidebar */}
          <div className="fixed left-0 top-0 h-full w-20 lg:w-32 flex flex-col justify-center items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 z-50">
            <div className="space-y-6 lg:space-y-8">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => scrollToProject(index)}
                  className="group relative w-12 h-12 lg:w-16 lg:h-16 rounded-2xl transition-all duration-500 bg-white/50 dark:bg-slate-800/50 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80"
                >
                  <span className="text-lg lg:text-xl font-bold">{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}

              {/* All Works Button - Active */}
              <button
                onClick={() => setShowAllProjects(false)}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white shadow-xl scale-110 transition-all duration-300 flex flex-col items-center justify-center relative"
              >
                <Building className="w-4 h-4 lg:w-5 lg:h-5 mb-1" />
                <span className="text-xs font-medium">ALL</span>
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-6 lg:h-8 bg-red-500 rounded-full"></div>
              </button>
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="ml-20 lg:ml-32 relative z-10">
            {/* Header */}
            <div className="px-8 lg:px-16 py-16">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                      All Projects
                    </span>
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Explore our complete portfolio of construction excellence and innovation
                  </p>
                </div>
                <Button
                  onClick={() => setShowAllProjects(false)}
                  variant="outline"
                  className="bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4 mr-2" />
                  Close Grid View
                </Button>
              </div>

              {/* Projects Grid - 3 cards per row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    onClick={() => handleProjectCardClick(index)}
                    className="group relative cursor-pointer animate-slide-up"
                  >
                    {/* Project Card */}
                    <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-slate-700/20 transition-all duration-700 hover:shadow-3xl hover:-translate-y-4 hover:bg-white/90 dark:hover:bg-slate-800/90">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      {/* Floating Orbs */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>

                      {/* Project Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Project Number */}
                        <div className="absolute top-4 left-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Status Badge */}
                        <div
                          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "Completed" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
                          }`}
                        >
                          {project.status}
                        </div>

                        {/* View Project Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="relative z-10 p-6">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Project Details */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500 dark:text-slate-400">Client:</span>
                            <span className="font-medium text-slate-900 dark:text-white">{project.client}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500 dark:text-slate-400">Value:</span>
                            <span className="font-medium text-red-600">{project.value}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500 dark:text-slate-400">Location:</span>
                            <span className="font-medium text-slate-900 dark:text-white">{project.location}</span>
                          </div>
                        </div>

                        {/* Industry Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                            {project.industry}
                          </span>
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
                            {project.sector}
                          </span>
                        </div>

                        {/* View Project Button */}
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                        >
                          View Project
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentProject = projects[activeProject]

  return (
    <div className="relative hide-scrollbar">
      {/* Modern Mobile View */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-700/20">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Building className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">ConstructPro</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Project {String(activeProject + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleAllWorksClick}
                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                All Projects
              </button>
              <button
                onClick={() => setShowMobileNav(!showMobileNav)}
                className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center"
              >
                <Menu className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {showMobileNav && (
            <div className="absolute top-full left-0 right-0 bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 p-4">
              <div className="grid grid-cols-3 gap-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => scrollToProject(index)}
                    className={`p-3 rounded-2xl transition-all duration-300 ${
                      activeProject === index
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    <div className="text-lg font-bold">{String(index + 1).padStart(2, "0")}</div>
                    <div className="text-xs mt-1 line-clamp-1">{project.title}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="pt-20">
          {/* Hero Image Section */}
          <div className="relative h-[60vh] overflow-hidden">
            <img
              src={currentProject.image || "/placeholder.svg"}
              alt={currentProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Floating Action Buttons */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <button
                onClick={() => toggleLike(currentProject.id)}
                className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                  liked.includes(currentProject.id) ? "bg-red-500 text-white scale-110" : "bg-white/20 text-white"
                }`}
              >
                <Heart className="w-5 h-5" fill={liked.includes(currentProject.id) ? "currentColor" : "none"} />
              </button>
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Share className="w-5 h-5" />
              </button>
              <button
                onClick={() => toggleBookmark(currentProject.id)}
                className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                  bookmarked.includes(currentProject.id)
                    ? "bg-yellow-500 text-white scale-110"
                    : "bg-white/20 text-white"
                }`}
              >
                <Bookmark className="w-5 h-5" fill={bookmarked.includes(currentProject.id) ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{String(activeProject + 1).padStart(2, "0")}</span>
                </div>
                <div
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    currentProject.status === "Completed" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
                  }`}
                >
                  {currentProject.status}
                </div>
                <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {currentProject.year}
                </div>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2 leading-tight">{currentProject.title}</h1>
              <div className="flex items-center space-x-4 text-white/80 text-sm">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{currentProject.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4" />
                  <span>{currentProject.value}</span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <button
                onClick={prevProject}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <button
                onClick={nextProject}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white dark:bg-slate-900 rounded-t-3xl -mt-6 relative z-10 px-6 pt-8 pb-6">
            {/* Project Description */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">About This Project</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{currentProject.description}</p>
            </div>

            {/* Tags */}
            {currentProject.tags && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Project Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200/50 dark:border-blue-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Details Grid */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Project Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">CLIENT</span>
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">{currentProject.client}</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Building className="w-4 h-4 text-purple-500" />
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">INDUSTRY</span>
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">{currentProject.industry}</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">DURATION</span>
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">{currentProject.duration}</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">SECTOR</span>
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">{currentProject.sector}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Project Details
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="py-3 rounded-2xl border-2">
                  <Heart className="w-4 h-4 mr-2" />
                  Save Project
                </Button>
                <Button variant="outline" className="py-3 rounded-2xl border-2">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Project Progress</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {activeProject + 1} of {projects.length}
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((activeProject + 1) / projects.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View (keep original) */}
      <div className="hidden md:block">
        {/* Desktop Sidebar */}
        <div className="fixed left-0 top-0 h-full w-20 lg:w-32 flex flex-col justify-center items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 z-50">
          <div className="space-y-6 lg:space-y-8">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => scrollToProject(index)}
                className={`group relative w-12 h-12 lg:w-16 lg:h-16 rounded-2xl transition-all duration-500 ${
                  activeProject === index
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-xl scale-110"
                    : "bg-white/50 dark:bg-slate-800/50 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80"
                }`}
              >
                <span className="text-lg lg:text-xl font-bold">{String(index + 1).padStart(2, "0")}</span>

                {/* Active indicator */}
                {activeProject === index && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-6 lg:h-8 bg-red-500 rounded-full"></div>
                )}
              </button>
            ))}

            {/* All Works Button */}
            <button
              onClick={handleAllWorksClick}
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <Building className="w-4 h-4 lg:w-5 lg:h-5 mb-1" />
              <span className="text-xs font-medium">ALL</span>
            </button>
          </div>
        </div>

        {/* Desktop Project Sections */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              sectionsRef.current[index] = el
            }}
            className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative ${
              activeProject === index ? "animate-slide-up" : ""
            }`}
          >
            {/* Desktop content here - keeping original design */}
            <div className="relative z-10 ml-20 lg:ml-32 min-h-screen">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Content */}
                <div className="flex flex-col justify-center px-8 lg:px-16 py-16">
                  <div className="transition-all duration-500">
                    {/* Project Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
                      <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                        {project.title}
                      </span>
                    </h1>

                    {/* Project Description */}
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 md:mb-12 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Location</div>
                            <div className="font-semibold text-slate-900 dark:text-white">{project.location}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Year</div>
                            <div className="font-semibold text-slate-900 dark:text-white">{project.year}</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Value</div>
                            <div className="font-semibold text-slate-900 dark:text-white">{project.value}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Status</div>
                            <div
                              className={`font-semibold ${project.status === "Completed" ? "text-green-600" : "text-blue-600"}`}
                            >
                              {project.status}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* View Project Button */}
                    <Button className="w-full md:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 md:px-8 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                      View Project Details
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Right Content - Project Image */}
                <div className="relative flex items-center justify-center p-8">
                  <div className="relative w-full max-w-2xl">
                    {/* Project Image */}
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl transition-all duration-500">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 md:h-96 lg:h-[600px] object-cover"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                      {/* Navigation Arrows */}
                      <div className="absolute top-1/2 -translate-y-1/2 right-3 md:right-4 flex flex-col space-y-3 md:space-y-4">
                        <button
                          onClick={prevProject}
                          className="w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                        >
                          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                          onClick={nextProject}
                          className="w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                        >
                          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                      </div>

                      {/* Project Counter */}
                      <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 text-white text-sm font-medium">
                        {index + 1} / {projects.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Project Details Bar */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                <div className="px-4 md:px-8 lg:px-16 py-6 md:py-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <div>
                      <div className="text-red-100 text-sm font-medium uppercase tracking-wide mb-2">Client</div>
                      <div className="text-lg md:text-xl font-bold">{project.client}</div>
                    </div>
                    <div>
                      <div className="text-red-100 text-sm font-medium uppercase tracking-wide mb-2">Industry</div>
                      <div className="text-lg md:text-xl font-bold">{project.industry}</div>
                    </div>
                    <div>
                      <div className="text-red-100 text-sm font-medium uppercase tracking-wide mb-2">Sector</div>
                      <div className="text-lg md:text-xl font-bold">{project.sector}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
