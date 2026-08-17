// js/data.js
// Centralized data objects for First Meal Foundation

const fmfData = {
  impact: {
    mealsServed: "[INSERT VERIFIED MEALS SERVED]",
    childrenReached: "[INSERT CHILDREN REACHED]",
    volunteers: "[INSERT VOLUNTEER COUNT]",
    communities: "[INSERT COMMUNITIES REACHED]"
  },
  team: {
    founder: {
      name: "[INSERT FOUNDER NAME]",
      role: "Founder",
      bio: "Short biography for the founder goes here.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    coFounder: {
      name: "[INSERT CO-FOUNDER NAME]",
      role: "Co-Founder",
      bio: "Short biography for the co-founder goes here.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  },
  social: {
    facebook: "[INSERT FACEBOOK URL]",
    twitter: "[INSERT TWITTER URL]",
    instagram: "[INSERT INSTAGRAM URL]",
    linkedin: "[INSERT LINKEDIN URL]"
  },
  contact: {
    address: "[INSERT OFFICIAL ADDRESS, MAHARASHTRA, INDIA]",
    email: "[INSERT OFFICIAL EMAIL]",
    phone: "[INSERT OFFICIAL PHONE]"
  }
};

// You can export this if using ES modules, or just leave it attached to window in simple script tags.
window.fmfData = fmfData;
