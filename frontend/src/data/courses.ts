import { Course, Category } from '../types';

export const courses: Course[] = [
  {
    id: 'react-fundamentals',
    title: 'React.js Fundamentals',
    description: 'Master the fundamentals of React.js with hands-on projects and real-world applications.',
    category: 'web-development',
    tools: ['React.js', 'JavaScript ES6+', 'JSX', 'Hooks', 'Redux'],
    duration: '8 weeks',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'nextjs-mastery',
    title: 'Next.js Full-Stack Development',
    description: 'Build production-ready applications with Next.js, including SSR, API routes, and deployment.',
    category: 'web-development',
    tools: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Vercel'],
    duration: '10 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'express-mongodb',
    title: 'Express.js & MongoDB Backend',
    description: 'Create robust APIs and database solutions using Express.js and MongoDB.',
    category: 'web-development',
    tools: ['Express.js', 'MongoDB', 'Node.js', 'Mongoose', 'JWT'],
    duration: '6 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'splunk-analytics',
    title: 'Splunk Enterprise Operations',
    description: 'Monitor, search, and analyze machine-generated data with Splunk Enterprise.',
    category: 'it-operations',
    tools: ['Splunk Enterprise', 'SPL', 'Dashboards', 'Alerts', 'Data Models'],
    duration: '4 weeks',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'grafana-monitoring',
    title: 'Grafana Monitoring & Visualization',
    description: 'Build comprehensive monitoring solutions and beautiful dashboards with Grafana.',
    category: 'it-operations',
    tools: ['Grafana', 'Prometheus', 'InfluxDB', 'Telegraf', 'Alerting'],
    duration: '5 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'react-native-basics',
    title: 'React Native Mobile Development',
    description: 'Build cross-platform mobile applications using React Native and modern development practices.',
    category: 'mobile-development',
    tools: ['React Native', 'Expo', 'Redux', 'Navigation', 'Firebase'],
    duration: '12 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'expo-development',
    title: 'Expo Framework Mastery',
    description: 'Rapidly build and deploy mobile apps using the Expo framework and its powerful toolchain.',
    category: 'mobile-development',
    tools: ['Expo', 'React Native', 'EAS Build', 'Over-the-air Updates', 'Push Notifications'],
    duration: '6 weeks',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Applications',
    description: 'Explore cutting-edge generative AI technologies and build practical applications.',
    category: 'artificial-intelligence',
    tools: ['OpenAI GPT', 'Langchain', 'Pinecone', 'Streamlit', 'Python'],
    duration: '8 weeks',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'ai-agents',
    title: 'Building AI Agents',
    description: 'Design and develop intelligent AI agents for automation and complex problem-solving.',
    category: 'artificial-intelligence',
    tools: ['LangChain', 'AutoGPT', 'Vector Databases', 'RAG', 'Fine-tuning'],
    duration: '10 weeks',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const categories: Category[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Master modern web technologies with React, Next.js, and full-stack development.',
    icon: 'Code2',
    courses: ['react-fundamentals', 'nextjs-mastery', 'express-mongodb']
  },
  {
    id: 'it-operations',
    name: 'IT Operations',
    description: 'Learn enterprise monitoring and analytics with industry-leading tools.',
    icon: 'Server',
    courses: ['splunk-analytics', 'grafana-monitoring']
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development',
    description: 'Build cross-platform mobile applications with React Native and Expo.',
    icon: 'Smartphone',
    courses: ['react-native-basics', 'expo-development']
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    description: 'Dive into the future with generative AI and intelligent agent development.',
    icon: 'Brain',
    courses: ['generative-ai', 'ai-agents']
  }
];