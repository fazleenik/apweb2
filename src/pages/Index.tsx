import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CreditCard, Globe, Users, Shield, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: "Secure Payments",
      description: "Safe and reliable payment processing for your Umrah journey",
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Trusted Agents",
      description: "Connect with verified Umrah travel agents",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Easy Registration",
      description: "Simple registration process for Jemaah",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Secure Platform",
      description: "Your data and transactions are protected",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-pattern text-white py-20 px-4 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AmanahPay
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Platform Pembayaran Syariah, Selamat & Mudah
			Pengurusan Haji,Umrah & Kewangan
          </p>
          <Button
            onClick={() => navigate("/register")}
            className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-6 rounded-full text-lg"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose AmanahPay?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow geometric-pattern">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Umrah Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of pilgrims who trust AmanahPay for their Umrah finances
          </p>
          <Button
            onClick={() => navigate("/login")}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 rounded-full text-lg"
          >
            Sign Up Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;