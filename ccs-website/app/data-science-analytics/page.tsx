import Image from "next/image"
import ProgramSection from "@/components/program-section"
import ProgramResources from "@/components/expandable-section"

export default function DataScienceAnalyticsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Science & Analytics</h1>
          <p className="text-xl mb-8">Transforming data into actionable insights</p>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Discover Data Science & Analytics</h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-600">Promotional Video</p>
              <p className="text-sm text-gray-500">Learn about our data science program</p>
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
                src="/placeholder.svg?height=250&width=350"
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
                src="/placeholder.svg?height=250&width=350"
                alt="Data Visualization"
                width={350}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p className="text-gray-600">Create compelling visual narratives from complex data sets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Data Science & Analytics */}
      <ProgramSection
        title="Data Science & Analytics"
        description="Data Science & Analytics is an interdisciplinary field that combines statistics, computer science, and domain expertise to extract meaningful insights from data. Our program teaches students to collect, process, analyze, and interpret large datasets to support decision-making in various industries. The curriculum covers statistical analysis, machine learning, data mining, big data technologies, and data visualization. Students learn programming languages like Python and R, work with databases, and use tools for data analysis and visualization. Graduates are prepared for careers as data scientists, business analysts, research analysts, and data engineers in sectors ranging from healthcare and finance to technology and marketing."
        image="/placeholder.svg?height=400&width=600"
      />

      {/* Program Resources */}
      <ProgramResources
        programName="Data Science & Analytics"
        catalogYear="2024-2025"
        accreditations={["ABET", "PACUCOA", "CHED Center of Excellence", "PICAB"]}
      />
    </div>
  )
}
