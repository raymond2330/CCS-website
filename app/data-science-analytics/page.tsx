import Image from "next/image"
import ProgramSection from "@/components/program-section"
import ProgramResources from "@/components/expandable-section"
import { assetPath } from "@/lib/asset-path"

export default function DataScienceAnalyticsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white min-h-[300px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Data Science & Analytics</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Transforming data into actionable insights</p>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Discover Data Science & Analytics</h2>
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
                src="/images/program-highlight/CS/machine-learning.png?height=250&width=350"
                alt="Machine Learning"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">
                Build predictive models and intelligent systems using advanced algorithms.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/program-highlight/DSA/Big Data Analytics.png?height=250&width=350"
                alt="Big Data Analytics"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Big Data Analytics</h3>
              <p className="text-gray-600">
                Process and analyze large datasets using distributed computing frameworks.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/program-highlight/DSA/Deep Learning.png?height=250&width=350"
                alt="Deep Learning"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
              <p className="text-gray-600">Master neural networks and deep learning architectures for complex pattern recognition and AI applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Data Science & Analytics */}
      <ProgramSection
        title="Data Science & Analytics"
        description="Data Science & Analytics is an interdisciplinary field that combines statistics, computer science, and domain expertise to extract meaningful insights from data. Our program teaches students to collect, process, analyze, and interpret large datasets to support decision-making in various industries. The curriculum covers statistical analysis, machine learning, data mining, big data technologies, and data visualization. Students learn programming languages like Python and R, work with databases, and use tools for data analysis and visualization. Graduates are prepared for careers as data scientists, business analysts, research analysts, and data engineers in sectors ranging from healthcare and finance to technology and marketing."
        image="/images/pubmat/BSDSA.png?height=400&width=600"
      />

      {/* Program Resources */}
      <ProgramResources
        programName="Data Science & Analytics"
        catalogYear="2024-2025"
        accreditations={[]}
      />
    </div>
  )
}
