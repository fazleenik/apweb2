import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, MessageSquare, FileText, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-primary p-4 md:p-8">
      {/* Header Section */}
      <div className="mb-8 flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-gold">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="text-white">
          <h1 className="text-2xl font-bold">Welcome back, Ahmad bin Abdullah</h1>
          <p className="text-primary-foreground/80">
            Manage your Umrah journey and track your progress
          </p>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="bg-primary/20 p-4 backdrop-blur">
          <div className="text-white">
            <p className="text-sm opacity-80">User ID</p>
            <p className="text-lg font-semibold">USR123456</p>
          </div>
        </Card>
        <Card className="bg-primary/20 p-4 backdrop-blur">
          <div className="text-white">
            <p className="text-sm opacity-80">Status</p>
            <p className="text-lg font-semibold">Confirmed</p>
          </div>
        </Card>
        <Card className="bg-primary/20 p-4 backdrop-blur">
          <div className="text-white">
            <p className="text-sm opacity-80">Departure</p>
            <p className="text-lg font-semibold">2024-05-15</p>
          </div>
        </Card>
        <Card className="bg-primary/20 p-4 backdrop-blur">
          <div className="text-white">
            <p className="text-sm opacity-80">Payment Due</p>
            <p className="text-lg font-semibold">2024-04-15</p>
          </div>
        </Card>
      </div>

      {/* Booking Details */}
      <Card className="mb-6 bg-primary/20 p-6 backdrop-blur">
        <h2 className="mb-4 text-xl font-semibold text-white">Current Booking</h2>
        <div className="space-y-3 text-white">
          <div>
            <p className="text-sm opacity-80">Provider</p>
            <p className="text-lg font-semibold">Al-Safwah Travel</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Package</p>
            <p className="text-lg font-semibold">BK789012</p>
          </div>
        </div>
      </Card>

      {/* Payment Progress */}
      <Card className="mb-6 bg-primary/20 p-6 backdrop-blur">
        <h2 className="mb-4 text-xl font-semibold text-white">Payment Progress</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-white">
            <span>Progress</span>
            <span>80%</span>
          </div>
          <Progress value={80} className="h-2 bg-white/20" />
          <div className="flex justify-between text-white">
            <div>
              <p className="text-sm opacity-80">Paid Amount</p>
              <p className="text-xl font-semibold">RM 12,000</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-80">Total Amount</p>
              <p className="text-xl font-semibold">RM 15,000</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card className="group cursor-pointer bg-primary/20 p-4 text-center backdrop-blur transition-all hover:bg-primary/30">
          <div className="flex flex-col items-center gap-2 text-white">
            <MessageSquare className="h-6 w-6" />
            <span>Support</span>
          </div>
        </Card>
        <Card className="group cursor-pointer bg-primary/20 p-4 text-center backdrop-blur transition-all hover:bg-primary/30">
          <div className="flex flex-col items-center gap-2 text-white">
            <Calendar className="h-6 w-6" />
            <span>Schedule</span>
          </div>
        </Card>
        <Card className="group cursor-pointer bg-primary/20 p-4 text-center backdrop-blur transition-all hover:bg-primary/30">
          <div className="flex flex-col items-center gap-2 text-white">
            <FileText className="h-6 w-6" />
            <span>Documents</span>
          </div>
        </Card>
        <Card className="group cursor-pointer bg-primary/20 p-4 text-center backdrop-blur transition-all hover:bg-primary/30">
          <div className="flex flex-col items-center gap-2 text-white">
            <Settings className="h-6 w-6" />
            <span>Settings</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;