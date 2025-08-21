// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T17:56:22.534Z
// Section: features
// Category: features
// Template ID: features-c001
// Page: Product
// Component: Features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function ProductFeatures() {
  const features = [
    {
      icon: Zap,
      title: "Blazing Fast",
      description: "Dine Tap's optimized performance ensures lightning-fast load times and seamless interactions, keeping your customers engaged.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "With bank-level security and industry-leading compliance certifications, Dine Tap safeguards your customer data and your business.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Dine Tap's responsive, mobile-optimized interface delivers a consistent, intuitive experience across all devices and screen sizes.",
      badge: "Design"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Dine Tap's worldwide content delivery network ensures fast, reliable performance for your customers no matter where they are.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Actionable Insights",
      description: "Dine Tap's advanced analytics provide deep, real-time insights to help you make data-driven decisions and drive your business forward.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Branded Experience",
      description: "Fully customize Dine Tap to seamlessly match your brand identity and create a cohesive, professional experience for your customers.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Developer-Friendly",
      description: "Dine Tap's clean APIs, extensive documentation, and powerful developer tools make it easy to integrate and extend the platform.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Our expert support team is available 24/7 to help you get the most out of Dine Tap and ensure your success.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Privacy-Focused",
      description: "At Dine Tap, we prioritize your data privacy. Your information stays secure and is never sold or shared.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Dine Tap Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Elevate Your Restaurant's
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Digital Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dine Tap's powerful features are designed to help you build, grow, and scale your restaurant business with confidence and ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your restaurant's digital experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}