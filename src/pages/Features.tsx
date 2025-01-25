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
} from "lucide-react";

const Features = () => {
  const quickFeatures = [
    {
      icon: <Scan className="w-6 h-6 text-primary" />,
      label: "Scan",
    },
    {
      icon: <Wallet className="w-6 h-6 text-primary" />,
      label: "Pay",
    },
    {
      icon: <Send className="w-6 h-6 text-primary" />,
      label: "Transfer",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      label: "Visa Card",
    },
  ];

  const accessFeatures = [
    {
      icon: <Wallet className="w-6 h-6 text-primary" />,
      label: "Finance",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      label: "E-Wallet",
    },
    {
      icon: <Headphones className="w-6 h-6 text-primary" />,
      label: "Support",
    },
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      label: "Mosque",
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      label: "Schedule",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      label: "Quran",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      label: "Qibla",
    },
    {
      icon: <Coins className="w-6 h-6 text-primary" />,
      label: "Zakat",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Malaysia</h1>
        </div>
        <Button variant="outline" className="rounded-full">
          <Wallet className="w-5 h-5 mr-2" />
          RM 500.64
        </Button>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {quickFeatures.map((feature, index) => (
          <Button
            key={index}
            variant="outline"
            className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-primary/5"
          >
            {feature.icon}
            <span className="text-sm">{feature.label}</span>
          </Button>
        ))}
      </div>

      {/* Promo Card */}
      <Card className="bg-primary/10 p-6 mb-8 rounded-xl">
        <h2 className="text-xl font-semibold text-primary mb-2">
          Go cashless and enjoy 5% cashback
        </h2>
        <p className="text-sm text-gray-600">
          in Malaysia, Madinah & Mekah
        </p>
        <p className="text-xs text-gray-500">New users only</p>
      </Card>

      {/* Quick Access Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
          {accessFeatures.map((feature, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-primary/5"
            >
              {feature.icon}
              <span className="text-sm">{feature.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;