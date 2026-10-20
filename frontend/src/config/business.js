const defaultBusinessAddress =
  'H No 41A FF FS\nGali no. 13, Main Rajapuri Road\nUttam Nagar East, New Delhi - 110078'

export const businessAddress =
  import.meta.env.VITE_BUSINESS_ADDRESS?.trim() || defaultBusinessAddress
