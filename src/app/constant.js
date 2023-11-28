export const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Javascript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>Tailwind</li>
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
    title: 'Gymba E-commerce Application',
    description: 'Project 1 description',
    image: '/images/projects/Gymba.png',
    tag: ['All', 'MERN'],
    gitUrl: [
      'https://github.com/Novo1999/Gymba',
      'https://github.com/Novo1999/Ecommerce-Backend-main',
    ],

    previewUrl: 'https://gymba.vercel.app/',
  },
  {
    id: 2,
    title: 'Kanban Board Application',
    description: 'Project 2 description',
    image: '/images/projects/Kanban.png',
    tag: ['All', 'MERN'],
    gitUrl: [
      'https://github.com/Novo1999/Kanban-Frontend',
      'https://github.com/Novo1999/kanban-task-management-main',
    ],
    previewUrl: 'https://kanban-novo.netlify.app/',
  },
]
