
// Utility functions for loading CMS content
import { useState, useEffect } from 'react';

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: string;
  seoTitle?: string;
  seoDescription?: string;
  published: boolean;
}

export interface ServicePage {
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  heroImage: string;
  body: string;
  subServices: string[];
  startingPrice?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  serviceType: string;
  featured: boolean;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  photo: string;
  experience: number;
  certifications: string[];
  specialties: string[];
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  businessName: string;
  phone: string;
  email: string;
  address: string;
  businessHours: {
    weekdays: string;
    weekends: string;
    emergency: string;
  };
  serviceAreas: string[];
  social: {
    facebook?: string;
    instagram?: string;
    google?: string;
    linkedin?: string;
  };
}

// Hook to load site settings
export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would load from the CMS
    const mockSettings: SiteSettings = {
      siteTitle: 'Edmonton HVAC - Expert Heating, Cooling & Air Quality Services',
      siteDescription: 'Professional HVAC services in Edmonton, AB. Expert heating, cooling, ventilation & air quality solutions. 24/7 emergency service.',
      businessName: 'Edmonton HVAC',
      phone: 'Talk to Our AI Assistant',
      email: 'info@edmontonhvac.ca',
      address: '123 Main Street, Edmonton, AB T5J 0A1',
      businessHours: {
        weekdays: 'Monday - Friday: 7:00 AM - 7:00 PM',
        weekends: 'Saturday - Sunday: 8:00 AM - 5:00 PM',
        emergency: '24/7 Emergency Service Available'
      },
      serviceAreas: ['Edmonton', 'St. Albert', 'Sherwood Park', 'Spruce Grove'],
      social: {
        facebook: 'https://www.facebook.com/edmontonhvac',
        instagram: 'https://www.instagram.com/edmontonhvac'
      }
    };
    
    setSettings(mockSettings);
    setLoading(false);
  }, []);

  return { settings, loading };
}

