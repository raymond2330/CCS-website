import Image from "next/image"
import ProgramSection from "@/components/program-section"
import ProgramResources from "@/components/expandable-section"
import { assetPath } from "@/lib/asset-path"

export default function EntertainmentMultimediaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white min-h-[300px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Entertainment & Multimedia Computing</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Creating immersive digital experiences</p>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Discover Entertainment & Multimedia Computing</h2>
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
              poster={assetPath("/videos/preview/preview.jpg")}
              preload="auto"
              playsInline
            >
              <source src={assetPath("/videos/CCS Promo vid.mp4")} type="video/mp4" />
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
                src="/images/program-highlight/IT/Animation.png?height=250&width=350"
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
                src="/images/program-highlight/EMC/Game Development.png?height=250&width=350"
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
                src="/images/program-highlight/EMC/Game Production.png?height=250&width=350"
                alt="Game Production"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Game Production</h3>
              <p className="text-gray-600">Learn the complete game production pipeline from concept to release, including project management and team collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Entertainment & Multimedia Computing */}
      <ProgramSection
        title="Entertainment & Multimedia Computing"
        description="Entertainment & Multimedia Computing combines creativity with technology to produce engaging digital content and interactive experiences. Our program covers digital animation, game development, web design, video production, and interactive media. Students learn to use professional software tools while developing strong design principles and storytelling skills. The curriculum includes courses in 3D modeling, motion graphics, user experience design, and digital marketing. Graduates are prepared for careers in the entertainment industry, advertising agencies, game studios, and digital media companies as animators, game developers, multimedia designers, and content creators."
        image="/images/pubmat/BSEMC.png?height=400&width=600"
      />

      {/* Program Resources */}
      <ProgramResources
        programName="Entertainment & Multimedia Computing"
        catalogYear="2024-2025"
        accreditations={["ABET", "PACUCOA", "CHED Center of Excellence", "Philippine Technological Council",]}
      />
    </div>
  )
}
