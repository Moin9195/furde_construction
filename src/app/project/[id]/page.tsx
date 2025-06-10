"use client"


import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import {
  MapPin,
  Car,
  Wifi,
  Shield,
  Trees,
  Dumbbell,
  ShoppingCart,
  Phone,
  Mail,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

const projectData = {
  1: {
    id: 1,
    name: "Skyline Towers",
    location: "Downtown Manhattan, NY",
    type: "Luxury Residential",
    status: "Coming Soon",
    image: "/top.png?height=600&width=800",
    description:
      "Experience luxury living at its finest with Skyline Towers. These premium residential towers offer breathtaking city views, world-class amenities, and sophisticated design that defines modern urban living.",
    completionYear: "2025",
    gallery: [
      "/front.png?height=400&width=600",
      "/fullfront.png?height=400&width=600",
      "/out1.png?height=400&width=600",
      "/out2.png?height=400&width=600",
    ],
    amenities: [
      { icon: Car, name: "Valet Parking", description: "24/7 valet parking service" },
      { icon: Wifi, name: "High-Speed WiFi", description: "Complimentary fiber internet" },
      { icon: Shield, name: "24/7 Security", description: "Round-the-clock security service" },
      { icon: Trees, name: "Rooftop Garden", description: "Beautiful landscaped gardens" },
      { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art gym facilities" },
      { icon: ShoppingCart, name: "Retail Plaza", description: "Ground floor shopping and dining" },
    ],
    highlights: [
      "Panoramic city views from every unit",
      "Premium finishes and fixtures",
      "Smart home technology integration",
      "Concierge services available",
      "Pet-friendly community",
      "Sustainable building design",
    ],
    contact: {
      phone: "(555) 123-4567",
      email: "info@skylinetowers.com",
      address: "123 Manhattan Ave, New York, NY 10001",
    },
  },
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Under Construction":
      return "bg-blue-500 text-white"
    case "Planning Phase":
      return "bg-yellow-500 text-white"
    case "Nearly Complete":
      return "bg-green-500 text-white"
    case "Coming Soon":
      return "bg-purple-500 text-white"
    default:
      return "bg-gray-500 text-white"
  }
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = Number.parseInt(params.id as string)
  const project = projectData[projectId as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <Link href="/">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="h-96 md:h-[700px] relative overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {project.type}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.name}</h1>
            <div className="flex items-center text-lg">
              <MapPin className="h-5 w-5 mr-2" />
              {project.location}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>About This Project</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card className="animate-fade-in-delay">
              <CardHeader>
                <CardTitle>Project Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden group">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.name} gallery ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="animate-fade-in-delay-2">
              <CardHeader>
                <CardTitle>Amenities & Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <amenity.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{amenity.name}</h4>
                        <p className="text-sm text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="animate-fade-in-delay-3">
              <CardHeader>
                <CardTitle>Project Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Status</span>
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-medium">{project.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Expected Completion</span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-blue-600" />
                    <span className="font-medium">{project.completionYear}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="animate-slide-in-right-delay">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>{project.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">{project.contact.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span className="text-sm">{project.contact.address}</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact Sales Team</Button>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white animate-slide-in-right-delay-2">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Interested in this project?</h3>
                <p className="text-blue-100 text-sm mb-4">Get updates and exclusive offers</p>
                <Button variant="secondary" className="w-full">
                  Register Interest
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
