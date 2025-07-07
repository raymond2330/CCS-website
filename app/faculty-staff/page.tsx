import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FacultyStaffPage() {
  const dean = {
    name: "Larry A. Vea, PhD",
    title: "Dean, College of Computer Studies",
    education: "Ph.D. in Computer Science, ADMU",
    specialization: "Affective Computing, Computing in Education",
    image: "/images/Faculty/Dr. Larry A. Vea.jpg?height=300&width=300",
  }

  const programChairs = [
    {
      name: "Jheanel E. Estrada, PhD",
      title: "Program Chair, Computer Science",
      education: "Ph.D. in Computer Science, MIT",
      specialization: "Software Engineering, Algorithms",
      image: "/images/faculty/Dr. Jheanel E. Estrada.jpg",
    },
    {
      name: "Alfio I. Regla, DIT",
      title: "Program Chair, Information Technology",
      education: "Ph.D. in Information Technology, TIP",
      specialization: "Network Security, Cloud Computing",
      image: "/images/faculty/Dr. Alfio I. Regla.jpg?height=300&width=300",
    },
    {
      name: "Larry A. Vea, PhD",
      title: "Program Chair, Data Science & Analytics",
      education: "Ph.D. in Computer Science, ADMU",
      specialization: "Affective Computing, Computing in Education",
      image: "/images/Faculty/Dr. Larry A. Vea.jpg?height=300&width=300",
    },
    {
      name: "Alfio I. Regla, DIT",
      title: "Program Chair, Entertainment & Multimedia",
      education: "Ph.D. in Information Technology, TIP",
      specialization: "3D Animation, Interactive Design",
      image: "/images/faculty/Dr. Alfio I. Regla.jpg?height=300&width=300",
    },
  ]

  const staff = [
    {
      name: "Angelica M. Rabino",
      title: "IT Staff",
      department: "College of Computer Studies",
      education: "B.S. in Business Administration, RSU",
      image: "/images/faculty/Ms. Angelica M. Rabino.jpg?height=200&width=200",
    },
    {
      name: "Jennielyn R. Dela Cruz",
      title: "ODCCS Staff",
      department: "College of Computer Studies",
      education: "B.S. in Computer Science",
      image: "/images/faculty/Ms. Jennielyn R. Dela Cruz.jpg?height=200&width=200",
    },
  ]

  const facultyByProgram = {
    "Computer Science": [
      {
        name: "Melvin A. Ballera, PhD",
        title: "Associate Professor",
        education: "Ph.D. in Computer Science, SU",
        specialization: "Algorithm, Machine Learning",
        image: "/images/faculty/Dr. Melvin A. Ballera.jpg?height=200&width=200",
      },
      {
        name: "Jodie Anna Diciembre",
        title: "Instructor",
        education: "M.S. in Information Technology, TU",
        specialization: "Software Engineering, NLP, Algorithm",
        image: "/images/Faculty/Ms. Jodie Anna Diciembre.jpg?height=200&width=200",
      },
    ],
    "Information Technology": [
      {
        name: "Jenelyn M. Aranas",
        title: "Assistant Professor 4",
        education: "M.S. in Information Technology, PUP",
        specialization: "Project Management",
        image: "/images/faculty/Ms. Jenelyn M. Aranas.jpg?height=200&width=200",
      },
      {
        name: "Francis Carabuena",
        title: "Instructor",
        education: "M.S. in Information Technology, TIP",
        specialization: "Web & App Development, Unity Augmented Reality",
        image: "/images/faculty/Mr. Francisco Carabuena.jpg?height=200&width=200",
      },
      {
        name: "Khaela Mae T. Lee",
        title: "Assistant Professor",
        education: "M.S. in Information Technology, PCU",
        specialization: "Software Engineering",
        image: "/images/faculty/Ms. Khaela May T. Lee.jpg?height=200&width=200",
      },
      {
        name: "Elezear Repil",
        title: "Assistant Professor",
        education: "B.S. in Information Technology, TIP",
        specialization: "Computer Programming, Cloud Computing",
        image: "/images/faculty/Mr. Elezear Repil.png?height=200&width=200",
      },
      {
        name: "Joselito V. San Juan",
        title: "Assistant Professor",
        education: "M.S. in information Technology, AU",
        specialization: "Mobile and Web Development",
        image: "/images/faculty/Mr. Joselito V. San Juan.png?height=200&width=200",
      },
    ],
    "Data Science & Analytics": [
      {
        name: "Melvin A. Ballera, PhD",
        title: "Associate Professor",
        education: "Ph.D. in Statistics, Stanford",
        specialization: "Algorithm, Machine Learning",
        image: "/images/Faculty/Dr. Melvin A. Ballera.jpg?height=200&width=200",
      },
      {
        name: "John Angelo San Andres",
        title: "Instructor",
        education: "B.S. in Computer Science, STI",
        specialization: "Data Visualization",
        image: "/images/Faculty/Mr. Jhon Angelo San Andres.png?height=200&width=200",
      },
    ],
    "Entertainment & Multimedia": [
      {
        name: "Jasmin Gas",
        title: "Instructor",
        education: "B.S. in Information Technology, ISTU",
        specialization: "Animation, Web Page Design and Development",
        image: "/images/Faculty/Ms. Jasmin Gas.png?height=200&width=200",
      },
      {
        name: "John Angelo San Andres",
        title: "Instructor",
        education: "B.S. in Computer Science, STI",
        specialization: "Game Development, Interactive Media",
        image: "/images/Faculty/Mr. Jhon Angelo San Andres.png?height=200&width=200",
      },
    ],
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white min-h-[300px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Faculty & Staff</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Meet our distinguished educators and researchers</p>
        </div>
      </section>

      {/* Dean Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">DEAN OF COLLEGE</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <Image
                src={dean.image || "/placeholder.svg"}
                alt={dean.name}
                width={300}
                height={300}  
                className="rounded-full mx-auto mb-4 w-48 h-48 object-cover"
              />
              <CardTitle className="text-2xl">{dean.name}</CardTitle>
              <CardDescription className="text-lg">{dean.title}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between items-center">
                  <p className="text-sm text-gray-600 mb-2">{dean.education}</p>
                  <Badge variant="outline" className="text-xs whitespace-normal leading-relaxed py-1 px-2">
                    {dean.specialization}
                  </Badge>
                </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Chairs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">PROGRAM CHAIRS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programChairs.map((chair, index) => (
              <Card key={`${chair.name}-${chair.title}-${index}`} className="text-center h-full flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <Image
                    src={chair.image || "/placeholder.svg"}
                    alt={chair.name}
                    width={300}
                    height={300}
                    className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
                  />
                  <CardTitle className="text-lg">{chair.name}</CardTitle>
                  <CardDescription className="min-h-[3rem] flex items-center justify-center">
                    {chair.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between items-center">
                  <p className="text-sm text-gray-600 mb-2">{chair.education}</p>
                  <Badge variant="outline" className="text-xs whitespace-normal leading-relaxed py-1 px-2">
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
          <h2 className="text-3xl font-bold text-center mb-12">STAFF MEMBERS</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {staff.map((member, index) => (
              <Card key={`${member.name}-${index}`} className="text-center w-full max-w-sm h-full flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="min-h-[3rem] flex items-center justify-center">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between items-center">
                  <p className="text-sm text-gray-600 mb-2">{member.education}</p>
                  <Badge variant="outline" className="text-xs whitespace-normal leading-relaxed py-1 px-2">
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
          <h2 className="text-3xl font-bold text-center mb-12">FACULTY MEMBERS BY PROGRAM</h2>

          {Object.entries(facultyByProgram).map(([program, faculty]) => (
            <div key={program} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-600">{program}</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {faculty.map((member) => (
                  <Card key={member.name} className="text-center w-full max-w-sm h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
                      />
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="min-h-[3rem] flex items-center justify-center">
                        {member.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between items-center">
                      <p className="text-sm text-gray-600 mb-2">{member.education}</p>
                      <Badge variant="outline" className="text-xs whitespace-normal leading-relaxed py-1 px-2">
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
