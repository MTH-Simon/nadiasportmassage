
const isDevelopment = import.meta.env.DEV;

export const safeLog = {
  info: (message: string, data?: any) => {
    if (isDevelopment) {
      console.log(message, data);
    }
  },
  warn: (message: string, data?: any) => {
    if (isDevelopment) {
      console.warn(message, data);
    }
  },
  error: (message: string, data?: any) => {
    if (isDevelopment) {
      console.error(message, data);
    }
  }
};
