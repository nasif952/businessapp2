import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function FinancialOverview() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-[#6B46C1] mb-6">Financial Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Revenue This Month Card */}
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

        {/* Gross Margin This Month Card */}
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
              <p className="text-2xl font-bold">0%</p>
              <ArrowUp className="h-4 w-4 text-green-500" />
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <p>0% vs Target</p>
              <p>0% vs Last Month</p>
            </div>
          </CardContent>
        </Card>

        {/* Cash on Hand This Month Card */}
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

        {/* No of Paying Customers This Month Card */}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Financial Charts */}
        <Card className="col-span-1 md:col-span-1">
          <CardHeader>
            <CardTitle>Revenue and Gross Margin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-gray-500">Chart placeholder - No data available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Forecast Summary */}
        <Card className="col-span-1 md:col-span-1">
          <CardHeader>
            <CardTitle>Forecast Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-gray-500">Chart placeholder - No data available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Last Round */}
        <Card>
          <CardHeader>
            <CardTitle>Last Round</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">0</p>
          </CardContent>
        </Card>

        {/* Market Insights */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Market Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-[#6B46C1] text-sm font-medium">Total Addressable Market</h3>
                <p className="text-gray-500">N/A</p>
              </div>
              <div>
                <h3 className="text-[#6B46C1] text-sm font-medium">Annual Growth Rate</h3>
                <p className="text-gray-500">N/A</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

