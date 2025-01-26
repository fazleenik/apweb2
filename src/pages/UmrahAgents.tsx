import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Phone, ExternalLink } from "lucide-react"

const agents = [
  {
    id: 1,
    name: "AL BALAD TRAVEL & TOURS SDN BHD",
    regNo: "UM123456",
    description: "Experienced Umrah travel provider offering comprehensive packages.",
    phone: "+60 3-1234 5678",
    website: "https://albalad.example.com",
    image:
      "https://prod-th-assets.s3.ap-southeast-1.amazonaws.com/images/0/AL%20BALAD.png?VersionId=k5EIp5r.t.urRmI.1NgTRMf2mG9iEAad",
  },
  {
    id: 2,
    name: "ALAM SHAH TRAVEL & TOURS SDN BHD",
    regNo: "UM234567",
    description: "Specialized in group Umrah packages with experienced guides.",
    phone: "+60 3-2345 6789",
    website: "https://alamshah.example.com",
    image:
      "https://prod-th-assets.s3.ap-southeast-1.amazonaws.com/images/0/ALAM%20SHAH.png?VersionId=4REcJXEfkQjhObCgNqqCwjN7mr0f12ys",
  },
  {
    id: 3,
    name: "ALIF TRAVEL & TOURS SDN BHD",
    regNo: "UM345678",
    description: "Providing tailored Umrah experiences for all types of travelers.",
    phone: "+60 3-3456 7890",
    website: "https://alif.example.com",
    image:
      "https://prod-th-assets.s3.ap-southeast-1.amazonaws.com/images/0/ALIFF.png?VersionId=kzDwJmUGxDu8Z1QY6Bn6RtW4fKP6xDIH",
  },
  {
    id: 4,
    name: "AMANI TRAVEL SDN. BHD.",
    regNo: "UM456789",
    description: "Offering premium Umrah packages with luxury accommodations.",
    phone: "+60 3-4567 8901",
    website: "https://amani.example.com",
    image:
      "https://prod-th-assets.s3.ap-southeast-1.amazonaws.com/images/0/Amani-Travel_0.png?VersionId=V.LQPZu9omxJg0joacBTIu3Vute7xeM3",
  },
  {
    id: 5,
    name: "ANDALUSIA TRAVEL & TOURS SDN. BHD.",
    regNo: "UM567890",
    description: "Specializing in educational and historical Umrah journeys.",
    phone: "+60 3-5678 9012",
    website: "https://andalusia.example.com",
    image:
      "https://prod-th-assets.s3.ap-southeast-1.amazonaws.com/images/0/ANDALUSIA_0.png?VersionId=8tgCpreHaYqKLgOzcGuIdbzdOyyw9qtR",
  },
  {
    id: 6,
    name: "AZ SAFIR TRAVEL AND TOURS SDN BHD",
    regNo: "UM678901",
    description: "Providing budget-friendly Umrah packages without compromising quality.",
    phone: "+60 3-6789 0123",
    website: "https://azsafir.example.com",
    image:
      "https://prod-th-assets.s3.ap-southeast-1.amazonaws.com/images/0/AZ%20SAFIR_0.png?VersionId=REPwBMovYinqDjMSR5Al5hQhH60i0g1b",
  },
  {
    id: 7,
    name: "AZ ZUHA GROUP TRAVEL & TOURS SDN BHD",
    regNo: "UM789012",
    description: "Offering comprehensive Umrah packages for groups and families.",
    phone: "+60 3-7890 1234",
    website: "https://azzuha.example.com",
    image:
      "https://prod-th-assets.s3.ap-southeast-1.amazonaws.com/images/0/AZZUHA_0.png?VersionId=GmCgg_edhfLO6ZQTRICMnutROEuT1fcf",
  },
  {
    id: 8,
    name: "BATUTA TRAVEL & TOURS SDN BHD",
    regNo: "UM890123",
    description: "Experienced in organizing Umrah trips with a focus on spiritual guidance.",
    phone: "+60 3-8901 2345",
    website: "https://batuta.example.com",
    image:
      "https://prod-th-assets.s3.ap-southeast-1.amazonaws.com/images/0/BATUTA_2.png?VersionId=pzQqb69S4n66n7wt8hkGZQC4_rQ3fUel",
  },
  {
    id: 9,
    name: "BUSYRA HOLIDAYS SDN BHD",
    regNo: "UM901234",
    description: "Providing all-inclusive Umrah packages with excellent customer service.",
    phone: "+60 3-9012 3456",
    website: "https://busyra.example.com",
    image:
      "https://prod-th-assets.s3.ap-southeast-1.amazonaws.com/images/0/busyra_0.png?VersionId=jUBLm3PV4NBakvb6_UnmkyjAvqP3o0zj",
  },
  {
    id: 10,
    name: "CITRA TRAVEL & TOURS SDN BHD",
    regNo: "UM012345",
    description: "Offering customizable Umrah packages to suit individual needs.",
    phone: "+60 3-0123 4567",
    website: "https://citra.example.com",
    image:
      "https://prod-th-assets.s3.ap-southeast-1.amazonaws.com/images/0/CITRA_0.png?VersionId=D.rpMfyvRaAuWukKaDFNmadwkGrmJvCa",
  },
]

const UmrahAgents = () => {
  return (
    <div className="min-h-screen bg-[#6abd45] bg-gradient-to-br from-[#6abd45] to-[#8fd16d] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">PJH Verified Companies</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Select from our trusted Umrah travel providers offering comprehensive packages for your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Card
              key={agent.id}
              className="bg-white/90 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none"
            >
              <div className="aspect-video relative overflow-hidden bg-white p-4 flex items-center justify-center">
                <img
                  src={agent.image || "/placeholder.svg"}
                  alt={`${agent.name} logo`}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#6abd45]">
                  <Building2 className="text-[#6abd45] flex-shrink-0" />
                  <span className="text-sm sm:text-base">{agent.name}</span>
                </CardTitle>
                <p className="text-sm text-gray-600">Registration No: {agent.regNo}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{agent.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>{agent.phone}</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button
                  className="flex-1 bg-[#ffd700] hover:bg-[#ffdf33] text-[#6abd45] font-semibold"
                  onClick={() => window.open("https://amanahpay.my/", "_blank")}
                >
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-[#6abd45] text-[#6abd45] hover:bg-[#6abd45] hover:text-white"
                  onClick={() => window.open(agent.website, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UmrahAgents