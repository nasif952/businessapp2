"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUp, Edit, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { companyAPI, financialAPI } from "@/lib/api"
import { toast } from "sonner"

// Define types for our data
interface Company {
  _id: string
  name: string
  industry: string
  foundingDate: string
  website: string
  investment: number
  sharePrice: number
  stage: string
  valuation: number
  profileCompletion: number
  problem: string
  solution: string
  whyNow: string
  businessModel: string
  totalAddressableMarket: number
  annualGrowthRate: number
}

interface FinancialMetrics {
  revenue: number
  grossMargin: number
  cashOnHand: number
  payingCustomers: number
  targetRevenue: number
  targetGrossMargin: number
  targetCashOnHand: number
  targetPayingCustomers: number
  lastMonthRevenue: number
  lastMonthGrossMargin: number
  lastMonthCashOnHand: number
  lastMonthPayingCustomers: number
}

export default function Dashboard() {
  // Use a placeholder company ID - in a real app, this would come from authentication
  const companyId = "placeholder-company-id"
  
  const [company, setCompany] = useState<Company | null>(null)
  const [financials, setFinancials] = useState<FinancialMetrics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        
        // Fetch company data
        const companyResponse = await companyAPI.getCompany(companyId)
        if (companyResponse.success && companyResponse.data) {
          setCompany(companyResponse.data as Company)
        } else {
          // If company doesn't exist, create a default one
          const newCompany = {
            name: "Diamond AI",
            industry: "Industrial & Commercial Services",
            foundingDate: "2023-03-27",
            website: "DiamondAI",
            investment: 0,
            sharePrice: 0,
            stage: "Series A",
            valuation: 0,
            profileCompletion: 20,
            problem: "",
            solution: "",
            whyNow: "",
            businessModel: "",
            totalAddressableMarket: 0,
            annualGrowthRate: 0
          }
          
          const createResponse = await companyAPI.createCompany(newCompany)
          if (createResponse.success && createResponse.data) {
            setCompany(createResponse.data as Company)
          }
        }
        
        // Fetch financial metrics
        const financialsResponse = await financialAPI.getFinancials(companyId)
        if (financialsResponse.success && financialsResponse.data) {
          setFinancials(financialsResponse.data as FinancialMetrics)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        toast.error("Failed to load dashboard data")
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [companyId])

  // Handle updating company fields
  const updateCompanyField = async (field: string, value: string) => {
    if (!company) return
    
    try {
      const response = await companyAPI.updateCompany(companyId, { [field]: value })
      
      if (response.success && response.data) {
        setCompany({ ...company, [field]: value })
        toast.success(`${field} updated successfully`)
      } else {
        toast.error(response.message || `Failed to update ${field}`)
      }
    } catch (error) {
      console.error(`Error updating ${field}:`, error)
      toast.error(`Failed to update ${field}`)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-full">Loading dashboard data...</div>
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-[#6B46C1] mb-6">MAIN DASHBOARD</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Company Overview Card */}
        <Card>
          <CardContent className="p-4">
            <h2 className="font-bold text-lg">{company?.name || "Diamond AI"}</h2>
            <p className="text-[#6B46C1] text-sm">
              {company?.industry || "Industrial & Commercial Services"} {new Date(company?.foundingDate || "2023-03-27").toISOString().split('T')[0]}
            </p>
            <div className="mt-4 border-t pt-4">
              <Link href="#" className="text-[#6B46C1] hover:underline text-sm">
                {company?.website || "DiamondAI"}
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Total Investment Card */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-sm text-gray-500 mb-1">Total Investment</h3>
            <p className="text-2xl font-bold text-[#6B46C1]">${company?.investment.toLocaleString() || "0"}</p>
            <div className="mt-2">
              <p className="text-sm">Share Price: ${company?.sharePrice.toFixed(2) || "0.00"}</p>
            </div>
          </CardContent>
        </Card>

        {/* Stage Card */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-sm text-gray-500 mb-1">Stage</h3>
            <p className="text-lg font-medium">{company?.stage || "Series A"}</p>
            <div className="mt-2">
              <h3 className="text-sm text-gray-500 mb-1">Valuation</h3>
              <p className="text-2xl font-bold text-[#6B46C1]">${company?.valuation.toLocaleString() || "0"}</p>
            </div>
            <div className="mt-2">
              <Link href="/valuation" className="text-[#6B46C1] hover:underline text-sm">
                View Valuation
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Profile Optimization Card */}
        <Card className="col-span-1 md:col-span-1 lg:col-span-1">
          <CardContent className="p-4">
            <h3 className="text-[#6B46C1] font-medium mb-2">Profile Optimized</h3>
            <Progress value={company?.profileCompletion || 20} className="h-2 bg-gray-200" />
            <p className="text-sm text-gray-500 mt-1">{company?.profileCompletion || 20}% Completed</p>
            <div className="mt-2">
              <Link href="#" className="text-[#6B46C1] hover:underline text-sm">
                Complete Optimization
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Problem Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle className="text-[#6B46C1] text-lg">Problem</CardTitle>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Your Answer
            </Button>
          </CardContent>
        </Card>

        {/* Solution Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle className="text-[#6B46C1] text-lg">Solution</CardTitle>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Your Answer
            </Button>
          </CardContent>
        </Card>

        {/* Why Now Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle className="text-[#6B46C1] text-lg">Why Now?</CardTitle>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Your Answer
            </Button>
          </CardContent>
        </Card>

        {/* Business Model Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <CardTitle className="text-[#6B46C1] text-lg">Business Model</CardTitle>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Your Answer
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#6B46C1]">Financial Overview</h2>
          <Button variant="outline" size="sm">
            + Widget
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Revenue Card */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Revenue</h3>
                  <p className="text-xs text-gray-500">This Month</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-1"
                  >
                    <path
                      d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                      fill="#6B7280"
                    />
                  </svg>
                </Button>
              </div>
              <div className="mt-2 flex items-end space-x-1">
                <p className="text-2xl font-bold">$0.00</p>
                <ArrowUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="mt-2 text-xs text-gray-500">
                <p>0% vs Target</p>
                <p>0% vs Last Month</p>
              </div>
            </CardContent>
          </Card>

          {/* Gross Margin Card */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Gross Margin</h3>
                  <p className="text-xs text-gray-500">This Month</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-1"
                  >
                    <path
                      d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                      fill="#6B7280"
                    />
                  </svg>
                </Button>
              </div>
              <div className="mt-2 flex items-end space-x-1">
                <p className="text-2xl font-bold">0 %</p>
                <ArrowUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="mt-2 text-xs text-gray-500">
                <p>0% vs Target</p>
                <p>0% vs Last Month</p>
              </div>
            </CardContent>
          </Card>

          {/* Cash on Hand Card */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Cash on Hand</h3>
                  <p className="text-xs text-gray-500">This Month</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-1"
                  >
                    <path
                      d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                      fill="#6B7280"
                    />
                  </svg>
                </Button>
              </div>
              <div className="mt-2 flex items-end space-x-1">
                <p className="text-2xl font-bold">$0.00</p>
                <ArrowUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="mt-2 text-xs text-gray-500">
                <p>0% vs Target</p>
                <p>0% vs Last Month</p>
              </div>
            </CardContent>
          </Card>

          {/* No of Paying Customers Card */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">No of Paying Customers</h3>
                  <p className="text-xs text-gray-500">This Month</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-1"
                  >
                    <path
                      d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                      fill="#6B7280"
                    />
                  </svg>
                </Button>
              </div>
              <div className="mt-2 flex items-end space-x-1">
                <p className="text-2xl font-bold">0</p>
                <ArrowUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="mt-2 text-xs text-gray-500">
                <p>0% vs Target</p>
                <p>0% vs Last Month</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#6B46C1]">Financial Charts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Revenue/Gross Margin Chart */}
          <Card className="col-span-1 md:col-span-1 lg:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between p-4">
              <CardTitle className="text-base font-medium">Revenue/Gross Margin</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-1"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#6B7280"
                  />
                </svg>
              </Button>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Chart placeholder - No data available</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Next 6 months
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Forecast Summary */}
          <Card className="col-span-1 md:col-span-1 lg:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between p-4">
              <CardTitle className="text-base font-medium">Forecast Summary</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-1"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#6B7280"
                  />
                </Button>
              </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Chart placeholder - Future Profitability</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Insights */}
          <Card className="col-span-1 md:col-span-1 lg:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between p-4">
              <CardTitle className="text-base font-medium">Market Insights</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-1"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#6B7280"
                  />
                </svg>
              </Button>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#6B46C1] text-sm font-medium">Total Addressable Market</h3>
                  <p className="text-gray-500">$0</p>
                </div>
                <div>
                  <h3 className="text-[#6B46C1] text-sm font-medium">Annual Growth Rate</h3>
                  <p className="text-gray-500">0%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

