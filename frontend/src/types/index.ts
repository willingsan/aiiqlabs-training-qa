export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  tools: string[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  courses: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}