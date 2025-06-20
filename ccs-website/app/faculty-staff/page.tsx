import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FacultyStaffPage() {
  const dean = {
    name: "Dr. Larry A. Vea",
    title: "Dean, College of Computer Studies",
    education: "Ph.D. in Computer Science, MIT",
    specialization: "Artificial Intelligence, Machine Learning",
    image: "/placeholder.svg?height=300&width=300",
  }

  const programChairs = [
    {
      name: "Dr. Jheanel E. Estrada",
      title: "Program Chair, Computer Science",
      education: "Ph.D. in Computer Science, Stanford University",
      specialization: "Software Engineering, Algorithms",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Dr. Alfio I. Regla",
      title: "Program Chair, Information Technology",
      education: "M.S. in Information Technology, Carnegie Mellon",
      specialization: "Network Security, Cloud Computing",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Dr. Larry A. Vea",
      title: "Program Chair, Data Science & Analytics",
      education: "Ph.D. in Statistics, UC Berkeley",
      specialization: "Statistical Modeling, Big Data Analytics",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Dr. Alfio I. Regla",
      title: "Program Chair, Entertainment & Multimedia",
      education: "M.F.A. in Digital Media, NYU",
      specialization: "3D Animation, Interactive Design",
      image: "/placeholder.svg?height=250&width=250",
    },
  ]

  const staff = [
    {
      name: "Ms. Jennielyn R. Dela Cruz",
      title: "ODCCS Staff",
      department: "College of Computer Studies",
      education: "B.S. in Computer Science",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Ms. Angelica M. Rabino",
      title: "IT Staff",
      department: "College of Computer Studies",
      education: "B.S. in Information Technology",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const facultyByProgram = {
    "Computer Science": [
      {
        name: "Dr. Melvin A. Ballera",
        title: "Professor",
        education: "Ph.D. in Computer Science, MIT",
        specialization: "Artificial Intelligence, Natural Language Processing",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Ms. Jodie Anna Diciembre",
        title: "Assistant Professor",
        education: "M.S. in Software Engineering, Stanford",
        specialization: "Web Development, Mobile Applications",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Mr. John Richard Kho",
        title: "Professor",
        education: "Ph.D. in Computer Science, Harvard",
        specialization: "Computer Graphics, Virtual Reality",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    "Information Technology": [
      {
        name: "Jenelyn M. Aranas",
        title: "Associate Professor",
        education: "M.S. in Information Technology, MIT",
        specialization: "Database Management, System Administration",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Mr. Francis Carabuena",
        title: "Assistant Professor",
        education: "Ph.D. in Cybersecurity, Georgia Tech",
        specialization: "Network Security, Ethical Hacking",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Ms. Khaela Mae T. Lee",
        title: "Assistant Professor",
        education: "M.S. in Information Technology, CMU",
        specialization: "Cloud Computing, DevOps",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Mr. Elezear Repil",
        title: "Assistant Professor",
        education: "M.S. in Information Technology, CMU",
        specialization: "Cloud Computing, DevOps",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Mr. Joselito V. San Juan",
        title: "Assistant Professor",
        education: "M.S. in Information Technology, CMU",
        specialization: "Cloud Computing, DevOps",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Ms. Hydie D. Cruz",
        title: "Instructor",
        education: "M.S. in Information Technology, CMU",
        specialization: "Cloud Computing, DevOps",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Mr. Alvin Teruel",
        title: "Assistant Professor",
        education: "M.S. in Information Technology, CMU",
        specialization: "Cloud Computing, DevOps",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Mr. Robert Bautista",
        title: "Assistant Professor",
        education: "M.S. in Information Technology, CMU",
        specialization: "Cloud Computing, DevOps",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    "Data Science & Analytics": [
      {
        name: "Dr. Melvin A. Ballera",
        title: "Professor",
        education: "Ph.D. in Statistics, Stanford",
        specialization: "Machine Learning, Predictive Analytics",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Mr. John Angelo San Andres",
        title: "Assistant Professor",
        education: "M.S. in Data Science, UC Berkeley",
        specialization: "Data Visualization, Business Intelligence",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    "Entertainment & Multimedia": [
      {
        name: "Ms. Jasmin Gas",
        title: "Instructor",
        education: "M.F.A. in Computer Animation, SCAD",
        specialization: "3D Animation, Character Design",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Mr. John Angelo San Andres",
        title: "Assistant Professor",
        education: "Ph.D. in Digital Media, NYU",
        specialization: "Game Development, Interactive Media",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Mr. Klyde Angel Yu",
        title: "Lecturer",
        education: "M.A. in Multimedia Design, Art Center",
        specialization: "UI/UX Design, Motion Graphics",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Faculty & Staff</h1>
          <p className="text-xl mb-8">Meet our distinguished educators and researchers</p>
        </div>
      </section>

      {/* Dean Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Dean of College</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <Image
                src={dean.image || "/placeholder.svg"}
                alt={dean.name}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4"
              />
              <CardTitle className="text-2xl">{dean.name}</CardTitle>
              <CardDescription className="text-lg">{dean.title}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-2">{dean.education}</p>
              <Badge variant="secondary" className="mb-4">
                {dean.specialization}
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Chairs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Program Chairs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programChairs.map((chair, index) => (
              <Card key={`${chair.name}-${chair.title}-${index}`} className="text-center">
                <CardHeader>
                  <Image
                    src={chair.image || "/placeholder.svg"}
                    alt={chair.name}
                    width={250}
                    height={250}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-lg">{chair.name}</CardTitle>
                  <CardDescription>{chair.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">{chair.education}</p>
                  <Badge variant="outline" className="text-xs">
                    {chair.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Staff Members</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {staff.map((member, index) => (
              <Card key={`${member.name}-${index}`} className="text-center w-full max-w-sm">
                <CardHeader>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">{member.education}</p>
                  <Badge variant="outline" className="text-xs">
                    {member.department}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty by Program */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Faculty Members by Program</h2>

          {Object.entries(facultyByProgram).map(([program, faculty]) => (
            <div key={program} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-600">{program}</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {faculty.map((member) => (
                  <Card key={member.name} className="text-center w-full max-w-sm">
                    <CardHeader>
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-4"
                      />
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>{member.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-2">{member.education}</p>
                      <Badge variant="outline" className="text-xs">
                        {member.specialization}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
