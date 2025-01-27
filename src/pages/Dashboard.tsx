"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, MessageSquare, FileText, Settings } from "lucide-react"
import Image from "next/image"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-lime-400 p-4 md:p-8">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
        <Avatar className="h-20 w-20 border-2 border-yellow-400 mb-4 md:mb-0 md:mr-4">
          <AvatarImage
            src="https://im.runware.ai/image/ws/2/ii/250d848f-1a86-4239-8f27-79d33541c59b.jpg"
            alt="User profile"
            className="object-cover"
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="text-gray-800">
          <h1 className="text-2xl font-bold mb-2">Welcome back,</h1>
          <h2 className="text-xl mb-2">Ahmad bin Abdullah</h2>
          <p className="text-gray-600">Manage your Umrah journey and track your progress</p>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        {[
          { label: "User ID", value: "USR123456" },
          { label: "Status", value: "Confirmed" },
          { label: "Departure", value: "2025-03-19" },
          { label: "Payment Due", value: "2025-02-15" },
        ].map((item, index) => (
          <Card key={index} className="bg-white p-4 shadow-md">
            <div className="text-gray-800">
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Booking Details */}
      <Card className="mb-6 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Current Booking</h2>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="mb-4 md:mb-0 md:mr-4 flex-grow space-y-3 text-gray-800">
            <div>
              <p className="text-sm text-gray-500">Provider</p>
              <p className="text-lg font-semibold">AMANI TRAVEL SDN. BHD.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Booking No</p>
              <p className="text-lg font-semibold">BK789012</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 relative">
              <Image
                src="https://prod-th-assets.s3.ap-southeast-1.amazonaws.com/images/0/Amani-Travel_0.png?VersionId=V.LQPZu9omxJg0joacBTIu3Vute7xeM3"
                alt="AMANI TRAVEL SDN. BHD. Logo"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Payment Progress */}
      <Card className="mb-6 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Payment Progress</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-gray-800">
            <span>Progress</span>
            <span>80%</span>
          </div>
          <Progress value={80} className="h-2 bg-gray-200" indicatorClassName="bg-yellow-400" />
          <div className="flex justify-between text-gray-800">
            <div>
              <p className="text-sm text-gray-500">Paid Amount</p>
              <p className="text-xl font-semibold">RM 12,000</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="text-xl font-semibold">RM 15,000</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { icon: MessageSquare, label: "Support" },
          { icon: Calendar, label: "Schedule" },
          { icon: FileText, label: "Documents" },
          { icon: Settings, label: "Settings" },
        ].map((action, index) => (
          <Card
            key={index}
            className="group cursor-pointer bg-white p-4 text-center shadow-md transition-all hover:bg-gray-50"
          >
            <div className="flex flex-col items-center gap-2 text-gray-800">
              <action.icon className="h-8 w-8 text-yellow-400" />
              <span>{action.label}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Dashboard

