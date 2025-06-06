import React from 'react';

import { Badge } from '@/components/ui/badge';


import { 
  Building2, 
  Users, 

  Heart, 
  CheckCircle, 
  Calendar, 
 
  Star, 
  Trophy,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Linkedin,

  ArrowRight,

  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';



const AboutPage = () => {
  const directors = [
    {
      id: 1,
      name: "Michael Rodriguez",
      role: "Director & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      experience: "25+ years",
      education: "MBA from Harvard Business School",
      expertise: ["Strategic Leadership", "Large-scale Projects", "Business Development"],
      description: "Michael is a visionary leader who founded ConstructPro with the mission to revolutionize the construction industry. Under his leadership, the company has grown from a small family business to one of the nation's most trusted construction firms. His expertise in strategic planning and business development has been instrumental in securing major projects worth over $2.5 billion.",
      achievements: [
        "Led 500+ successful projects",
        "Recipient of Construction Excellence Award 2023",
        "Featured in Forbes Top Construction Leaders"
      ],
      contact: {
        email: "michael@constructpro.com",
        phone: "+1 (555) 123-4567",
        linkedin: "/in/michael-rodriguez"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Executive Director & COO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      experience: "20+ years",
      education: "MS in Civil Engineering from MIT",
      expertise: ["Operations Management", "Project Execution", "Quality Assurance"],
      description: "Sarah brings two decades of operational excellence to ConstructPro. Her meticulous approach to project management and her ability to streamline complex operations have resulted in a 98% client satisfaction rate. She oversees all day-to-day operations and ensures that every project meets our exacting standards of quality and timeline adherence.",
      achievements: [
        "Improved operational efficiency by 40%",
        "Zero safety incidents in 3 consecutive years",
        "Certified Project Management Professional (PMP)"
      ],
      contact: {
        email: "sarah@constructpro.com",
        phone: "+1 (555) 123-4568",
        linkedin: "/in/sarah-chen"
      }
    }
  ];

  const companyStats = [
    { number: "500+", label: "Projects Completed", icon: Building2 },
    { number: "25+", label: "Years of Experience", icon: Calendar },
    { number: "$2.5B+", label: "Total Project Value", icon: TrendingUp },
    { number: "98%", label: "Client Satisfaction", icon: Star },
  ];

  const values = [
    {
      icon: Shield,
      title: "Excellence in Execution",
      description: "Every project is executed with precision, attention to detail, and unwavering commitment to quality."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We build lasting relationships by understanding and exceeding our clients' unique needs and expectations."
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "We're dedicated to creating spaces that enhance communities and contribute to sustainable development."
    },
    {
      icon: Zap,
      title: "Innovation & Technology",
      description: "We leverage cutting-edge technology and innovative methods to deliver superior construction solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium bg-white/50 backdrop-blur-sm">
              <Building2 className="w-4 h-4 mr-2" />
              Building Excellence Since 1998
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              About
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ConstructPro</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transforming visions into reality through innovative construction solutions, 
              exceptional craftsmanship, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {companyStats.map((stat, index) => (
              <Card key={index} className="text-center bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.number}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
              <Trophy className="w-4 h-4 mr-2" />
              Leadership Team
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Meet Our Visionary Leaders
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              The experienced professionals who drive ConstructPro&apos;s success through innovation, 
              expertise, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="space-y-20">
            {directors.map((director, index) => (
              <Card key={director.id} className="overflow-hidden bg-white dark:bg-slate-800 shadow-2xl border-0">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image Section */}
                    <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                      <img 
                        src={director.image} 
                        alt={director.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-4">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={director.image} alt={director.name} />
                              <AvatarFallback>{director.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-bold text-slate-900 dark:text-white">{director.name}</h3>
                              <p className="text-blue-600 dark:text-blue-400 font-medium">{director.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="max-w-2xl">
                        <div className="flex items-center space-x-4 mb-6">
                          <Badge variant="secondary" className="px-3 py-1">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {director.experience}
                          </Badge>
                          <Badge variant="outline" className="px-3 py-1">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            Education
                          </Badge>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                          {director.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Education</h4>
                          <p className="text-slate-600 dark:text-slate-300">{director.education}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Core Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {director.expertise.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {director.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-center text-slate-600 dark:text-slate-300">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Separator className="my-6" />

                        <div className="flex flex-wrap gap-4">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
{/* <WobbleCard containerClassName="py-20 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <Badge variant="outline" className="mb-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
        <Award className="w-4 h-4 mr-2" />
        Our Achievements
      </Badge>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
        Celebrating Our Milestones
      </h2>
      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
        Over the years, ConstructPro has achieved numerous accolades and milestones that reflect our commitment to excellence and innovation in the construction industry.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: Trophy,
          title: "500+ Successful Projects",
          description: "We have successfully completed over 500 projects across various sectors, setting new benchmarks in quality and efficiency."
        },
        {
          icon: Star,
          title: "98% Client Satisfaction",
          description: "Our commitment to client satisfaction has earned us a 98% satisfaction rate, with many clients returning for repeat business."
        },
        {
          icon: Globe,
          title: "Global Reach",
          description: "With projects spanning multiple continents, we have established a global presence while maintaining local expertise."
        },
        {
          icon: Shield,
          title: "Safety First",
          description: "We prioritize safety above all, achieving zero safety incidents in the past three years through rigorous training and protocols."
        },
        {
          icon: Zap,
          title: "Innovation Leader",
          description: "We are at the forefront of adopting new technologies and methods, ensuring our projects are not only efficient but also sustainable."
        },
        {
          icon: TrendingUp,
          title: "Sustainable Growth",
          description: "Our strategic growth has led to a 40% increase in operational efficiency, allowing us to deliver more value to our clients."
        }
      ].map((achievement, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-slate-800 border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{achievement.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</WobbleCard> */}
      {/* Company Values */}
      <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700">
              <Heart className="w-4 h-4 mr-2" />
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our core values guide every decision we make and every project we undertake, 
              ensuring consistent excellence and meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white dark:bg-slate-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let&apos;s discuss your next project and turn your vision into reality with our expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-600">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default AboutPage;