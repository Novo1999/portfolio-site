export const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2 grid grid-cols-1 sm:grid-cols-2'>
        <li>Javascript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>Tailwind CSS</li>
        <li>Redux, Redux Toolkit</li>
        <li>React Query</li>
        <li>Framer</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Bachelor&apos;s of Computer Science & Enginnering</li>
        <li>Dhaka City College (National University)</li>
      </ul>
    ),
  },
]

export const TABS = ['skills', 'education']

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Remote jumbo',
    description:
      'Remote jumbo is a complete solution of remote job circulars, Admin dashboard is lets the admin view the overall job status. User can post, edit, delete, star jobs. Animation works are added with framer and much more exciting features.',
    image: '/images/projects/RemoteJumbo.png',
    tag: ['All', 'React', 'Next.js', 'MERN'],
    gitUrl: [
      'https://github.com/Novo1999/Remote-Job',
      'https://github.com/Novo1999/RemoteJumbo---Backend',
    ],

    previewUrl: 'https://remotejumbo.vercel.app/',
  },
  {
    id: 2,
    title: 'Kartigo',
    description:
      'FullStack Next.JS E-commerce Platform including admin dashboard with advanced features like forgot password and cron cart clearance.',
    image: '/images/projects/kartigo.png',
    tag: ['All', 'React', 'Next.js'],
    gitUrl: ['https://github.com/Novo1999/kartigo-nextt'],
    previewUrl: 'https://kartigo.vercel.app/',
  },
  {
    id: 3,
    title: 'Gymba',
    description:
      'E-commerce application built with MERN stack. User can add items to local cart or online cart based on if they are logged in or not. ',
    image: '/images/projects/Gymba.png',
    tag: ['All', 'React', 'MERN'],
    gitUrl: [
      'https://github.com/Novo1999/Gymba',
      'https://github.com/Novo1999/Ecommerce-Backend-main',
    ],

    previewUrl: 'https://gymba.vercel.app/',
  },
  {
    id: 4,
    title: 'Kanban Board Application',
    description:
      'Kanban Board Application built with MERN stack. User can create boards, add tasks, subtasks and edit them. They can also drag and drop which has been implemented using react dnd',
    image: '/images/projects/Kanban.png',
    tag: ['All', 'React', 'MERN'],
    gitUrl: [
      'https://github.com/Novo1999/Kanban-Frontend',
      'https://github.com/Novo1999/kanban-task-management-main',
    ],
    previewUrl: 'https://kanban-novo-frontend.vercel.app/',
  },
  {
    id: 5,
    title: 'Invoicer',
    description:
      'Invoicer application built with MERN and state managed with redux toolkit. User can create, read, update, delete invoices and drag to reorder them which has been implemented using framer motion',
    image: '/images/projects/invoices_ss.png',
    tag: ['All', 'React', 'MERN'],
    gitUrl: [
      'https://github.com/Novo1999/Invoices-frontend',
      'https://github.com/Novo1999/Invoices-backend',
    ],
    previewUrl: 'https://invoices-novo.vercel.app/',
  },
]
