import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Connect URL redirect utility - replaces email template
export function createEmailTemplate(subject: string = "Partnership Inquiry", source: string = "Website") {
  // Track the source for analytics if needed
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      source: source,
      subject: subject
    });
  }
  
  // Always redirect to connect URL
  return 'https://connect.thinkify.io';
}

// Enhanced smooth scroll utility with options
export function smoothScrollTo(elementId: string, offset: number = 80, duration: number = 800) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    // Use modern scrollTo with smooth behavior
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Add focus management for accessibility
    setTimeout(() => {
      const focusableElement = element.querySelector('h1, h2, h3, button, a, input, [tabindex]');
      if (focusableElement instanceof HTMLElement) {
        focusableElement.focus({ preventScroll: true });
      }
    }, duration);

    // Track scroll event for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'scroll_to_section', {
        section_id: elementId,
        source: 'navigation'
      });
    }
  }
}

// Phone call utility - redirect to connect URL instead
export function makePhoneCall() {
  window.open('https://connect.thinkify.io', '_blank');
}

// WhatsApp utility - keep as is since user requested WhatsApp button to remain
export function openWhatsApp(message: string = "Hi! I'm interested in Thinkify's services.") {
  const whatsappUrl = `https://wa.me/919902417369?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Debounce utility for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle utility for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Get current section based on scroll position
export function getCurrentSection(): string {
  const sections = ["companies", "testimonials", "contact"];
  const scrollPosition = window.scrollY + 100; // Offset for header

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return sectionId;
      }
    }
  }
  
  return "";
}

// Intersection Observer utility for better performance
export function createSectionObserver(callback: (sectionId: string) => void) {
  const options = {
    root: null,
    rootMargin: '-10% 0px -85% 0px', // Trigger when section is 10% from top
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target.id);
      }
    });
  }, options);

  // Observe all sections
  const sections = ["companies", "testimonials", "contact"];
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }
  });

  return observer;
}

// Copy to clipboard utility
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      return true;
    } catch (err) {
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  }
}

// Format phone number for display
export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
  }
  return phoneNumber;
}

// Local storage utilities with error handling
export const storage = {
  get: (key: string, defaultValue: any = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  set: (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  remove: (key: string) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  }
};
