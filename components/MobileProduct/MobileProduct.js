import { Phone, Battery, Cpu, HardDrive } from "lucide-react"

const phones = [
  {
    id: 1,
    name: "SuperPhone X",
    price: 999,
    image: "/placeholder.svg?height=400&width=300",
    specs: {
      storage: "128GB",
      ram: "8GB",
      battery: "4000mAh",
      processor: "Octa-core"
    },
    color: "Midnight Black"
  },
  {
    id: 2,
    name: "UltraPhone Pro",
    price: 1199,
    image: "/placeholder.svg?height=400&width=300",
    specs: {
      storage: "256GB",
      ram: "12GB",
      battery: "5000mAh",
      processor: "Hexa-core"
    },
    color: "Cosmic Silver"
  },
  {
    id: 3,
    name: "MegaPhone Lite",
    price: 699,
    image: "/placeholder.svg?height=400&width=300",
    specs: {
      storage: "64GB",
      ram: "6GB",
      battery: "3500mAh",
      processor: "Quad-core"
    },
    color: "Ocean Blue"
  },
  {
    id: 4,
    name: "MegaPhone Lite",
    price: 699,
    image: "/placeholder.svg?height=400&width=300",
    specs: {
      storage: "64GB",
      ram: "6GB",
      battery: "3500mAh",
      processor: "Quad-core"
    },
    color: "Ocean Blue"
  },
  {
    id: 5,
    name: "MegaPhone Lite",
    price: 699,
    image: "/placeholder.svg?height=400&width=300",
    specs: {
      storage: "64GB",
      ram: "6GB",
      battery: "3500mAh",
      processor: "Quad-core"
    },
    color: "Ocean Blue"
  },
  {
    id: 6,
    name: "MegaPhone Lite",
    price: 699,
    image: "/placeholder.svg?height=400&width=300",
    specs: {
      storage: "64GB",
      ram: "6GB",
      battery: "3500mAh",
      processor: "Quad-core"
    },
    color: "Ocean Blue"
  }
]

export default function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">Featured Phones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {phones.map((phone) => (
          <div key={phone.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-0 right-0 bg-orange-500  text-white px-4 py-2 rounded-bl-lg">
                ${phone.price}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{phone.name}</h2>
              <p className="text-gray-600 mb-4">{phone.color}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <HardDrive className="w-5 h-5 mr-2 text-primary" />
                  <span>{phone.specs.storage}</span>
                </div>
                <div className="flex items-center">
                  <Cpu className="w-5 h-5 mr-2 text-primary" />
                  <span>{phone.specs.ram} RAM</span>
                </div>
                <div className="flex items-center">
                  <Battery className="w-5 h-5 mr-2 text-primary" />
                  <span>{phone.specs.battery}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  <span>{phone.specs.processor}</span>
                </div>
              </div>
              <button className="w-full bg-orange-600  text-white py-2 rounded-md hover:bg-orange-500 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}