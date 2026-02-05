import { 
  Code2, 
  Cloud, 
  Bot, 
  BarChart3, 
  Smartphone, 
  Briefcase, 
  Users, 
  CheckCircle2, 
  Globe2,
  Zap,
  ShieldCheck,
  Clock,
  Award
} from 'lucide-react';
import { NavLink, ServiceItem, StatItem, FeatureItem, ProjectItem, TestimonialItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Software Development',
    description: 'Custom enterprise software solutions tailored to streamline your business operations and drive growth.',
    icon: Code2
  },
  {
    id: 2,
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure design, migration strategies, and automated DevOps pipelines for speed and reliability.',
    icon: Cloud
  },
  {
    id: 3,
    title: 'AI Automation',
    description: 'Leveraging Generative AI and Machine Learning to automate complex workflows and enhance decision-making.',
    icon: Bot
  },
  {
    id: 4,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights with advanced visualization and predictive modeling.',
    icon: BarChart3
  },
  {
    id: 5,
    title: 'Web & Mobile Apps',
    description: 'Engaging, high-performance web and mobile applications built with modern frameworks like React and React Native.',
    icon: Smartphone
  },
  {
    id: 6,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to align your IT roadmap with your long-term business objectives.',
    icon: Briefcase
  }
];

export const STATS: StatItem[] = [
  { id: 1, value: '50+', label: 'Projects Delivered', icon: CheckCircle2 },
  { id: 2, value: '20+', label: 'Enterprise Clients', icon: Users },
  { id: 3, value: '99%', label: 'Client Satisfaction', icon: Award },
  { id: 4, value: 'BLR', label: 'Bengaluru Based', icon: Globe2 },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: 'Agile Methodology',
    description: 'We follow agile best practices to ensure rapid delivery and flexibility to changing requirements.',
    icon: Zap
  },
  {
    id: 2,
    title: 'Enterprise Security',
    description: 'Security is at the core of our development process, ensuring your data is protected at all times.',
    icon: ShieldCheck
  },
  {
    id: 3,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to ensure your systems run smoothly.',
    icon: Clock
  },
  {
    id: 4,
    title: 'Expert Team',
    description: 'A team of senior engineers and domain experts committed to engineering excellence.',
    icon: Users
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'FinTech Analytics Dashboard',
    category: 'Data Analytics',
    description: 'A real-time financial data visualization platform handling millions of transactions daily for a leading bank.',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 2,
    title: 'Global Supply Chain Platform',
    category: 'Cloud Solution',
    description: 'A cloud-native logistics management system connecting suppliers and distributors across 12 countries.',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 3,
    title: 'AI Customer Support Bot',
    category: 'Artificial Intelligence',
    description: 'An NLP-driven chatbot reducing support ticket resolution time by 60% for an e-commerce giant.',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'CTO',
    company: 'TechFlow India',
    content: 'InfoSavi transformed our legacy systems into a modern, scalable cloud architecture. Their team is incredibly skilled and professional.',
    avatarUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Product Director',
    company: 'InnovateX',
    content: 'The AI automation solution provided by InfoSavi has saved us hundreds of man-hours per month. Truly a game-changer for our operations.',
    avatarUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Founder',
    company: 'Urban Logistics',
    content: 'Reliable, efficient, and forward-thinking. InfoSavi acted as a true partner in our digital transformation journey.',
    avatarUrl: 'https://picsum.photos/100/100?random=12'
  }
];