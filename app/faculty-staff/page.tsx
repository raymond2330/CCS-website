import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FacultyStaffPage() {
  const dean = {
    name: "Larry A. Vea, PhD",
    title: "Dean, College of Computer Studies",
    education: "Ph.D. in Computer Science",
    specialization: "Affective Computing, Computing in Education",
    image: "/images/Faculty/Dr. Larry A. Vea.jpg",
  }

  const programChairs = [
    {
      name: "Jheanel E. Estrada, PhD",
      title: "Program Chair, Computer Science",
      education: "Ph.D. in Computer Science",
      specialization: "Software Engineering, Algorithms",
      image: "/images/Faculty/Dr. Jheanel E. Estrada.jpg",
    },
    {
      name: "Alfio I. Regla, DIT",
      title: "Program Chair, Information Technology",
      education: "Ph.D. in Information Technology",
      specialization: "Network Security, Cloud Computing",
      image: "/images/Faculty/Dr. Alfio I. Regla.jpg",
    },
    {
      name: "Larry A. Vea, PhD",
      title: "Program Chair, Data Science & Analytics",
      education: "Ph.D. in Computer Science",
      specialization: "Affective Computing, Computing in Education",
      image: "/images/Faculty/Dr. Larry A. Vea.jpg",
    },
    {
      name: "Alfio I. Regla, DIT",
      title: "Program Chair, Entertainment & Multimedia",
      education: "Ph.D. in Information Technology",
      specialization: "3D Animation, Interactive Design",
      image: "/images/Faculty/Dr. Alfio I. Regla.jpg",
    },
  ]

  const staff = [
    {
      name: "Angelica M. Rabino",
      title: "IT Staff",
      department: "College of Computer Studies",
      education: "B.S. in Business Administration",
      image: "/images/Faculty/Ms. Angelica M. Rabino.jpg",
    },
    {
      name: "Jennielyn R. Dela Cruz",
      title: "ODCCS Staff",
      department: "College of Computer Studies",
      education: "B.S. in Computer Science",
      image: "/images/Faculty/Ms. Jennielyn R. Dela Cruz.jpg",
    },
  ]

  const facultyByProgram = {
    "Computer Science": [
      {
        name: "Melvin A. Ballera, PhD",
        title: "Associate Professor",
        education: "Ph.D. in Computer Science",
        specialization: "Algorithm, Machine Learning",
        image: "/images/Faculty/Dr. Melvin A. Ballera.jpg",
      },
      {
        name: "Jodie Anna Diciembre",
        title: "Instructor",
        education: "M.S. in Information Technology",
        specialization: "Software Engineering, NLP, Algorithm",
        image: "/images/Faculty/Ms. Jodie Anna Diciembre.jpg",
      },
    ],
    "Information Technology": [
      {
        name: "Jenelyn M. Aranas",
        title: "Assistant Professor 4",
        education: "M.S. in Information Technology",
        specialization: "Project Management",
        image: "/images/Faculty/Ms. Jenelyn M. Aranas.jpg",
      },
      {
        name: "Francis Carabuena",
        title: "Instructor",
        education: "M.S. in Information Technology",
        specialization: "Web & App Development, Unity Augmented Reality",
        image: "/images/Faculty/Mr. Francisco Carabuena.jpg",
      },
      {
        name: "Khaela Mae T. Lee",
        title: "Assistant Professor",
        education: "M.S. in Information Technology",
        specialization: "Software Engineering",
        image: "/images/Faculty/Ms. Khaela May T. Lee.jpg",
      },
      {
        name: "Elezear Repil",
        title: "Assistant Professor",
        education: "B.S. in Information Technology",
        specialization: "Computer Programming, Cloud Computing",
        image: "/images/Faculty/Mr. Elezear Repil.png",
      },
      {
        name: "Joselito V. San Juan",
        title: "Assistant Professor",
        education: "M.S. in information Technology",
        specialization: "Mobile and Web Development",
        image: "/images/Faculty/Mr. Joselito V. San Juan.png",
      },
    ],
    "Data Science & Analytics": [
      {
        name: "Melvin A. Ballera, PhD",
        title: "Associate Professor",
        education: "Ph.D. in Computer Science",
        specialization: "Algorithm, Machine Learning",
        image: "/images/Faculty/Dr. Melvin A. Ballera.jpg",
      },
      {
        name: "John Angelo San Andres",
        title: "Instructor",
        education: "B.S. in Computer Science",
        specialization: "Data Visualization",
        image: "/images/Faculty/Mr. Jhon Angelo San Andres.png",
      },
    ],
    "Entertainment & Multimedia": [
      {
        name: "Jasmin Gas",
        title: "Instructor",
        education: "B.S. in Information Technology",
        specialization: "Animation, Web Page Design and Development",
        image: "/images/Faculty/Ms. Jasmin Gas.png",
      },
      {
        name: "John Angelo San Andres",
        title: "Instructor",
        education: "B.S. in Computer Science",
        specialization: "Game Development, Interactive Media",
        image: "/images/Faculty/Mr. Jhon Angelo San Andres.png",
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
