import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TopBar() {
  return (
    <div className="bg-white h-[60px] shadow-sm flex items-center justify-between px-4">
      <div className="text-[#6B46C1] font-bold text-lg">Diamond AI</div>
      <div className="flex items-center space-x-4">
        <Button variant="destructive" size="sm" className="bg-[#EF4444] hover:bg-red-600">
          Upgrade Now
        </Button>
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-gray-500" />
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-[#6B46C1] flex items-center justify-center text-white">N</div>
            <span className="font-medium text-sm hidden md:inline-block">NASIF AHMED</span>
          </div>
        </div>
      </div>
    </div>
  )
}

