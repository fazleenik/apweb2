import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Phone } from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Al-Safwah Travel",
    regNo: "UM123456",
    description: "Premium Umrah packages with 5-star accommodations and dedicated guides.",
    phone: "+60 3-1234 5678",
    website: "https://al-safwah.example.com",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Al-Safwah+Travel"
  },
  {
    id: 2,
    name: "Al-Madinah Tours",
    regNo: "UM789012",
    description: "Specialized in group Umrah packages with experienced mutawwifs.",
    phone: "+60 3-8765 4321",
    website: "https://al-madinah.example.com",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Al-Madinah+Tours"
  },
  {
    id: 3,
    name: "Barakah Travel",
    regNo: "UM345678",
    description: "Family-friendly Umrah packages with flexible payment plans.",
    phone: "+60 3-2468 1357",
    website: "https://barakah.example.com",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Barakah+Travel"
  },
  {
    id: 4,
    name: "Makkah Services",
    regNo: "UM901234",
    description: "Luxury Umrah experiences with VIP transportation and accommodation.",
    phone: "+60 3-1357 2468",
    website: "https://makkah-services.example.com",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Makkah+Services"
  },
  {
    id: 5,
    name: "Zam Zam Travel",
    regNo: "UM567890",
    description: "Budget-friendly Umrah packages without compromising quality.",
    phone: "+60 3-9876 5432",
    website: "https://zamzam.example.com",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Zam+Zam+Travel"
  }
];

const UmrahAgents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Umrah Travel Providers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our trusted Umrah travel providers offering comprehensive packages for your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="text-primary" />
                  <span>{agent.name}</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Registration No: {agent.regNo}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{agent.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Phone className="h-4 w-4" />
                  <span>{agent.phone}</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button
                  className="flex-1 bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = `/booking/${agent.id}`}
                >
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open(agent.website, '_blank')}
                >
                  Visit Website
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UmrahAgents;