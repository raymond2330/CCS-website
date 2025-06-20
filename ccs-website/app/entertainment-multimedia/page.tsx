import Image from "next/image"
import ProgramSection from "@/components/program-section"
import ProgramResources from "@/components/expandable-section"

export default function EntertainmentMultimediaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entertainment & Multimedia Communication</h1>
          <p className="text-xl mb-8">Creating immersive digital experiences</p>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Experience Entertainment & Multimedia</h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-600">Promotional Video</p>
              <p className="text-sm text-gray-500">Explore our creative multimedia program</p>
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
                alt="Digital Animation"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Digital Animation</h3>
              <p className="text-gray-600">Create stunning 2D and 3D animations using industry-standard software.</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Game Development"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Game Development</h3>
              <p className="text-gray-600">Design and develop interactive games for various platforms and audiences.</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Digital Media Production"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Digital Media Production</h3>
              <p className="text-gray-600">Master video production, audio editing, and multimedia content creation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Entertainment & Multimedia Communication */}
      <ProgramSection
        title="Entertainment & Multimedia Communication"
        description="Entertainment & Multimedia Communication combines creativity with technology to produce engaging digital content and interactive experiences. Our program covers digital animation, game development, web design, video production, and interactive media. Students learn to use professional software tools while developing strong design principles and storytelling skills. The curriculum includes courses in 3D modeling, motion graphics, user experience design, and digital marketing. Graduates are prepared for careers in the entertainment industry, advertising agencies, game studios, and digital media companies as animators, game developers, multimedia designers, and content creators."
        image="/placeholder.svg?height=400&width=600"
      />

      {/* Program Resources */}
      <ProgramResources
        programName="Entertainment & Multimedia Communication"
        catalogYear="2024-2025"
        accreditations={["PACUCOA", "CHED Center of Excellence"]}
      />
    </div>
  )
}
