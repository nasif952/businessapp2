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
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <div className="flex items-center justify-center h-full">Loading dashboard data...</div>
  }

  return (
    <main className="space-y-8">
      <h1 className="text-2xl font-bold text-[#6B46C1] mb-6">MAIN DASHBOARD</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <h2 className="font-bold text-lg">Diamond AI</h2>
            <p className="text-[#6B46C1] text-sm">Industrial & Commercial Services</p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

