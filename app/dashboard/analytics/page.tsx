import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ESGScoreCard } from "@/components/esg-score-card"
import { MetricCard } from "@/components/metric-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Leaf,
  Users,
  Building2,
  ArrowUpRight,
  Download,
  ChevronLeft,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Info,
} from "lucide-react"
import Link from "next/link"
import { TooltipHelper } from "@/components/tooltip-helper"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
                  <Link href="/dashboard">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Dashboard
                  </Link>
                </Button>
              </div>
              <h1 className="text-3xl font-bold tracking-tight">ESG Analytics</h1>
              <p className="text-muted-foreground">Comprehensive analysis of your ESG performance</p>
            </div>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Analytics
            </Button>
          </div>

          {/* Overall ESG Score with Rating */}
          <div className="mb-8">
            <Card className="bg-secondary/30 border-none">
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-4">
                  <div className="md:col-span-1">
                    <h2 className="text-xl font-bold mb-2">Overall ESG Score</h2>
                    <p className="text-muted-foreground mb-4">Your combined performance across all ESG categories</p>
                    <div className="text-6xl font-bold text-primary">80</div>
                    <div className="flex items-center mt-2 text-green-500">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span>+5 points from last quarter</span>
                    </div>

                    {/* ESG Rating */}
                    <div className="mt-4">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium text-muted-foreground">ESG Rating:</span>
                        <TooltipHelper text="ESG ratings range from CCC (lowest) to AAA (highest), similar to credit ratings. Your rating is based on your overall ESG performance compared to industry standards.">
                          <Info className="h-3 w-3 text-muted-foreground cursor-help" />
                        </TooltipHelper>
                      </div>
                      <div className="text-3xl font-bold text-primary mt-1">AA</div>
                      <p className="text-xs text-muted-foreground mt-1">Very Good Performance</p>
                    </div>
                  </div>
                  <div className="md:col-span-3 grid gap-4 grid-cols-3">
                    <ESGScoreCard
                      title="Environmental"
                      score={70}
                      color="environmental"
                      description="Your environmental score measures your company's impact on the natural world."
                      size="small"
                    />
                    <ESGScoreCard
                      title="Social"
                      score={80}
                      color="social"
                      description="Your social score evaluates how your company manages relationships with people."
                      size="small"
                    />
                    <ESGScoreCard
                      title="Governance"
                      score={90}
                      color="governance"
                      description="Your governance score assesses your company's leadership and policies."
                      size="small"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ESG Rating Scale */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">ESG Rating Scale</h2>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="relative h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-md"></div>
                    <div className="absolute inset-0 flex justify-between px-2 items-center text-white font-medium">
                      <span>CCC</span>
                      <span>B</span>
                      <span>BB</span>
                      <span>BBB</span>
                      <span>A</span>
                      <span>AA</span>
                      <span>AAA</span>
                    </div>
                    <div className="absolute top-full left-[calc(83.3%)] transform -translate-x-1/2 mt-1">
                      <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-900"></div>
                      <div className="bg-gray-900 text-white px-2 py-1 rounded text-xs">Your Rating</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-xs text-center mt-8">
                    <div className="text-red-500">
                      <div className="font-semibold">CCC</div>
                      <div className="text-muted-foreground">Lagging</div>
                    </div>
                    <div className="text-red-400">
                      <div className="font-semibold">B</div>
                      <div className="text-muted-foreground">Poor</div>
                    </div>
                    <div className="text-yellow-500">
                      <div className="font-semibold">BB</div>
                      <div className="text-muted-foreground">Below Average</div>
                    </div>
                    <div className="text-yellow-400">
                      <div className="font-semibold">BBB</div>
                      <div className="text-muted-foreground">Average</div>
                    </div>
                    <div className="text-green-400">
                      <div className="font-semibold">A</div>
                      <div className="text-muted-foreground">Good</div>
                    </div>
                    <div className="text-green-500 font-bold">
                      <div className="font-semibold">AA</div>
                      <div className="text-muted-foreground">Very Good</div>
                    </div>
                    <div className="text-green-600">
                      <div className="font-semibold">AAA</div>
                      <div className="text-muted-foreground">Excellent</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Company Ranking */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Company Ranking</h2>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Your Ranking Among GreenStart Clients</h3>
                      <p className="text-sm text-muted-foreground mt-1">Based on overall ESG performance</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">
                        12<span className="text-lg text-muted-foreground">/78</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Top 15%</p>
                    </div>
                  </div>

                  <div className="relative pt-6">
                    <div className="absolute top-0 left-0 right-0 flex justify-between text-xs text-muted-foreground">
                      <span>Bottom Performers</span>
                      <span>Top Performers</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <div className="absolute top-1/2 left-[85%] transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 rounded-full bg-white border-4 border-primary flex items-center justify-center">
                        <span className="sr-only">Your position</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <Card className="bg-[#e2f2df] bg-opacity-20 border-none">
                      <CardContent className="p-4">
                        <h4 className="text-sm font-medium flex items-center gap-1">
                          <Leaf className="h-4 w-4 text-[#14ae5c]" />
                          Environmental Ranking
                        </h4>
                        <div className="mt-2 flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-[#14ae5c]">18</span>
                          <span className="text-sm text-muted-foreground">/78</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Top 23%</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-[rgba(128,0,128,0.1)] border-none">
                      <CardContent className="p-4">
                        <h4 className="text-sm font-medium flex items-center gap-1">
                          <Users className="h-4 w-4 text-[#8000ff]" />
                          Social Ranking
                        </h4>
                        <div className="mt-2 flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-[#8000ff]">9</span>
                          <span className="text-sm text-muted-foreground">/78</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Top 12%</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-[rgba(255,140,0,0.1)] border-none">
                      <CardContent className="p-4">
                        <h4 className="text-sm font-medium flex items-center gap-1">
                          <Building2 className="h-4 w-4 text-[#ff8c00]" />
                          Governance Ranking
                        </h4>
                        <div className="mt-2 flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-[#ff8c00]">5</span>
                          <span className="text-sm text-muted-foreground">/78</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Top 6%</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="text-sm font-medium mb-2">Industry Comparison</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">Your Company</span>
                          <span className="text-xs font-medium">AA (80%)</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">Industry Average</span>
                          <span className="text-xs font-medium">BBB (65%)</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">Top Performer</span>
                          <span className="text-xs font-medium">AAA (95%)</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Trends */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Performance Trends</h2>
            <Card>
              <CardContent className="p-6">
                <div className="h-[300px] flex items-center justify-center bg-muted/40 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">ESG Performance Trend Chart</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics Overview */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Key Metrics Overview</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="bg-[#e2f2df] bg-opacity-20 border-none">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-[#14ae5c]" />
                    <CardTitle className="text-lg">Environmental</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 grid-cols-2">
                    <MetricCard
                      title="Carbon Emissions"
                      value="12.5"
                      unit="tons CO2e"
                      change="-5%"
                      positive={true}
                      color="text-[#14ae5c]"
                    />
                    <MetricCard
                      title="Energy Usage"
                      value="4,250"
                      unit="kWh"
                      change="+8%"
                      positive={false}
                      color="text-[#14ae5c]"
                    />
                    <MetricCard
                      title="Waste Recycled"
                      value="68"
                      unit="%"
                      change="+12%"
                      positive={true}
                      color="text-[#14ae5c]"
                    />
                    <MetricCard
                      title="Water Usage"
                      value="1,250"
                      unit="gallons"
                      change="-3%"
                      positive={true}
                      color="text-[#14ae5c]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[rgba(128,0,128,0.1)] border-none">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#8000ff]" />
                    <CardTitle className="text-lg">Social</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 grid-cols-2">
                    <MetricCard
                      title="Gender Diversity"
                      value="42"
                      unit="%"
                      change="+7%"
                      positive={true}
                      color="text-[#8000ff]"
                    />
                    <MetricCard
                      title="Employee Turnover"
                      value="18"
                      unit="%"
                      change="+3%"
                      positive={false}
                      color="text-[#8000ff]"
                    />
                    <MetricCard
                      title="Training Hours"
                      value="24"
                      unit="hrs/emp"
                      change="+15%"
                      positive={true}
                      color="text-[#8000ff]"
                    />
                    <MetricCard
                      title="Pay Equity"
                      value="0.94"
                      unit="ratio"
                      change="+0.02"
                      positive={true}
                      color="text-[#8000ff]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[rgba(255,140,0,0.1)] border-none">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-[#ff8c00]" />
                    <CardTitle className="text-lg">Governance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 grid-cols-2">
                    <MetricCard
                      title="Board Diversity"
                      value="35"
                      unit="%"
                      change="+10%"
                      positive={true}
                      color="text-[#ff8c00]"
                    />
                    <MetricCard
                      title="Ethics Violations"
                      value="0"
                      unit="incidents"
                      change="0"
                      positive={true}
                      color="text-[#ff8c00]"
                    />
                    <MetricCard
                      title="Policy Coverage"
                      value="85"
                      unit="%"
                      change="+5%"
                      positive={true}
                      color="text-[#ff8c00]"
                    />
                    <MetricCard
                      title="Compliance"
                      value="92"
                      unit="%"
                      change="+4%"
                      positive={true}
                      color="text-[#ff8c00]"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Insights and Recommendations */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Insights & Recommendations</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Top Performers</CardTitle>
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#14ae5c]"></span>
                      <span>Waste recycling increased by 12%</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#8000ff]"></span>
                      <span>Employee training hours up 15%</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#ff8c00]"></span>
                      <span>Board diversity improved by 10%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Areas for Improvement</CardTitle>
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#14ae5c]"></span>
                      <span>Energy usage increased by 8%</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#8000ff]"></span>
                      <span>Employee turnover rate at 18%</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#ff8c00]"></span>
                      <span>Policy coverage needs expansion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Action Items</CardTitle>
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#14ae5c]"></span>
                      <span>Implement energy efficiency program</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#8000ff]"></span>
                      <span>Develop employee retention strategy</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#ff8c00]"></span>
                      <span>Create comprehensive policy framework</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Comparative Analysis */}
          <div>
            <h2 className="text-xl font-bold mb-4">Industry Benchmarking</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Your ESG Performance vs Industry Average</h3>
                    <div className="h-[250px] flex items-center justify-center bg-muted/40 rounded-md">
                      <BarChart3 className="h-12 w-12 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Benchmark Comparison Chart</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Performance by Category</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Environmental</span>
                          <span className="text-sm font-medium">70% vs 65% avg</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-[#14ae5c] h-2.5 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Social</span>
                          <span className="text-sm font-medium">80% vs 72% avg</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-[#8000ff] h-2.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Governance</span>
                          <span className="text-sm font-medium">90% vs 78% avg</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-[#ff8c00] h-2.5 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

