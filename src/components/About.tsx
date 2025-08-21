// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T17:56:22.359Z
// Section: about
// Category: about
// Template ID: about-c001
// Page: About
// Component: About

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Revolutionize Dining",
      description: "Our mission is to empower restaurants and food service businesses to deliver a seamless, modern customer experience."
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We constantly push the boundaries of what's possible, bringing cutting-edge contactless technology to your fingertips."
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Your success is our success. We build every feature with your customers' needs and preferences in mind."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From local eateries to international chains, we're helping businesses worldwide transform their dining experience."
    }
  ]

  const stats = [
    { value: "2019", label: "Founded", icon: Award },
    { value: "50K+", label: "Happy Customers", icon: Users },
    { value: "99.9%", label: "Uptime", icon: TrendingUp },
    { value: "25+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "SJ",
      bio: "Former VP of Product at TechCorp. 15+ years building scalable products for the food industry."
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder", 
      image: "MC",
      bio: "Ex-Google engineer. Expert in distributed systems and web performance for restaurant applications."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "ER",
      bio: "Award-winning designer with experience at top design agencies, specializing in user-centric dining experiences."
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "DK",
      bio: "Former Meta engineer. Passionate about developing innovative, customer-focused technology for the food industry."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Dine Tap
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Revolutionizing the
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Dining Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a passionate team on a mission to empower restaurants and food service businesses 
            with innovative, customer-centric technology that transforms the dining experience.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2019, Dine Tap was created by a team of frustrated restaurant owners and tech innovators 
                who saw the need for a modern, contactless solution to improve the customer experience.
              </p>
              <p>
                After years of dealing with outdated, clunky point-of-sale systems and limited mobile ordering options, 
                we knew there had to be a better way to connect restaurants with their customers.
              </p>
              <p>
                Today, we're proud to serve over 50,000 restaurants and food service businesses worldwide, 
                helping them deliver a seamless, technology-driven dining experience that keeps customers coming back.
              </p>
            </div>
            <Button className="group">
              Learn More About Our Story
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Dine Tap has transformed the way our customers experience dining at our restaurants. It's a game-changer."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Sarah Johnson, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Dine Tap.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet the Dine Tap Team</h3>
            <p className="text-muted-foreground">
              The talented individuals behind our mission to revolutionize the dining experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Dine Tap has completely transformed the way our customers experience dining at our restaurants. 
                The seamless, contactless solution has been a game-changer for our business."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">Jessica Davis</div>
                  <div className="text-sm text-muted-foreground">Owner, Gourmet Bistro</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}