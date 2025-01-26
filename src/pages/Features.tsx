import React from "react"
import {
  ChevronDown,
  QrCode,
  CreditCard,
  Send,
  Wallet,
  Building2,
  Headphones,
  Landmark,
  Star,
  Handshake,
  Calendar,
  Book,
  Compass,
  Heart,
  UserCircle,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileBanking() {
  return (
    <div className="max-w-md mx-auto bg-[#6abd45] min-h-screen text-white">
      {/* Header */}
      <header className="p-4">
        <div className="flex justify-between items-center">
          <Button variant="ghost" className="text-white hover:text-white/90 p-0">
            <span>Malaysia</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-white/90">
            <UserCircle className="h-6 w-6" />
          </Button>
        </div>

        {/* Balance Section */}
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <span className="text-sm">RM</span>
            <span className="text-3xl font-semibold">500.64</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex gap-3 mt-4">
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full text-xs px-4 py-2 bg-white text-[#6abd45] hover:bg-white/90"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add money
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white/90 px-0">
              Transactions
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white text-[#6abd45] rounded-t-3xl p-6 mt-6">
        {/* Main Navigation */}
        <nav className="grid grid-cols-4 gap-6 mb-8">
          {[
            { icon: QrCode, label: "Scan" },
            { icon: Wallet, label: "Pay" },
            { icon: Send, label: "Transfer" },
            { icon: CreditCard, label: "Visa Card" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-[#FFD700]/10">
                <item.icon className="h-6 w-6 text-[#FFD700]" />
              </div>
              <span className="text-xs text-gray-600">{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Promo Banner */}
        <div className="p-4 bg-[#6abd45]/10 rounded-lg mb-8">
          <h3 className="text-[#6abd45] font-medium">Go cashless and enjoy 5% cashback</h3>
          <p className="text-sm text-gray-600 mt-1">in Malaysia, Madinah & Mekah</p>
          <p className="text-xs text-gray-500 mt-1">New users only</p>
        </div>

        {/* Quick Access */}
        <section>
          <h2 className="font-medium mb-4 text-gray-800">Quick Access</h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Building2, label: "Finance" },
              { icon: Wallet, label: "E-Wallet" },
              { icon: Headphones, label: "Support" },
              { icon: Landmark, label: "Mosque" },
              { icon: Star, label: "Halal" },
              { icon: Handshake, label: "Partnership" },
              { icon: Calendar, label: "Schedule" },
              { icon: Book, label: "Quran" },
              { icon: Compass, label: "Qibla" },
              { icon: Heart, label: "Zakat" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <div className="p-2 rounded-full bg-[#FFD700]/10">
                  <item.icon className="h-5 w-5 text-[#FFD700]" />
                </div>
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}