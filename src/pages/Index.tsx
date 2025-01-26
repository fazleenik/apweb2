"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CreditCard, Globe, Users, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    icon: <CreditCard className="w-6 h-6 text-[#ffd700]" />,
    title: "Secure Payments",
    description: "Safe and reliable payment processing for your Umrah journey",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#ffd700]" />,
    title: "Trusted Agents",
    description: "Connect with verified Umrah travel agents",
  },
  {
    icon: <Users className="w-6 h-6 text-[#ffd700]" />,
    title: "Easy Registration",
    description: "Simple registration process for Jemaah",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#ffd700]" />,
    title: "Shariah Compliance",
    description:
      "Ensures the platform adheres to Islamic financial principles.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6abd45] to-[#8fd16d]">
      {/* Hero Section */}
      <div className="text-white py-20 px-4 md:py-32">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_6073573013904802303_y__2_-removebg-preview-DH6NfejGGqm7q8otTaaXNmWpLV0Nzk.png"
              alt="AmanahPay Logo"
              width={300}
              height={200}
              className="w-auto h-auto relative z-10"
              priority
            />
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Platform Pembayaran Syariah, Selamat & Mudah
            <br />
            Pengurusan Haji, Umrah & Kewangan
          </p>
          <Button
            asChild
            className="bg-[#ffd700] hover:bg-[#ffdf33] text-[#6abd45] font-semibold px-8 py-6 rounded-full text-lg"
          >
            <Link href="/register">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-20 px-4 bg-white/20 backdrop-blur-sm rounded-3xl my-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-700">Why Choose AmanahPay?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-[#6abd45]/10 rounded-full">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#6abd45]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white/10 backdrop-blur-sm py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-700">Ready to Start Your Umrah Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of pilgrims who trust AmanahPay for their Umrah experience
          </p>
          <Button
            asChild
            className="bg-[#ffd700] hover:bg-[#ffdf33] text-[#6abd45] font-semibold px-8 py-6 rounded-full text-lg"
          >
            <Link href="/login">
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

