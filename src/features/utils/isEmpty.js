export function isEmpty(data) {
  // Check for null or undefined
  if (data == null) return true;

  // Check for empty string
  if (typeof data === "string" && data.trim() === "") return true;

  // Check for empty array
  if (Array.isArray(data) && data.length === 0) return true;

  // Check for empty object
  if (
    typeof data === "object" &&
    !Array.isArray(data) &&
    Object.keys(data).length === 0
  )
    return true;

  // Check for empty Set or Map
  if (data instanceof Set || data instanceof Map) return data.size === 0;

  return false;
}
