import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ProgramSection from "@/components/program-section"

export default function HomePage() {
  const programs = [
    {
      title: "Computer Science",
      description: "Master the fundamentals of computing, algorithms, and software development.",
      href: "/computer-science",
      image: "/images/CS.png?height=200&width=300",
    },
    {
      title: "Information Technology",
      description: "Focus on practical applications of technology in business and organizations.",
      href: "/information-technology",
      image: "/images/IT.png?height=200&width=300",
    },
    {
      title: "Entertainment & Multimedia",
      description: "Create engaging digital content and interactive media experiences.",
      href: "/entertainment-multimedia",
      image: "/images/EMC.png?height=200&width=300",
    },
    {
      title: "Data Science & Analytics",
      description: "Extract insights from data to drive informed decision-making.",
      href: "/data-science-analytics",
      image: "/images/DSA.png?height=200&width=300",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">College of Computer Studies</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Shaping the future through innovative technology education and cutting-edge research
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/faculty-staff">Meet Our Faculty</Link>
          </Button>
        </div>
      </section>

      {/* What is Computer Science Section */}
      <ProgramSection
        title="College of Computer Studies"
        description="The College of Computer Studies is a premier institution dedicated to advancing technology education and innovation. We offer comprehensive programs in Computer Science, Information Technology, Data Science & Analytics, and Entertainment & Multimedia Communication. Our college combines rigorous academic curricula with hands-on learning experiences, preparing students for successful careers in the rapidly evolving technology industry. With state-of-the-art facilities, expert faculty, and strong industry partnerships, we foster an environment where students can explore cutting-edge technologies, develop critical thinking skills, and become leaders in their chosen fields."
        image="/images/college-overview.png"
      />

      {/* Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program) => (
              <Card key={program.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={program.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our College?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Industry-Relevant Curriculum</h3>
              <p className="text-gray-600">
                Our programs are designed with input from industry professionals to ensure graduates are job-ready.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from experienced professors and industry experts who bring real-world knowledge to the classroom.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">State-of-the-Art Facilities</h3>
              <p className="text-gray-600">
                Access modern labs, equipment, and technology to enhance your learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
