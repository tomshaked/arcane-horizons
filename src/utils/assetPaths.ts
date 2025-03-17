
/**
 * Helper function to get correct paths for assets regardless of deployment environment
 * Handles both GitHub Pages with subdirectory and custom domain scenarios
 */
export function getAssetPath(path: string): string {
  // If path already starts with http or //, it's an external URL
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }
  
  // Remove the '/arcane-horizons' prefix if present
  return path.replace(/^\/arcane-horizons\//, '/');
}
