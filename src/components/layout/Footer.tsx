"use client"

import { useState } from "react"
import { Building2, MapPin, Phone, Mail, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Button } from "../ui/Button"
import { Input } from "../ui/input"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <footer className="bg-gray-900 text-white max-w-screen">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-400" />
              <h3 className="ml-2 text-xl font-bold">ConstructPro</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building dreams into reality with premium residential and commercial projects across India. 
              Your trusted partner for quality construction.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span>info@constructpro.com</span>
              </div>
            </div>
          </div>

          {/* Typology */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b border-blue-400 pb-2">
              Project Typology
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  2 BHK Flats in Howrah
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  3 BHK Flats in Howrah
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  2 BHK in Hinjewadi
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Commercial Spaces
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Luxury Villas
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b border-blue-400 pb-2">
              Our Locations
            </h4>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-white text-sm">Howrah Office</h5>
                    <p className="text-gray-400 text-xs mt-1">
                      123 GT Road, Howrah,<br />
                      West Bengal 711101
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-white text-sm">Hinjewadi Office</h5>
                    <p className="text-gray-400 text-xs mt-1">
                      456 Rajiv Gandhi Infotech Park,<br />
                      Hinjewadi, Pune 411057
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Social Media */}
          <div className="space-y-6">
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white border-b border-blue-400 pb-2">
                Stay Updated
              </h4>
              <p className="text-gray-400 text-sm">
                Subscribe to get latest updates on new projects and offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 pr-12 focus:border-blue-400 focus:ring-blue-400"
                    required
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="absolute right-1 top-1 h-8 w-8 p-0 bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 group"
                >
                  <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-200 group"
                >
                  <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200 group"
                >
                  <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 group"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200 group"
                >
                  <Youtube className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
              <p className="text-gray-400 text-xs">
                Connect with us for latest updates and behind-the-scenes content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ConstructPro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
