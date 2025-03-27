import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CapTable() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-[#6B46C1] mb-6">CAP TABLE</h1>

      <div className="space-y-6">
        <h2 className="text-xl font-bold">Shareholders</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">+ Add Shareholder</Button>
            </div>
            <div className="h-[200px] flex items-center justify-center">
              <p className="text-gray-500">No data available</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold">Foundation Round</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">+ Add Foundation Round</Button>
              <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">+ Add Share Class</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#6B46C1] text-white">
                  <tr>
                    <th className="text-left p-2">Shareholder</th>
                    <th className="text-left p-2">Number of Shares</th>
                    <th className="text-left p-2">Share Price</th>
                    <th className="text-left p-2">Share Class</th>
                    <th className="text-left p-2">Capital Invested</th>
                    <th className="text-left p-2">Share Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 font-bold">Total</td>
                    <td className="p-2">0</td>
                    <td className="p-2">$0.00</td>
                    <td className="p-2"></td>
                    <td className="p-2">$0.00</td>
                    <td className="p-2">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold">Rounds</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">+ Add Round</Button>
            </div>
            <div className="h-[200px] flex items-center justify-center">
              <p className="text-gray-500">No data available</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold">ESOPs</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">+ Add ESOP</Button>
            </div>
            <div className="h-[200px] flex items-center justify-center">
              <p className="text-gray-500">No data available</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold">Loans</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">+ Add Loan</Button>
            </div>
            <div className="h-[200px] flex items-center justify-center">
              <p className="text-gray-500">No data available</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