// Hook to load blog posts
export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load blog posts from markdown files
    const loadBlogPosts = async () => {
      try {
        // In production, this would dynamically load from the content folder
        // For now, we'll use the CMS-compatible structure
        const mockPosts: BlogPost[] = [
          {
            title: 'How to Prepare Your HVAC System for Winter in Abbotsford',
            slug: 'prepare-hvac-system-winter-abbotsford',
            date: '2024-01-15',
            author: 'Mike Thompson',
            category: 'Maintenance',
            readTime: '5 min read',
            excerpt: 'Essential maintenance tips to ensure your heating system runs efficiently during Fraser Valley\'s cold months.',
            image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20performing%20winter%20maintenance%20on%20residential%20furnace%20system%20in%20Abbotsford%20home%2C%20checking%20filters%20and%20equipment%2C%20cold%20weather%20preparation&width=800&height=400&seq=blog-1&orientation=landscape',
            body: 'This content will be managed through Netlify CMS. Please access /admin to edit.',
            published: true
          },
          {
            title: 'Signs Your Air Conditioner Needs Repair Before Summer',
            slug: 'air-conditioner-repair-signs-summer',
            date: '2024-01-10',
            author: 'Sarah Chen',
            category: 'Cooling',
            readTime: '4 min read',
            excerpt: 'Don\'t wait for the hottest day of the year to discover your AC isn\'t working. Watch for these warning signs.',
            image: 'https://readdy.ai/api/search-image?query=Air%20conditioning%20unit%20showing%20signs%20of%20wear%20and%20repair%20needs%2C%20residential%20exterior%20AC%20unit%20with%20visible%20issues%2C%20professional%20diagnostic%20assessment&width=800&height=400&seq=blog-2&orientation=landscape',
            body: 'This content will be managed through Netlify CMS. Please access /admin to edit.',
            published: true
          },
          {
            title: 'Energy-Efficient HVAC Upgrades That Save Money',
            slug: 'energy-efficient-hvac-upgrades-save-money',
            date: '2024-01-08',
            author: 'David Kim',
            category: 'Energy Efficiency',
            readTime: '6 min read',
            excerpt: 'Discover which HVAC improvements offer the best return on investment for Abbotsford homeowners.',
            image: 'https://readdy.ai/api/search-image?query=Modern%20energy-efficient%20HVAC%20system%20installation%20in%20contemporary%20home%2C%20smart%20thermostat%20and%20high-efficiency%20equipment%2C%20cost%20savings%20visualization&width=800&height=400&seq=blog-3&orientation=landscape',
            body: 'This content will be managed through Netlify CMS. Please access /admin to edit.',
            published: true
          }
        ];
        
        setPosts(mockPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  return { posts, loading };
}

// Function to load individual blog post by slug
export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // In production, this would load the specific markdown file
    // For now, return from our mock data
    const posts = [
      {
        title: 'How to Prepare Your HVAC System for Winter in Abbotsford',
        slug: 'prepare-hvac-system-winter-abbotsford',
        date: '2024-01-15',
        author: 'Mike Thompson',
        category: 'Maintenance',
        readTime: '5 min read',
        excerpt: 'Essential maintenance tips to ensure your heating system runs efficiently during Fraser Valley\'s cold months.',
        image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20performing%20winter%20maintenance%20on%20residential%20furnace%20system%20in%20Abbotsford%20home%2C%20checking%20filters%20and%20equipment%2C%20cold%20weather%20preparation&width=1200&height=600&seq=blog-post-1&orientation=landscape',
        body: `
          <h2>Why Winter HVAC Preparation Matters</h2>
          <p>This content is managed through Netlify CMS. Please access <strong>/admin</strong> to edit this article with your full content.</p>
          
          <h2>How to Add Your Content</h2>
          <ol>
            <li>Go to yoursite.com/admin</li>
            <li>Log in with your Netlify account</li>
            <li>Click on "Blog Posts"</li>
            <li>Find this article and click "Edit"</li>
            <li>Replace this placeholder content with your full article</li>
          </ol>
          
          <p><em>Your content will automatically appear on the website once saved in the CMS.</em></p>
        `,
        published: true
      },
      {
        title: 'Signs Your Air Conditioner Needs Repair Before Summer',
        slug: 'air-conditioner-repair-signs-summer',
        date: '2024-01-10',
        author: 'Sarah Chen',
        category: 'Cooling',
        readTime: '4 min read',
        excerpt: 'Don\'t wait for the hottest day of the year to discover your AC isn\'t working. Watch for these warning signs.',
        image: 'https://readdy.ai/api/search-image?query=Air%20conditioning%20unit%20showing%20signs%20of%20wear%20and%20repair%20needs%2C%20residential%20exterior%20AC%20unit%20with%20visible%20issues%2C%20professional%20diagnostic%20assessment&width=1200&height=600&seq=blog-post-2&orientation=landscape',
        body: `
          <h2>AC Repair Warning Signs</h2>
          <p>This content is managed through Netlify CMS. Please access <strong>/admin</strong> to edit this article with your full content.</p>
          
          <h2>How to Add Your Content</h2>
          <ol>
            <li>Go to yoursite.com/admin</li>
            <li>Log in with your Netlify account</li>
            <li>Click on "Blog Posts"</li>
            <li>Find this article and click "Edit"</li>
            <li>Replace this placeholder content with your full article</li>
          </ol>
          
          <p><em>Your content will automatically appear on the website once saved in the CMS.</em></p>
        `,
        published: true
      },
      {
        title: 'Energy-Efficient HVAC Upgrades That Save Money',
        slug: 'energy-efficient-hvac-upgrades-save-money',
        date: '2024-01-08',
        author: 'David Kim',
        category: 'Energy Efficiency',
        readTime: '6 min read',
        excerpt: 'Discover which HVAC improvements offer the best return on investment for Abbotsford homeowners.',
        image: 'https://readdy.ai/api/search-image?query=Modern%20energy-efficient%20HVAC%20system%20installation%20in%20contemporary%20home%2C%20smart%20thermostat%20and%20high-efficiency%20equipment%2C%20cost%20savings%20visualization&width=1200&height=600&seq=blog-post-3&orientation=landscape',
        body: `
          <h2>Energy-Efficient HVAC Upgrades</h2>
          <p>This content is managed through Netlify CMS. Please access <strong>/admin</strong> to edit this article with your full content.</p>
          
          <h2>How to Add Your Content</h2>
          <ol>
            <li>Go to yoursite.com/admin</li>
            <li>Log in with your Netlify account</li>
            <li>Click on "Blog Posts"</li>
            <li>Find this article and click "Edit"</li>
            <li>Replace this placeholder content with your full article</li>
          </ol>
          
          <p><em>Your content will automatically appear on the website once saved in the CMS.</em></p>
        `,
        published: true
      }
    ];

    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}
