import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TooltipHelper } from "@/components/tooltip-helper"
import { Leaf, Users, Building2, ArrowRight, Info, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Simplify Your ESG Reporting Journey
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    GreenStart helps startups understand, track, and report their Environmental, Social, and Governance
                    metrics with ease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/dashboard">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/learn">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-3xl opacity-50"></div>
                <img
                  src="https://media.discordapp.net/attachments/1359851407338901568/1359931876701241517/istockphoto-1802169428-612x612.jpg?ex=67f946c1&is=67f7f541&hm=d7c2056d6688618bbf66d8280698a61c43146dc042a0c13858058c842ba3e7e3&=&format=webp"
                  alt="Dashboard Preview"
                  width={550}
                  height={550}
                  className="relative rounded-lg border shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ESG Pillars Section */}
        <section className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Understanding ESG</h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto">
                ESG reporting helps startups demonstrate their commitment to sustainability and responsible business
                practices.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Environmental */}
              <div className="bg-white rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-environmental/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-environmental" />
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Environmental
                  <TooltipHelper text="Environmental factors measure how your company impacts the natural world, including carbon emissions, waste management, and resource usage.">
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipHelper>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Track your carbon footprint, energy usage, waste management, and other environmental impacts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-environmental" />
                    Carbon emissions tracking
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-environmental" />
                    Energy efficiency metrics
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-environmental" />
                    Waste reduction strategies
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="bg-white rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-social/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-social" />
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Social
                  <TooltipHelper text="Social factors examine how your company manages relationships with employees, suppliers, customers, and communities where you operate.">
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipHelper>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Measure your impact on employees, customers, suppliers, and the communities you operate in.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-social" />
                    Diversity and inclusion metrics
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-social" />
                    Employee wellbeing programs
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-social" />
                    Community engagement initiatives
                  </li>
                </ul>
              </div>

              {/* Governance */}
              <div className="bg-white rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-governance/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-governance" />
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  Governance
                  <TooltipHelper text="Governance factors assess your company's leadership, executive pay, audits, internal controls, and shareholder rights.">
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipHelper>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Evaluate your business ethics, board diversity, transparency, and risk management practices.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-governance" />
                    Board composition and diversity
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-governance" />
                    Business ethics policies
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-governance" />
                    Transparency in reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-24 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose GreenStart</h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto">
                Our platform is designed specifically for startups beginning their ESG reporting journey.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Simple Data Collection",
                  description: "Easy-to-use forms and templates to collect your ESG data without the complexity.",
                },
                {
                  title: "Educational Resources",
                  description: "Learn as you go with built-in tutorials and tooltips explaining ESG concepts.",
                },
                {
                  title: "Visual Dashboards",
                  description: "Track your progress with intuitive visualizations and easy-to-understand metrics.",
                },
                {
                  title: "Improvement Suggestions",
                  description: "Get actionable recommendations to improve your ESG performance over time.",
                },
                {
                  title: "Benchmark Comparisons",
                  description: "See how your startup compares to industry peers and standards.",
                },
                {
                  title: "Report Generation",
                  description: "Create professional ESG reports to share with investors, customers, and stakeholders.",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
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
                <Link href="/learn">Explore Tutorials</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

