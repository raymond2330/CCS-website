import Image from "next/image"

interface ProgramSectionProps {
  title: string
  description: string
  image: string
}

export default function ProgramSection({ title, description, image }: ProgramSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is {title}?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{description}</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Industry-relevant curriculum</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Hands-on learning experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Expert faculty guidance</span>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} program`}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
