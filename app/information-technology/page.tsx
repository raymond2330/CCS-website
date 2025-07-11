import Image from "next/image"
import ProgramSection from "@/components/program-section"
import ProgramResources from "@/components/expandable-section"

export default function InformationTechnologyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-700 text-white min-h-[300px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Information Technology</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Bridging technology and business solutions</p>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Discover Information Technology</h2>
          <div className="relative aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-8 overflow-hidden">
            {/* Blurred/dimmed background for portrait video */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Image
                src="/videos/preview/preview.jpg"
                alt="Video background"
                fill
                className="w-full h-full object-cover blur-lg scale-110"
                aria-hidden="true"
              />
            </div>
            <video
              className="relative z-10 max-h-full max-w-[40%] rounded-sm shadow-lg"
              controls
              poster="/videos/preview/preview.jpg"
              preload="auto"
              playsInline
            >
              <source src="/videos/CCS Promo vid.webm" type="video/webm" />
              <source src="/videos/CCS Promo vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
                src="/images/program-highlight/IT/Network Infrastructure.png?height=250&width=350"
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
                src="/images/program-highlight/IT/Animation.png?height=250&width=350"
                alt="Animation"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Animation</h3>
              <p className="text-gray-600">Create engaging multimedia content using industry-standard animation and digital media tools for web and mobile applications.</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/program-highlight/IT/Cybersecurity.png?height=250&width=350"
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
        image="/images/pubmat/BSIT.png?height=400&width=600"
      />

      {/* Program Resources */}
      <ProgramResources
        programName="Information Technology"
        catalogYear="2024-2025"
        accreditations={["ABET", "PACUCOA", "CHED Center of Excellence", "Philippine Technological Council", "PICAB", "AUN"]}
      />
    </div>
  )
}
