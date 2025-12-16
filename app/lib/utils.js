/**
 * Utility function to merge class names
 * Filters out falsy values and joins remaining classes with spaces
 * @param {...(string|boolean|undefined|null)} classes - Class names to merge
 * @returns {string} Merged class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
