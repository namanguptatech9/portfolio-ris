import {
  SiPython, SiC, SiCplusplus, SiJavascript, SiFlask, SiMongodb,
  SiMysql, SiSqlite, SiGit, SiGithub, SiHtml5, SiBootstrap,
  SiCanva,
} from 'react-icons/si';
import {
  FaCode, FaDatabase, FaTools, FaLaptopCode, FaChalkboardTeacher,
  FaLinkedin, FaFileWord, FaCss3Alt,
} from 'react-icons/fa';

export const profile = {
  name: 'Riya Dhunna',
  role: 'Full-Stack Web Developer',
  tagline: 'BCA Graduate | Python & Flask Developer',
  email: 'riyadhunna01152004@gmail.com',
  phone: '+91-8890914568',
  location: 'Sri Ganganagar, Rajasthan, India',
  about:
    'Versatile BCA graduate who combines two years of classroom teaching experience with hands-on full-stack development skills in Python, Flask, and MongoDB. Skilled at explaining complex ideas clearly, designing engaging learning activities, and building functional web applications end-to-end.',
  shortBio:
    'I build functional, end-to-end web applications with Python, Flask, and MongoDB — and bring a teacher\u2019s clarity and patience to every problem I solve.',
  socials: {
    github: 'https://github.com/RiyaDhunna2004',
    linkedin: 'https://linkedin.com/in/riya-dhunna01152004',
  },
};

export const roles = [
  'Full-Stack Web Developer',
  'Python & Flask Developer',
  'Former Primary School Teacher',
  'Lifelong Learner',
];

export const skills = [
  {
    title: 'Languages',
    icon: FaCode,
    items: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', color: '#f89820' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'SQL', color: '#4479A1' },
    ],
  },
  {
    title: 'Web Development',
    icon: FaLaptopCode,
    items: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Flask', icon: SiFlask, color: '#ffffff' },
      { name: 'REST APIs', color: '#22d3ee' },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    items: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: FaTools,
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'VS Code', color: '#007ACC' },
      { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
      { name: 'MS Office', icon: FaFileWord, color: '#2B579A' },
    ],
  },
  {
    title: 'Teaching & Classroom',
    icon: FaChalkboardTeacher,
    items: [
      { name: 'Lesson Planning', color: '#a78bfa' },
      { name: 'Student Assessment', color: '#f472b6' },
      { name: 'Classroom Management', color: '#facc15' },
      { name: 'Activity Design', color: '#22d3ee' },
    ],
  },
];

export const experience = [
  {
    company: 'Pathshala Kids School, Sri Ganganagar, Rajasthan',
    role: 'Primary School Teacher',
    period: 'Apr 2024 — Mar 2026',
    points: [
      'Planned and delivered engaging lessons for primary-level students, adapting teaching methods to different learning paces.',
      'Assessed student performance regularly and gave targeted feedback to support academic growth.',
      'Designed hands-on learning activities that measurably improved classroom participation and understanding.',
      'Collaborated with fellow teachers to plan and run school events and academic programs.',
      'Built strong communication, classroom management, and leadership skills through daily student interaction.',
    ],
    tech: ['Lesson Planning', 'Classroom Management', 'Mentoring', 'Communication'],
  },
];

export const projects = [
  {
    title: 'Smart Finance & Debt Manager',
    subtitle: 'Personal Finance Management System',
    description:
      'A full-stack personal finance management application enabling users to track income, expenses, budgets, and debt repayments in one centralized platform, with a real-time expense-tracking module and an interactive analytics dashboard for spending trends.',
    tech: ['Python', 'Flask', 'MongoDB', 'Bootstrap'],
    github: 'https://github.com/RiyaDhunna2004',
    demo: '#',
    accent: 'from-indigo-500 to-fuchsia-500',
  },
  {
    title: 'E-Learning Platform',
    subtitle: 'Student & Teacher Course Portal',
    description:
      'A full-stack e-learning platform with distinct student and teacher modules, secure authentication and role-based access control, plus quiz, assignment, and progress-tracking features backed by a SQLite database.',
    tech: ['Python', 'Flask', 'MongoDB', 'SQLite', 'HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/RiyaDhunna2004',
    demo: '#',
    accent: 'from-cyan-500 to-emerald-500',
  },
];

export const achievements = [
  { label: 'Years Teaching', value: 2, suffix: '+' },
  { label: 'Full-Stack Projects', value: 2, suffix: '' },
  { label: 'Senior Secondary Score', value: 91.8, suffix: '%' },
  { label: 'JEE Percentile', value: 84, suffix: 'th' },
];

export const honors = [
  { title: 'MERN Stack Development', desc: 'Professional certification from Codec Technologies.' },
  { title: '91.8% — Senior Secondary (Science)', desc: 'Good Shepherd Public Senior Secondary School.' },
  { title: '89.8% — Secondary Education', desc: 'Good Shepherd Public Senior Secondary School.' },
  { title: '84th Percentile — JEE', desc: 'Joint Entrance Examination.' },
];

export const timeline = [
  { year: '2020', title: 'Completed Secondary Education', desc: '89.8% — Good Shepherd Public Senior Secondary School.' },
  { year: '2022', title: 'Completed Senior Secondary (Science)', desc: '91.8% & 84th percentile in JEE.' },
  { year: '2023', title: 'Started BCA', desc: 'Joined Seth G.L. Bihani S.D. PG College, Sri Ganganagar (MGSU Bikaner).' },
  { year: '2024', title: 'Began Teaching Career', desc: 'Joined Pathshala Kids School as a Primary School Teacher.' },
  { year: '2025', title: 'Built Smart Finance Manager', desc: 'Full-stack app with Python, Flask & MongoDB.' },
  { year: '2026', title: 'Built E-Learning Platform', desc: 'Full-stack student/teacher course portal.' },
  { year: '2026', title: 'MERN Stack Certification', desc: 'Completed certification via Codec Technologies.' },
];

export const education = [
  {
    school: 'Seth G.L. Bihani S.D. PG College, Sri Ganganagar (MGSU University, Bikaner)',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: 'Aug 2023 — Aug 2026',
    grade: 'In Progress',
    icon: 'college',
  },
  {
    school: 'Good Shepherd Public Senior Secondary School, Sri Ganganagar',
    degree: 'Senior Secondary Education (Science)',
    period: 'Apr 2021 — Jun 2022',
    grade: '91.8%',
    icon: 'school',
  },
  {
    school: 'Good Shepherd Public Senior Secondary School, Sri Ganganagar',
    degree: 'Secondary Education',
    period: 'Apr 2019 — Jul 2020',
    grade: '89.8%',
    icon: 'school',
  },
];

export const certifications = [
  {
    title: 'MERN Stack Development',
    org: 'Codec Technologies',
    points: [
      'Hands-on training across MongoDB, Express, React, and Node.js fundamentals.',
      'Applied full-stack development concepts to real, project-based coursework.',
    ],
  },
];

export const socialIcons = { SiGithub, FaLinkedin };
