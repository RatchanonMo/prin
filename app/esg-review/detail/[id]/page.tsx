"use client";

import type React from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TooltipHelper } from "@/components/tooltip-helper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { esg } from "@/lib/api-client";
import { Building2, Info, Leaf, Users } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Status types for submissions
type SubmissionStatus = "DRAFT" | "PENDING" | "APPROVED" | "REJECTED";

// Submission type
type Submission = {
  id: string;
  type: "ENVIRONMENTAL" | "SOCIAL" | "GOVERNANCE";
  status: SubmissionStatus;
  submittedAt: string;
  reviewedAt: string | null;
  reviewerId: string | null;
  reviewer: { name: string } | null;
  rejectionReason: string | null;
  companyId: string;
  company: { name: string };
};

export default function ReportPage() {
  const { status: sessionStatus } = useSession();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [data, setData] = useState<{
    carbonEmissions?: number;
    energyUsage?: number;
    renewableEnergy?: number;
    wasteRecycled?: number;
    waterUsage?: number;
    paperUsage?: number;
    genderDiversity?: number;
    employeeTurnover?: number;
    trainingHours?: number;
    payEquityRatio?: number;
    communityInvestment?: number;
    employeeSatisfaction?: number;
    boardDiversity?: number;
    ethicsViolations?: number;
    policyCoverage?: number;
    dataBreaches?: number;
    complianceScore?: number;
    riskAssessment?: string;
  } | null>(null);

  const { id } = useParams();
  // Load submissions when component mounts
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      loadSubmissions();
    }
  }, [sessionStatus]);

  // Load submissions from API
  const loadSubmissions = async () => {
    const data = await esg.getSubmissions({ id: id as string });
    setSubmissions(data);
    setData(JSON.parse(data[0].data));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <Tabs value={submissions[0]?.type} className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              {submissions[0]?.type === "ENVIRONMENTAL" && (
                <TabsTrigger
                  value="ENVIRONMENTAL"
                  className="data-[state=active]:bg-[#e2f2df] data-[state=active]:text-[#14ae5c]"
                >
                  <Leaf className="h-4 w-4 mr-2" />
                  Environmental
                </TabsTrigger>
              )}
              {submissions[0]?.type === "SOCIAL" && (
                <TabsTrigger
                  value="SOCIAL"
                  className="data-[state=active]:bg-[rgba(128,0,128,0.1)] data-[state=active]:text-[#8000ff]"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Social
                </TabsTrigger>
              )}
              {submissions[0]?.type === "GOVERNANCE" && (
                <TabsTrigger
                  value="GOVERNANCE"
                  className="data-[state=active]:bg-[rgba(255,140,0,0.1)] data-[state=active]:text-[#ff8c00]"
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  Governance
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="ENVIRONMENTAL" className="space-y-6">
              <Card>
                <CardHeader className="bg-[#e2f2df] bg-opacity-50">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-6 w-6 text-[#14ae5c]" />
                    <CardTitle>Environmental Data</CardTitle>
                  </div>
                  <CardDescription>
                    Report your company&apos;s impact on the natural world
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="environmental-carbonEmissions">
                            Carbon Emissions
                          </Label>
                          <TooltipHelper text="Total greenhouse gas emissions measured in tons of CO2 equivalent. Include direct (Scope 1) and indirect (Scope 2) emissions.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.carbonEmissions}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            tons CO2e
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="environmental-energyUsage">
                            Energy Usage
                          </Label>
                          <TooltipHelper text="Total energy consumption from all sources including electricity, natural gas, and other fuels.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.energyUsage}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            kWh
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="environmental-renewableEnergy">
                            Renewable Energy
                          </Label>
                          <TooltipHelper text="Percentage of total energy consumption that comes from renewable sources.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.renewableEnergy}</p>

                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            %
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="environmental-wasteRecycled">
                            Waste Recycled
                          </Label>
                          <TooltipHelper text="Percentage of total waste that is recycled or composted rather than sent to landfill.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.wasteRecycled}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            %
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="environmental-waterUsage">
                            Water Usage
                          </Label>
                          <TooltipHelper text="Total water consumption in gallons.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.waterUsage}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            gallons
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="environmental-paperUsage">
                            Paper Usage
                          </Label>
                          <TooltipHelper text="Total paper consumption measured in reams.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.paperUsage}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            reams
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="SOCIAL" className="space-y-6">
              <Card>
                <CardHeader className="bg-[rgba(128,0,128,0.1)]">
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-[#8000ff]" />
                    <CardTitle>Social Data</CardTitle>
                  </div>
                  <CardDescription>
                    Report your impact on people and communities
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="social-genderDiversity">
                            Gender Diversity
                          </Label>
                          <TooltipHelper text="Percentage of women in your workforce.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.genderDiversity}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            % women
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="social-employeeTurnover">
                            Employee Turnover
                          </Label>
                          <TooltipHelper text="Percentage of employees who left the company in the reporting period.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.employeeTurnover}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            %
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="social-trainingHours">
                            Training Hours
                          </Label>
                          <TooltipHelper text="Average number of training hours per employee during the reporting period.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.trainingHours}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            hrs/employee
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="social-payEquityRatio">
                            Pay Equity Ratio
                          </Label>
                          <TooltipHelper text="Ratio of women's to men's compensation (1.0 means equal pay).">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.payEquityRatio}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            women:men
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="social-communityInvestment">
                            Community Investment
                          </Label>
                          <TooltipHelper text="Percentage of profit invested in community initiatives.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.communityInvestment}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            % of profit
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="social-employeeSatisfaction">
                            Employee Satisfaction
                          </Label>
                          <TooltipHelper text="Average employee satisfaction score on a scale of 1-5.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.employeeSatisfaction}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            /5
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="GOVERNANCE" className="space-y-6">
              <Card>
                <CardHeader className="bg-[rgba(255,140,0,0.1)]">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-[#ff8c00]" />
                    <CardTitle>Governance Data</CardTitle>
                  </div>
                  <CardDescription>
                    Report your business ethics and leadership practices
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="governance-boardDiversity">
                            Board Diversity
                          </Label>
                          <TooltipHelper text="Percentage of board members from underrepresented groups (women, minorities, etc.).">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.boardDiversity}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            %
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="governance-ethicsViolations">
                            Ethics Violations
                          </Label>
                          <TooltipHelper text="Number of ethics violations or incidents reported during the period.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.ethicsViolations}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            incidents
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="governance-policyCoverage">
                            Policy Coverage
                          </Label>
                          <TooltipHelper text="Percentage of key governance areas covered by formal policies.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.policyCoverage}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            %
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="governance-dataBreaches">
                            Data Breaches
                          </Label>
                          <TooltipHelper text="Number of data breaches or security incidents during the reporting period.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.dataBreaches}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            incidents
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="governance-complianceScore">
                            Compliance Score
                          </Label>
                          <TooltipHelper text="Percentage compliance with applicable regulations and standards.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.complianceScore}</p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            %
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Label htmlFor="governance-riskAssessment">
                            Risk Assessment Frequency
                          </Label>
                          <TooltipHelper text="How often comprehensive risk assessments are conducted.">
                            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipHelper>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{data?.riskAssessment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
