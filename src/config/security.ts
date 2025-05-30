
/**
 * Security configuration constants
 */
export const SECURITY_CONFIG = {
  // Input validation limits
  MAX_TEXT_LENGTH: 1000,
  MAX_EMAIL_LENGTH: 254,
  MAX_PHONE_LENGTH: 20,
  MAX_NAME_LENGTH: 100,
  
  // Rate limiting (for future backend integration)
  MAX_REQUESTS_PER_MINUTE: 60,
  
  // Content Security Policy settings
  CSP_DIRECTIVES: {
    defaultSrc: "'self'",
    imgSrc: "'self' data: https:",
    styleSrc: "'self' 'unsafe-inline'",
    scriptSrc: "'self' https://cdn.gpteng.co",
    connectSrc: "'self'"
  },
  
  // Allowed domains for external resources
  ALLOWED_IMAGE_DOMAINS: [
    'images.unsplash.com',
    'lovable.dev'
  ]
} as const;

/**
 * Validates if a URL is from an allowed domain
 */
export const isAllowedImageUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return SECURITY_CONFIG.ALLOWED_IMAGE_DOMAINS.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
};
