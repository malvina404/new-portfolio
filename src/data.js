export const profile = {
  name: 'Ndote Thengue Malvina',
  fullName: 'Ndote Malvina La Blonde Thengue',
  role: 'Software engineer · Full-stack & mobile developer',
  location: 'Bafoussam, Cameroon',
  linkedin: 'https://www.linkedin.com/in/malvina-la-blonde-ndote-thengue-37b18528a/',
  github: 'https://github.com/malvina404',
  cv: '/cv-malvina.pdf',
  site: 'https://my-portfolio-ndote-thengue-malvinas-projects.vercel.app',
};

export const skillGroups = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'HTML / CSS', 'Bootstrap'] },
  { title: 'Mobile', items: ['React Native', 'Apache Cordova'] },
  { title: 'Backend & data', items: ['Node.js', 'Express', 'PHP', 'FastAPI', 'MySQL'] },
  { title: 'Tools', items: ['Git', 'GitHub'] },
];

export const projects = [
  {
    title: 'MediTrack / HomePharma',
    kind: 'Internship · Further Market SA',
    description:
      'Crowdsourced medicine-availability platform for Cameroon: GPS-based pharmacy search, SMS alerts, patient pre-orders and a multi-tenant admin hierarchy with role-based access.',
    tags: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Cordova', 'JWT'],
    github: 'https://github.com/malvina404/HOMEPHARMA'
  },
  {
    title: 'BusCam · TAC Express',
    kind: 'Team project · IME Bafoussam',
    description:
      'Complete bus-ticket reservation system in pure PHP: booking engine with optimistic locking, QR-coded e-tickets, PDF download, JWT authentication and RBAC.',
    tags: ['PHP', 'JavaScript', 'JWT', 'HTML / CSS'],
    github: 'https://github.com/malvina404/buscam',
  },
  {
    title: 'Live streaming module',
    kind: 'Junior Web and Mobile Developer · Further Market SA',
    description:
      'Work on the mobile live-video feature of Further Market (iOS & Android): capture and encoding constraints, bitrate fallbacks and in-live interactions.',
    tags: ['Mobile', 'Live video', 'iOS', 'Android'],
  },
  {
    title: 'Mobile Patient Tracking System',
    kind: 'Personal project',
    description:
      'Cross-platform mobile application for healthcare providers to monitor patient vitals, appointments and treatment plans in real time.',
    tags: ['React Native', 'Firebase', 'Redux', 'FastAPI', 'Node.js'],
    github: 'https://github.com/malvina404/patient-management-system',
  },
  {
    title: 'E-commerce Platform',
    kind: 'Personal project',
    description:
      'Full-featured online store with payment processing, inventory management and an admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    // add github: '...' once you have the repository link
  },
  {
    title: 'This portfolio',
    kind: 'Personal project',
    description:
      'Responsive portfolio with light/dark themes, 3D tilt effects and a working contact form.',
    tags: ['React', 'Framer Motion', 'EmailJS'],
    github: 'https://github.com/malvina404/my-portfolio',
  },
];
