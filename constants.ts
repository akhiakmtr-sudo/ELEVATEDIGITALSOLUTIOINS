import { 
  Megaphone, 
  Palette, 
  PenTool, 
  Rocket,
  Monitor,
  Smartphone
} from 'lucide-react';
import { NavItem, ServiceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Mission', href: '#mission' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven strategies to boost your online presence and ROI.',
    icon: Megaphone,
    image: 'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764059162/_Unlocking_Success_in_the_Digital_Business_World__sa9qsg.jpg',
    features: ['SEO Optimization', 'Social Media Management', 'PPC Campaigns', 'Analytics & Reporting']
  },
  {
    id: 'poster-design',
    title: 'Creative Design',
    description: 'Stunning visuals including posters, banners, and marketing assets.',
    icon: Palette,
    image: 'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764059983/download_ypst99.jpg',
    features: ['Poster Designing', 'Social Media Graphics', 'Print Media', 'UI/UX Elements']
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description: 'Engaging storytelling that connects with your audience.',
    icon: PenTool,
    image: 'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764060562/Boost_Your_Brand_with_Smart_Content_Strategy_nzrrou.jpg',
    features: ['Blog Writing', 'Copywriting', 'Video Scripts', 'Email Newsletters']
  },
  {
    id: 'branding',
    title: 'Branding Identity',
    description: 'Building memorable brands that stand the test of time.',
    icon: Rocket,
    image: 'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764060955/Conoce_y_Emprende_1_wmzfkv.jpg',
    features: ['Logo Design', 'Brand Guidelines', 'Voice & Tone', 'Rebranding']
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Custom, high-performance websites tailored to your business needs.',
    icon: Monitor,
    image: 'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764070253/8_Best_WooCommerce_Affiliate_Plugins_Compared_Tried_and_Tested_umffrd.jpg',
    features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Friendly Structure']
  },
  {
    id: 'app-development',
    title: 'Web & Mob App',
    description: 'Scalable applications for Android, iOS, and the web.',
    icon: Smartphone,
    image: 'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764070253/What_Are_The_Benefits_Of_An_iOS_App_Development_Agency__e4mjoj.jpg',
    features: ['iOS & Android Apps', 'Cross-Platform', 'Cloud Solutions', 'User-Centric UI/UX']
  }
];