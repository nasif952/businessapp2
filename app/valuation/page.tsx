import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"

export default function Valuation() {
  return (
    <div className="space-y-8">
      <div className="bg-red-500 text-white p-2 rounded-md flex items-center justify-between">
        <p>Your Valuation Free Trial is Expiring in 62d 3h 46m 11s</p>
        <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">Upgrade Now</Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-2 items-center">
          <Button variant="outline" className="bg-[#F3E8FF] border-[#6B46C1] text-[#6B46C1]">
            QUESTIONNAIRE
          </Button>
          <Button variant="outline" className="bg-[#6B46C1] text-white">
            VALUATION
          </Button>
          <Button variant="outline">HISTORY</Button>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-[#6B46C1]">Valuation Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Valuation Summary Card */}
        <Card>
          <CardHeader>
            <CardTitle>Diamond AI Valuation Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[#6B46C1]">Started in</p>
                <p>2025</p>
              </div>
              <div>
                <p className="text-sm text-[#6B46C1]">Employees</p>
                <p>20</p>
              </div>
              <div>
                <p className="text-sm text-[#6B46C1]">Industry</p>
                <p>Business Support Services</p>
              </div>
              <div>
                <p className="text-sm text-[#6B46C1]">Business Activity</p>
                <p>Legal Services</p>
              </div>
              <div>
                <p className="text-sm text-[#6B46C1]">Last Revenue</p>
                <p>$1000</p>
              </div>
              <div>
                <p className="text-sm text-[#6B46C1]">Stage</p>
                <p>Growth stage</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Valuation Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Valuation Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-medium">Initial Estimate: $61,000</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-[#6B46C1]">Questionnaires:</p>
                <XCircle className="h-5 w-5 text-red-500" />
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-[#6B46C1]">Financials:</p>
                <XCircle className="h-5 w-5 text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#6B46C1]">Current Funding Round</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Pre-Money Valuation</p>
              <p className="text-xl font-bold">$0</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Investment</p>
              <p className="text-xl font-bold">$0</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">Post-Money Valuation</p>
              <p className="text-xl font-bold">$0</p>
            </CardContent>
          </Card>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <div className="relative pt-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Low: $44,000.00</span>
              <span className="text-sm text-gray-500">High: $64,000.00</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="w-3/4 h-2 bg-[#6B46C1] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[#6B46C1]">Funds Raised</p>
                <p>$0</p>
              </div>
              <div>
                <p className="text-sm text-[#6B46C1]">Last Year EBITDA</p>
                <p>$0</p>
              </div>
              <div>
                <p className="text-sm text-[#6B46C1]">Industry Multiple</p>
                <p>8.067476</p>
              </div>
              <div>
                <p className="text-sm text-[#6B46C1]">Annual ROI</p>
                <p>3.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5 Valuation Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-gray-500">Chart placeholder - No data available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weights of the methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full border-4 border-[#6B46C1] flex items-center justify-center">
                <span className="text-sm font-medium">33%</span>
              </div>
              <p className="mt-2 text-sm">Scorecard</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full border-4 border-[#6B46C1] flex items-center justify-center">
                <span className="text-sm font-medium">33%</span>
              </div>
              <p className="mt-2 text-sm">Check-list</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full border-4 border-[#6B46C1] flex items-center justify-center">
                <span className="text-sm font-medium">33%</span>
              </div>
              <p className="mt-2 text-sm">Venture Capital</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium">0%</span>
              </div>
              <p className="mt-2 text-sm">DCF Long Term Growth</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium">0%</span>
              </div>
              <p className="mt-2 text-sm">DCF with Multiples</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

