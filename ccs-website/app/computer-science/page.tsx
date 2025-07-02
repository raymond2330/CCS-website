import Image from "next/image"
import ProgramSection from "@/components/program-section"
import ProgramResources from "@/components/expandable-section"

export default function ComputerSciencePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white min-h-[300px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Computer Science</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Building the foundation for tomorrow's technology leaders</p>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Discover Computer Science</h2>
          <div className="relative aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-8 overflow-hidden">
            {/* Blurred/dimmed background for portrait video */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <img
                src="/videos/preview/preview.jpg"
                alt="Video background"
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
                src="/placeholder.svg?height=250&width=350"
                alt="Programming Lab"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Modern Programming Labs</h3>
              <p className="text-gray-600">
                State-of-the-art facilities equipped with the latest development tools and technologies.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="AI Research"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600">
                Cutting-edge research opportunities in artificial intelligence and machine learning.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Industry Partnership"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Industry Partnerships</h3>
              <p className="text-gray-600">
                Strong connections with leading tech companies for internships and job placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Computer Science */}
      <ProgramSection
        title="Computer Science"
        description="Computer Science is a comprehensive field that encompasses the study of algorithms, computational systems, and the design of computer systems and their applications. Our program provides a strong foundation in programming, mathematics, and theoretical computer science while emphasizing practical problem-solving skills. Students explore areas such as software engineering, machine learning, natural language processing, etc. The curriculum is designed to prepare graduates for diverse career paths in technology, from software development to research and innovation."
        image="/images/pubmat/BSCS.png?height=400&width=600"
      />

      {/* Program Resources */}
      <ProgramResources
        programName="Computer Science"
        catalogYear="2024-2025"
        accreditations={["ABET", "PACUCOA", "CHED Center of Excellence", "Philippine Technological Council", "PICAB", "AUN"]}
      />
    </div>
  )
}
