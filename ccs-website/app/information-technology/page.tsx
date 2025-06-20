import Image from "next/image"
import ProgramSection from "@/components/program-section"
import ProgramResources from "@/components/expandable-section"

export default function InformationTechnologyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Information Technology</h1>
          <p className="text-xl mb-8">Bridging technology and business solutions</p>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore Information Technology</h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-600">Promotional Video</p>
              <p className="text-sm text-gray-500">Discover our IT program overview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Network Infrastructure"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Network Infrastructure</h3>
              <p className="text-gray-600">Learn to design, implement, and manage enterprise network systems.</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Cloud Computing"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
              <p className="text-gray-600">Master cloud platforms and services for modern business solutions.</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Cybersecurity"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-600">
                Protect digital assets with comprehensive security knowledge and practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Information Technology */}
      <ProgramSection
        title="Information Technology"
        description="Information Technology focuses on the practical application of technology to solve business and organizational challenges. Our IT program emphasizes hands-on experience with enterprise systems, network administration, database management, and cybersecurity. Students learn to bridge the gap between technical solutions and business needs, developing skills in system analysis, project management, and IT service delivery. The curriculum covers areas such as cloud computing, mobile technologies, web development, and IT infrastructure management, preparing graduates for roles as IT professionals, system administrators, and technology consultants."
        image="/placeholder.svg?height=400&width=600"
      />

      {/* Program Resources */}
      <ProgramResources
        programName="Information Technology"
        catalogYear="2024-2025"
        accreditations={["PACUCOA", "CHED Center of Excellence", "PICAB"]}
      />
    </div>
  )
}
