import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye } from "lucide-react"

export default function Performance() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 items-center">
          <Button variant="outline" className="bg-[#F3E8FF] text-[#6B46C1]">
            UPDATE
          </Button>
          <Button variant="outline" className="bg-[#6B46C1] text-white">
            METRICS
          </Button>
          <Button variant="outline">CUSTOM</Button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#6B46C1]">My Default Metrics</h1>
          <div className="flex space-x-2">
            <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">+ Add Metric</Button>
            <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">Bulk Upload</Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-end space-x-4 mb-4">
              <div className="space-y-1">
                <Label htmlFor="month">Month</Label>
                <Select defaultValue="march">
                  <SelectTrigger id="month" className="w-[180px]">
                    <SelectValue placeholder="March" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="january">January</SelectItem>
                    <SelectItem value="february">February</SelectItem>
                    <SelectItem value="march">March</SelectItem>
                    <SelectItem value="april">April</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="year">Year</Label>
                <Select defaultValue="2025">
                  <SelectTrigger id="year" className="w-[180px]">
                    <SelectValue placeholder="2025" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="mt-auto">
                Reset
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-2 w-10">#</th>
                    <th className="text-left p-2">Metric</th>
                    <th className="text-left p-2">Target</th>
                    <th className="text-left p-2">Actuals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#F9F5FF]">
                    <td className="p-2">1</td>
                    <td className="p-2">Revenue</td>
                    <td className="p-2">
                      <div className="relative">
                        <span className="absolute left-3 top-2.5">$</span>
                        <Input className="pl-6" />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="relative">
                        <span className="absolute left-3 top-2.5">$</span>
                        <Input className="pl-6" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">2</td>
                    <td className="p-2">Gross Margin</td>
                    <td className="p-2">
                      <div className="relative">
                        <span className="absolute left-3 top-2.5">%</span>
                        <Input className="pl-6" />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="relative">
                        <span className="absolute left-3 top-2.5">%</span>
                        <Input className="pl-6" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-[#F9F5FF]">
                    <td className="p-2">3</td>
                    <td className="p-2">Cash on Hand</td>
                    <td className="p-2">
                      <div className="relative">
                        <span className="absolute left-3 top-2.5">$</span>
                        <Input className="pl-6" />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="relative">
                        <span className="absolute left-3 top-2.5">$</span>
                        <Input className="pl-6" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">4</td>
                    <td className="p-2">No of Paying Customers</td>
                    <td className="p-2">
                      <div className="relative">
                        <span className="absolute left-3 top-2.5">#</span>
                        <Input className="pl-6" />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="relative">
                        <span className="absolute left-3 top-2.5">#</span>
                        <Input className="pl-6" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-[#6B46C1]">Performance</h1>

        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="select">
              <TabsList className="mb-4">
                <TabsTrigger value="select">Select Metrics</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="2025">2025</TabsTrigger>
                <TabsTrigger value="both">Both</TabsTrigger>
              </TabsList>

              <TabsContent value="select" className="h-[200px] flex items-center justify-center">
                <p className="text-gray-500">No data available</p>
              </TabsContent>

              <TabsContent value="monthly">
                <div className="h-[200px] flex items-center justify-center">
                  <p className="text-gray-500">No data available</p>
                </div>
              </TabsContent>

              <TabsContent value="2025">
                <div className="h-[200px] flex items-center justify-center">
                  <p className="text-gray-500">No data available</p>
                </div>
              </TabsContent>

              <TabsContent value="both">
                <div className="h-[200px] flex items-center justify-center">
                  <p className="text-gray-500">No data available</p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6">
              <h3 className="font-medium mb-2">History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#6B46C1] text-white">
                    <tr>
                      <th className="text-left p-2">Month - Year</th>
                      <th className="text-left p-2">Created On</th>
                      <th className="text-left p-2">Updated On</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">2-2025</td>
                      <td className="p-2">27 Mar 2025</td>
                      <td className="p-2">27 Mar 2025</td>
                      <td className="p-2 text-red-500">✗</td>
                      <td className="p-2">
                        <Button variant="ghost" size="sm" className="text-[#6B46C1]">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

