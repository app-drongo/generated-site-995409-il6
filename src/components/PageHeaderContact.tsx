// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T17:56:22.916Z
// Section: page-header
// Category: page-header
// Template ID: page-header-c001
// Page: Contact
// Component: PageHeaderContact

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function PageHeaderWithDescription() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 size-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 sm:py-20 lg:py-24 max-w-4xl">
          {/* Optional Badge */}
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Contact Us
          </Badge>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Connect with Dine Tap for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Exceptional Service
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Our dedicated team is here to assist you with all your inquiries and help you unlock the full potential of
            Dine Tap's contactless mobile app solution. Get in touch today and let's discuss how we can transform your
            restaurant's customer experience.
          </p>

          {/* Call-to-Action */}
          <div className="mt-8">
            <Button variant="primary" size="lg" className="flex items-center">
              Contact Us
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}