/**
 * Faculty and staff shown on the faculty directory and on each program page.
 */

export interface Person {
  name: string
  role: string
  education: string
  specialization?: string
  image: string
}

const img = (file: string) => `/images/Faculty/${file}`

export const dean: Person = {
  name: "Larry A. Vea, PhD",
  role: "Dean, College of Computer Studies",
  education: "Ph.D. in Computer Science",
  specialization: "Affective Computing, Computing in Education",
  image: img("Dr. Larry A. Vea.jpg"),
}

export const programChairs: Person[] = [
  {
    name: "Jheanel E. Estrada, PhD",
    role: "Program Chair, Computer Science",
    education: "Ph.D. in Computer Science",
    specialization: "Software Engineering, Algorithms",
    image: img("Dr. Jheanel E. Estrada.jpg"),
  },
  {
    name: "Alfio I. Regla, DIT",
    role: "Program Chair, Information Technology and Entertainment & Multimedia Computing",
    education: "Ph.D. in Information Technology",
    specialization: "Network Security, Cloud Computing, 3D Animation, Interactive Design",
    image: img("Dr. Alfio I. Regla.jpg"),
  },
  {
    name: "Larry A. Vea, PhD",
    role: "Program Chair, Data Science & Analytics",
    education: "Ph.D. in Computer Science",
    specialization: "Affective Computing, Computing in Education",
    image: img("Dr. Larry A. Vea.jpg"),
  },
]

export const staff: Person[] = [
  {
    name: "Angelica M. Rabino",
    role: "IT Staff",
    education: "B.S. in Business Administration",
    image: img("Ms. Angelica M. Rabino.jpg"),
  },
  {
    name: "Jennielyn R. Dela Cruz",
    role: "ODCCS Staff",
    education: "B.S. in Computer Science",
    image: img("Ms. Jennielyn R. Dela Cruz.jpg"),
  },
]

export const facultyByProgram: Record<string, Person[]> = {
  "Computer Science": [
    {
      name: "Melvin A. Ballera, PhD",
      role: "Associate Professor",
      education: "Ph.D. in Computer Science",
      specialization: "Algorithm, Machine Learning",
      image: img("Dr. Melvin A. Ballera.jpg"),
    },
    {
      name: "Jodie Anna Diciembre",
      role: "Instructor",
      education: "M.S. in Information Technology",
      specialization: "Software Engineering, NLP, Algorithm",
      image: img("Ms. Jodie Anna Diciembre.jpg"),
    },
  ],
  "Information Technology": [
    {
      name: "Jenelyn M. Aranas",
      role: "Assistant Professor 4",
      education: "M.S. in Information Technology",
      specialization: "Project Management",
      image: img("Ms. Jenelyn M. Aranas.jpg"),
    },
    {
      name: "Francis Carabuena",
      role: "Instructor",
      education: "M.S. in Information Technology",
      specialization: "Web & App Development, Unity Augmented Reality",
      image: img("Mr. Francisco Carabuena.jpg"),
    },
    {
      name: "Khaela Mae T. Lee",
      role: "Assistant Professor",
      education: "M.S. in Information Technology",
      specialization: "Software Engineering",
      image: img("Ms. Khaela May T. Lee.jpg"),
    },
    {
      name: "Elezear Repil",
      role: "Assistant Professor",
      education: "B.S. in Information Technology",
      specialization: "Computer Programming, Cloud Computing",
      image: img("Mr. Elezear Repil.png"),
    },
    {
      name: "Joselito V. San Juan",
      role: "Assistant Professor",
      education: "M.S. in Information Technology",
      specialization: "Mobile and Web Development",
      image: img("Mr. Joselito V. San Juan.png"),
    },
  ],
  "Entertainment & Multimedia": [
    {
      name: "Jasmin Gas",
      role: "Instructor",
      education: "B.S. in Information Technology",
      specialization: "Animation, Web Page Design and Development",
      image: img("Ms. Jasmin Gas.png"),
    },
    {
      name: "John Angelo San Andres",
      role: "Instructor",
      education: "B.S. in Computer Science",
      specialization: "Game Development, Interactive Media",
      image: img("Mr. Jhon Angelo San Andres.png"),
    },
  ],
  "Data Science & Analytics": [
    {
      name: "Melvin A. Ballera, PhD",
      role: "Associate Professor",
      education: "Ph.D. in Computer Science",
      specialization: "Algorithm, Machine Learning",
      image: img("Dr. Melvin A. Ballera.jpg"),
    },
    {
      name: "John Angelo San Andres",
      role: "Instructor",
      education: "B.S. in Computer Science",
      specialization: "Data Visualization",
      image: img("Mr. Jhon Angelo San Andres.png"),
    },
  ],
}

/** Anchor id for a program's section on the faculty page. */
export const facultyAnchor = (group: string) =>
  group.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
