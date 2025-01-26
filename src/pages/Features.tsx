import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Scan,
  Wallet,
  Send,
  CreditCard,
  Headphones,
  Building2,
  Calendar,
  BookOpen,
  Clock,
  Coins,
  MapPin,
} from "lucide-react";

const Features = () => {
  const quickActions = [
    {
      icon: <Scan className="w-6 h-6" />,
      label: "Scan",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      label: "Pay",
    },
    {
      icon: <Send className="w-6 h-6" />,
      label: "Transfer",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      label: "Visa Card",
    },
  ];

  const quickAccess = [
    {
      icon: <Wallet className="w-6 h-6" />,
      label: "Finance",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      label: "E-Wallet",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      label: "Support",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      label: "Mosque",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Schedule",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      label: "Quran",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Qibla",
    },
    {
      icon: <Coins className="w-6 h-6" />,
      label: "Zakat",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Partnership",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Balance */}
      <div className="bg-white p-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Malaysia</h1>
          <Button variant="outline" className="rounded-full">
            <Wallet className="w-4 h-4 mr-2" />
            RM 500.64
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Actions Grid */}
        <div className="grid grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full h-16 flex flex-col gap-1"
              >
                {action.icon}
                <span className="text-xs">{action.label}</span>
              </Button>
            </div>
          ))}
        </div>

        {/* Promo Card */}
        <Card className="bg-primary/5 p-4">
          <div className="space-y-1">
            <h2 className="font-semibold text-primary">
              Go cashless and enjoy 5% cashback
            </h2>
            <p className="text-sm text-muted-foreground">
              in Malaysia, Madinah & Mekah
            </p>
            <p className="text-xs text-muted-foreground">New users only</p>
          </div>
        </Card>

        {/* Quick Access Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Access</h2>
          <div className="grid grid-cols-5 gap-4">
            {quickAccess.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-16 flex flex-col gap-1"
                >
                  {item.icon}
                  <span className="text-xs">{item.label}</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;