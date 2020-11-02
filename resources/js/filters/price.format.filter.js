export default function priceFormatFilter (val) {
  return `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
}