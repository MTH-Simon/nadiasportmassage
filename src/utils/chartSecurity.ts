
import { ChartConfig } from "@/components/ui/chart";

/**
 * Validates and sanitizes chart configuration to prevent XSS
 */
export const validateChartConfig = (config: ChartConfig): ChartConfig => {
  const validatedConfig: ChartConfig = {};
  
  for (const [key, itemConfig] of Object.entries(config)) {
    // Sanitize key
    const sanitizedKey = key.replace(/[^a-zA-Z0-9_-]/g, '');
    
    if (sanitizedKey && itemConfig) {
      validatedConfig[sanitizedKey] = {
        ...itemConfig,
        // Ensure label is safe if it's a string
        label: typeof itemConfig.label === 'string' 
          ? itemConfig.label.replace(/[<>\"']/g, '') 
          : itemConfig.label
      };
    }
  }
  
  return validatedConfig;
};

/**
 * Validates CSS color values to prevent injection
 */
export const validateColor = (color: string): string => {
  // Allow only hex colors, rgb/rgba, hsl/hsla, and named colors
  const colorRegex = /^(#[0-9a-f]{3,8}|rgb\([^)]+\)|rgba\([^)]+\)|hsl\([^)]+\)|hsla\([^)]+\)|[a-z]+)$/i;
  return colorRegex.test(color) ? color : '#000000';
};
