import { LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}
