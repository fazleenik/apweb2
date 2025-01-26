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
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="bg-emerald-500 p-4 text-white">
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
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">RM</span>
            <span className="text-2xl font-semibold">500.64</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex gap-3 mt-4">
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full text-xs px-4 py-1 bg-white text-emerald-600 hover:bg-white/90"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add money
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white/90 px-0">
              Transactions
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="grid grid-cols-4 gap-4 p-6">
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-gray-100">
            <QrCode className="h-6 w-6 text-gray-600" />
          </div>
          <span className="text-xs">Scan</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-gray-100">
            <Wallet className="h-6 w-6 text-gray-600" />
          </div>
          <span className="text-xs">Pay</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-gray-100">
            <Send className="h-6 w-6 text-gray-600" />
          </div>
          <span className="text-xs">Transfer</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-gray-100">
            <CreditCard className="h-6 w-6 text-gray-600" />
          </div>
          <span className="text-xs">Visa Card</span>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="mx-4 p-4 bg-sky-50 rounded-lg">
        <h3 className="text-emerald-500 font-medium">Go cashless and enjoy 5% cashback</h3>
        <p className="text-sm text-gray-600 mt-1">in Malaysia, Madinah & Mekah</p>
        <p className="text-xs text-gray-500 mt-1">New users only</p>
      </div>

      {/* Quick Access */}
      <div className="p-4">
        <h2 className="font-medium mb-4">Quick Access</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-1">
            <Building2 className="h-5 w-5 text-gray-600" />
            <span className="text-xs">Finance</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Wallet className="h-5 w-5 text-gray-600" />
            <span className="text-xs">E-Wallet</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Headphones className="h-5 w-5 text-gray-600" />
            <span className="text-xs">Support</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Landmark className="h-5 w-5 text-gray-600" />
            <span className="text-xs">Mosque</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Star className="h-5 w-5 text-gray-600" />
            <span className="text-xs">Halal</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Handshake className="h-5 w-5 text-gray-600" />
            <span className="text-xs">Partnership</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Calendar className="h-5 w-5 text-gray-600" />
            <span className="text-xs">Schedule</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Book className="h-5 w-5 text-gray-600" />
            <span className="text-xs">Quran</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Compass className="h-5 w-5 text-gray-600" />
            <span className="text-xs">Qibla</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Heart className="h-5 w-5 text-gray-600" />
            <span className="text-xs">Zakat</span>
          </div>
        </div>
      </div>
    </div>
  )
}