// Create one formatter at module load instead of rebuilding it for every card.
const priceFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export function formatPrice(price) {
  return priceFormatter.format(price)
}
