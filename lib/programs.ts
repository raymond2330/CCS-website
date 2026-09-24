/**
 * Everything the program pages and program cards render.
 *
 * Artwork lives in public/images/programs/<code>/. It is original
 * illustration generated in GIMP from design/program-art/ (see its README),
 * deliberately not photos, so nothing implies it shows the college's own
 * rooms, labs or students.
 */

export type ProgramIcon = "cpu" | "network" | "gamepad" | "chart" | "brain"

export interface Program {
  slug: string
  code: string
  degree: string
  title: string
  tagline: string
  summary: string
  overview: string[]
  icon: ProgramIcon
  heroImage: { src: string; alt: string }
  highlights: { title: string; body: string; image: string; alt: string }[]
  careers: string[]
  accreditations: string[]
  resources: { label: string; file: string; size: string }[]
  /** Key into facultyByProgram; programs without listed faculty hide that section */
  facultyGroup: string
  isNew?: boolean
}

const pdf = (program: string, file: string) => `/pdfs/${program}/${file}`

export const programs: Program[] = [
  {
    slug: "computer-science",
    code: "BSCS",
    degree: "Bachelor of Science in Computer Science",
    title: "Computer Science",
    tagline: "Building the foundation for tomorrow's technology leaders.",
    summary: "Algorithms, machine learning and the theory behind the software that runs the world.",
    overview: [
      "Computer Science is the study of algorithms, computational systems, and the design of computer systems and their applications. Our program builds a strong foundation in programming, mathematics and theoretical computer science while emphasizing practical problem-solving.",
      "Students explore software engineering, machine learning, natural language processing and more, preparing for careers that range from software development to research and innovation.",
    ],
    icon: "cpu",
    heroImage: {
      src: "/images/programs/cs/hero.webp",
      alt: "Illustration of a code editor window",
    },
    highlights: [
      {
        title: "Algorithms",
        body: "Master sorting, searching, graph algorithms, dynamic programming and computational complexity analysis.",
        image: "/images/programs/cs/algorithms.webp",
        alt: "Illustration of a tree diagram with a highlighted search path",
      },
      {
        title: "Machine Learning",
        body: "Build systems that learn from data, with research opportunities in cutting-edge machine learning.",
        image: "/images/programs/cs/machine-learning.webp",
        alt: "Illustration of two data clusters split by a decision boundary",
      },
      {
        title: "Modeling & Simulation",
        body: "Create mathematical models and computer simulations for real-world systems, scientific computing and prediction.",
        image: "/images/programs/cs/modeling-simulation.webp",
        alt: "Illustration of a planet with simulated orbits",
      },
    ],
    careers: ["Software Engineer", "Machine Learning Engineer", "Research Scientist", "Systems Architect", "Game Engine Programmer", "Graduate Studies"],
    accreditations: ["ABET", "PACUCOA", "CHED Center of Excellence", "Philippine Technological Council", "PICAB", "AUN"],
    resources: [
      { label: "Course Catalog 2024–2025", file: pdf("Computer Science", "Course-Catalog.pdf"), size: "1.6 MB" },
      { label: "Curriculum", file: pdf("Computer Science", "Curriculum.pdf"), size: "1.0 MB" },
      { label: "Program Brochure", file: pdf("Computer Science", "Brochure.pdf"), size: "1.1 MB" },
    ],
    facultyGroup: "Computer Science",
  },
  {
    slug: "information-technology",
    code: "BSIT",
    degree: "Bachelor of Science in Information Technology",
    title: "Information Technology",
    tagline: "Bridging technology and business solutions.",
    summary: "Build, secure and run the networks, systems and apps that organizations depend on.",
    overview: [
      "Information Technology applies technology to solve business and organizational challenges. The program emphasizes hands-on work with enterprise systems, network administration, database management and cybersecurity.",
      "Students learn to connect technical solutions with business needs through system analysis, project management and IT service delivery, with coursework in cloud computing, mobile technologies, web development and infrastructure management.",
    ],
    icon: "network",
    heroImage: {
      src: "/images/programs/it/hero.webp",
      alt: "Illustration of a network of connected nodes",
    },
    highlights: [
      {
        title: "Network Infrastructure",
        body: "Design, implement and manage enterprise network systems.",
        image: "/images/programs/it/network-infrastructure.webp",
        alt: "Illustration of server racks with status lights",
      },
      {
        title: "Cybersecurity",
        body: "Protect digital assets with solid security knowledge and practice.",
        image: "/images/programs/it/cybersecurity.webp",
        alt: "Illustration of a shield with a keyhole",
      },
      {
        title: "Animation",
        body: "Create multimedia content with industry-standard animation and digital media tools for web and mobile.",
        image: "/images/programs/it/animation.webp",
        alt: "Illustration of a bouncing-ball animation with keyframes on a timeline",
      },
    ],
    careers: ["Network Administrator", "Cybersecurity Analyst", "Systems Administrator", "Cloud Engineer", "Web & Mobile Developer", "IT Consultant"],
    accreditations: ["ABET", "PACUCOA", "CHED Center of Excellence", "Philippine Technological Council", "PICAB", "AUN"],
    resources: [
      { label: "Curriculum", file: pdf("Information Technology", "Curriculum.pdf"), size: "650 KB" },
      { label: "Program Brochure", file: pdf("Information Technology", "Brochure.pdf"), size: "2.0 MB" },
    ],
    facultyGroup: "Information Technology",
  },
  {
    slug: "entertainment-multimedia",
    code: "BSEMC",
    degree: "Bachelor of Science in Entertainment & Multimedia Computing",
    title: "Entertainment & Multimedia Computing",
    tagline: "Creating immersive digital experiences.",
    summary: "Design games, animation and interactive media, from first sketch to shipped title.",
    overview: [
      "Entertainment & Multimedia Computing combines creativity with technology to produce engaging digital content and interactive experiences, with two tracks: Game Development and Digital Animation Technology.",
      "Students use professional tools while building strong design and storytelling skills, with courses in 3D modeling, motion graphics and user experience design.",
    ],
    icon: "gamepad",
    heroImage: {
      src: "/images/programs/emc/hero.webp",
      alt: "Illustration of a pixel-art game character",
    },
    highlights: [
      {
        title: "Digital Animation",
        body: "Create 2D and 3D animation using industry-standard software.",
        image: "/images/programs/emc/digital-animation.webp",
        alt: "Illustration of a vector curve with control handles",
      },
      {
        title: "Game Development",
        body: "Design and develop interactive games for different platforms and audiences.",
        image: "/images/programs/emc/game-development.webp",
        alt: "Illustration of a platformer game level",
      },
      {
        title: "Game Production",
        body: "Learn the full production pipeline from concept to release, including project management and teamwork.",
        image: "/images/programs/emc/game-production.webp",
        alt: "Illustration of a production board moving tasks from concept to release",
      },
    ],
    careers: ["Game Developer", "3D Animator", "Technical Artist", "Multimedia Designer", "UX Designer", "Content Creator"],
    accreditations: ["ABET", "PACUCOA", "CHED Center of Excellence", "Philippine Technological Council"],
    resources: [
      { label: "Curriculum – Game Development track", file: pdf("Entertainment & Multimedia Computing", "Curriculum GD.pdf"), size: "160 KB" },
      { label: "Curriculum – Digital Animation Technology track", file: pdf("Entertainment & Multimedia Computing", "Curriculum DAT.pdf"), size: "170 KB" },
      { label: "Program Brochure", file: pdf("Entertainment & Multimedia Computing", "Brochure.pdf"), size: "7.2 MB" },
    ],
    facultyGroup: "Entertainment & Multimedia",
  },
  {
    slug: "data-science-analytics",
    code: "BSDSA",
    degree: "Bachelor of Science in Data Science & Analytics",
    title: "Data Science & Analytics",
    tagline: "Transforming data into actionable insights.",
    summary: "Turn raw data into decisions with statistics, big data tooling and deep learning.",
    overview: [
      "Data Science & Analytics combines statistics, computer science and domain expertise to extract meaningful insights from data. Students learn to collect, process, analyze and interpret large datasets to support decisions across industries.",
      "The curriculum covers statistical analysis, machine learning, data mining, big data technologies and visualization, using Python, R and modern databases.",
    ],
    icon: "chart",
    heroImage: {
      src: "/images/programs/dsa/hero.webp",
      alt: "Illustration of a bar chart with a trend line",
    },
    highlights: [
      {
        title: "Machine Learning",
        body: "Build predictive models and intelligent systems using modern algorithms.",
        image: "/images/programs/dsa/machine-learning.webp",
        alt: "Illustration of data points with a fitted regression curve",
      },
      {
        title: "Big Data Analytics",
        body: "Process and analyze massive datasets with distributed computing frameworks.",
        image: "/images/programs/dsa/big-data.webp",
        alt: "Illustration of a large data heatmap",
      },
      {
        title: "Deep Learning",
        body: "Master neural network architectures for pattern recognition and AI applications.",
        image: "/images/programs/dsa/deep-learning.webp",
        alt: "Illustration of stacked neural network layers",
      },
    ],
    careers: ["Data Scientist", "Data Analyst", "Business Intelligence Analyst", "Data Engineer", "Research Analyst", "ML Engineer"],
    accreditations: [],
    resources: [
      { label: "Curriculum", file: pdf("Data Science & Analytics", "Curriculum.pdf"), size: "170 KB" },
      { label: "Program Brochure", file: pdf("Data Science & Analytics", "Brochure.pdf"), size: "1.0 MB" },
    ],
    facultyGroup: "Data Science & Analytics",
  },
  {
    slug: "artificial-intelligence",
    code: "BSAI",
    degree: "Bachelor of Science in Artificial Intelligence",
    title: "Artificial Intelligence",
    tagline: "Designing intelligent systems that learn, see and understand.",
    summary: "Build systems that learn from data, see the world and understand human language.",
    overview: [
      "Artificial Intelligence is the newest program of the College of Computer Studies. It focuses on designing, building and evaluating systems that learn from data, reason about problems and interact naturally with people.",
      "Students build a foundation in mathematics, programming and data, then go deeper into machine learning, computer vision and natural language processing, with attention to the responsible and ethical use of AI.",
    ],
    icon: "brain",
    heroImage: { src: "/images/programs/ai/hero.webp", alt: "Illustration of a neural network" },
    highlights: [
      {
        title: "Machine Learning",
        body: "Train, tune and evaluate models that improve with data, from classic algorithms to modern deep learning.",
        image: "/images/programs/ai/machine-learning.webp",
        alt: "Illustration of gradient descent stepping toward a minimum",
      },
      {
        title: "Computer Vision",
        body: "Teach machines to recognize objects, faces and scenes in images and video.",
        image: "/images/programs/ai/computer-vision.webp",
        alt: "Illustration of object detection boxes in a camera frame",
      },
      {
        title: "Natural Language Processing",
        body: "Build systems that read, summarize, translate and converse in human language.",
        image: "/images/programs/ai/natural-language-processing.webp",
        alt: "Illustration of chat bubbles broken into tokens",
      },
    ],
    careers: ["AI Engineer", "Machine Learning Engineer", "Computer Vision Engineer", "NLP Engineer", "Data Scientist", "AI Research Assistant"],
    accreditations: [],
    resources: [],
    facultyGroup: "Artificial Intelligence",
    isNew: true,
  },
]

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug)
}

export const programHref = (p: Program) => `/${p.slug}`
