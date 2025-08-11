"use client"

import { motion } from "framer-motion"
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Globe, 
  Laptop, 
  Mail, 
  Menu, 
  Phone, 
  Rocket, 
  Search, 
  Shield, 
  Smartphone, 
  Star, 
  Users, 
  Zap 
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import HeroGeometric from "@/components/hero-geometric"
import { ThemeToggle } from "@/components/theme-toggle"

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Custom Website Design",
    description: "Tailored designs that reflect your brand identity and engage your target audience effectively.",
    features: ["Unique Layouts", "Brand Integration", "User-Centric Design"]
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Responsive Development",
    description: "Mobile-first websites that provide seamless experiences across all devices and screen sizes.",
    features: ["Mobile Optimization", "Cross-Browser Support", "Touch-Friendly"]
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "SEO Optimization",
    description: "Strategic optimization to improve your search rankings and drive organic traffic to your site.",
    features: ["Keyword Research", "Technical SEO", "Performance Optimization"]
  }
]

const features = [
  { icon: <Zap />, title: "Lightning Fast", description: "Optimized for speed and performance" },
  { icon: <Shield />, title: "Secure & Reliable", description: "Enterprise-grade security measures" },
  { icon: <Globe />, title: "Global Reach", description: "CDN-powered global delivery" },
  { icon: <Users />, title: "24/7 Support", description: "Round-the-clock technical assistance" },
  { icon: <Rocket />, title: "Modern Stack", description: "Latest technologies and frameworks" },
  { icon: <Laptop />, title: "Clean Code", description: "Maintainable and scalable codebase" }
]

const portfolio = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "E-commerce",
    description: "Modern online shopping experience with advanced filtering and payment integration",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["Next.js", "Stripe", "PostgreSQL"]
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "SaaS",
    description: "Comprehensive analytics dashboard with real-time data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["React", "D3.js", "Node.js"]
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Corporate",
    description: "Professional corporate site with CMS integration and multi-language support",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    tech: ["WordPress", "PHP", "MySQL"]
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "FinTech",
    description: "Secure mobile banking solution with biometric authentication",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tech: ["React Native", "Firebase", "Blockchain"]
  },
  {
    id: 5,
    title: "Learning Platform",
    category: "EdTech",
    description: "Interactive e-learning platform with video streaming and progress tracking",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    tech: ["Vue.js", "AWS", "MongoDB"]
  },
  {
    id: 6,
    title: "Real Estate Portal",
    category: "Real Estate",
    description: "Property listing platform with virtual tours and advanced search",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tech: ["Angular", "Google Maps API", "Redis"]
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup Inc.",
    content: "The team delivered an exceptional website that exceeded our expectations. Our conversion rates increased by 150% within the first month!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Founder, DesignCo",
    content: "Professional, responsive, and incredibly talented. They transformed our online presence and helped us reach new markets globally.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthHub",
    content: "Outstanding work! The attention to detail and commitment to delivering a pixel-perfect design was remarkable. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "David Kim",
    role: "CTO, InnovateTech",
    content: "They built us a lightning-fast, SEO-optimized website that ranks #1 for our target keywords. The ROI has been phenomenal!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
]

export default function LandingPage() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolio[0] | null>(null)
  const [activeFilter, setActiveFilter] = useState("All")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = ["All", ...Array.from(new Set(portfolio.map(p => p.category)))]
  const filteredPortfolio = activeFilter === "All" 
    ? portfolio 
    : portfolio.filter(p => p.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kokonut UI
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="default" className="hidden md:inline-flex">
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background p-4">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-sm font-medium">Services</a>
              <a href="#portfolio" className="text-sm font-medium">Portfolio</a>
              <a href="#testimonials" className="text-sm font-medium">Testimonials</a>
              <a href="#contact" className="text-sm font-medium">Contact</a>
              <Button variant="default" className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroGeometric />

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">
              Industry-leading features that set us apart from the competition
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our latest projects and success stories
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPortfolio.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.category}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-muted-foreground">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1">View Live Site</Button>
                  <Button variant="outline" className="flex-1">View Case Study</Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>
          <div className="mx-auto max-w-4xl">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-lg mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <Card className="border-0 bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                      Ready to Start Your Project?
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                      Let&apos;s discuss how we can help transform your business with a 
                      stunning, high-performance website that drives results.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>hello@kokonutui.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Your Email" type="email" />
                    <Textarea placeholder="Tell us about your project" className="min-h-[100px]" />
                    <Button className="w-full" size="lg">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Kokonut UI</h3>
              <p className="text-sm text-muted-foreground">
                Transforming visions into digital reality since 2020.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Web Design</a></li>
                <li><a href="#" className="hover:text-primary">Development</a></li>
                <li><a href="#" className="hover:text-primary">SEO</a></li>
                <li><a href="#" className="hover:text-primary">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary">Testimonials</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Newsletter</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Subscribe for updates and tips
              </p>
              <div className="flex gap-2">
                <Input placeholder="Your email" type="email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Kokonut UI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}