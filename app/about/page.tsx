import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, Mail, Globe, Users, Building2, Award, BookOpen } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              <div className="flex items-center gap-2">
                <Leaf className="h-8 w-8 text-primary" />
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">About GreenStart</h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Empowering startups to build sustainable businesses through accessible ESG reporting and expert guidance
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    GreenStart was founded in 2020 by a team of sustainability experts and tech entrepreneurs who
                    recognized a critical gap in the market: while large corporations had resources to implement
                    comprehensive ESG programs, startups and small businesses were left behind.
                  </p>
                  <p>
                    Our founders, Dr. Emma Chen and Michael Rodriguez, combined their expertise in environmental science
                    and software development to create a platform that democratizes access to ESG reporting tools and
                    knowledge.
                  </p>
                  <p>
                    What began as a simple dashboard for carbon emissions tracking has evolved into a comprehensive
                    platform that helps startups measure, report, and improve their environmental, social, and
                    governance performance.
                  </p>
                  <p>
                    Today, GreenStart serves over 500 startups across 30 countries, helping them build sustainable
                    businesses that attract investors, customers, and talent who value purpose alongside profit.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-3xl opacity-50"></div>
                <img
                  src="https://media.discordapp.net/attachments/1359851407338901568/1359931876701241517/istockphoto-1802169428-612x612.jpg?ex=67f946c1&is=67f7f541&hm=d7c2056d6688618bbf66d8280698a61c43146dc042a0c13858058c842ba3e7e3&=&format=webp"
                  alt="GreenStart team working together"
                  width={500}
                  height={500}
                  className="relative rounded-lg border shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                To make ESG reporting accessible, educational, and actionable for startups at every stage of growth
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white border shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Environmental Impact</h3>
                  <p className="text-muted-foreground">
                    We help startups measure and reduce their environmental footprint, from carbon emissions to resource
                    usage, creating a more sustainable future.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[rgba(128,0,128,0.1)] flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-[#8000ff]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Social Responsibility</h3>
                  <p className="text-muted-foreground">
                    We empower startups to build diverse, equitable, and inclusive workplaces that benefit employees,
                    customers, and communities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[rgba(255,140,0,0.1)] flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-[#ff8c00]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ethical Governance</h3>
                  <p className="text-muted-foreground">
                    We guide startups in establishing transparent, accountable, and ethical business practices that
                    build trust with all stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our work and shape our company culture
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Leaf className="h-8 w-8 text-primary" />,
                  title: "Sustainability",
                  description:
                    "We practice what we preach, minimizing our own environmental impact in everything we do.",
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-primary" />,
                  title: "Education",
                  description: "We believe in making ESG knowledge accessible and understandable for everyone.",
                },
                {
                  icon: <Award className="h-8 w-8 text-primary" />,
                  title: "Excellence",
                  description: "We strive for the highest standards in our platform, data, and customer service.",
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Inclusivity",
                  description: "We build tools that work for startups of all sizes, sectors, and stages of growth.",
                },
              ].map((value, index) => (
                <Card key={index} className="bg-white border shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our ESG Team Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our ESG Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our expert consultants who review and validate your ESG data
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Emma Chen",
                  role: "Chief Sustainability Officer",
                  bio: "Ph.D. in Environmental Science with 15+ years of experience in corporate sustainability. Emma leads our environmental data validation team.",
                  image: "/placeholder.svg?height=200&width=200",
                  initials: "EC",
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of Social Impact",
                  bio: "Former HR Director with expertise in DEI initiatives and workplace culture. Michael ensures the accuracy of social metrics reporting.",
                  image: "/placeholder.svg?height=200&width=200",
                  initials: "MR",
                },
                {
                  name: "Sarah Johnson",
                  role: "Governance Specialist",
                  bio: "Corporate attorney with a background in business ethics and compliance. Sarah reviews governance data and provides improvement recommendations.",
                  image: "/placeholder.svg?height=200&width=200",
                  initials: "SJ",
                },
                {
                  name: "Dr. James Park",
                  role: "Environmental Analyst",
                  bio: "Specializes in carbon accounting and emissions reduction strategies for tech companies. James helps validate environmental metrics.",
                  image: "/placeholder.svg?height=200&width=200",
                  initials: "JP",
                },
                {
                  name: "Aisha Patel",
                  role: "Social Impact Consultant",
                  bio: "Expert in community engagement and social responsibility programs. Aisha reviews social impact data and provides actionable insights.",
                  image: "/placeholder.svg?height=200&width=200",
                  initials: "AP",
                },
                {
                  name: "David Kim",
                  role: "ESG Reporting Specialist",
                  bio: "Former financial analyst with expertise in ESG reporting frameworks. David ensures data quality and compliance with reporting standards.",
                  image: "/placeholder.svg?height=200&width=200",
                  initials: "DK",
                },
              ].map((member, index) => (
                <Card key={index} className="bg-white border shadow-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center p-6">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="bg-primary/10 text-primary text-xl">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-muted-foreground text-center">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Ready to Start Your ESG Journey?</h2>
            <p className="md:text-lg max-w-[800px] mx-auto mb-8">
              Join hundreds of startups already using GreenStart to measure, improve, and report their ESG performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/dashboard">Try Demo Dashboard</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/services/consultation">
                  <Mail className="mr-2 h-4 w-4" />
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

