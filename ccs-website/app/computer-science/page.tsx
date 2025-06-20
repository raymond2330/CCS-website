import Image from "next/image"
import ProgramSection from "@/components/program-section"
import ProgramResources from "@/components/expandable-section"

export default function ComputerSciencePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Computer Science</h1>
          <p className="text-xl mb-8">Building the foundation for tomorrow's technology leaders</p>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Discover Computer Science</h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-600">Promotional Video</p>
              <p className="text-sm text-gray-500">Click to play our program overview video</p>
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
        description="Computer Science is a comprehensive field that encompasses the study of algorithms, computational systems, and the design of computer systems and their applications. Our program provides a strong foundation in programming, mathematics, and theoretical computer science while emphasizing practical problem-solving skills. Students explore areas such as software engineering, artificial intelligence, cybersecurity, database systems, and computer networks. The curriculum is designed to prepare graduates for diverse career paths in technology, from software development to research and innovation."
        image="/placeholder.svg?height=400&width=600"
      />

      {/* Program Resources */}
      <ProgramResources
        programName="Computer Science"
        catalogYear="2024-2025"
        accreditations={["ABET", "PACUCOA", "CHED Center of Excellence"]}
      />
    </div>
  )
}
