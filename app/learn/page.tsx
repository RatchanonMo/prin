import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TooltipHelper } from "@/components/tooltip-helper"
import { Leaf, Users, Building2, BookOpen, ArrowRight, Info, Play } from "lucide-react"
import Link from "next/link"

export default function LearnPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">ESG Learning Center</h1>
              <p className="text-muted-foreground">
                Educational resources to help you understand and improve your ESG reporting
              </p>
            </div>
          </div>

          <Tabs defaultValue="guides" className="mb-8">
            <TabsList>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="glossary">Glossary</TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "ESG Fundamentals",
                    description: "Learn the basics of Environmental, Social, and Governance reporting.",
                    icon: <BookOpen className="h-6 w-6 text-primary" />,
                    level: "Beginner",
                  },
                  {
                    title: "Environmental Metrics",
                    description: "Understanding and measuring your environmental impact.",
                    icon: <Leaf className="h-6 w-6 text-environmental" />,
                    level: "Intermediate",
                  },
                  {
                    title: "Social Responsibility",
                    description: "How to measure and improve your social impact.",
                    icon: <Users className="h-6 w-6 text-social" />,
                    level: "Intermediate",
                  },
                  {
                    title: "Governance Best Practices",
                    description: "Building ethical and transparent governance structures.",
                    icon: <Building2 className="h-6 w-6 text-governance" />,
                    level: "Advanced",
                  },
                  {
                    title: "ESG for Investors",
                    description: "How investors evaluate ESG performance and reporting.",
                    icon: <BookOpen className="h-6 w-6 text-primary" />,
                    level: "Intermediate",
                  },
                  {
                    title: "ESG Reporting Standards",
                    description: "Overview of major ESG reporting frameworks and standards.",
                    icon: <BookOpen className="h-6 w-6 text-primary" />,
                    level: "Advanced",
                  },
                ].map((guide, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        {guide.icon}
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary">{guide.level}</span>
                      </div>
                      <CardTitle className="mt-4">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="border-t bg-muted/50 p-4">
                      <Button variant="ghost" className="w-full justify-between" asChild>
                        <Link href="#">
                          Read Guide
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tutorials" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Setting Up Your ESG Dashboard",
                    description: "A step-by-step guide to configuring your ESG tracking dashboard.",
                    duration: "10 min",
                    category: "Getting Started",
                  },
                  {
                    title: "Calculating Your Carbon Footprint",
                    description: "Learn how to measure and report your company's carbon emissions.",
                    duration: "15 min",
                    category: "Environmental",
                  },
                  {
                    title: "Creating a Diversity & Inclusion Policy",
                    description: "Develop an effective D&I policy for your startup.",
                    duration: "12 min",
                    category: "Social",
                  },
                  {
                    title: "Building an Ethical Supply Chain",
                    description: "How to evaluate and improve your supply chain sustainability.",
                    duration: "20 min",
                    category: "Environmental & Social",
                  },
                  {
                    title: "Implementing Board Diversity",
                    description: "Strategies for creating a diverse and effective board of directors.",
                    duration: "15 min",
                    category: "Governance",
                  },
                  {
                    title: "Creating Your First ESG Report",
                    description: "A complete walkthrough of creating a professional ESG report.",
                    duration: "25 min",
                    category: "Reporting",
                  },
                ].map((tutorial, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary">
                          {tutorial.category}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground flex items-center">
                          <Play className="h-3 w-3 mr-1" />
                          {tutorial.duration}
                        </span>
                      </div>
                      <CardTitle className="mt-4">{tutorial.title}</CardTitle>
                      <CardDescription>{tutorial.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="border-t bg-muted/50 p-4">
                      <Button variant="ghost" className="w-full justify-between" asChild>
                        <Link href="#">
                          Watch Tutorial
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="glossary" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>ESG Terminology</CardTitle>
                  <CardDescription>Common terms and definitions used in ESG reporting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        term: "Carbon Footprint",
                        definition:
                          "The total greenhouse gas emissions caused directly and indirectly by an individual, organization, event, or product.",
                      },
                      {
                        term: "GHG Protocol",
                        definition:
                          "A set of standards for measuring and managing greenhouse gas emissions from private and public sector operations and value chains.",
                      },
                      {
                        term: "Scope 1, 2, and 3 Emissions",
                        definition:
                          "Categories of greenhouse gas emissions: Scope 1 (direct emissions), Scope 2 (indirect emissions from purchased energy), and Scope 3 (all other indirect emissions in a company's value chain).",
                      },
                      {
                        term: "Diversity, Equity, and Inclusion (DEI)",
                        definition:
                          "Organizational practices that promote representation and participation of different groups, fair treatment, and a culture where all people can thrive.",
                      },
                      {
                        term: "Corporate Social Responsibility (CSR)",
                        definition:
                          "A self-regulating business model that holds companies accountable to themselves, stakeholders, and the public.",
                      },
                      {
                        term: "Materiality Assessment",
                        definition:
                          "A process to identify and prioritize the environmental, social, and governance issues that are most important to a company and its stakeholders.",
                      },
                      {
                        term: "Sustainable Development Goals (SDGs)",
                        definition:
                          "A collection of 17 global goals designed to be a blueprint to achieve a better and more sustainable future for all, established by the United Nations.",
                      },
                      {
                        term: "ESG Integration",
                        definition:
                          "The explicit inclusion of ESG factors into financial analysis and investment decisions.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                        <h3 className="font-semibold flex items-center gap-2">
                          {item.term}
                          <TooltipHelper text={item.definition} position="right">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </h3>
                        <p className="text-muted-foreground mt-1">{item.definition}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

