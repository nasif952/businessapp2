import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Questionnaire() {
  return (
    <div className="space-y-8">
      <div className="bg-red-500 text-white p-2 rounded-md flex items-center justify-between">
        <p>Your Valuation Free Trial is Expiring in 62d 3h 46m 11s</p>
        <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">Upgrade Now</Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-2 items-center">
          <Button variant="outline" className="bg-[#6B46C1] text-white">
            QUESTIONNAIRE
          </Button>
          <Button variant="outline">VALUATION</Button>
          <Button variant="outline">HISTORY</Button>
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-[#6B46C1]">Questionnaire Progress</h1>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#6B46C1] text-white flex items-center justify-center">1</div>
            <div className="w-16 h-1 bg-gray-200"></div>
            <div className="w-8 h-8 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center">2</div>
            <div className="w-16 h-1 bg-gray-200"></div>
            <div className="w-8 h-8 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center">3</div>
            <div className="w-16 h-1 bg-gray-200"></div>
            <div className="w-8 h-8 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center">4</div>
            <div className="w-16 h-1 bg-gray-200"></div>
            <div className="w-8 h-8 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center">5</div>
            <div className="w-16 h-1 bg-gray-200"></div>
            <div className="w-8 h-8 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center">6</div>
            <div className="w-16 h-1 bg-gray-200"></div>
            <div className="w-8 h-8 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center">7</div>
          </div>
        </div>

        <h2 className="text-xl font-bold">Step 1: Team</h2>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center flex-shrink-0">
                  1.1
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="founders">How many founders does the company have?</Label>
                  <Input id="founders" type="number" defaultValue="5" />
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center flex-shrink-0">
                  1.2
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="investment">
                    How much did the founders invest in the company in terms of capital collectively so far?
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5">$</span>
                    <Input id="investment" type="number" defaultValue="0" className="pl-6" />
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center flex-shrink-0">
                  1.3
                </div>
                <div className="space-y-2 flex-1">
                  <Label>Is the majority of the founders involved in other companies or occupations?</Label>
                  <RadioGroup defaultValue="no">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="involved-yes" />
                      <Label htmlFor="involved-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="involved-no" />
                      <Label htmlFor="involved-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center flex-shrink-0">
                  1.4
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="age">What is the average age of the founders?</Label>
                  <Input id="age" type="number" defaultValue="0" />
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center flex-shrink-0">
                  1.5
                </div>
                <div className="space-y-2 flex-1">
                  <Label>Has any of the founders previous entrepreneurial experience?</Label>
                  <RadioGroup defaultValue="no">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="experience-yes" />
                      <Label htmlFor="experience-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="experience-no" />
                      <Label htmlFor="experience-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center flex-shrink-0">
                  1.6
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="employees">
                    How many employees work for the company? (excluding founders, interns and freelancers)
                  </Label>
                  <Input id="employees" type="number" defaultValue="20" />
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center flex-shrink-0">
                  1.7
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="worked-together">
                    How long have the members of the core team worked (or studied) together?
                  </Label>
                  <Input id="worked-together" type="number" defaultValue="0" />
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#6B46C1] flex items-center justify-center flex-shrink-0">
                  1.8
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="experience">
                    How many years of relevant industry experience does the core team have collectively?
                  </Label>
                  <Input id="experience" type="number" defaultValue="0" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline">← Back</Button>
          <Button className="bg-[#6B46C1] hover:bg-[#5D3A9B] text-white">Save and Next →</Button>
        </div>
      </div>
    </div>
  )
}

